export default function SubmitButton({
  children,
  icon,
  type = "primary",
  ...props
}) {
  const buttonType = {
    primary:
      "bg-primary hover:bg-primary-hover text-white shadow-primary/20",

    secondary:
      "bg-secondary hover:bg-secondary-dark text-white shadow-secondary/20",

    danger:
      "bg-error hover:bg-error-soft text-white shadow-error/20",
  };

  return (
    <button
      {...props}
      className={`
        px-7 py-4
        rounded-2xl
        font-bold
        uppercase
        tracking-wide
        text-sm
        shadow-lg
        transition-all
        hover:scale-105
        active:scale-95
        flex items-center gap-3
        ${buttonType[type]}
      `}
    >
      {children}
      {icon}
    </button>
  );
}