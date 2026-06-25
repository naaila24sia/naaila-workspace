import { MdDashboard } from "react-icons/md";

import {
  FaPaw,
  FaCalendarCheck,
  FaUserAlt,
  FaPlus,
  FaBan,
  FaLock,
  FaTimesCircle,
  FaClipboardList,
  FaChartPie,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all
    ${
      isActive
        ? "bg-primary text-dark shadow-soft"
        : "text-text-soft hover:bg-bg-main hover:text-text-main"
    }`;

  return (
    <aside className="sticky top-0 h-screen w-[250px] bg-dark px-5 py-6 flex flex-col justify-between overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-white">
            Vet<span className="text-primary">Care</span>
          </h1>

          <p className="small-text text-white/40 mt-1 uppercase tracking-widest">
            Veterinary Admin
          </p>
        </div>

        {/* BRANCH CARD */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-4 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="body-text text-white font-semibold">NY Branch</p>

              <p className="small-text text-white/40">Admin</p>
            </div>

            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-dark">
              <FaPaw />
            </div>
          </div>
        </div>

        {/* MENU */}
        <div className="space-y-1">
          {/* LABEL */}
          <p className="text-[10px] uppercase tracking-[2px] text-white/30 font-bold px-4 mb-2">
            Analytics
          </p>

          <NavLink to="/dashboard" className={menuClass}>
            <MdDashboard />
            Dashboard
          </NavLink>

          <NavLink to="/reports" className={menuClass}>
            <FaChartPie />
            Reports
          </NavLink>

          <NavLink to="/feedback" className={menuClass}>
            <FaChartPie />
            Feedback and Complain
          </NavLink>

          {/* LABEL */}
          <p className="text-[10px] uppercase tracking-[2px] text-white/30 font-bold px-4 mt-6 mb-2">
            Veterinary
          </p>

          <NavLink to="/appointments" className={menuClass}>
            <FaCalendarCheck />
            Appointments
          </NavLink>

          <NavLink to="/pets" className={menuClass}>
            <FaPaw />
            Pets
          </NavLink>

          <NavLink to="/owners" className={menuClass}>
            <FaUserAlt />
            Pet Owners
          </NavLink>

          <NavLink to="/doctors" className={menuClass}>
            <FaUserAlt />
            Doctors
          </NavLink>

           <NavLink to="/users" className={menuClass}>
            <FaUserAlt />
            Users
          </NavLink>

          <NavLink to="/records" className={menuClass}>
            <FaClipboardList />
            Medical Records
          </NavLink>

          {/* LABEL */}
          <p className="text-[10px] uppercase tracking-[2px] text-white/30 font-bold px-4 mt-6 mb-2">
            System
          </p>

          <NavLink to="/400" className={menuClass}>
            <FaBan />
            Error 400
          </NavLink>

          <NavLink to="/401" className={menuClass}>
            <FaLock />
            Error 401
          </NavLink>

          <NavLink to="/403" className={menuClass}>
            <FaTimesCircle />
            Error 403
          </NavLink>
        </div>
      </div>

      {/* BOTTOM CARD */}
      <div>
        <div className="bg-primary rounded-3xl p-5 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-dark text-sm font-semibold leading-relaxed">
              Manage your veterinary services easily.
            </p>

            <button className="mt-5 bg-white w-full py-3 rounded-2xl flex items-center justify-center gap-2 text-sm font-semibold text-dark hover:scale-[1.02] transition">
              <FaPlus className="text-xs" />
              Add Service
            </button>
          </div>

          {/* PAW BG */}
          <FaPaw className="absolute -right-5 -bottom-5 text-dark/10 text-8xl rotate-12" />
        </div>

        {/* FOOTER */}
        <div className="mt-5 px-2">
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
            VetCare Dashboard
          </p>

          <p className="text-[10px] text-white/20 mt-1">
            © 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </aside>
  );
}
