import { FaBell, FaSearch } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <header
      className="flex items-center justify-between mb-8"
    >

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

        {/* PROFILE */}
        <div className="flex items-center gap-3">

          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Doctor"
            className="w-12 h-12 rounded-2xl object-cover border-2 border-primary"
          />

          <div className="hidden sm:block">
            <p className="body-text font-semibold text-text-main">
              Dr. Naaila 🐾
            </p>

            <p className="small-text text-text-soft">
              Veterinary Specialist
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}