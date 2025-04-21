function CustomCard({ children, className = "" }) {
    return (
      <div className={`bg-white p-6 rounded-[10px] shadow-[0_0_14px_0_rgba(0,0,0,0.25)] ${className}`}>
        {children}
      </div>
    );
  }
  export default CustomCard;