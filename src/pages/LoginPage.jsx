import { useEffect, useState } from 'react';
import { isSessionValid, signInWithEmail } from '../services/authService';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

export default function LoginPage() {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const ownerEmail = 'sriraghavendramess28@gmail.com'; // change to real owner email

  useEffect(() => {
    if (user && isSessionValid()) navigate('/dashboard', { replace: true });
  }, [user, navigate]);

  const handleLogin = async () => {
    if (email.trim().toLowerCase() !== ownerEmail.toLowerCase()) {
      return toast.error('Only owner email allowed');
    }
    if (!password) return toast.error('Password required');
    try {
      setLoading(true);
      await signInWithEmail(email.trim(), password);
      toast.success('Login success');
      navigate('/dashboard', { replace: true });
    } catch (e) {
      toast.error(e.message);
    } finally { setLoading(false); }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden px-4">
      <Toaster />

      {/* ambient orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div className="absolute top-6 left-4 flex items-center gap-3 text-sm text-slate-200 bg-white/5 px-4 py-2 rounded-full backdrop-blur shadow-lg shadow-amber-500/20">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-bold text-slate-900 shadow-lg">
          AVS
        </div>
        <div>
          <div className="font-semibold tracking-wide uppercase text-amber-200">Sri Raghavendra Mess</div>
          <div className="text-xs text-slate-200/80">Hotel Billing System</div>
        </div>
      </div>

      <div className="card max-w-md w-full bg-white text-slate-900 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 animate-shimmer"></div>
        <div className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-500">Owner Access</p>
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-sm text-slate-500">Manage menu, orders, and accounts securely.</p>
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">Email</label>
            <input className="input bg-white text-slate-900 border border-slate-200" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="owner@gmail.com" />
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">Password</label>
            <input className="input bg-white text-slate-900 border border-slate-200" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Secure login  Two-step check</span>
            <span className="flex items-center gap-1">24/7 Support</span>
          </div>

          <button
            className="btn w-full h-12 font-semibold text-lg bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 shadow-lg shadow-amber-500/40 border-0 animate-gradient"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Enter Dashboard'}
          </button>
        </div>
      </div>

      <style>{`
        .orb { position:absolute; border-radius:9999px; filter: blur(80px); opacity:0.35; animation: float 16s ease-in-out infinite; }
        .orb-1 { width:320px; height:320px; background:radial-gradient(circle,#f59e0b,transparent 60%); top:-80px; left:-80px; }
        .orb-2 { width:260px; height:260px; background:radial-gradient(circle,#8b5cf6,transparent 60%); bottom:10%; right:-60px; animation-duration:18s; }
        .orb-3 { width:180px; height:180px; background:radial-gradient(circle,#22d3ee,transparent 60%); bottom:-40px; left:25%; animation-duration:20s; }
        @keyframes float { 0%,100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-20px) scale(1.05); } }
        .animate-gradient { background-size: 200% 200%; animation: gradientMove 6s ease infinite; }
        .animate-shimmer { background-size: 200% 100%; animation: gradientMove 5s linear infinite; opacity:0.9; }
        @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>
    </div>
  );
}
