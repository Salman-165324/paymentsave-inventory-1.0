function MainCard({title, children, className = "" }) {
    return (
        <div className={`bg-[##F9F9F9] border rounded-[10px] shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] py-8 px-10 ${className}`}>
        {title && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[#48505E]">{title}</h2>
          </div>
        )}
        {children}
      </div>
    );
  }
  export default MainCard;