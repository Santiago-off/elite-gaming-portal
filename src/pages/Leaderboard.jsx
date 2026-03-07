import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, TrendingDown, Minus, Search, User, Target, Zap } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Card from '../components/ui/Card';

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const leaderboardData = [
    { id: 1, name: 'ShadowWolf', pts: '3,450', winRate: '68%', matches: 142, trend: 'up', avatar: 'SW' },
    { id: 2, name: 'TitanKing', pts: '2,980', winRate: '62%', matches: 120, trend: 'down', avatar: 'TK' },
    { id: 3, name: 'AstraNova', pts: '2,620', winRate: '59%', matches: 98, trend: 'up', avatar: 'AN' },
    { id: 4, name: 'BlazeHunter', pts: '2,540', winRate: '55%', matches: 115, trend: 'up', avatar: 'BH' },
    { id: 5, name: 'CyberPhantom', pts: '2,100', winRate: '51%', matches: 88, trend: 'minus', avatar: 'CP' },
    { id: 6, name: 'ViperZero', pts: '1,950', winRate: '49%', matches: 76, trend: 'up', avatar: 'VZ' },
    { id: 7, name: 'IronClad', pts: '1,820', winRate: '48%', matches: 110, trend: 'down', avatar: 'IC' },
  ];

  const filteredPlayers = leaderboardData.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 min-h-screen bg-brand-dark pb-20"
    >
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-8 py-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <h1 className="text-6xl font-black italic uppercase tracking-tighter text-white">
              Global <span className="text-brand-red">Rankings</span>
            </h1>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-2">
              The elite players of the current season
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text"
              placeholder="Find player..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm focus:border-brand-red/50 outline-none transition-all"
            />
          </div>
        </div>

        {/* MY STATUS CARD (Estética Premium Tech) */}
        <Card className="mb-12 p-8 border-brand-blue/30 bg-gradient-to-r from-brand-blue/10 to-transparent">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-brand-blue flex items-center justify-center text-3xl font-black italic shadow-[0_0_30px_rgba(0,86,255,0.3)]">
                ME
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-brand-blue tracking-widest mb-1">Your Current Rank</p>
                <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter">#1,240 <span className="text-lg text-gray-500 not-italic">/ 15k</span></h2>
              </div>
            </div>
            
            <div className="flex gap-12">
              <div className="text-center">
                <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Win Rate</p>
                <p className="text-xl font-black text-white">54.2%</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Total Points</p>
                <p className="text-xl font-black text-brand-red">840</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-black uppercase text-gray-500 mb-1">K/D Ratio</p>
                <p className="text-xl font-black text-white">1.85</p>
              </div>
            </div>
          </div>
        </Card>

        {/* RANKING TABLE */}
        <div className="space-y-4">
          {/* Table Header */}
          <div className="grid grid-cols-12 px-8 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Player</div>
            <div className="col-span-2 text-center">Matches</div>
            <div className="col-span-2 text-center">Win Rate</div>
            <div className="col-span-2 text-right">Points</div>
          </div>

          {/* Player Rows */}
          {filteredPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card hover className="p-1 group bg-black/20">
                <div className="grid grid-cols-12 items-center px-8 py-4">
                  {/* Rank & Trend */}
                  <div className="col-span-1 flex items-center gap-2">
                    <span className={`text-lg font-black italic ${index < 3 ? 'text-brand-red' : 'text-gray-500'}`}>
                      {index + 1}.
                    </span>
                    {player.trend === 'up' && <TrendingUp size={14} className="text-green-500" />}
                    {player.trend === 'down' && <TrendingDown size={14} className="text-red-500" />}
                    {player.trend === 'minus' && <Minus size={14} className="text-gray-600" />}
                  </div>

                  {/* Player Info */}
                  <div className="col-span-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:border-brand-red/50 transition-colors">
                      {player.avatar}
                    </div>
                    <span className="font-bold text-gray-200 group-hover:text-white transition-colors">{player.name}</span>
                  </div>

                  {/* Stats */}
                  <div className="col-span-2 text-center text-sm font-bold text-gray-400">
                    {player.matches}
                  </div>
                  <div className="col-span-2 text-center text-sm font-bold text-gray-200 italic">
                    {player.winRate}
                  </div>
                  
                  {/* Total Points */}
                  <div className="col-span-2 text-right">
                    <span className="text-lg font-mono font-black text-brand-red">
                      {player.pts}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default Leaderboard;