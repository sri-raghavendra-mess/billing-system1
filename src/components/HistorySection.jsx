import { useEffect, useMemo, useState } from 'react';
import CSVExportButtons from './CSVExportButtons';
import { listenRecentBills, listenRecentExpenses } from '../services/firestoreService';
import { formatDisplayDate } from '../utils/dateTimeUtils';

const formatInr = (n = 0) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n || 0);
const formatTime = (ts) => {
  if (!ts) return '';
  const date = ts.toDate ? ts.toDate() : new Date(ts);
  return isNaN(date) ? '' : date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
};
const describeItem = (item = {}) => {
  const name = item.itemName || item.name || 'Item';
  const qty = Math.max(0, Number(item.quantity || item.qty || item.count || 0)) || 0;
  const unit = Number(item.unitPrice ?? item.price ?? 0) || 0;
  const total = Number(item.totalPrice ?? item.total ?? qty * unit) || 0;
  return { name, qty, unit, total };
};

export default function HistorySection() {
  const [records, setRecords] = useState([]);
  const [filter, setFilter] = useState({ date: '', month: '' });
  const [selectedDay, setSelectedDay] = useState(null);
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
    const unsubBills = listenRecentBills(bSnap => {
      const bills = bSnap.docs.map(d => d.data());
      setRecords(prev => ({ ...prev, bills }));
    });
    const unsubExp = listenRecentExpenses(eSnap => {
      const expenses = eSnap.docs.map(d => d.data());
      setRecords(prev => ({ ...prev, expenses }));
    });
    return () => { unsubBills(); unsubExp(); };
  }, []);

  const rows = useMemo(() => {
    const bills = records.bills || [];
    const expenses = records.expenses || [];
    const byDate = {};
    bills.forEach(b => {
      const key = b.createdDate || 'unknown';
      if (!byDate[key]) byDate[key] = { date: key, totalSales: 0, totalExpense: 0 };
      byDate[key].totalSales += b.billTotal || 0;
    });
    expenses.forEach(e => {
      const key = e.expenseDate || 'unknown';
      if (!byDate[key]) byDate[key] = { date: key, totalSales: 0, totalExpense: 0 };
      byDate[key].totalExpense += e.amount || 0;
    });
    return Object.values(byDate).map(r => ({ ...r, netProfit: (r.totalSales || 0) - (r.totalExpense || 0) }))
      .sort((a,b)=> (b.date || '').localeCompare(a.date || ''));
  }, [records]);

  const filtered = useMemo(() => {
    return rows.filter(r => {
      if (filter.date && r.date !== filter.date) return false;
      if (filter.month && !r.date?.startsWith(filter.month)) return false;
      return true;
    });
  }, [rows, filter]);

  const getDayDetails = useMemo(() => {
    if (!selectedDay) return { bills: [], expenses: [] };
    const bills = (records.bills || []).filter(b => b.createdDate === selectedDay);
    const expenses = (records.expenses || []).filter(e => e.expenseDate === selectedDay);
    return { bills, expenses };
  }, [records, selectedDay]);

  const openDayPreview = (mode = 'print') => {
    if (!selectedDay) return;
    const { bills, expenses } = getDayDetails;
    const incomeTotal = bills.reduce((s,b)=> s + (b.billTotal || 0), 0);
    const expenseTotal = expenses.reduce((s,e)=> s + (e.amount || 0), 0);
    const profit = incomeTotal - expenseTotal;

    const billRows = bills.map(b => `
      <tr>
        <td>${formatTime(b.createdAt)}</td>
        <td>${formatInr(b.billTotal || 0)}</td>
        <td>${(b.items||[]).map(i=>{const d=describeItem(i);return `${d.name}: ${d.qty} × ${formatInr(d.unit)} = ${formatInr(d.total)}`;}).join('<br/>')}</td>
      </tr>
    `).join('') || '<tr><td colspan=\"3\">No bills</td></tr>';

    const expenseRows = expenses.map(e => `
      <tr><td>${formatTime(e.createdAt)}</td><td>${e.description || e.expenseTitle || e.title || 'Expense'}</td><td>${formatInr(e.amount || 0)}</td></tr>
    `).join('') || '<tr><td colspan=\"3\">No expenses</td></tr>';

    const html = `<!doctype html>
    <html><head><title>${formatDisplayDate(selectedDay)} - Day Summary</title>
    <style>
      body{font-family: Arial, sans-serif; padding:24px; color:#0f172a;}
      h1{margin:0 0 12px;}
      table{width:100%; border-collapse:collapse; margin-bottom:18px;}
      th,td{border:1px solid #e2e8f0; padding:8px; text-align:left; font-size:14px;}
      th{background:#f8fafc;}
      .summary{margin-bottom:16px; font-weight:700;}
    </style>
    </head><body>
      <h1>Details for ${formatDisplayDate(selectedDay)}</h1>
      <div class="summary">Total Sales: ${formatInr(incomeTotal)} | Expense: ${formatInr(expenseTotal)} | Profit: ${formatInr(profit)}</div>
      <h3>Bills</h3>
      <table><thead><tr><th>Time</th><th>Total</th><th>Items</th></tr></thead><tbody>${billRows}</tbody></table>
      <h3>Expenses</h3>
      <table><thead><tr><th>Time</th><th>Title</th><th>Amount</th></tr></thead><tbody>${expenseRows}</tbody></table>
    </body></html>`;

    const win = window.open('', '_blank', 'width=1100,height=900');
    if (!win) return alert('Please allow popups for print/PDF');
    win.document.write(html);
    win.document.close();
    win.focus();
    if (mode === 'print' || mode === 'pdf') win.print();
  };

  return (
    <div className="space-y-3">
      <div className="grid md:grid-cols-3 gap-3">
        <input
          className="input"
          type="text"
          placeholder="dd/mm/yyyy"
          value={formatDisplayDate(filter.date)}
          onChange={e=>setFilter(f=>({...f, date: toIso(e.target.value)}))}
        />
        <input className="input" type="month" value={filter.month} onChange={e=>setFilter(f=>({...f,month:e.target.value}))}/>
        <button className="btn btn-primary" onClick={()=>setFilter(f=>({...f}))}>Search</button>
      </div>
      <div className="card">
        <div className="overflow-x-auto">
          <table className="table min-w-[540px]">
          <thead><tr><th>Date</th><th>Total Sales</th><th>Expense</th><th>Profit</th></tr></thead>
          <tbody>
            {filtered.length === 0 && (
              <tr><td colSpan="4" className="text-center text-slate-500">No records</td></tr>
            )}
            {filtered.map(r => (
              <tr key={r.date}>
                <td>
                  <button 
                    className="text-blue-600 hover:text-blue-800 underline"
                    onClick={() => setSelectedDay(selectedDay === r.date ? null : r.date)}
                  >
                    {formatDisplayDate(r.date)}
                  </button>
                </td>
                <td>{formatInr(r.totalSales || 0)}</td>
                <td>{formatInr(r.totalExpense || 0)}</td>
                <td>{formatInr(r.netProfit || 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      
      {selectedDay && (
        <div className="card mt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Details for {formatDisplayDate(selectedDay)}</h3>
            <div className="flex gap-2 flex-wrap">
              <button className="btn btn-ghost" onClick={()=>openDayPreview('print')}>Print</button>
              <button className="btn btn-ghost" onClick={()=>openDayPreview('pdf')}>Download PDF</button>
              <button 
                className="btn btn-ghost"
                onClick={() => setSelectedDay(null)}
              >
                Close
              </button>
            </div>
          </div>
          
          {getDayDetails.bills.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Bills</h4>
              <div className="space-y-3">
                {getDayDetails.bills.map((bill, index) => (
                  <div key={index} className="p-4 rounded-xl border bg-green-50/60 shadow-soft">
                    <div className="flex justify-between items-start gap-2">
                      <div className="font-semibold">Bill Total: {formatInr(bill.billTotal || 0)}</div>
                      <div className="text-sm text-gray-600">{formatTime(bill.createdAt)}</div>
                    </div>
                    {bill.items && bill.items.length > 0 && (
                      <div className="mt-2 text-sm">
                        <div className="font-medium">Items:</div>
                        <ul className="list-disc list-inside">
                          {bill.items.map((item, i) => (
                            <li key={i}>
                              {(() => {
                                const d = describeItem(item);
                                return `${d.name}: ${d.qty} × ${formatInr(d.unit)} = ${formatInr(d.total)}`;
                              })()}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {getDayDetails.expenses.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Expenses</h4>
              <div className="space-y-3">
                {getDayDetails.expenses.map((expense, index) => (
                  <div key={index} className="p-4 rounded-xl border bg-red-50/60 shadow-soft">
                    <div className="flex justify-between items-start gap-2">
                      <div className="font-semibold">
                        {expense.description || expense.expenseTitle || expense.title || 'Expense'}: {formatInr(expense.amount || 0)}
                        
                        {expense.note && <div className="text-sm text-gray-700 font-normal">Note: {expense.note}</div>}
                      </div>
                      <div className="text-sm text-gray-600">{formatTime(expense.createdAt)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {getDayDetails.bills.length === 0 && getDayDetails.expenses.length === 0 && (
            <p className="text-center text-gray-500">No detailed records found for this day.</p>
          )}
        </div>
      )}
      
      <CSVExportButtons history={filtered} />
    </div>
  );
}
