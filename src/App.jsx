import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { createContext, useContext, useEffect, useState } from 'react';
import { listenAuth } from './services/authService';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './routes/ProtectedRoute';

const AuthContext = createContext({ user: null });
export const useAuth = () => useContext(AuthContext);

function AppRoutes({ user, checking }) {
  const navigate = useNavigate();

  // Handle redirect from 404.html
  useEffect(() => {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && window.location.pathname === import.meta.env.BASE_URL.replace(/\/$/, '') + '/') {
      navigate(redirect.replace(/^.*?\/dashboard\//, ''));
    }
  }, [navigate]);

  if (checking) return <div className="h-screen flex items-center justify-center text-primary">Loading...</div>;

  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="dashboard/*" element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }/>
      <Route path="*" element={<Navigate to={user ? "dashboard" : "login"} replace />} />
    </Routes>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);
  const futureFlags = { v7_startTransition: true, v7_relativeSplatPath: true };

  useEffect(() => {
    const unsub = listenAuth(u => {
      setUser(u);
      setChecking(false);
    });
    return unsub;
  }, []);

  const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

  return (
    <AuthContext.Provider value={{ user }}>
      <BrowserRouter basename={basename} future={futureFlags}>
        <AppRoutes user={user} checking={checking} />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
