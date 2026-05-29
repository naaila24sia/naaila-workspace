export default function ChartCard() {
  return (
    <div className="bg-secondary rounded-3xl p-5 text-white h-[340px] relative overflow-hidden shadow-soft">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-heading text-xl font-semibold">
          Total Animals Today
        </h3>

        <button className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
          •••
        </button>
      </div>

      <h1 className="text-6xl font-bold">38</h1>

      {/* GRAPH */}
      <div className="absolute bottom-0 left-0 w-full h-44 bg-white/10 rounded-t-[40px]">
        <svg className="w-full h-full" viewBox="0 0 400 150" fill="none">
          <path
            d="M20 120 C80 80, 140 100, 200 60 S320 90, 380 40"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />

          <circle cx="200" cy="60" r="6" fill="white" />
        </svg>
      </div>
    </div>
  );
}
