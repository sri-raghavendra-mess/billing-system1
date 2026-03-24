import { useEffect, useState } from 'react';
import { addExpense, updateExpense } from '../services/firestoreService';
import toast from 'react-hot-toast';
import { todayKey } from '../utils/dateTimeUtils';

export default function ExpenseForm({ onSaved, editing }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const presetTitles = ['Gas', 'Rice', 'Super Market', 'Vegetable', 'Tabers Salary', 'Milk'];

  // sync form when editing changes
  useEffect(() => {
    if (editing) {
      setTitle(editing.expenseTitle || '');
      setAmount(editing.amount || '');
      setNote(editing.note || '');
    } else {
      setTitle(''); setAmount(''); setNote('');
    }
  }, [editing]);

  const save = async () => {
    if (!title || !Number(amount)) return toast.error('Title and valid amount required');
    if (editing?.id) {
      await updateExpense(editing.id, { expenseTitle: title, amount: Number(amount), note, expenseDate: editing.expenseDate || todayKey() });
      toast.success('Expense updated');
    } else {
      await addExpense({ expenseTitle: title, amount: Number(amount), note, expenseDate: todayKey() });
      toast.success('Expense saved');
    }
    setTitle(''); setAmount(''); setNote('');
    onSaved && onSaved();
  };

  const filtered = presetTitles.filter(t => t.toLowerCase().includes(title.toLowerCase())).slice(0, 6);

  return (
    <div className="card">
      <div className="font-semibold mb-2">{editing ? 'Edit Expense' : 'Add Expense'}</div>
      <div className="grid md:grid-cols-3 gap-3 items-start">
        <div className="md:col-span-2 relative">
          <input
            className="input input-lg w-full"
            placeholder="Select or type title"
            value={title}
            onChange={e=>setTitle(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setTimeout(()=>setShowSuggestions(false), 120)}
          />
          {showSuggestions && filtered.length > 0 && (
            <div className="absolute z-20 mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
              {filtered.map(t => (
                <button
                  key={t}
                  type="button"
                  className="block w-full text-left px-4 py-3 hover:bg-slate-100 text-slate-800 text-base"
                  onMouseDown={(e)=>{ e.preventDefault(); setTitle(t); setShowSuggestions(false); }}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>
        <input className="input" type="number" placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)}/>
        <input className="input md:col-span-3" placeholder="Note (optional)" value={note} onChange={e=>setNote(e.target.value)}/>
      </div>
      <button className="btn btn-primary mt-3" onClick={save}>{editing ? 'Update Expense' : 'Save Expense'}</button>
    </div>
  );
}
