import { motion } from 'framer-motion';
import { User, Bell, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Tournaments', path: '/tournaments' },
    { name: 'Leaderboard', path: '/leaderboard' },
  ];

  return (
    <nav className="sticky top-0 z-[100] h-20 bg-brand-dark/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1600px] mx-auto h-full px-8 flex items-center justify-between">
        
        {/* LOGO & LINKS */}
        <div className="flex items-center gap-12">
          <Link to="/dashboard">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-black italic tracking-tighter cursor-pointer text-white"
            >
              E<span className="text-brand-red">V</span>ERY
            </motion.div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors border-b-2 pb-1 ${
                  location.pathname === link.path 
                    ? 'text-brand-red border-brand-red' 
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="#" className="text-gray-400 hover:text-white transition-colors">News</a>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-gray-400 pr-6 border-r border-white/10">
            <Bell size={20} className="hover:text-white cursor-pointer transition-colors" />
          </div>
          
          <Button variant="blue" className="flex items-center gap-2 !py-2 !px-5 text-xs">
            <User size={14} />
            My Profile
          </Button>
          
          <button className="lg:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;