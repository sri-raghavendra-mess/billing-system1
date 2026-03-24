import { useEffect, useState } from 'react';
import { logout } from '../services/authService';

export default function Header() {
  const [clock, setClock] = useState(new Date());
  useEffect(() => { const t = setInterval(()=>setClock(new Date()),1000); return ()=>clearInterval(t); }, []);

  return (
    <header className="sticky top-0 z-30">
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-700 to-amber-500 text-white shadow-xl">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#fcd34d,transparent_25%),radial-gradient(circle_at_80%_10%,#a5b4fc,transparent_30%)]"></div>
        <div className="relative max-w-6xl mx-auto px-5 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-white/20 backdrop-blur overflow-hidden border border-white/40 shadow-sm">
              <img
                src={`${import.meta.env.BASE_URL}sri-raghavendra-image.jpg`}
                alt="Sri Raghavendra"
                className="h-full w-full object-cover"
                onError={(e)=>{e.currentTarget.style.display='none';}}
              />
            </div>
            <div className="leading-tight">
              <div className="text-xs uppercase tracking-[0.2em] text-amber-200">Hotel Billing</div>
              <div className="text-xl font-bold">Sri Raghavendra Mess</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-2 rounded-lg bg-white/15 backdrop-blur text-sm font-semibold shadow-sm">
              {new Intl.DateTimeFormat('en-GB').format(clock)} - {clock.toLocaleTimeString('en-IN')}
            </div>
            <button
              className="btn px-4 py-2 rounded-lg bg-white text-indigo-900 font-bold shadow hover:bg-amber-100"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

