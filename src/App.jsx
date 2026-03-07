import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Tournaments from './pages/Tournaments';
import Leaderboard from './pages/Leaderboard';


function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden">
      {/* Efecto de ruido global y gradiente de fondo */}
      <div className="fixed inset-0 bg-noise z-0 pointer-events-none" />
      <div className="fixed inset-0 bg-glow-red z-0 pointer-events-none" />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;