import { useEffect, useState } from 'react';
import Header from '../components/Header';
import MainNavigation from '../components/MainNavigation';
import MenuSection from '../components/MenuSection';
import UpdateMenuSection from '../components/UpdateMenuSection';
import AccountsSection from '../components/AccountsSection';
import OrdersSection from '../components/OrdersSection';

export default function DashboardPage() {
  const [tab, setTab] = useState('menu');
  useEffect(() => { document.title = `Sri Raghavendra Mess - ${tab}`; }, [tab]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-3 pb-10">
        <MainNavigation active={tab} onChange={setTab} />
        {tab === 'menu' && <MenuSection />}
        {tab === 'update' && <UpdateMenuSection />}
        {tab === 'accounts' && <AccountsSection />}
        {tab === 'orders' && <OrdersSection />}
      </main>
    </div>
  );
}
