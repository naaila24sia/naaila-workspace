import { useState } from "react";
import PageHeader from "../components/PageHeader";
import {
  FaPlus,
  FaSearch,
  FaPhoneAlt,
  FaEnvelope,
  FaEllipsisV,
} from "react-icons/fa";
import { MdOpenInNew, MdOutlineToggleOn, MdOutlineToggleOff } from "react-icons/md";
import { NavLink } from "react-router-dom";
import doctorsDataRaw from "../data/Doctors.json";

export default function Doctors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [doctorsList, setDoctorsList] = useState(doctorsDataRaw);

  // Fungsi untuk mengubah status Aktif <-> Cuti saat ditekan
  const toggleStatus = (id) => {
    setDoctorsList((prevDoctors) =>
      prevDoctors.map((doc) =>
        doc.id === id
          ? { ...doc, status: doc.status === "Aktif" ? "Cuti" : "Aktif" }
          : doc
      )
    );
  };

  // Logika Pencarian
  const filteredDoctors = doctorsList.filter((doc) => {
    const query = searchQuery.toLowerCase();
    return (
      doc.name.toLowerCase().includes(query) ||
      doc.specialization.toLowerCase().includes(query) ||
      doc.email.toLowerCase().includes(query) ||
      doc.phone.includes(query)
    );
  });

  return (
    <div className="p-6 space-y-6 bg-bg-main min-h-screen font-barlow">
      {/* HEADER SECTION */}
      <PageHeader title="Doctors & Staff Directory" breadcrumb={["Dashboard", "Doctors"]}>
        <div className="flex items-center gap-3">
          <div className="relative group hidden sm:block">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-soft/40 group-focus-within:text-primary transition-colors text-xs" />
            <input
              type="text"
              placeholder="Search doctor or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm outline-none focus:ring-4 focus:ring-primary-soft transition-all w-64 focus:w-72 shadow-sm font-bold text-text-main"
            />
          </div>

          <NavLink to="/doctors/add">
            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              <FaPlus /> New Doctor
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
                <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">
                  Dokter / Staf
                </th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">
                  Spesialisasi
                </th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">
                  Jadwal Praktik
                </th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">
                  Kontak
                </th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft text-center">
                  Status
                </th>
                <th className="px-8 py-5 text-right uppercase tracking-widest text-text-soft">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doc) => (
                  <tr
                    key={doc.id}
                    className="hover:bg-bg-main/30 transition-all duration-300 group"
                  >
                    {/* DOKTER / STAF */}
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        {/* Menggunakan bg-bg-main seragam dengan teks warna gelap */}
                        <div
                          className="w-12 h-12 rounded-2xl bg-bg-main text-text-main flex items-center justify-center font-poppins font-black text-lg border-2 border-border shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-3"
                        >
                          {doc.name.charAt(5) || doc.name.charAt(0)}
                        </div>
                        <div>
                          <NavLink to={`/doctordetail/${doc.id}`}>
                            <p className="font-poppins font-bold text-text-main text-base leading-tight hover:text-primary transition cursor-pointer">
                              {doc.name}
                            </p>
                          </NavLink>
                          <p className="text-[10px] font-bold text-text-soft/60 uppercase tracking-wider mt-0.5">
                            {doc.nip}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* SPESIALISASI */}
                    <td className="px-6 py-5">
                      <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-xl">
                        {doc.specialization}
                      </span>
                    </td>

                    {/* JADWAL PRAKTIK */}
                    <td className="px-6 py-5">
                      <p className="text-xs font-bold text-text-main">
                        {doc.schedule}
                      </p>
                    </td>

                    {/* KONTAK */}
                    <td className="px-6 py-5">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 group/link">
                          <div className="p-1.5 bg-bg-main rounded-lg group-hover/link:bg-primary/10 transition-colors">
                            <FaPhoneAlt className="text-text-soft group-hover/link:text-primary text-[9px]" />
                          </div>
                          <span className="text-xs font-bold text-text-main">
                            {doc.phone}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 group/link">
                          <div className="p-1.5 bg-bg-main rounded-lg group-hover/link:bg-primary/10 transition-colors">
                            <FaEnvelope className="text-text-soft group-hover/link:text-primary text-[9px]" />
                          </div>
                          <span className="text-[10px] font-bold text-text-soft uppercase truncate max-w-[150px]">
                            {doc.email}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* STATUS (BISA DI-KLIK) */}
                    <td className="px-6 py-5 text-center">
                      <button
                        onClick={() => toggleStatus(doc.id)}
                        title="Klik untuk mengubah status"
                        className={`mx-auto px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all active:scale-95 shadow-sm ${
                          doc.status === "Aktif"
                            ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                            : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                        }`}
                      >
                        {doc.status === "Aktif" ? (
                          <MdOutlineToggleOn className="text-sm text-emerald-600" />
                        ) : (
                          <MdOutlineToggleOff className="text-sm text-amber-600" />
                        )}
                        {doc.status}
                      </button>
                    </td>

                    {/* AKSI */}
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end items-center gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-bg-main hover:bg-primary hover:text-white text-text-soft rounded-xl text-[10px] font-black uppercase tracking-tighter transition-all duration-300 group/btn">
                          Profile{" "}
                          <MdOpenInNew className="group-hover/btn:scale-110 transition-transform" />
                        </button>
                        <button className="p-2.5 text-text-soft/30 hover:text-primary transition-colors">
                          <FaEllipsisV className="text-xs" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-8 py-20 text-center">
                    <p className="text-text-soft font-black uppercase tracking-widest text-xs">
                      No Doctor found matching "{searchQuery}"
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
            Showing{" "}
            <span className="text-primary">{filteredDoctors.length}</span> of{" "}
            {doctorsList.length} Doctors & Staff
          </p>
          <div className="flex gap-2">
            <button className="px-5 py-2 bg-white border border-border rounded-xl text-xs font-black uppercase hover:bg-bg-main transition-all shadow-sm">
              Prev
            </button>
            <button className="px-5 py-2 bg-white border border-border rounded-xl text-xs font-black uppercase hover:bg-bg-main transition-all shadow-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}