export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-bg-main font-barlow">
      {/* Ring Spinner Simpel */}
      <div className="w-12 h-12 border-[3px] border-primary/20 border-t-primary rounded-full animate-spin mb-5"></div>
      
      {/* Teks Loading */}
      <div className="text-center">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-text-main">
          Loading<span className="text-primary animate-pulse">...</span>
        </p>
        <p className="text-[9px] font-bold text-text-soft uppercase tracking-widest mt-1">
          Please wait
        </p>
      </div>
    </div>
  );
}