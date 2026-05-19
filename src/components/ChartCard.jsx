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

      <h1 className="text-6xl font-bold">
        38
      </h1>

      {/* GRAPH */}
      <div className="absolute bottom-0 left-0 w-full h-44 bg-white/10 rounded-t-[40px]"></div>

      <div className="absolute bottom-24 left-10 right-10 h-[2px] bg-white/40"></div>

      <div className="absolute bottom-[88px] left-1/2 w-4 h-4 bg-white rounded-full border-4 border-secondary"></div>
    </div>
  );
}