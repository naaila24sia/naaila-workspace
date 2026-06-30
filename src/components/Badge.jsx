export default function Badge({ status }) {
  const normalizedStatus = status?.toLowerCase();

  let colorClasses = "bg-warning/20 border-warning-dark/20 text-warning-dark"; // Default: Pending / Warning

  if (normalizedStatus === "done") {
    colorClasses = "bg-success-soft/20 border-success/20 text-success";
  } else if (normalizedStatus === "in progress") {
    colorClasses = "bg-sky-50 border-sky-200 text-sky-600";
  } else if (normalizedStatus === "cancelled") {
    colorClasses = "bg-rose-50 border-rose-200 text-rose-600";
  }

  return (
    <span
      className={`
        inline-flex items-center justify-center
        min-w-[115px]
        h-[42px]
        px-4
        rounded-[16px]
        border
        text-[11px]
        font-black
        uppercase
        tracking-[2px]
        shadow-sm
        transition-all
        duration-300
        ${colorClasses}
      `}
    >
      {status}
    </span>
  );
}