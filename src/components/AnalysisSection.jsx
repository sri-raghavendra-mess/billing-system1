import { useEffect, useMemo, useState } from 'react';
import { listenRecentBills, listenRecentExpenses } from '../services/firestoreService';
import { formatDisplayDate } from '../utils/dateTimeUtils';

const formatInr = (n = 0) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n || 0);

function DualAxisLineChart({ labels = [], income = [], expense = [], profit = [], title }) {
  if (!labels.length) return <div className="text-slate-500 text-sm">No data</div>;

  const width = 460;
  const height = 220;
  const pad = 36;

  const leftValues = [...income, ...profit];
  const rightValues = [...expense];
  const leftMin = Math.min(0, ...leftValues, 0);
  const leftMax = Math.max(...leftValues, 1);
  const rightMin = Math.min(0, ...rightValues, 0);
  const rightMax = Math.max(...rightValues, 1);
  const leftRange = leftMax - leftMin || 1;
  const rightRange = rightMax - rightMin || 1;

  const stepX = labels.length > 1 ? (width - 2 * pad) / (labels.length - 1) : 0;
  const yLeft = (v) => height - pad - ((v - leftMin) / leftRange) * (height - 2 * pad);
  const yRight = (v) => height - pad - ((v - rightMin) / rightRange) * (height - 2 * pad);

  const zeroY = leftMin < 0 && leftMax > 0 ? yLeft(0) : null;

  const toCoords = (vals, yFn) => labels.map((_, i) => [pad + i * stepX, yFn(vals[i] ?? 0)]);

  const incomeCoords = toCoords(income, yLeft);
  const profitCoords = toCoords(profit, yLeft);
  const expenseCoords = toCoords(expense, yRight);

  const profitMaxIdx = profit.reduce((best, v, i, arr) => (arr[best] ?? -Infinity) < v ? i : best, 0);
  const profitMinIdx = profit.reduce((best, v, i, arr) => (arr[best] ?? Infinity) > v ? i : best, 0);
  const labelIdxSet = new Set([0, labels.length - 1, profitMaxIdx]);

  const renderLine = (coords, color, strokeWidth = 3, isProfit = false) => (
    <g>
      <polyline points={coords.map(c => c.join(',')).join(' ')} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      {coords.map((c, i) => {
        const value = isProfit ? profit[i] : (coords === incomeCoords ? income[i] : expense[i]);
        const negative = isProfit && value < 0;
        const showLabel = isProfit && labelIdxSet.has(i);
        const markerColor = negative ? '#ef4444' : color;
        return (
          <g key={i}>
            <circle cx={c[0]} cy={c[1]} r={4} fill={markerColor} />
            {showLabel && (
              <text x={c[0]} y={c[1] - 8} textAnchor="middle" fontSize="10" fill="#475569">{formatInr(value)}</text>
            )}
          </g>
        );
      })}
    </g>
  );

  return (
    <div className="space-y-2">
      {title && <div className="font-semibold text-sm text-slate-700">{title}</div>}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-3xl">
        {zeroY !== null && <line x1={pad} x2={width - pad} y1={zeroY} y2={zeroY} stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1" />}

        {/* Right axis ticks (Expense) */}
        <text x={width - pad + 6} y={pad} fontSize="10" fill="#ef4444">High</text>
        <text x={width - pad + 6} y={height - pad} fontSize="10" fill="#ef4444">Low</text>

        {renderLine(expenseCoords, '#ef4444', 2.5, false)}
        {renderLine(incomeCoords, '#16a34a', 2.5, false)}
        {renderLine(profitCoords, '#1d4ed8', 3.5, true)}

        {/* Labels row */}
        {labels.map((l,i)=>(
          <text key={i} x={pad + i * stepX} y={height - pad + 14} textAnchor="middle" fontSize="9" fill="#94a3b8">{l}</text>
        ))}
      </svg>
      <div className="flex flex-wrap gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full" style={{background:'#16a34a'}}></span><span className="font-medium">Income (left)</span></div>
        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full" style={{background:'#ef4444'}}></span><span className="font-medium">Expense (right)</span></div>
        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full" style={{background:'#1d4ed8'}}></span><span className="font-medium">Profit (left)</span></div>
      </div>
    </div>
  );
}

export default function AnalysisSection() {
  const [period, setPeriod] = useState('daily');
  const [records, setRecords] = useState({ bills: [], expenses: [] });

  useEffect(() => {
    const unsubBills = listenRecentBills(bSnap => setRecords(r => ({ ...r, bills: bSnap.docs.map(d => d.data()) })));
    const unsubExp = listenRecentExpenses(eSnap => setRecords(r => ({ ...r, expenses: eSnap.docs.map(d => d.data()) })));
    return () => { unsubBills(); unsubExp(); };
  }, []);

  const rows = useMemo(() => {
    const bills = records.bills || [];
    const expenses = records.expenses || [];
    const byDate = {};
    bills.forEach(b => {
      const key = b.createdDate || 'unknown';
      if (!byDate[key]) byDate[key] = { date: key, sales: 0, expense: 0 };
      byDate[key].sales += b.billTotal || 0;
    });
    expenses.forEach(e => {
      const key = e.expenseDate || 'unknown';
      if (!byDate[key]) byDate[key] = { date: key, sales: 0, expense: 0 };
      byDate[key].expense += e.amount || 0;
    });
    return Object.values(byDate)
      .map(r => ({ ...r, profit: (r.sales || 0) - (r.expense || 0) }))
      .sort((a,b)=> (a.date||'').localeCompare(b.date||'')); // ascending
  }, [records]);

  const daily = useMemo(() => rows.map(r => ({
    label: formatDisplayDate(r.date),
    income: r.sales,
    expense: r.expense,
    profit: r.profit,
  })), [rows]);

  const monthly = useMemo(() => {
    const grouped = {};
    rows.forEach(r => {
      const month = (r.date || '').slice(0,7); // YYYY-MM
      if (!month) return;
      if (!grouped[month]) grouped[month] = { income: 0, expense: 0 };
      grouped[month].income += r.sales;
      grouped[month].expense += r.expense;
    });
    if (!Object.keys(grouped).length) return [];

    const parseMonth = (key = '') => {
      const [y,m] = key.split('-').map(Number);
      return { y: y||0, m: m||1 };
    };
    const toKey = (y,m) => `${y}-${String(m).padStart(2,'0')}`;

    const allKeys = Object.keys(grouped).sort();
    const latest = allKeys[allKeys.length - 1];
    const { y: ly, m: lm } = parseMonth(latest);

    const months = [];
    for (let i = 5; i >= 0; i--) {
      let y = ly;
      let m = lm - i;
      while (m <= 0) { m += 12; y -= 1; }
      months.push(toKey(y,m));
    }

    return months.map(key => {
      const data = grouped[key] || { income: 0, expense: 0 };
      return { label: key, income: data.income, expense: data.expense, profit: data.income - data.expense };
    });
  }, [rows]);

  const formatMonthLabel = (key = "") => {
    const [y,m] = key.split("-");
    if (!y || !m) return key;
    const d = new Date(`${key}-01`);
    const month = d.toLocaleString("en", { month: "short" });
    return `${month} ${String(y).slice(-2)}`;
  };

  const summary = useMemo(() => {
    const income = rows.reduce((s,r)=> s + r.sales, 0);
    const expense = rows.reduce((s,r)=> s + r.expense, 0);
    return { income, expense, profit: income - expense };
  }, [rows]);

  const active = period === 'monthly' ? monthly : daily;
  const slice = active.slice(-12);
  const labels = slice.map(p => period === "monthly" ? formatMonthLabel(p.label) : p.label);
  const incomeVals = slice.map(p => p.income);
  const expenseVals = slice.map(p => p.expense);
  const profitVals = slice.map(p => p.profit);

  return (
    <div className="space-y-4">
      <div className="flex gap-3 items-center flex-wrap">
        <button className={`btn ${period==='daily' ? 'btn-primary' : 'btn-ghost'}`} onClick={()=>setPeriod('daily')}>Daily</button>
        <button className={`btn ${period==='monthly' ? 'btn-primary' : 'btn-ghost'}`} onClick={()=>setPeriod('monthly')}>Monthly</button>
        <div className="ml-auto flex gap-3 text-sm text-slate-700 flex-wrap">
          <span className="font-semibold">Income: {formatInr(summary.income)}</span>
          <span className="font-semibold">Expense: {formatInr(summary.expense)}</span>
          <span className="font-semibold">Profit: {formatInr(summary.profit)}</span>
        </div>
      </div>

      <DualAxisLineChart
        labels={labels}
        income={incomeVals}
        expense={expenseVals}
        profit={profitVals}
        title={period === 'monthly' ? 'Monthly Income / Expense / Profit' : 'Daily Income / Expense / Profit'}
      />
    </div>
  );
}
