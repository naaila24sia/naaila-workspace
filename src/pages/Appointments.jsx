import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { FaPlus, FaFilter, FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { MoreVertical, CheckCircle2, Clock, Play, XCircle } from "lucide-react";
import Badge from "../components/Badge";
import appointmentsData from "../data/Appointments.json";
import doctorsData from "../data/Doctors.json";

export default function Appointments() {
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [doctorFilter, setDoctorFilter] = useState("All Doctors");
  const [appointmentsList, setAppointmentsList] = useState(appointmentsData);

  // 2. Fungsi untuk mengubah status berdasarkan ID janji temu
  const handleUpdateStatus = (id, newStatus) => {
    setAppointmentsList((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  // Logika Filtering menggunakan data dari state lokal
  const filteredAppointments = appointmentsList.filter((item) => {
    const matchesStatus =
      statusFilter === "All Status" ||
      item.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesDoctor =
      doctorFilter === "All Doctors" || item.doctorName === doctorFilter;
    return matchesStatus && matchesDoctor;
  });

  return (
    <div className="p-6 space-y-6 bg-bg-main min-h-screen font-barlow">
      {/* HEADER SECTION */}
      <PageHeader
        title="Appointments List"
        breadcrumb={["Dashboard", "Appointments"]}
      >
        <div className="flex gap-3 flex-wrap items-center">
          {/* Status Filter */}
          <div className="relative group">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-white border border-border pl-10 pr-10 py-2.5 rounded-xl text-sm font-bold text-text-soft hover:bg-gray-50 transition-all shadow-sm outline-none cursor-pointer focus:ring-4 focus:ring-primary-soft"
            >
              <option value="All Status">All Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] text-text-soft/50" />
            <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-text-soft/50 pointer-events-none" />
          </div>

          {/* Doctor Filter */}
          <div className="relative group">
            <select
              value={doctorFilter}
              onChange={(e) => setDoctorFilter(e.target.value)}
              className="appearance-none bg-white border border-border pl-10 pr-10 py-2.5 rounded-xl text-sm font-bold text-text-soft hover:bg-gray-50 transition-all shadow-sm outline-none cursor-pointer focus:ring-4 focus:ring-primary-soft"
            >
              <option value="All Doctors">All Doctors</option>
              {doctorsData.map((doc) => (
                <option key={doc.id} value={doc.name}>
                  {doc.name}
                </option>
              ))}
            </select>
            <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] text-text-soft/50" />
            <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-text-soft/50 pointer-events-none" />
          </div>

          <NavLink to="/appointments/add">
            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-black shadow-lg shadow-primary/20 hover:scale-105 transition-all active:scale-95 uppercase tracking-wider">
              <FaPlus /> New Appointment
            </button>
          </NavLink>
        </div>
      </PageHeader>

      {/* TABLE CONTAINER */}
      <div className="bg-white rounded-[2.5rem] border border-border shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-main/50 border-b border-border">
                <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-text-soft">
                  Pet Patient
                </th>
                <th className="px-6 py-5 text-[11px] font-black uppercase tracking-widest text-text-soft">
                  Owner
                </th>
                <th className="px-6 py-5 text-[11px] font-black uppercase tracking-widest text-text-soft">
                  Service & Room
                </th>
                <th className="px-6 py-5 text-[11px] font-black uppercase tracking-widest text-text-soft">
                  Doctor
                </th>
                <th className="px-6 py-5 text-[11px] font-black uppercase tracking-widest text-text-soft">
                  Date & Time
                </th>
                <th className="px-6 py-5 text-[11px] font-black uppercase tracking-widest text-text-soft">
                  Status
                </th>
                <th className="px-8 py-5 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-bg-main/30 transition-colors group"
                  >
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-soft rounded-2xl flex items-center justify-center border-2 border-white shadow-md transition-transform group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
                          <img
                            src={
                              item.img ||
                              "https://cdn-icons-png.flaticon.com/512/616/616408.png"
                            }
                            alt={item.pet}
                            className="w-9 h-9 object-contain"
                          />
                        </div>
                        <div>
                          <NavLink to={`/appointments/${item.id}`}>
                            <p className="font-poppins font-black text-text-main text-base uppercase leading-tight hover:text-primary transition cursor-pointer">
                              {item.pet}
                            </p>
                          </NavLink>
                          <p className="text-[10px] font-bold text-primary uppercase tracking-tighter mt-0.5">
                            {item.type}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <p className="font-poppins font-bold text-text-main text-sm leading-tight">
                        {item.owner}
                      </p>
                      <p className="text-[10px] text-text-soft/60 font-bold uppercase tracking-wider mt-0.5">
                        Pet Parent
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex flex-col gap-1.5 items-start">
                        <span className="px-3 py-1 bg-bg-main rounded-lg text-[10px] font-black text-text-main border border-border/50 uppercase">
                          {item.service}
                        </span>
                        {item.room && (
                          <span className="text-[10px] text-text-soft font-bold uppercase tracking-wider flex items-center gap-1">
                            <span>📍</span> {item.room}
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-bg-main text-text-main flex items-center justify-center font-poppins font-black text-xs border border-border shadow-sm">
                          {item.doctorName ? (item.doctorName.replace("drh. ", "").charAt(0)) : "D"}
                        </div>
                        <div>
                          <p className="font-poppins font-bold text-text-main text-sm leading-tight">
                            {item.doctorName || "Unassigned"}
                          </p>
                          <p className="text-[10px] text-text-soft/60 font-bold uppercase tracking-wider mt-0.5">
                            {item.doctorSpecialization || "General Medicine"}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <p className="font-black text-text-main text-sm leading-tight">
                        {item.date}
                      </p>
                      <p className="text-[10px] text-text-soft/80 font-bold uppercase mt-0.5 flex items-center gap-1">
                        <Clock size={10} className="text-primary" /> {item.time || "09:00 AM"}
                      </p>
                    </td>

                    {/* STATUS COLUMN (BISA DI-KLIK) */}
                    <td className="px-6 py-5">
                      <DropdownMenu>
                        {/* Memicu dropdown menggunakan Badge bawaan Anda */}
                        <DropdownMenuTrigger className="outline-none focus:outline-none active:scale-95 transition-transform">
                          <Badge status={item.status} className="cursor-pointer" />
                        </DropdownMenuTrigger>
                        
                        <DropdownMenuContent
                          align="start"
                          className="w-36 rounded-xl border border-border bg-white p-1 shadow-soft font-barlow outline-none"
                        >
                          {/* Pilihan Status Pending */}
                          <DropdownMenuItem
                            onClick={() => handleUpdateStatus(item.id, "Pending")}
                            className="flex items-center gap-2 cursor-pointer text-text-main text-xs font-bold px-3 py-2 rounded-lg hover:bg-bg-main focus:bg-bg-main outline-none transition-colors"
                          >
                            <Clock size={14} className="text-amber-500" />
                            Pending
                          </DropdownMenuItem>

                          {/* Pilihan Status In Progress */}
                          <DropdownMenuItem
                            onClick={() => handleUpdateStatus(item.id, "In Progress")}
                            className="flex items-center gap-2 cursor-pointer text-text-main text-xs font-bold px-3 py-2 rounded-lg hover:bg-bg-main focus:bg-bg-main outline-none transition-colors"
                          >
                            <Play size={14} className="text-sky-500 fill-sky-500" />
                            In Progress
                          </DropdownMenuItem>

                          {/* Pilihan Status Done */}
                          <DropdownMenuItem
                            onClick={() => handleUpdateStatus(item.id, "Done")}
                            className="flex items-center gap-2 cursor-pointer text-text-main text-xs font-bold px-3 py-2 rounded-lg hover:bg-bg-main focus:bg-bg-main outline-none transition-colors"
                          >
                            <CheckCircle2 size={14} className="text-emerald-500" />
                            Done
                          </DropdownMenuItem>

                          {/* Pilihan Status Cancelled */}
                          <DropdownMenuItem
                            onClick={() => handleUpdateStatus(item.id, "Cancelled")}
                            className="flex items-center gap-2 cursor-pointer text-text-main text-xs font-bold px-3 py-2 rounded-lg hover:bg-bg-main focus:bg-bg-main outline-none transition-colors"
                          >
                            <XCircle size={14} className="text-rose-500" />
                            Cancelled
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>

                    <td className="px-8 py-5 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="inline-flex items-center justify-center w-8 h-8 bg-bg-main hover:bg-border/40 text-text-soft hover:text-text-main rounded-xl transition-all shadow-sm outline-none cursor-pointer">
                            <MoreVertical size={12} />
                          </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          align="end"
                          className="w-44 rounded-xl border border-border bg-bg-card p-1 shadow-soft font-body outline-none"
                        >
                          <DropdownMenuItem
                            asChild
                            className="cursor-pointer text-text-main text-xs font-semibold px-3 py-2 rounded-lg hover:bg-bg-main focus:bg-bg-main focus:text-text-main outline-none transition-colors"
                          >
                            <NavLink to={`/appointments/${item.id}`}>
                              View Detail
                            </NavLink>
                          </DropdownMenuItem>

                          <DropdownMenuItem className="cursor-pointer text-text-main text-xs font-semibold px-3 py-2 rounded-lg hover:bg-bg-main focus:bg-bg-main focus:text-text-main outline-none transition-colors">
                            Edit Appointment
                          </DropdownMenuItem>

                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="w-full text-left cursor-pointer text-error text-xs font-bold px-3 py-2 rounded-lg hover:bg-error-soft/10 focus:bg-error-soft/10 focus:text-error outline-none transition-colors">
                                Delete
                              </button>
                            </DialogTrigger>

                            <DialogContent className="rounded-[2rem] border border-border bg-white p-6 max-w-sm mx-auto font-barlow text-center shadow-2xl">
                              <DialogHeader className="flex flex-col items-center justify-center text-center">
                                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-3 border border-red-100">
                                  ⚠️
                                </div>
                                <DialogTitle className="font-poppins font-black text-text-main text-xl uppercase tracking-tight">
                                  Delete Appointment?
                                </DialogTitle>
                                <DialogDescription className="text-xs text-text-soft/80 font-medium mt-2 max-w-[260px]">
                                  Are you sure you want to delete{" "}
                                  <span className="font-bold text-text-main">
                                    {item.pet}
                                  </span>
                                  's appointment? This action cannot be undone.
                                </DialogDescription>
                              </DialogHeader>

                              <DialogFooter className="mt-6 flex gap-2 justify-center w-full sm:justify-center">
                                <DialogClose asChild>
                                  <button className="rounded-xl border border-border text-[11px] font-black uppercase px-4 py-2.5 hover:bg-bg-main transition-all text-text-soft cursor-pointer">
                                    Cancel
                                  </button>
                                </DialogClose>
                                <DialogClose asChild>
                                  <button className="rounded-xl bg-red-500 hover:bg-red-600 text-white text-[11px] font-black uppercase px-4 py-2.5 shadow-md transition-all cursor-pointer">
                                    Yes, Delete
                                  </button>
                                </DialogClose>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-8 py-20 text-center">
                    <p className="text-text-soft font-black uppercase tracking-widest text-xs">
                      No {statusFilter} appointments found.
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
            <span className="text-primary">{filteredAppointments.length}</span>{" "}
            results
          </p>
          <div className="flex gap-2">
            <button className="px-5 py-2 bg-white border border-border rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-bg-main transition-all shadow-sm">
              Prev
            </button>
            <button className="px-5 py-2 bg-white border border-border rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-bg-main transition-all shadow-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}