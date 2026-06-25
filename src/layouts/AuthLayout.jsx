import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-bg-main flex items-center justify-center p-4 md:p-6">
      
      {/* OUTER CONTAINER CARD */}
      <div className="w-full max-w-[960px] bg-bg-card rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row p-4 md:p-5 gap-6 md:gap-10">
        
        {/* LEFT SIDE: HERO IMAGE AREA */}
        <div className="w-full md:w-[48%] rounded-[24px] relative overflow-hidden flex flex-col justify-between p-8 min-h-[350px] md:min-h-[520px]">
          
          {/* GAMBAR HEWAN DEKORASI (FULL HEIGHT) */}
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
            alt="Cute pets"
          />

          {/* BRAND LOGO (VetCare) */}
          <div className="z-10 select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <div className="font-heading font-bold text-3xl tracking-tight flex items-center">
              <span className="text-white">Vet</span>
              <span className="text-primary">Care</span>
            </div>
            <div className="text-[10px] font-body font-bold tracking-[0.15em] text-border mt-0.5 uppercase">
              VETERINARY ADMIN
            </div>
          </div>
          
        </div>

        {/* RIGHT SIDE: CONTENT FORM */}
        <div className="w-full md:w-[52%] flex flex-col justify-center py-4 pr-0 md:pr-4">
          <div className="w-full">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
}