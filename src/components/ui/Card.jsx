const Card = ({ children, className = "", hover = false }) => {
  return (
    <div className={`
      bg-brand-card border border-white/5 rounded-xl overflow-hidden
      ${hover ? 'hover:border-brand-red/50 transition-colors duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;