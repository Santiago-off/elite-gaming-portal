import { motion } from 'framer-motion';

const Button = ({ children, variant = 'red', className = '', ...props }) => {
  const variants = {
    red: "bg-brand-red hover:bg-red-700 shadow-[0_0_20px_rgba(230,30,37,0.3)]",
    blue: "bg-brand-blue hover:bg-blue-700 shadow-[0_0_20px_rgba(0,86,255,0.3)]",
    outline: "border border-white/10 hover:bg-white/5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 rounded-md font-black uppercase tracking-wider italic text-sm transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;