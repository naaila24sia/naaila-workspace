import PageHeader from "../components/PageHeader";
import { FaUserPlus, FaSave, FaEnvelope, FaPhoneAlt, FaPaw } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function AddOwner() {
  return (
    <div className="p-8 bg-bg-main min-h-screen font-barlow relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-soft rounded-full opacity-40 blur-3xl"></div>

      <PageHeader 
        title="New Pet Parent"
        breadcrumb={["Dashboard", "Owners", "Add"]}
      />

      <div className="mt-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-[3rem] shadow-soft border border-border overflow-hidden">
          
          {/* Header Form */}
          <div className="p-10 border-b border-border bg-gradient-to-r from-white to-bg-main">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <FaUserPlus size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-poppins font-black text-text-main uppercase tracking-tight">Client Registration</h2>
                <p className="text-sm text-text-soft font-medium">Add a new owner to the directory database.</p>
              </div>
            </div>
          </div>

          {/* Body Form */}
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Kolom Kiri: Contact Details (Sesuai kolom 2 di tabel) */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <div className="w-1.5 h-4 bg-primary rounded-full"></div>
                  <span className="text-xs font-black uppercase tracking-widest">Identity & Contact</span>
                </div>

                <div className="space-y-6">
                  {/* Full Name -> Masuk ke Client Name */}
                  <div>
                    <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe" 
                      className="w-full px-5 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main transition-all" 
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone -> Masuk ke Contact Details */}
                    <div>
                      <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Phone Number</label>
                      <div className="relative group">
                        <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-text-soft/50 group-focus-within:text-primary text-[10px]" />
                        <input 
                          type="text" 
                          placeholder="+62..." 
                          className="w-full pl-10 pr-4 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main transition-all" 
                        />
                      </div>
                    </div>
                    {/* Email -> Masuk ke Contact Details */}
                    <div>
                      <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Email Address</label>
                      <div className="relative group">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-text-soft/50 group-focus-within:text-primary text-[10px]" />
                        <input 
                          type="email" 
                          placeholder="example@mail.com" 
                          className="w-full pl-10 pr-4 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main transition-all" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Initial Pet (Sesuai kolom 3 & 4 di tabel) */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <FaPaw />
                  <span className="text-xs font-black uppercase tracking-widest">Initial Pet Info</span>
                </div>

                <div className="space-y-6">
                  {/* Registered Pets -> Mengisi array pets */}
                  <div>
                    <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Pet Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Snowy" 
                      className="w-full px-5 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main transition-all" 
                    />
                    <p className="text-[10px] text-text-soft mt-2 font-medium italic">This will create the first pet entry for this owner.</p>
                  </div>

                  {/* Profile Color -> Untuk Avatar Initial di tabel */}
                  <div>
                    <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Profile Theme Color</label>
                    <select className="w-full px-5 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main appearance-none cursor-pointer">
                      <option value="from-primary to-purple-600">Deep Purple (Default)</option>
                      <option value="from-blue-500 to-cyan-400">Ocean Blue</option>
                      <option value="from-rose-500 to-orange-400">Sunset Orange</option>
                      <option value="from-emerald-500 to-teal-400">Nature Green</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Form */}
          <div className="px-10 py-8 bg-bg-main/50 border-t border-border flex justify-end items-center gap-4">
            <NavLink to="/owners">
              <button className="px-8 py-3 text-[11px] font-black uppercase tracking-widest text-text-soft hover:text-danger transition-all">
                Cancel
              </button>
            </NavLink>
            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[2px] shadow-xl shadow-primary/20 transition-all transform active:scale-95 flex items-center gap-3">
              Save to Directory <FaSave size={12} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}