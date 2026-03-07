import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Users, Shield, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

const RegistrationModal = ({ isOpen, onClose, tournamentTitle }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        {/* Backdrop con Blur */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Contenido del Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-brand-card border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Header con gradiente sutil */}
          <div className="bg-gradient-to-r from-brand-red/20 to-transparent p-6 border-b border-white/5 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-black italic uppercase tracking-tighter text-white">Confirm Registration</h3>
              <p className="text-xs text-brand-red font-bold uppercase tracking-widest">{tournamentTitle}</p>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="p-8 space-y-6">
            {/* Detalles del Requisito */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <Users className="text-brand-blue mb-2" size={20} />
                <p className="text-[10px] font-black uppercase text-gray-500">Team Size</p>
                <p className="text-sm font-bold text-white">5 vs 5 Players</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <Shield className="text-brand-red mb-2" size={20} />
                <p className="text-[10px] font-black uppercase text-gray-500">Anti-Cheat</p>
                <p className="text-sm font-bold text-white">Required (Level 3)</p>
              </div>
            </div>

            {/* Aviso de Reglas */}
            <div className="flex gap-4 p-4 bg-brand-red/5 border border-brand-red/20 rounded-xl">
              <AlertCircle className="text-brand-red shrink-0" size={20} />
              <p className="text-xs text-gray-400 leading-relaxed">
                By joining, you agree to the <span className="text-white font-bold">Tournament Rules</span> and the fair play policy. Participation requires a verified account.
              </p>
            </div>

            {/* Acciones */}
            <div className="flex gap-3 pt-4">
              <button 
                onClick={onClose}
                className="flex-1 px-6 py-4 rounded-xl font-black uppercase italic text-xs text-gray-400 hover:bg-white/5 transition-all"
              >
                Cancel
              </button>
              <Button 
                variant="red" 
                className="flex-1 !py-4 flex items-center justify-center gap-2"
                onClick={() => {
                   alert("Registration Successful!");
                   onClose();
                }}
              >
                <CheckCircle2 size={18} /> Confirm Entry
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RegistrationModal;