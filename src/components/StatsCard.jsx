export default function StatsCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="card flex items-center justify-between py-5">

      <div>
        <p className="small-text text-text-soft">
          {title}
        </p>

        <h2 className="h2 mt-1">
          {value}
        </h2>
      </div>

      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">

        <div className="text-primary text-xl">
          {icon}
        </div>
      </div>
    </div>
  );
}