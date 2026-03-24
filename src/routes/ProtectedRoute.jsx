import { Navigate } from 'react-router-dom';
import { isSessionValid } from '../services/authService';
import { useAuth } from '../App';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (!isSessionValid()) return <Navigate to="/login" replace />;
  return children;
}
