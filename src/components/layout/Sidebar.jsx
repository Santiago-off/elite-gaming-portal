import { Trophy, ArrowUpRight } from 'lucide-react';
import Card from '../ui/Card';

const players = [
  { id: 1, name: 'ShadowWolf', pts: '3,450', status: 'up' },
  { id: 2, name: 'TitanKing', pts: '2,980', status: 'down' },
  { id: 3, name: 'AstraNova', pts: '2,620', status: 'up' },
  { id: 4, name: 'BlazeHunter', pts: '2,540', status: 'up' },
  { id: 5, name: 'CyberPhantom', pts: '2,100', status: 'none' },
];

const Sidebar = () => {
  return (
    <aside className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
          <Trophy size={16} className="text-brand-red" /> Leaderboard
        </h3>
        <ArrowUpRight size={14} className="text-gray-600" />
      </div>

      <Card className="p-2 bg-black/40">
        <div className="space-y-1">
          {players.map((player, index) => (
            <div 
              key={player.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className={`text-xs font-black italic w-4 ${index < 3 ? 'text-brand-red' : 'text-gray-600'}`}>
                  {index + 1}.
                </span>
                <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
                  {player.name}
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-mono font-black text-brand-red">
                  {player.pts}
                </span>
                <span className="block text-[8px] text-gray-600 font-bold uppercase tracking-tighter">
                  Points
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 py-3 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-brand-red transition-colors border-t border-white/5">
          View Full Rankings
        </button>
      </Card>
    </aside>
  );
};

export default Sidebar;