import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Gamepad2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Como es una página de prueba, redirigimos directamente
    navigate('/dashboard');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 flex min-h-screen items-center justify-center p-6"
    >
      <div className="w-full max-w-md space-y-8">
        {/* LOGO AREA */}
        <div className="text-center space-y-2">
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="flex justify-center"
          >
            <div className="bg-brand-red p-3 rounded-2xl rotate-3 shadow-[0_0_30px_rgba(230,30,37,0.4)]">
              <Gamepad2 size={48} className="text-white -rotate-3" />
            </div>
          </motion.div>
          <h1 className="text-5xl font-black italic tracking-tighter text-white pt-4">
            E<span className="text-brand-red">V</span>ERY
          </h1>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
            Elite Gaming Tournament Portal
          </p>
        </div>

        {/* LOGIN FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-brand-card/50 backdrop-blur-xl border border-white/5 p-8 rounded-2xl shadow-2xl"
        >
          <form onSubmit={handleLogin} className="space-y-6">
            <Input 
              label="Email de Usuario" 
              type="email" 
              placeholder="nombre@ejemplo.com" 
              icon={Mail}
              required
            />
            <Input 
              label="Contraseña" 
              type="password" 
              placeholder="••••••••" 
              icon={Lock}
              required
            />
            
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-tighter">
              <label className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors">
                <input type="checkbox" className="accent-brand-red" /> Recordarme
              </label>
              <a href="#" className="text-brand-red hover:underline">¿Olvidaste tu clave?</a>
            </div>

            <Button type="submit" className="w-full py-4 text-lg">
              Entrar al Panel
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-gray-500 text-sm">
              ¿No tienes cuenta? <span className="text-white font-bold cursor-pointer hover:text-brand-red transition-colors">Regístrate ahora</span>
            </p>
          </div>
        </motion.div>

        {/* FOOTER DE LOGIN */}
        <p className="text-center text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
          &copy; 2024 EVERY GAMING TECH - ALL RIGHTS RESERVED
        </p>
      </div>
    </motion.div>
  );
};

export default Login;