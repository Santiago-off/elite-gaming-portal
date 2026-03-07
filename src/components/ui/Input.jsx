const Input = ({ label, icon: Icon, ...props }) => {
  return (
    <div className="space-y-2">
      {label && <label className="text-xs uppercase font-bold text-gray-500 ml-1">{label}</label>}
      <div className="relative group">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-red transition-colors">
            <Icon size={18} />
          </div>
        )}
        <input
          {...props}
          className={`
            w-full bg-brand-dark border border-white/10 rounded-lg py-4 
            ${Icon ? 'pl-12' : 'pl-4'} pr-4 text-white placeholder:text-gray-600
            focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50
            transition-all duration-300
          `}
        />
      </div>
    </div>
  );
};

export default Input;