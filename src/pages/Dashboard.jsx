import { motion } from 'framer-motion';
import { Trophy, Users, Gamepad2, Zap, Layout } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import HeroBanner from '../components/widgets/HeroBanner';
import TournamentCard from '../components/widgets/TournamentCard';
import Card from '../components/ui/Card';

// --- SUB-COMPONENTE: STAT CARD ---
const StatCard = ({ title, value, label, icon: Icon, color = "red", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
    <Card className={`relative p-6 border-l-4 ${color === 'red' ? 'border-brand-red' : color === 'blue' ? 'border-brand-blue' : 'border-gray-700'}`}>
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{title}</p>
          <h3 className="text-4xl font-black italic tracking-tighter text-white leading-none">{value}</h3>
          <p className="text-[10px] font-bold text-gray-400 mt-2">{label}</p>
        </div>
        <div className={`p-3 rounded-xl bg-white/5 ${color === 'red' ? 'text-brand-red' : 'text-brand-blue'}`}>
          <Icon size={24} />
        </div>
      </div>
      {/* Efecto decorativo de fondo */}
      <div className="absolute -right-4 -bottom-4 opacity-5 rotate-12">
        <Icon size={120} />
      </div>
    </Card>
  </motion.div>
);

const Dashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 min-h-screen bg-brand-dark pb-20"
    >
      <Navbar />

      <main className="max-w-[1600px] mx-auto px-8 py-10">
        
        {/* TOP STATS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard 
            title="Total Prize Pool" 
            value="$25,000" 
            label="Across all active tournaments" 
            icon={Trophy} 
            color="red"
            delay={0.1}
          />
          <StatCard 
            title="Registered Players" 
            value="1,280" 
            label="Growing community worldwide" 
            icon={Users} 
            color="blue"
            delay={0.2}
          />
          <StatCard 
            title="Matches Played" 
            value="560" 
            label="Total games this season" 
            icon={Gamepad2} 
            color="gray"
            delay={0.3}
          />
        </div>

        {/* HERO BANNER SECTION */}
        <HeroBanner />

        {/* MAIN GRID: CONTENT + SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* LEFT: TOURNAMENTS & NEWS (3 Cols) */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* UPCOMING TOURNAMENTS */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-8 bg-brand-red rounded-full" />
                  <h2 className="text-2xl font-black uppercase italic tracking-tight">Upcoming Tournaments</h2>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-red cursor-pointer hover:underline">View All</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TournamentCard 
                  title="Elite Championship" 
                  date="July 15" 
                  mode="5v5 Teams" 
                  prize="10,000" 
                  color="red"
                />
                <TournamentCard 
                  title="Battle Royale Cup" 
                  date="August 3" 
                  mode="Solo Queue" 
                  prize="5,000" 
                  color="blue"
                />
              </div>
            </section>

            {/* LATEST NEWS (Mini Section) */}
            <section className="bg-brand-card/30 border border-white/5 p-8 rounded-2xl relative overflow-hidden">
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-brand-red">
                    <Zap size={16} fill="currentColor" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Flash News</span>
                  </div>
                  <h3 className="text-3xl font-black italic uppercase leading-none mb-4">New Season Announced!</h3>
                  <p className="text-gray-400 font-medium max-w-xl">
                    Get ready for the biggest update of the year. New maps, better rewards, and a completely revamped ranking system.
                  </p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 border border-white/10 px-8 py-3 rounded-lg font-black uppercase italic text-xs hover:bg-white/10 transition-all"
                >
                  Read More
                </motion.button>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand-red/10 to-transparent pointer-events-none" />
            </section>

          </div>

          {/* RIGHT: LEADERBOARD & STATS (1 Col) */}
          <div className="space-y-8">
            <Sidebar />
            
            {/* EXTRA WIDGET: WATCH LIVE */}
            <Card className="p-0 overflow-hidden group">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Live Stream"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute top-4 left-4 bg-brand-red px-2 py-1 rounded flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  <span className="text-[8px] font-black uppercase tracking-tighter">Live Now</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs font-black uppercase italic">Pro League Stream</p>
                </div>
              </div>
              <button className="w-full bg-brand-blue py-3 font-black uppercase italic tracking-widest text-[10px] hover:bg-blue-700 transition-all">
                Tune In
              </button>
            </Card>
          </div>

        </div>
      </main>
    </motion.div>
  );
};

export default Dashboard;