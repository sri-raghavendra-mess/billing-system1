import { useEffect, useMemo, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import SummaryCards from './SummaryCards';
import CSVExportButtons from './CSVExportButtons';
import { todayKey, formatDisplayDate } from '../utils/dateTimeUtils';
import { listenBillsByDate, listenExpensesByDate, deleteExpense } from '../services/firestoreService';
import toast from 'react-hot-toast';

const formatInr = (n = 0) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n || 0);

export default function ProfitSection() {
  const today = todayKey();
  const todayDisplay = formatDisplayDate(today);
  const [bills, setBills] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const unsubBills = listenBillsByDate(today, snap => setBills(snap.docs.map(d=>({ id:d.id, ...d.data() }))));
    const unsubExp = listenExpensesByDate(today, snap => setExpenses(snap.docs.map(d=>({ id:d.id, ...d.data() }))));
    return () => { unsubBills(); unsubExp(); };
  }, [today]);

  const summary = useMemo(() => {
    const base = {
      morning: { cash:0, upi:0, total:0 },
      afternoon:{ cash:0, upi:0, total:0 },
      evening:{ cash:0, upi:0, total:0 },
      expense: 0
    };
    bills.forEach(b => {
      const bucket = base[b.sessionType] || base.morning;
      if (b.paymentMode === 'cash') bucket.cash += b.billTotal || 0;
      if (b.paymentMode === 'upi') bucket.upi += b.billTotal || 0;
      bucket.total += b.billTotal || 0;
    });
    base.expense = expenses.reduce((s,e)=> s + (e.amount||0), 0);
    return base;
  }, [bills, expenses]);

  const grandTotal = summary.morning.total + summary.afternoon.total + summary.evening.total;
  const net = grandTotal - summary.expense;

  const handleDelete = async (id) => {
    await deleteExpense(id);
    toast.success('Expense deleted');
    if (editing?.id === id) setEditing(null);
  };

  return (
    <div className="space-y-4">
      <SummaryCards totals={{ grandTotal, net, expense: summary.expense }} />

      <div className="card">
        <div className="text-lg font-semibold mb-3">Today Breakdown ({todayDisplay})</div>
        <table className="table">
          <thead><tr><th>Session</th><th>Cash</th><th>UPI</th><th>Total</th></tr></thead>
          <tbody>
            {['morning','afternoon','evening'].map(s=>(
              <tr key={s}>
                <td className="capitalize">{s}</td>
                <td>{formatInr(summary[s].cash)}</td>
                <td>{formatInr(summary[s].upi)}</td>
                <td>{formatInr(summary[s].total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="text-lg font-semibold mb-3">Today Expenses</div>
        <table className="table">
          <thead><tr><th>Title</th><th>Amount</th><th>Note</th><th></th></tr></thead>
          <tbody>
            {expenses.length === 0 && <tr><td colSpan="4" className="text-center text-slate-500">No expenses</td></tr>}
            {expenses.map((e)=>(
              <tr key={e.id}>
                <td>{e.expenseTitle}</td>
                <td>{formatInr(e.amount||0)}</td>
                <td>{e.note || ''}</td>
                <td className="space-x-2">
                  <button className="btn btn-ghost" onClick={()=>setEditing(e)}>Edit</button>
                  <button className="btn btn-ghost" onClick={()=>handleDelete(e.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ExpenseForm editing={editing} onSaved={()=>setEditing(null)} />
      <CSVExportButtons bills={bills} expenses={expenses} today={today} />
    </div>
  );
}


