import { useMemo, useState } from 'react';
import { addBill } from '../services/firestoreService';
import toast from 'react-hot-toast';
import { todayKey } from '../utils/dateTimeUtils';

const formatInr = (n = 0) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n || 0);

const QUICK_QTY = Array.from({ length: 20 }, (_, i) => i + 1);

export default function BillingTable({ menu, session }) {
  const [quantities, setQuantities] = useState({});
  const [paymentMode, setPaymentMode] = useState('cash');
  const [customer, setCustomer] = useState('');

  const rows = useMemo(() => menu.map(item => {
    const qty = quantities[item.id] || 0;
    return { ...item, qty, total: qty * item.price };
  }), [menu, quantities]);

  const totals = rows.reduce((acc, r) => {
    acc.total += r.total;
    return acc;
  }, { total: 0 });

  const setQtyAbsolute = (id, val) => {
    const safe = Math.max(0, isNaN(val) ? 0 : val);
    setQuantities(q => ({ ...q, [id]: safe }));
  };

  const saveBill = async () => {
    const items = rows.filter(r => r.qty > 0);
    if (!items.length) return toast.error('Add at least one item');
    await addBill({
      sessionType: session,
      items: items.map(i => ({ itemName: i.itemName, quantity: i.qty, unitPrice: i.price, totalPrice: i.total })),
      paymentMode,
      billTotal: totals.total,
      customerNameOrToken: customer,
      createdDate: todayKey(),
      createdTime: new Date().toLocaleTimeString()
    });
    toast.success('Bill saved');
    setQuantities({});
    setCustomer('');
  };

  const reset = () => { setQuantities({}); setCustomer(''); };

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="table min-w-[540px] sm:min-w-[640px]">
          <thead>
            <tr><th>Item</th><th className="text-center">Qty</th><th>Price</th><th>Total</th></tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id}>
                <td className={r.isAvailable ? '' : 'text-slate-400 line-through'}>{r.itemName}</td>
                <td className="text-center">
                  <div className="flex items-center gap-2">
                  <div className="qty-scroll flex flex-nowrap gap-3 px-2 py-1">
                    {QUICK_QTY.map(n => (
                      <button
                        key={n}
                        className="btn btn-ghost px-3 py-1 text-sm whitespace-nowrap qty-btn"
                        onClick={()=>setQtyAbsolute(r.id, n)}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                    <input
                      value={r.qty}
                      onChange={e=>setQtyAbsolute(r.id, Number(e.target.value))}
                      className="w-20 text-center border rounded-lg py-1"
                      type="number"
                      min="0"
                      step="1"
                      inputMode="numeric"
                    />
                  </div>
                </td>
                <td>{formatInr(r.price)}</td>
                <td>{formatInr(r.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <label className="flex items-center gap-2">
          <input type="radio" value="cash" checked={paymentMode==='cash'} onChange={()=>setPaymentMode('cash')} />
          Cash
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" value="upi" checked={paymentMode==='upi'} onChange={()=>setPaymentMode('upi')} />
          UPI
        </label>
        <input className="input max-w-xs" placeholder="Token / Name (optional)" value={customer} onChange={e=>setCustomer(e.target.value)} />
        <div className="ml-auto font-bold text-lg">Grand Total: {formatInr(totals.total)}</div>
      </div>

      <div className="flex gap-3">
        <button className="btn btn-primary" onClick={saveBill}>Save Bill</button>
        <button className="btn btn-ghost" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
