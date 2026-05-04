import { useState } from "react"; // 1. Import useState
import PageHeader from "../components/PageHeader";
import { FaPlus, FaSearch, FaPhoneAlt, FaEnvelope, FaEllipsisV } from "react-icons/fa";
import { MdOutlinePets, MdOpenInNew } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ownersData from "../data/owners.json";

export default function Owners() {
  // 2. State untuk query pencarian
  const [searchQuery, setSearchQuery] = useState("");

  // 3. Logic Filtering: Mencocokkan nama, email, atau telepon
  const filteredOwners = ownersData.filter((owner) => {
    const query = searchQuery.toLowerCase();
    return (
      owner.name.toLowerCase().includes(query) ||
      owner.email.toLowerCase().includes(query) ||
      owner.phone.includes(query)
    );
  });

  return (
    <div className="p-6 space-y-6 bg-bg-main min-h-screen font-barlow">
      
      {/* HEADER SECTION */}
      <PageHeader 
        title="Owners Directory"
        breadcrumb={["Dashboard", "Owners"]}
      >
        <div className="flex items-center gap-3">
          <div className="relative group hidden sm:block">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-soft/40 group-focus-within:text-primary transition-colors text-xs" />
            {/* 4. Binding Input ke State */}
            <input 
              type="text" 
              placeholder="Search by name, email, or phone..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm outline-none focus:ring-4 focus:ring-primary-soft transition-all w-64 focus:w-72 shadow-sm font-bold text-text-main"
            />
          </div>
          
          <NavLink to="/owners/add">
            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              <FaPlus /> New Owner
            </button>
          </NavLink>
        </div>
      </PageHeader>

      {/* MAIN TABLE CONTAINER */}
      <div className="bg-white rounded-[2rem] border border-border shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-main/50 border-b border-border">
                <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">Client Name</th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">Contact Details</th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">Registered Pets</th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft text-center">Stats</th>
                <th className="px-8 py-5 text-right uppercase tracking-widest text-text-soft"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {/* 5. Render dari hasil filter */}
              {filteredOwners.length > 0 ? (
                filteredOwners.map((owner) => (
                  <tr key={owner.id} className="hover:bg-bg-main/30 transition-all duration-300 group">
                    
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${owner.color || 'from-primary to-purple-600'} text-white flex items-center justify-center font-poppins font-black text-lg border-2 border-white shadow-md transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                          {owner.initial || owner.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-poppins font-bold text-text-main text-base leading-tight">{owner.name}</p>
                            {owner.petsCount > 2 && (
                              <span className="bg-success-bg text-success-text text-[8px] font-black px-1.5 py-0.5 rounded-md uppercase">VIP</span>
                            )}
                          </div>
                          <p className="text-[10px] font-bold text-text-soft/60 uppercase tracking-wider mt-0.5">Owner ID #OW-0{owner.id}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 group/link">
                          <div className="p-1.5 bg-bg-main rounded-lg group-hover/link:bg-primary/10 transition-colors">
                            <FaPhoneAlt className="text-text-soft group-hover/link:text-primary text-[9px]" />
                          </div>
                          <span className="text-xs font-bold text-text-main">{owner.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 group/link">
                          <div className="p-1.5 bg-bg-main rounded-lg group-hover/link:bg-primary/10 transition-colors">
                            <FaEnvelope className="text-text-soft group-hover/link:text-primary text-[9px]" />
                          </div>
                          <span className="text-[10px] font-bold text-text-soft uppercase truncate max-w-[150px]">{owner.email}</span>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center">
                        <div className="flex -space-x-3 overflow-hidden">
                          {owner.pets.slice(0, 3).map((pet, i) => (
                            <div 
                              key={i}
                              className="w-9 h-9 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center bg-gradient-to-b from-bg-main to-border text-[10px] font-black text-text-main uppercase"
                              title={pet}
                            >
                              {pet.charAt(0)}
                            </div>
                          ))}
                          {owner.pets.length > 3 && (
                            <div className="w-9 h-9 rounded-full bg-primary text-white border-2 border-white shadow-sm flex items-center justify-center text-[9px] font-black">
                              +{owner.pets.length - 3}
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <p className="text-[11px] font-bold text-text-main leading-none italic">
                            {owner.pets[0]}{owner.pets.length > 1 ? `, ${owner.pets[1]}` : ''}
                          </p>
                          <p className="text-[9px] text-text-soft font-bold uppercase mt-1">
                            {owner.petsCount} Total Patients
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex justify-center">
                        <div className="px-4 py-2 bg-bg-main rounded-2xl border border-border/50 flex items-center gap-2 group-hover:border-primary/30 transition-all">
                          <MdOutlinePets className="text-primary text-sm" />
                          <span className="font-poppins font-black text-text-main text-sm">{owner.petsCount}</span>
                        </div>
                      </div>
                    </td>

                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end items-center gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-bg-main hover:bg-primary hover:text-white text-text-soft rounded-xl text-[10px] font-black uppercase tracking-tighter transition-all duration-300 group/btn">
                          Profile <MdOpenInNew className="group-hover/btn:scale-110 transition-transform" />
                        </button>
                        <button className="p-2.5 text-text-soft/30 hover:text-primary transition-colors">
                          <FaEllipsisV className="text-xs" />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                // 6. Tampilan jika tidak ada hasil
                <tr>
                  <td colSpan="5" className="px-8 py-20 text-center">
                    <p className="text-text-soft font-black uppercase tracking-widest text-xs">
                      No Owner found matching "{searchQuery}"
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* FOOTER INFO */}
        <div className="p-6 bg-bg-main/20 border-t border-border flex justify-between items-center">
          <p className="text-xs text-text-soft font-bold uppercase tracking-widest">
            Showing <span className="text-primary">{filteredOwners.length}</span> of {ownersData.length} Pet Parents
          </p>
          <div className="flex gap-2">
            <button className="px-5 py-2 bg-white border border-border rounded-xl text-xs font-black uppercase hover:bg-bg-main transition-all shadow-sm">Prev</button>
            <button className="px-5 py-2 bg-white border border-border rounded-xl text-xs font-black uppercase hover:bg-bg-main transition-all shadow-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}