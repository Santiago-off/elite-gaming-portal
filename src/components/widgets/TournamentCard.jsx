import { Users, Calendar, Trophy } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const TournamentCard = ({ title, date, mode, prize, color = "red" }) => {
  const accentColor = color === 'red' ? 'border-brand-red' : 'border-brand-blue';
  const bgGradient = color === 'red' 
    ? 'from-brand-red/20 to-transparent' 
    : 'from-brand-blue/20 to-transparent';

  return (
    <Card hover className="group">
      <div className={`p-6 bg-gradient-to-br ${bgGradient} transition-all duration-500`}>
        <div className="flex justify-between items-start mb-6">
          <div className={`px-3 py-1 border-l-2 ${accentColor} bg-black/40`}>
            <h4 className="text-lg font-black uppercase italic tracking-tight text-white group-hover:text-brand-red transition-colors">
              {title}
            </h4>
            <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase mt-1">
              <Calendar size={12} /> Starts: {date}
            </div>
          </div>
          <Trophy size={20} className={color === 'red' ? 'text-brand-red' : 'text-brand-blue'} />
        </div>

        <div className="flex items-center justify-between border-t border-white/5 pt-6">
          <div className="space-y-1">
            <span className="block text-[10px] text-gray-500 font-black uppercase tracking-widest">Prize Pool</span>
            <span className="text-xl font-mono font-black text-white">
              ${prize}
            </span>
          </div>
          <div className="text-right space-y-1">
            <span className="block text-[10px] text-gray-500 font-black uppercase tracking-widest">Mode</span>
            <span className="flex items-center gap-1 text-sm font-bold text-gray-300">
              <Users size={14} /> {mode}
            </span>
          </div>
        </div>

        <Button 
          variant={color === 'red' ? 'red' : 'outline'} 
          className="w-full mt-6 !py-2 !text-[10px] !rounded-md"
        >
          Sign Up
        </Button>
      </div>
    </Card>
  );
};

export default TournamentCard;