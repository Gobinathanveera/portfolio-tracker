import { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';

export default function LoginOverlay({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // The expected password from environment variables
  const EXPECTED_PASSWORD = import.meta.env.VITE_DASHBOARD_PASSWORD;

  useEffect(() => {
    // If no password is set in env, or it's already authenticated in session storage
    const sessionAuth = sessionStorage.getItem('dashboard_auth');
    if (!EXPECTED_PASSWORD || sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, [EXPECTED_PASSWORD]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === EXPECTED_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('dashboard_auth', 'true');
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md animate-in fade-in zoom-in duration-300">
        <div className="flex flex-col items-center mb-8">
          <div className="p-4 bg-blue-900/30 rounded-full mb-4">
            <Lock className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Secure Access</h2>
          <p className="text-slate-400 text-center text-sm">
            Please enter your password to access the portfolio dashboard.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full bg-slate-950 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              autoFocus
            />
            {error && <p className="text-rose-500 text-sm mt-2">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95"
          >
            Access Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
