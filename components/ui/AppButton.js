export default function AppButton({
    type = "button",
    text = "Click",
    onClick,
    bg = "bg-gray-100",
    color = "text-black",
    icon = null,
    className = "",
  }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`inline-flex items-center gap-2 px-4 py-2 text-sm rounded transition-all hover:opacity-90 cursor-pointer ${bg} ${color} ${className}`}
      >
        {icon && <span className="flex items-center">{icon}</span>}
        <span>{text}</span>
      </button>
    );
  }
  