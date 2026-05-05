import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#C9C6E5] flex items-center justify-center p-6">

      {/* OUTER CARD */}
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur rounded-[32px] p-10 shadow-soft">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text-main font-body">
            Vet Care<span className="text-primary">.</span>
          </h1>
          <p className="text-sm text-text-soft tracking-widest">
            VETERINARY SYSTEM
          </p>
        </div>

        {/* INNER CONTENT */}
        <div className="bg-bg-card rounded-[28px] shadow-soft overflow-hidden flex">

          {/* LEFT IMAGE */}
          <div className="hidden md:flex w-1/2 bg-[#A8DADC] items-center justify-center p-6">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
              className="rounded-2xl object-cover w-full h-full"
              alt="pet"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="w-full md:w-1/2 p-10 flex items-center">
            <div className="w-full">
              <Outlet />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}