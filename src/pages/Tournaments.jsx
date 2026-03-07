import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Users, Trophy, Filter, ChevronRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import RegistrationModal from '../components/widgets/RegistrationModal';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Tournaments = () => {
  // Estados para el Modal y Selección
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Games");

  const categories = ['All Games', 'League of Legends', 'Valorant', 'Warzone', 'CS:GO 2'];

  const tournamentData = [
    { id: 1, title: "Elite Championship", date: "July 15", mode: "5v5 Teams", prize: "10,000", color: "red", category: "Valorant" },
    { id: 2, title: "Battle Royale Cup", date: "August 3", mode: "Solo Queue", prize: "5,000", color: "blue", category: "Warzone" },
    { id: 3, title: "Pro League Masters", date: "August 12", mode: "5v5 Teams", prize: "25,000", color: "red", category: "League of Legends" },
    { id: 4, title: "Midnight Standoff", date: "August 20", mode: "1v1 Duel", prize: "2,500", color: "blue", category: "CS:GO 2" },
    { id: 5, title: "Titans Invitational", date: "Sept 05", mode: "4v4 Squads", prize: "15,000", color: "red", category: "Valorant" },
    { id: 6, title: "Rookie Challenge", date: "Sept 10", mode: "5v5 Teams", prize: "1,200", color: "blue", category: "League of Legends" },
  ];

  const handleOpenModal = (tournament) => {
    setSelectedTournament(tournament);
    setIsModalOpen(true);
  };

  const filteredTournaments = tournamentData.filter(t => {
    const matchesCategory = activeCategory === "All Games" || t.category === activeCategory;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 min-h-screen bg-brand-dark pb-20"
    >
      <Navbar />

      <main className="max-w-[1600px] mx-auto px-8 py-12">
        
        {/* HEADER & SEARCH SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="space-y-2">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-3 text-brand-red mb-2"
            >
              <Trophy size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Official Arenas</span>
            </motion.div>
            <h1 className="text-6xl font-black italic uppercase tracking-tighter text-white leading-none">
              Active <span className="text-brand-red">Tournaments</span>
            </h1>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
              Compete against the best and claim your glory
            </p>
          </div>

          <div className="relative group w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-red transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search by tournament name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-card/50 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-all shadow-2xl"
            />
          </div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/5 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border
                ${activeCategory === cat 
                  ? 'bg-brand-red border-brand-red text-white shadow-[0_0_20px_rgba(230,30,37,0.3)] scale-105' 
                  : 'bg-white/5 border-white/5 text-gray-500 hover:border-white/20 hover:text-white'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* TOURNAMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card hover className="group relative overflow-hidden">
                  {/* Gradiente de fondo dinámico */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500
                    ${tournament.color === 'red' ? 'from-brand-red' : 'from-brand-blue'} to-transparent`} 
                  />
                  
                  <div className="p-8 relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-black/40 border border-white/5
                        ${tournament.color === 'red' ? 'text-brand-red' : 'text-brand-blue'}`}>
                        <Trophy size={24} />
                      </div>
                      <span className="text-[10px] font-black bg-white/5 px-3 py-1 rounded-full border border-white/10 text-gray-400">
                        {tournament.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-2 group-hover:text-brand-red transition-colors">
                      {tournament.title}
                    </h3>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-tight">
                        <Calendar size={14} className="text-brand-red" />
                        Starts: {tournament.date}
                      </div>
                      <div className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-tight">
                        <Users size={14} className="text-brand-blue" />
                        Mode: {tournament.mode}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">Prize Pool</p>
                        <p className="text-3xl font-mono font-black text-white leading-none">
                          ${tournament.prize}
                        </p>
                      </div>
                      <Button 
                        variant={tournament.color === 'red' ? 'red' : 'blue'}
                        onClick={() => handleOpenModal(tournament)}
                        className="!py-3 !px-6 !text-[10px] flex items-center gap-2"
                      >
                        Sign Up <ChevronRight size={14} />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* EMPTY STATE */}
        {filteredTournaments.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-bold uppercase tracking-[0.3em]">No tournaments found for your search.</p>
          </div>
        )}
      </main>

      {/* REGISTRATION MODAL */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        tournamentTitle={selectedTournament?.title}
      />
    </motion.div>
  );
};

export default Tournaments;