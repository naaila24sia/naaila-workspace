import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  // State awal diset kosong/loading sebelum membaca localStorage
  const [user, setUser] = useState({
    name: "Loading...",
    role: "User",
    avatar: "https://cdn-icons-png.flaticon.com/512/616/616408.png"
  });

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Membaca data siapa yang login saat komponen muncul di layar
  useEffect(() => {
    const savedUser = localStorage.getItem("user_profile");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user_profile"); // Hapus data user saat logout
    navigate("/");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between mb-8 relative z-50">
      {/* SEARCH */}
      <div className="card w-[340px] flex items-center gap-3 py-3">
        <FaSearch className="text-text-soft" />
        <input
          type="text"
          placeholder="Search pets, appointments..."
          className="w-full bg-transparent outline-none body-text placeholder:text-text-soft"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* NOTIFICATION */}
        <div className="relative card p-3 cursor-pointer hover:scale-105 transition">
          <FaBell className="text-text-soft" />
          <span className="absolute -top-1 -right-1 bg-error text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
            8
          </span>
        </div>

        {/* PET ICON */}
        <div className="card p-3 cursor-pointer hover:scale-105 transition">
          <MdPets className="text-primary text-lg" />
        </div>

        {/* SETTINGS */}
        <div className="card p-3 cursor-pointer hover:rotate-90 transition duration-500">
          <SlSettings className="text-text-soft" />
        </div>

        {/* DIVIDER */}
        <div className="w-[1px] h-8 bg-border"></div>

        {/* PROFILE DROPDOWN */}
        <div className="relative" ref={dropdownRef}>
          {/* TOMBOL PROFIL */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 cursor-pointer hover:bg-black/5 p-1 rounded-2xl transition"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-2xl object-cover border-2 border-primary"
            />

            <div className="hidden sm:block select-none">
              {/* NAMA AKAN BERUBAH SESUAI USER YANG LOGIN */}
              <p className="body-text font-semibold text-text-main">
                {user.name} 🐾
              </p>
              {/* ROLE AKAN BERUBAH JADI ADMIN/USER/DOKTER SESUAI AKUN */}
              <p className="small-text text-text-soft capitalize">
                {user.role}
              </p>
            </div>
          </div>

          {/* DROPDOWN MENU */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-border rounded-xl shadow-lg py-2">
              {/* Nama versi Mobile (muncul saat layar kecil) */}
              <div className="px-4 py-2 border-b border-border sm:hidden">
                <p className="text-xs font-semibold text-text-main">{user.name} 🐾</p>
                <p className="text-[10px] text-text-soft capitalize">{user.role}</p>
              </div>
              
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2.5 text-sm text-error hover:bg-error/10 flex items-center gap-2 font-medium transition"
              >
                <FaSignOutAlt className="text-xs" />
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}