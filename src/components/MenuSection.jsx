import { useEffect, useState } from 'react';
import SessionNavigation from './SessionNavigation';
import BillingTable from './BillingTable';
import { listenMenu } from '../services/firestoreService';
import LoadingSpinner from './LoadingSpinner';

export default function MenuSection() {
  const [session, setSession] = useState('morning');
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const unsub = listenMenu(session, snap => {
      const items = snap.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .filter(item => item.isAvailable !== false); // hide unavailable items
      setMenu(items);
      setLoading(false);
    });
    return unsub;
  }, [session]);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Menu</h2>
        <SessionNavigation session={session} onChange={setSession}/>
      </div>
      {loading ? <LoadingSpinner /> : <BillingTable session={session} menu={menu} />}
    </div>
  );
}
