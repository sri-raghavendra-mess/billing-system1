import { useEffect, useMemo, useState } from 'react';
import { listenBillsByDate, addBill, listenRecentBills } from '../services/firestoreService';
import { todayKey, formatDisplayDate } from '../utils/dateTimeUtils';
import LoadingSpinner from './LoadingSpinner';
import toast from 'react-hot-toast';

const formatInr = (n = 0) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n || 0);

const SESSION_OPTIONS = [
  { value: 'order', label: 'Order' },
  { value: 'morning', label: 'Morning' },
  { value: 'afternoon', label: 'Afternoon' },
  { value: 'evening', label: 'Evening' },
  
];

export default function OrdersSection() {
  const [date, setDate] = useState(todayKey());
  const [loading, setLoading] = useState(true);
  const [orderForm, setOrderForm] = useState({ sessionType: 'order', paymentMode: 'cash', total: '', customer: '', items: '' });

  const [historyView, setHistoryView] = useState(false);
  const [recentBills, setRecentBills] = useState([]);
  const [historyFilter, setHistoryFilter] = useState({ date: '', month: '' });

  const toIso = (val) => {
    if (!val) return '';
    if (val.includes('/')) {
      const [dd, mm, yy] = val.split('/');
      if (dd && mm && yy) return `${yy.padStart(4, '0')}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`;
    }
    const d = new Date(val);
    return isNaN(d) ? '' : d.toISOString().slice(0, 10);
  };

  useEffect(() => {
    const unsub = listenBillsByDate(date, () => setLoading(false));
    return unsub;
  }, [date]);

  useEffect(() => {
    if (!historyView) return; 
    const unsub = listenRecentBills(snap => {
      setRecentBills(snap.docs.map(d => ({ id:d.id, ...d.data() })));
    });
    return () => unsub && unsub();
  }, [historyView]);

  const saveOrder = async () => {
    const amt = Number(orderForm.total);
    if (!amt || amt <= 0) return toast.error('Enter a valid amount');
    const parsedItems = orderForm.items
      ? orderForm.items.split(',').map(s => s.trim()).filter(Boolean)
      : ['Manual Order'];
    const perItem = amt / parsedItems.length;
    const itemsArr = parsedItems.map(name => ({ itemName: name, quantity: 1, unitPrice: perItem, totalPrice: perItem }));

    const payload = {
      sessionType: orderForm.sessionType,
      paymentMode: orderForm.paymentMode,
      billTotal: amt,
      customerNameOrToken: orderForm.customer,
      items: itemsArr,
      createdDate: date,
      createdTime: new Date().toLocaleTimeString()
    };
    await addBill(payload);
    toast.success('Order added');
    setOrderForm(f => ({ ...f, total: '', customer: '', items: '' }));
  };

  const filteredHistory = useMemo(() => {
    return recentBills
      // History tab should only display manually added orders
      .filter(b => b.sessionType === 'order')
      .filter(b => {
        if (historyFilter.date && b.createdDate !== historyFilter.date) return false;
        if (historyFilter.month && !b.createdDate?.startsWith(historyFilter.month)) return false;
        return true;
      });
  }, [recentBills, historyFilter]);

  const renderList = (list) => (
    <div className="overflow-auto">
      <table className="table">
        <thead>
          <tr><th>Session</th><th>Date</th><th>Time</th><th>Payment</th><th>Customer</th><th>Items</th><th>Total</th></tr>
        </thead>
        <tbody>
          {list.length === 0 && <tr><td colSpan="7" className="text-center text-slate-500">No orders</td></tr>}
          {list.map(b => (
            <tr key={b.id}>
              <td className="capitalize">{b.sessionType}</td>
              <td>{formatDisplayDate(b.createdDate)}</td>
              <td>{b.createdTime || '-'}</td>
              <td className="uppercase">{b.paymentMode}</td>
              <td>{b.customerNameOrToken || '-'}</td>
              <td>{(b.items||[]).map(i=>i.itemName).join(', ') || '-'}</td>
              <td>{formatInr(b.billTotal || 0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="card space-y-4">
      <div className="flex items-center gap-3">
        <button className={`btn ${!historyView ? 'btn-primary' : 'btn-ghost'}`} onClick={()=>setHistoryView(false)}>Today</button>
        <button className={`btn ${historyView ? 'btn-primary' : 'btn-ghost'}`} onClick={()=>setHistoryView(true)}>History</button>
      </div>

      {!historyView && (
        <>
          <div className="flex flex-wrap items-center gap-3 justify-between">
            <div>
              <h2 className="text-xl font-semibold">Orders</h2>
              <p className="text-sm text-slate-500">Quick add; list view hidden as requested</p>
            </div>
            <input
              className="input w-52"
              type="date" value={date} onChange={e=>setDate(e.target.value)}
            />
          </div>

          <div className="card bg-white/70 border-dashed border-2 border-slate-200">
            <div className="font-semibold mb-3">Quick Add Order</div>
            <div className="grid md:grid-cols-5 gap-3">
              <select className="input" value={orderForm.sessionType} onChange={e=>setOrderForm(f=>({...f, sessionType:e.target.value}))}>
                {SESSION_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <input className="input" type="number" min="0" placeholder="Amount" value={orderForm.total} onChange={e=>setOrderForm(f=>({...f,total:e.target.value}))} />
              <select className="input" value={orderForm.paymentMode} onChange={e=>setOrderForm(f=>({...f,paymentMode:e.target.value}))}>
                <option value="cash">Cash</option>
                <option value="upi">UPI</option>
              </select>
              <input className="input" placeholder="Customer / Token" value={orderForm.customer} onChange={e=>setOrderForm(f=>({...f,customer:e.target.value}))} />
              <input className="input" placeholder="Items (comma separated)" value={orderForm.items} onChange={e=>setOrderForm(f=>({...f,items:e.target.value}))} />
            </div>
            <div className="mt-3">
              <button className="btn btn-primary" onClick={saveOrder}>Add Order</button>
            </div>
          </div>

          {loading && <LoadingSpinner />}
        </>
      )}

      {historyView && (
        <>
          <div className="grid md:grid-cols-3 gap-3">
            <input
              className="input"
              type="date" value={historyFilter.date} onChange={e=>setHistoryFilter(f=>({...f,date:e.target.value}))}
            />
            <input className="input" type="month" value={historyFilter.month} onChange={e=>setHistoryFilter(f=>({...f,month:e.target.value}))} />
            <button className="btn btn-primary" onClick={()=>setHistoryFilter(f=>({...f}))}>Filter</button>
          </div>
          {renderList(filteredHistory)}
        </>
      )}
    </div>
  );
}


