const formatInr = (n = 0) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n || 0);

export default function SummaryCards({ totals }) {
  const cards = [
    { title: 'Grand Total', value: totals.grandTotal },
    { title: 'Expense', value: totals.expense },
    { title: 'Net Profit', value: totals.net },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-3">
      {cards.map(c=>(
        <div key={c.title} className="card">
          <div className="text-sm text-slate-500">{c.title}</div>
          <div className="text-2xl font-bold">{formatInr(c.value)}</div>
        </div>
      ))}
    </div>
  );
}
