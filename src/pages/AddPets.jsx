import PageHeader from "../components/PageHeader";
import { FaPlus, FaCloudUploadAlt, FaSave, FaArrowLeft } from "react-icons/fa";
import { MdOutlinePets, MdPerson } from "react-icons/md";

export default function AddPet() {
  return (
    <div className="p-8 bg-bg-main min-h-screen font-barlow relative overflow-hidden">
      
      {/* Background Decor mirip Appointment */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-soft rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-accent-bg rounded-full opacity-20 blur-3xl"></div>

      <PageHeader 
        title="Register Patient"
        breadcrumb={["Dashboard", "Pets", "Add"]}
      />

      <div className="mt-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-[3rem] shadow-soft border border-border overflow-hidden">
          
          {/* Header Form */}
          <div className="p-10 border-b border-border bg-gradient-to-r from-white to-bg-main">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                <MdOutlinePets size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-poppins font-black text-text-main uppercase tracking-tight">Patient Profile</h2>
                <p className="text-sm text-text-soft font-medium">Enter the medical identity for the new anabul.</p>
              </div>
            </div>
          </div>

          {/* Body Form */}
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Kolom Kiri: Visual & Identity */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-xs font-black uppercase tracking-widest">Identity & Photo</span>
                </div>

                {/* Upload Section */}
                <div className="border-2 border-dashed border-border bg-bg-main/30 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:border-primary/50 transition-all group">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary group-hover:scale-110 transition-transform">
                     <FaCloudUploadAlt size={28} />
                   </div>
                   <p className="text-[10px] font-black text-text-soft uppercase tracking-widest">Click to upload pet photo</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Pet Name</label>
                    <input type="text" placeholder="e.g. Snowy" className="w-full px-5 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Species</label>
                      <select className="w-full px-4 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main">
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Rabbit</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Gender</label>
                      <select className="w-full px-4 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Detail & Owner */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <MdPerson />
                  <span className="text-xs font-black uppercase tracking-widest">Ownership Detail</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Breed / Variety</label>
                    <input type="text" placeholder="e.g. Golden Retriever" className="w-full px-5 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Birth Date / Age</label>
                    <input type="text" placeholder="e.g. 2 Years" className="w-full px-5 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main" />
                  </div>
                  <div className="p-6 bg-accent-bg/30 rounded-[2rem] border border-accent-text/10">
                    <label className="block text-xs font-black text-accent-text mb-3 uppercase tracking-wider">Parent / Owner</label>
                    <div className="relative">
                       <input type="text" placeholder="Search registered owner..." className="w-full px-5 py-3.5 bg-white border border-border rounded-xl outline-none font-bold text-sm" />
                    </div>
                    <p className="text-[9px] font-bold text-accent-text/60 mt-3 uppercase tracking-tighter italic">*Note: Owner must be registered first</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Form */}
          <div className="px-10 py-8 bg-bg-main/50 border-t border-border flex justify-end items-center gap-4">
            <button className="px-8 py-3 text-[11px] font-black uppercase tracking-widest text-text-soft hover:text-accent-text transition-all">
              Discard
            </button>
            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[2px] shadow-xl shadow-primary/20 transition-all transform active:scale-95 flex items-center gap-3">
              Save Patient <FaSave size={12} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}