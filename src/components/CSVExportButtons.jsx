import { useState } from 'react';
import Papa from 'papaparse';
import { exportCsv } from '../utils/csvExport';
import { formatDisplayDate } from '../utils/dateTimeUtils';

const columns = ['Section','Date','Payment','Total','Customer','Items','Title','Amount','Note','TotalIncome','TotalExpense','ProfitOrLoss'];
const SESSION_ORDER = { morning: 0, afternoon: 1, evening: 2, order: 3 };

const groupBillsBySession = (bills = []) => {
  const groups = { morning: [], afternoon: [], evening: [], order: [] };
  bills.forEach(b => {
    const target = groups[b.sessionType] || groups.morning;
    target.push({
      section: b.sessionType,
      date: formatDisplayDate(b.createdDate),
      payment: b.paymentMode,
      total: b.billTotal,
      customer: b.customerNameOrToken,
      items: (b.items || []).map(i=>i.itemName).join('; ')
    });
  });
  return groups;
};

const round2 = (n = 0) => Math.round((n || 0) * 100) / 100;
const fixed2 = (n = 0) => round2(n).toFixed(2);
const totalsFromBills = (bills = []) => round2(bills.reduce((s,b)=> s + (b.billTotal || 0), 0));
const totalsFromExpenses = (expenses = []) => round2(expenses.reduce((s,e)=> s + (e.amount || 0), 0));

const toRow = (data = {}) => ([
  data.section || '',
  data.date || '',
  data.payment || '',
  data.total ?? '',
  data.customer || '',
  data.items || '',
  data.title || '',
  data.amount ?? '',
  data.note || '',
  data.totalIncome ?? '',
  data.totalExpense ?? '',
  data.profitOrLoss ?? ''
]);

// helper: safe timestamp from date + time strings
const billTimestamp = (b) => {
  if (!b.createdDate) return 0;
  const dt = b.createdTime ? `${b.createdDate} ${b.createdTime}` : b.createdDate;
  const ts = Date.parse(dt);
  return Number.isNaN(ts) ? Date.parse(b.createdDate) || 0 : ts;
};

// helper to sort bills by most recent timestamp desc (no session grouping)
const sortBillsDescByTime = (arr = []) => [...arr].sort((a,b)=>{
  const ta = billTimestamp(a);
  const tb = billTimestamp(b);
  if (tb !== ta) return tb - ta;
  const sa = SESSION_ORDER[a.sessionType] ?? 99;
  const sb = SESSION_ORDER[b.sessionType] ?? 99;
  return sa - sb;
});

export default function CSVExportButtons({ bills = [], expenses = [], today, history = [], orders = [] }) {
  const [preview, setPreview] = useState({ title: '', type: '', data: {} });

  const spacer = () => toRow({});

  const buildTodayRows = () => {
    const groups = groupBillsBySession(bills);
    const incomeTotal = totalsFromBills(bills);
    const expenseTotal = totalsFromExpenses(expenses);

    const rows = [];
    rows.push(toRow({ section: '--- Morning ---' }));
    groups.morning.forEach(b => rows.push(toRow(b)));
    rows.push(spacer());
    rows.push(toRow({ section: '--- Afternoon ---' }));
    groups.afternoon.forEach(b => rows.push(toRow(b)));
    rows.push(spacer());
    rows.push(toRow({ section: '--- Evening ---' }));
    groups.evening.forEach(b => rows.push(toRow(b)));
    rows.push(spacer());
    rows.push(toRow({ section: '--- Orders ---' }));
    groups.order.forEach(b => rows.push(toRow(b)));
    rows.push(spacer());
    rows.push(toRow({ section: '--- Expenses ---' }));
    expenses.forEach(e => rows.push(toRow({
      section: 'expense',
      date: formatDisplayDate(e.expenseDate),
      title: e.expenseTitle,
      amount: e.amount,
      note: e.note
    })));
    rows.push(spacer());
    rows.push(toRow({ section: 'Totals', totalIncome: fixed2(incomeTotal), totalExpense: fixed2(expenseTotal), profitOrLoss: fixed2(incomeTotal - expenseTotal) }));
    return rows;
  };

  const buildTodayPreviewData = () => {
    const sortedBills = sortBillsDescByTime(bills);
    const incomeTotal = totalsFromBills(bills);
    const expenseTotal = totalsFromExpenses(expenses);
    const summary = {
      incomeTotal: round2(incomeTotal),
      expenseTotal: round2(expenseTotal),
      profit: round2(incomeTotal - expenseTotal)
    };
    return { bills: sortedBills, expenses, summary };
  };

  const buildHistoryRows = () => history.map(h => [
    formatDisplayDate(h.date),
    fixed2(h.totalSales),
    fixed2(h.totalExpense),
    fixed2(h.netProfit)
  ]);
  const buildOrdersRows = () => orders.map(o => ([
    o.sessionType,
    formatDisplayDate(o.createdDate),
    o.paymentMode,
    o.billTotal,
    o.customerNameOrToken,
    (o.items||[]).map(i=>i.itemName).join('; ')
  ]));

  const exportTodayCombined = () => {
    if (!today) return alert('No date');
    exportCsv([columns, spacer(), ...buildTodayRows()], `today-bills-expenses-${today}.csv`);
  };

  const previewToday = () => {
    if (!today) return alert('No date');
    setPreview({ title: `Bills + Expenses (${formatDisplayDate(today)})`, type: 'today', data: buildTodayPreviewData() });
  };

  const exportHistory = () => {
    const header = ['Date','Total Sales','Expense','Profit'];
    exportCsv([header, [''], ...buildHistoryRows()], 'history.csv');
  };

  const previewHistory = () => {
    const header = ['Date','Total Sales','Expense','Profit'];
    setPreview({ title: 'History', type: 'history', data: { header, rows: buildHistoryRows() } });
  };

  const exportOrdersCsv = () => {
    if (!orders.length) return alert('No orders');
    const header = ['Session','Date','Payment','Total','Customer','Items'];
    exportCsv([header, [''], ...buildOrdersRows()], `orders-${today || 'all'}.csv`);
  };

  const previewOrders = () => {
    if (!orders.length) return alert('No orders');
    const header = ['Session','Date','Payment','Total','Customer','Items'];
    setPreview({ title: 'Orders', type: 'orders', data: { header, rows: buildOrdersRows() } });
  };

  const printToday = () => {
    if (preview.type !== 'today' || !preview.data?.bills) return;
    const { bills, expenses, summary } = preview.data;
    const billRows = bills.map(b => `
      <tr>
        <td>${b.sessionType}</td><td>${formatDisplayDate(b.createdDate)}</td><td>${b.createdTime || ''}</td>
        <td>${b.paymentMode}</td><td>${b.billTotal}</td><td>${b.customerNameOrToken || '-'}</td>
        <td>${(b.items||[]).map(x=>x.itemName).join(', ')}</td>
      </tr>`).join('');
    const expenseRows = expenses.map(e => `
      <tr><td>${formatDisplayDate(e.expenseDate)}</td><td>${e.expenseTitle}</td><td>${e.amount}</td><td>${e.note||''}</td></tr>
    `).join('') || '<tr><td colspan="5">No expenses</td></tr>';
    const html = `
      <html>
      <head>
        <title>${preview.title}</title>
        <style>
          body{font-family:Arial, sans-serif; padding:24px; color:#0f172a;}
          h1{margin:0 0 12px;}
          table{width:100%; border-collapse:collapse; margin-bottom:16px;}
          th,td{border:1px solid #e2e8f0; padding:8px; font-size:13px; text-align:left;}
          th{background:#f8fafc;}
          .summary{margin-top:8px; font-weight:600;}
        </style>
      </head>
      <body>
        <h1>${preview.title}</h1>
        <h3>Bills</h3>
        <table><thead><tr><th>Session</th><th>Date</th><th>Time</th><th>Payment</th><th>Total</th><th>Customer</th><th>Items</th></tr></thead>
        <tbody>${billRows}</tbody></table>
        <h3>Expenses</h3>
        <table><thead><tr><th>Date</th><th>Title</th><th>Amount</th><th>Note</th></tr></thead>
        <tbody>${expenseRows}</tbody></table>
        <div class="summary">Total Income: ${fixed2(summary.incomeTotal)} | Total Expense: ${fixed2(summary.expenseTotal)} | Profit/Loss: ${fixed2(summary.profit)}</div>
      </body></html>`;
    const win = window.open('', '_blank', 'width=1000,height=1200');
    if (!win) return alert('Please allow popups for print/PDF');
    win.document.write(html);
    win.document.close();
    win.focus();
    win.print();
  };

  return (
    <div className="flex flex-wrap gap-3">
      {today && <button className="btn btn-ghost" onClick={exportTodayCombined}>Export Bills + Expenses (single CSV)</button>}
      {today && <button className="btn btn-ghost" onClick={previewToday}>Preview Bills + Expenses</button>}
      {history && history.length > 0 && <button className="btn btn-ghost" onClick={exportHistory}>Export History CSV</button>}
      {history && history.length > 0 && <button className="btn btn-ghost" onClick={previewHistory}>Preview History</button>}
      {orders && orders.length > 0 && <button className="btn btn-ghost" onClick={exportOrdersCsv}>Export Orders CSV</button>}
      {orders && orders.length > 0 && <button className="btn btn-ghost" onClick={previewOrders}>Preview Orders</button>}

      {preview.type && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="card max-w-5xl w-[95%] bg-white overflow-hidden">
            <div className="flex flex-wrap gap-3 justify-between items-center mb-3">
              <div className="font-semibold">Preview: {preview.title}</div>
              <div className="flex gap-2 flex-wrap justify-end">
                {preview.type === 'today' && (
                  <>
                    <button className="btn btn-ghost" onClick={printToday}>Print Receipt</button>
                    <button className="btn btn-ghost" onClick={printToday}>Download PDF</button>
                  </>
                )}
                <button className="btn btn-ghost" onClick={()=>setPreview({ title:'', type:'', data:{} })}>Close</button>
              </div>
            </div>
            <div className="max-h-[65vh] overflow-auto space-y-4">
              {preview.type === 'today' && (
                <>
                  <div className="font-semibold">Bills</div>
                  <table className="table">
                    <thead>
                      <tr><th>Session</th><th>Date</th><th>Time</th><th>Payment</th><th>Total</th><th>Customer</th><th>Items</th></tr>
                    </thead>
                    <tbody>
                      {preview.data.bills.map((b,i)=>(
                        <tr key={i}>
                          <td className="capitalize">{b.sessionType}</td>
                          <td>{formatDisplayDate(b.createdDate)}</td>
                          <td>{b.createdTime}</td>
                          <td>{b.paymentMode}</td>
                          <td>{b.billTotal}</td>
                          <td>{b.customerNameOrToken || '-'}</td>
                          <td>{(b.items||[]).map(x=>x.itemName).join(', ')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="font-semibold">Expenses</div>
                  <table className="table">
                    <thead><tr><th>Date</th><th>Title</th><th>Amount</th><th>Note</th></tr></thead>
                    <tbody>
                      {expenses.length === 0 && <tr><td colSpan="4" className="text-center text-slate-500">No expenses</td></tr>}
                      {expenses.map((e,i)=>(
                        <tr key={i}>
                          <td>{formatDisplayDate(e.expenseDate)}</td><td>{e.expenseTitle}</td><td>{e.amount}</td><td>{e.note||''}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="font-semibold">Summary</div>
                  <table className="table">
                    <thead><tr><th>Total Income</th><th>Total Expense</th><th>Profit/Loss</th></tr></thead>
                    <tbody>
                      <tr><td>{fixed2(preview.data.summary.incomeTotal)}</td><td>{fixed2(preview.data.summary.expenseTotal)}</td><td>{fixed2(preview.data.summary.profit)}</td></tr>
                    </tbody>
                  </table>
                </>
              )}

              {preview.type === 'history' && (
                <table className="table">
                  <thead><tr>{preview.data.header.map((h,i)=>(<th key={i}>{h}</th>))}</tr></thead>
                  <tbody>
                    {preview.data.rows.map((r,i)=>(<tr key={i}>{r.map((v,j)=>(<td key={j}>{v}</td>))}</tr>))}
                  </tbody>
                </table>
              )}

              {preview.type === 'orders' && (
                <table className="table">
                  <thead><tr>{preview.data.header.map((h,i)=>(<th key={i}>{h}</th>))}</tr></thead>
                  <tbody>
                    {preview.data.rows.map((r,i)=>(<tr key={i}>{r.map((v,j)=>(<td key={j}>{v}</td>))}</tr>))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
