import { FaBell, FaSearch } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <header
      id="header-container"
      className="flex justify-between items-center p-4 bg-white/80 backdrop-blur-md rounded-[2rem] shadow-soft border border-border"
    >
      {/* Search Bar Section */}
      <div id="search-bar" className="relative w-full max-w-lg group">
        <input
          id="search-input"
          type="text"
          placeholder="Search pets, appointments..."
          /* font-barlow sekarang adalah Inter: Terlihat sangat bersih di input */
          className="border border-border p-3 pr-12 bg-bg-main w-full rounded-2xl outline-none transition-all 
          focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-soft font-barlow text-sm font-medium placeholder:text-text-soft/60"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
          <FaSearch
            className="text-text-soft/40 group-focus-within:text-primary transition-colors"
          />
        </div>
      </div>

      {/* Icon & Profile Section */}
      <div id="icons-container" className="flex items-center space-x-4 ml-4">
        
        {/* Notification */}
        <div className="relative p-3 bg-primary-soft/50 text-primary rounded-2xl cursor-pointer hover:bg-primary hover:text-white transition-all shadow-sm group">
          <FaBell className="group-hover:animate-ring" />
          <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-danger text-white rounded-full px-1.5 py-0.5 text-[9px] font-black border-2 border-white shadow-sm font-barlow">
            8
          </span>
        </div>

        {/* Pet Icon */}
        <div className="p-3 bg-success-bg text-success-text rounded-2xl cursor-pointer hover:scale-110 transition-transform shadow-sm">
          <MdPets />
        </div>

        {/* Settings */}
        <div className="p-3 bg-accent-bg text-accent-text rounded-2xl cursor-pointer hover:rotate-90 transition-all duration-500 shadow-sm">
          <SlSettings />
        </div>

        {/* Divider Vertical yang halus */}
        <div className="w-[1px] h-8 bg-border/60 mx-2"></div>

        {/* Profile Section */}
        <div className="flex items-center space-x-3 pl-2 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-[9px] text-text-soft font-black uppercase tracking-[2px] leading-tight">
              Veterinary
            </p>
            <p className="text-sm text-text-main font-poppins font-extrabold leading-tight group-hover:text-primary transition-colors">
              Dr. Naaila <span className="text-base">🐾</span>
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
              alt="Profile"
              className="w-11 h-11 rounded-2xl border-2 border-primary-soft p-0.5 bg-white shadow-sm group-hover:border-primary transition-all"
            />
            {/* Status Online Indicator */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-success-text border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
}