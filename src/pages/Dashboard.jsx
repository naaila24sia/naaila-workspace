import PageHeader from "../components/PageHeader";
import { MdOutlineVideoCall, MdOutlineHomeWork, MdCheckCircleOutline } from "react-icons/md";
import { FaPaw, FaChartLine, FaRegClock } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8 bg-bg-main min-h-screen">
      
      {/* HEADER SECTION */}
      <PageHeader 
        title="Dashboard Overview"
        breadcrumb={["Home", "Dashboard"]}
      >
        <button className="bg-white border border-border px-4 py-2 rounded-xl text-sm font-bold text-text-soft hover:bg-gray-50 transition-all flex items-center gap-2">
          <FaRegClock /> Last 7 Days
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: MAIN CONTENT (Upcoming Bookings) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-primary-soft to-white p-8 rounded-[2.5rem] border border-white flex justify-between items-center relative overflow-hidden shadow-sm">
            <div className="z-10">
              <h1 className="text-3xl font-poppins font-extrabold text-text-main">
                Welcome back, <span className="text-primary">Dr. Naaila</span>
              </h1>
              <p className="text-text-soft mt-2 font-medium">You have 12 appointments for today. Let's save lives!</p>
            </div>
            <div className="hidden md:block">
               <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" className="w-24 opacity-80" alt="pet" />
            </div>
          </div>

          <div className="flex justify-between items-center px-2">
            <h3 className="text-xl font-poppins font-bold text-text-main">Upcoming Bookings</h3>
            <button className="text-primary text-sm font-bold hover:underline">See all bookings</button>
          </div>

          {/* List Appointments (Mirip List di Gambar) */}
          <div className="space-y-4">
            {[
              { pet: "Miko", type: "Vaccination", owner: "Andi", time: "09:00 AM", category: "Clinic Visit", icon: <FaPaw /> },
              { pet: "Bruno", type: "Checkup", owner: "Santi", time: "10:30 AM", category: "Video Call", icon: <MdOutlineVideoCall className="text-xl" /> },
              { pet: "Snowy", type: "Grooming", owner: "Budi", time: "02:00 PM", category: "House Visit", icon: <MdOutlineHomeWork className="text-xl" /> },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-[2rem] border border-border flex items-center justify-between hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-bg-main rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary-soft transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-text-soft uppercase tracking-wider">{item.category}</p>
                    <h4 className="font-bold text-text-main font-poppins">{item.pet} <span className="text-text-soft font-normal text-xs">({item.type})</span></h4>
                    <p className="text-xs text-text-soft">Owner: {item.owner} • <span className="text-primary font-bold">{item.time}</span></p>
                  </div>
                </div>
                <button className="px-5 py-2 bg-bg-main hover:bg-primary hover:text-white rounded-xl text-xs font-bold transition-all">
                  VIEW DETAILS
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: STATS CARDS (Mirip Floating Cards di Gambar) */}
        <div className="space-y-6">
          
          {/* Card Incomplete (Kuning) */}
          <div className="bg-accent-bg p-8 rounded-[2.5rem] border border-white shadow-soft group hover:-translate-y-1 transition-transform">
            <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-accent-text shadow-sm mb-6">
               <FaRegClock size={20} />
            </div>
            <h4 className="text-accent-text font-bold text-lg">Incomplete Bookings</h4>
            <div className="flex items-end gap-3 mt-2">
               <h2 className="text-6xl font-poppins font-extrabold text-accent-text">4</h2>
               <p className="text-accent-text/60 text-xs font-bold mb-2 uppercase">Pending</p>
            </div>
            <button className="w-full mt-8 py-3 bg-white rounded-2xl text-accent-text font-bold text-sm shadow-sm hover:shadow-md transition-all">
              VIEW DETAILS
            </button>
          </div>

          {/* Card Completed (Hijau Toska) */}
          <div className="bg-success-bg p-8 rounded-[2.5rem] border border-white shadow-soft group hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-success-text shadow-sm">
                 <MdCheckCircleOutline size={24} />
              </div>
              <div className="flex items-center gap-1 text-success-text bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                <FaChartLine size={10} /> +40%
              </div>
            </div>
            <h4 className="text-success-text font-bold text-lg">Completed Bookings</h4>
            <h2 className="text-6xl font-poppins font-extrabold text-success-text mt-2">51</h2>
            <button className="w-full mt-8 py-3 bg-white rounded-2xl text-success-text font-bold text-sm shadow-sm hover:shadow-md transition-all">
              VIEW DETAILS
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}