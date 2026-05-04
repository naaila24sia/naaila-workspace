import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    // Background menggunakan warna utama dari tema aplikasi (bg-bg-main)
    <div className="min-h-screen flex items-center justify-center bg-bg-main p-4 font-barlow">
      <div className="bg-white p-10 rounded-[2.5rem] border border-border shadow-soft w-full max-w-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>

        <div className="flex flex-col items-center justify-center mb-10 relative z-10">
          {/* Logo Brand yang disesuaikan */}
          <h1 className="text-4xl font-poppins font-black tracking-tighter text-text-main">
            <span className="text-text-main">Vet Care</span>
            <span className="text-primary">.</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-soft mt-1">
            Veterinary System
          </p>
        </div>

        {/* Konten Login / Register akan dirender di sini */}
        <div className="relative z-10">
          <Outlet />
        </div>

        <div className="mt-10 pt-6 border-t border-border/50">
          <p className="text-center text-[10px] font-bold text-text-soft uppercase tracking-widest leading-loose">
            © 2026 Vet Care System <br />
            <span className="text-primary-soft text-[9px]">
              All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
