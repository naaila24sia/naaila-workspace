import { useState } from "react";
import PageHeader from "../components/PageHeader";
import {
  FaPlus,
  FaSearch,
  FaEllipsisV,
  FaVenus,
  FaMars,
  FaHeartbeat,
  FaBriefcaseMedical,
  FaExclamationCircle,
} from "react-icons/fa";
import { MdOutlinePets, MdOutlineHistory } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import petsData from "../data/Pets.json";

export default function Pets() {
  const [searchQuery, setSearchQuery] = useState("");
  const [petsList, setPetsList] = useState(petsData);

  const handleUpdateStatus = (id, newStatus) => {
    setPetsList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const filteredPets = petsList.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.pet.toLowerCase().includes(query) ||
      item.owner.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query)
    );
  });

  const getStatusDetails = (status) => {
    const normalized = status?.toLowerCase() || "";
    if (normalized === "healthy") {
      return {
        badgeClass: "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200/60 text-emerald-600 shadow-sm shadow-emerald-100",
        dotClass: "bg-emerald-500",
        icon: <FaHeartbeat className="text-[12px] text-emerald-500 animate-pulse" />,
      };
    } else if (normalized.includes("treatment") || normalized === "sick") {
      return {
        badgeClass: "bg-gradient-to-r from-rose-50 to-orange-50 border-rose-200/60 text-rose-600 shadow-sm shadow-rose-100",
        dotClass: "bg-rose-500",
        icon: <FaBriefcaseMedical className="text-[11px] text-rose-500" />,
      };
    } else if (normalized === "critical") {
      return {
        badgeClass: "bg-gradient-to-r from-red-100 to-rose-100 border-red-300 text-red-700 shadow-md shadow-red-200 animate-pulse",
        dotClass: "bg-red-600",
        icon: <FaExclamationCircle className="text-[12px] text-red-600 animate-bounce" />,
      };
    } else { // e.g. "Recovery"
      return {
        badgeClass: "bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200/60 text-amber-600 shadow-sm shadow-amber-100",
        dotClass: "bg-amber-500",
        icon: <FaBriefcaseMedical className="text-[11px] text-amber-500" />,
      };
    }
  };

  return (
    <div className="p-6 space-y-6 bg-bg-main min-h-screen font-barlow">
      {/* HEADER SECTION - Identik dengan Owners */}
      <PageHeader title="Pet Directory" breadcrumb={["Dashboard", "Pets"]}>
        <div className="flex items-center gap-3">
          <div className="relative group hidden sm:block">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-soft/40 group-focus-within:text-primary transition-colors text-xs" />
            <input
              type="text"
              placeholder="Search anabul or owner..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm outline-none focus:ring-4 focus:ring-primary-soft transition-all w-64 focus:w-72 shadow-sm font-bold text-text-main"
            />
          </div>

          <NavLink to="/pets/add">
            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              <FaPlus /> Add Patient
            </button>
          </NavLink>
        </div>
      </PageHeader>

      {/* MAIN TABLE CONTAINER - Ukuran Rounded disamakan [2rem] */}
      <div className="bg-white rounded-[2rem] border border-border shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-main/50 border-b border-border">
                <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">
                  Patient
                </th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">
                  Type & Breed
                </th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">
                  Age / Gender
                </th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">
                  Owner
                </th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft text-center">
                  Status
                </th>
                <th className="px-8 py-5 text-right uppercase tracking-widest text-text-soft"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {filteredPets.length > 0 ? (
                filteredPets.map((pet) => {
                  const statusInfo = getStatusDetails(pet.status);

                  return (
                    <tr
                      key={pet.id}
                      className="hover:bg-bg-main/30 transition-all duration-300 group"
                    >
                      {/* Column 1: Patient Profile */}
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-primary-soft flex items-center justify-center border-2 border-white shadow-md transition-transform group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
                            <img
                              src={pet.img}
                              alt={pet.pet}
                              className="w-9 h-9 object-contain"
                            />
                          </div>
                          <div>
                            <NavLink to={`/petdetail/${pet.id}`}>
                              <p className="font-poppins font-bold text-text-main text-base uppercase leading-tight hover:text-primary transition cursor-pointer">
                                {pet.pet}
                              </p>
                            </NavLink>
                            <p className="text-[10px] font-bold text-primary flex items-center gap-1 mt-0.5">
                              <MdOutlinePets /> ID-00{pet.id}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Column 2: Breed */}
                      <td className="px-6 py-5">
                        <div className="space-y-1">
                          <span className="px-2.5 py-1 bg-bg-main rounded-md text-[10px] font-black text-text-soft border border-border uppercase">
                            {pet.type}
                          </span>
                          <p className="text-xs font-bold text-text-main mt-1 italic">
                            {pet.breed}
                          </p>
                        </div>
                      </td>

                      {/* Column 3: Age/Gender */}
                      <td className="px-6 py-5">
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-bold text-text-main">
                            {pet.age}
                          </p>
                          <div className="flex items-center gap-1.5">
                            {pet.gender === "Male" ? (
                              <span className="text-blue-500 flex items-center gap-1 text-[10px] font-bold">
                                <FaMars /> MALE
                              </span>
                            ) : (
                              <span className="text-pink-500 flex items-center gap-1 text-[10px] font-bold">
                                <FaVenus /> FEMALE
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Column 4: Owner */}
                      <td className="px-6 py-5">
                        <p className="font-poppins font-bold text-text-main text-sm leading-tight">
                          {pet.owner}
                        </p>
                        <p className="text-[10px] font-bold text-text-soft/60 uppercase tracking-wider mt-0.5">
                          Client
                        </p>
                      </td>

                      {/* Column 5: Status dengan Ikon Tambahan (Bisa diklik & diubah) */}
                      <td className="px-6 py-5">
                        <div className="flex justify-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger className="outline-none focus:outline-none active:scale-95 transition-transform">
                              <div
                                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border shadow-sm transition-all duration-300 cursor-pointer ${statusInfo.badgeClass}`}
                              >
                                <div
                                  className={`w-1.5 h-1.5 rounded-full ${statusInfo.dotClass}`}
                                />
                                {statusInfo.icon}
                                <span className="text-[10px] font-black uppercase tracking-wider">
                                  {pet.status}
                                </span>
                              </div>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                              align="center"
                              className="w-44 rounded-xl border border-border bg-white p-1 shadow-soft font-barlow outline-none"
                            >
                              {/* Healthy */}
                              <DropdownMenuItem
                                onClick={() => handleUpdateStatus(pet.id, "Healthy")}
                                className="flex items-center gap-2 cursor-pointer text-text-main text-xs font-bold px-3 py-2 rounded-lg hover:bg-bg-main focus:bg-bg-main outline-none transition-colors"
                              >
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                Healthy
                              </DropdownMenuItem>

                              {/* Recovery */}
                              <DropdownMenuItem
                                onClick={() => handleUpdateStatus(pet.id, "Recovery")}
                                className="flex items-center gap-2 cursor-pointer text-text-main text-xs font-bold px-3 py-2 rounded-lg hover:bg-bg-main focus:bg-bg-main outline-none transition-colors"
                              >
                                <div className="w-2 h-2 rounded-full bg-amber-500" />
                                Recovery
                              </DropdownMenuItem>

                              {/* Under Treatment */}
                              <DropdownMenuItem
                                onClick={() => handleUpdateStatus(pet.id, "Under Treatment")}
                                className="flex items-center gap-2 cursor-pointer text-text-main text-xs font-bold px-3 py-2 rounded-lg hover:bg-bg-main focus:bg-bg-main outline-none transition-colors"
                              >
                                <div className="w-2 h-2 rounded-full bg-rose-500" />
                                Under Treatment
                              </DropdownMenuItem>

                              {/* Critical */}
                              <DropdownMenuItem
                                onClick={() => handleUpdateStatus(pet.id, "Critical")}
                                className="flex items-center gap-2 cursor-pointer text-text-main text-xs font-bold px-3 py-2 rounded-lg hover:bg-bg-main focus:bg-bg-main outline-none transition-colors"
                              >
                                <div className="w-2 h-2 rounded-full bg-red-600" />
                                Critical
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </td>

                      {/* Column 6: Actions */}
                      <td className="px-8 py-5 text-right">
                        <div className="flex justify-end items-center gap-2">
                          <button className="flex items-center gap-2 px-4 py-2 bg-bg-main hover:bg-primary hover:text-white text-text-soft rounded-xl text-[10px] font-black uppercase tracking-tighter transition-all duration-300 group/btn">
                            History{" "}
                            <MdOutlineHistory
                              size={14}
                              className="group-hover/btn:rotate-12 transition-transform"
                            />
                          </button>
                          <button className="p-2.5 text-text-soft/30 hover:text-primary transition-colors">
                            <FaEllipsisV className="text-xs" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6" className="px-8 py-20 text-center">
                    <p className="text-text-soft font-black uppercase tracking-widest text-xs">
                      No Anabul found matching "{searchQuery}"
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* FOOTER INFO - Identik dengan Owners */}
        {/* FOOTER INFO - Perbaikan pada filteredPets */}
        <div className="p-6 bg-bg-main/20 border-t border-border flex justify-between items-center">
          <p className="text-xs text-text-soft font-bold uppercase tracking-widest">
            Showing <span className="text-primary">{filteredPets.length}</span>{" "}
            of {petsData.length} Anabul
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
