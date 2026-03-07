import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroBanner = () => {
  return (
    <div className="relative h-[450px] w-full rounded-3xl overflow-hidden mb-12 group border border-white/5">
      {/* Imagen de fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
      <img 
        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070" 
        className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700"
        alt="Main Event"
      />

      {/* Contenido del Banner */}
      <div className="relative z-20 h-full flex flex-col justify-center px-12 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-7xl font-black italic uppercase leading-[0.9] tracking-tighter text-white mb-4">
            JOIN THE <span className="text-brand-red drop-shadow-[0_0_15px_rgba(230,30,37,0.5)]">TOURNAMENT</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light tracking-wide italic">
            Compete for Glory & Professional Prizes
          </p>
          
          <Button variant="red" className="!px-12 !py-5 text-base !rounded-lg animate-pulse-slow">
            Register Now
          </Button>
        </motion.div>
      </div>

      {/* Adorno estético inferior (Línea roja) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-transparent z-30" />
    </div>
  );
};

export default HeroBanner;