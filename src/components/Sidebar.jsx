import { MdDashboard } from "react-icons/md";
import { FaPaw, FaCalendarCheck, FaUserAlt, FaPlus, FaBan, FaLock, FaTimesCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2 transition-all
        ${
          isActive
            ? "text-primary bg-primary-soft font-bold shadow-sm"
            : "text-text-soft hover:text-primary hover:bg-primary-soft/50"
        }`;

  return (
    <div 
      className="sticky top-0 flex h-screen w-80 flex-col bg-bg-card px-6 py-6 border-r border-border shadow-md overflow-hidden"
    >
      {/* Logo Section */}
      <div className="flex flex-col px-2">
        <span className="font-poppins text-[36px] font-extrabold leading-tight text-text-main">
          VetCare<b className="text-primary">.</b>
        </span>
        <span className="font-bold text-text-soft/60 text-xs uppercase tracking-widest">
          Veterinary Admin
        </span>
      </div>

      {/* Menu Section */}
      <div className="mt-8 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="space-y-1.5">
          
          <li>
            <NavLink to="/" className={menuClass}>
              <MdDashboard className="mr-4 text-xl" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/appointments" className={menuClass}>
              <FaCalendarCheck className="mr-4 text-xl" />
              <span>Appointments</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/pets" className={menuClass}>
              <FaPaw className="mr-4 text-xl" />
              <span>Pets</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/owners" className={menuClass}>
              <FaUserAlt className="mr-4 text-xl" />
              <span>Pet Owners</span>
            </NavLink>
          </li>

          {/* LABEL SYSTEM */}
          <li className="pt-6 pb-2 px-4">
            <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-text-soft/40">
              System
            </p>
          </li>

          <li>
            <NavLink to="/400" className={menuClass}>
              <FaBan className="mr-4 text-xl" />
              <span>Error 400</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/401" className={menuClass}>
              <FaLock className="mr-4 text-xl" />
              <span>Error 401</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/403" className={menuClass}>
              <FaTimesCircle className="mr-4 text-xl" />
              <span>Error 403</span>
            </NavLink>
          </li>

        </ul>
      </div>

      {/* Footer Section */}
      <div className="mt-auto pt-4">

        {/* PROMO CARD - Menggunakan Gradient Primary-Paw */}
        <div className="bg-gradient-to-br from-primary to-paw px-5 py-5 rounded-3xl shadow-lg shadow-primary/20 mb-6 flex items-center relative overflow-hidden">
          
          <div className="z-10 w-2/3">
            <span className="text-white text-[11px] font-medium leading-tight block">
              Manage your clinic services easily!
            </span>

            <div className="flex justify-center items-center p-2.5 mt-4 bg-white rounded-xl space-x-2 shadow-sm cursor-pointer hover:scale-105 transition-transform">
              <FaPlus className="text-primary text-[10px]" />
              <span className="text-primary font-bold text-[11px]">
                Add Service
              </span>
            </div>
          </div>

          {/* Icon Paw Transparan di Background agar tidak 'jelek' */}
          <FaPaw className="absolute -right-4 -bottom-4 text-white/10 text-7xl rotate-12" />
        </div>

        {/* Footer Text */}
        <div className="flex flex-col mb-2 px-2">
          <span className="font-bold text-text-soft text-[10px] uppercase tracking-wider">
            VetCare Dashboard
          </span>
          <p className="font-medium text-text-soft/50 text-[10px]">
            &copy; 2026 All Rights Reserved
          </p>
        </div>

      </div>
    </div>
  );
}