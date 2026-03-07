import { motion } from 'framer-motion';

const categories = ['All Games', 'League of Legends', 'Valorant', 'Warzone', 'CS:GO 2'];

const TournamentFilters = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-10">
      {categories.map((cat, i) => (
        <motion.button
          key={cat}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all
            ${i === 0 ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(230,30,37,0.4)]' : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'}
          `}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
};

export default TournamentFilters;