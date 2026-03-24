import { useEffect, useState } from 'react';
import SessionNavigation from './SessionNavigation';
import { addMenuItem, deleteMenuItem, listenMenu, updateMenuItem } from '../services/firestoreService';
import toast from 'react-hot-toast';
import ConfirmDialog from './ConfirmDialog';

const formatInr = (n = 0) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n || 0);

export default function UpdateMenuSection() {
  const [session, setSession] = useState('morning');
  const [menu, setMenu] = useState([]);
  const [form, setForm] = useState({ itemName: '', price: '', isAvailable: true });
  const [editingId, setEditingId] = useState(null);
  const [confirmId, setConfirmId] = useState(null);

  useEffect(() => {
    const unsub = listenMenu(session, snap => setMenu(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    return unsub;
  }, [session]);

  const sendWhatsappPriceChange = (name, oldPrice, newPrice) => {
    const msg = `Price updated: ${name}\nOld: ?${oldPrice} -> New: ?${newPrice}\nSession: ${session}`;
    const url = `https://wa.me/919342695097?text=${encodeURIComponent(msg)}`;
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noreferrer noopener";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const submit = async () => {
    if (!form.itemName.trim()) return toast.error('Item name required');
    if (!Number(form.price)) return toast.error('Valid price required');
    if (editingId) {
      const existing = menu.find(m => m.id === editingId);
      const oldPrice = existing?.price;
      await updateMenuItem(editingId, { ...form, price: Number(form.price), sessionType: session });
      toast.success('Updated');
      if (oldPrice != null && oldPrice !== Number(form.price)) {
        sendWhatsappPriceChange(form.itemName, oldPrice, Number(form.price));
      }
    } else {
      await addMenuItem({ ...form, price: Number(form.price), sessionType: session });
      toast.success('Added');
    }
    setForm({ itemName: '', price: '', isAvailable: true });
    setEditingId(null);
  };

  const startEdit = (item) => {
    setForm({ itemName: item.itemName, price: item.price, isAvailable: item.isAvailable });
    setEditingId(item.id);
  };

  const toggleAvailability = (item) =>
    updateMenuItem(item.id, { isAvailable: !item.isAvailable });

  const handleDelete = async () => {
    await deleteMenuItem(confirmId);
    setConfirmId(null);
    toast.success('Deleted');
  };

  return (
    <div className="card space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Update Menu</h2>
        <SessionNavigation session={session} onChange={setSession} />
      </div>
      <div className="grid md:grid-cols-4 gap-3">
        <input className="input" placeholder="Item name" value={form.itemName} onChange={e => setForm(f => ({ ...f, itemName: e.target.value }))} />
        <input className="input" type="number" placeholder="Price" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} />
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={form.isAvailable} onChange={e => setForm(f => ({ ...f, isAvailable: e.target.checked }))} />
          Available
        </label>
        <button className="btn btn-primary" onClick={submit}>{editingId ? 'Update Item' : 'Add Item'}</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table min-w-[520px]">
          <thead><tr><th>Item</th><th>Price</th><th>Avail</th><th>Action</th></tr></thead>
          <tbody>
            {menu.map(m => (
              <tr key={m.id}>
                <td>{m.itemName}</td>
                <td>{formatInr(m.price)}</td>
                <td><input type="checkbox" checked={m.isAvailable} onChange={() => toggleAvailability(m)} /></td>
                <td>
                  <div className="flex flex-wrap sm:flex-nowrap gap-2">
                    <button className="btn btn-ghost w-full sm:w-auto px-3" onClick={() => startEdit(m)}>Edit</button>
                    <button className="btn btn-ghost w-full sm:w-auto px-3" onClick={() => setConfirmId(m.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmDialog open={!!confirmId} onClose={() => setConfirmId(null)} onConfirm={handleDelete} />
    </div>
  );
}



