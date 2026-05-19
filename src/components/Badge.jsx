export default function Badge({
  status,
}) {

  const isDone = status === "Done";

  return (
    <span
      className={`
        inline-flex items-center justify-center
        min-w-[110px]
        h-[42px]
        px-5
        rounded-[16px]
        border
        text-[11px]
        font-black
        uppercase
        tracking-[3px]
        shadow-sm

        ${
          isDone
            ? `
              bg-success-soft/20
              border-success/20
              text-success
            `
            : `
              bg-warning/20
              border-warning-dark/20
              text-warning-dark
            `
        }
      `}
    >
      {status}
    </span>
  );
}