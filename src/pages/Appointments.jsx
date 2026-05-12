import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { FaPlus, FaFilter, FaEllipsisV, FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import appointmentsData from "../data/appointments.json";

export default function Appointments() {
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filteredAppointments = appointmentsData.filter((item) => {
    if (statusFilter === "All Status") return true;
    return item.status.toLowerCase() === statusFilter.toLowerCase();
  });

  return (
    <div className="p-6 space-y-6 bg-bg-main min-h-screen font-barlow">
      {/* HEADER SECTION */}
      <PageHeader
        title="Appointments List"
        breadcrumb={["Dashboard", "Appointments"]}
      >
        <div className="flex gap-3">
          <div className="relative group">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-white border border-border pl-10 pr-10 py-2.5 rounded-xl text-sm font-bold text-text-soft hover:bg-gray-50 transition-all shadow-sm outline-none cursor-pointer focus:ring-4 focus:ring-primary-soft"
            >
              <option value="All Status">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
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
                  Service
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
                        {/* UKURAN DISAMAKAN: w-12 h-12 & rounded-2xl */}
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
                      <span className="px-3 py-1.5 bg-bg-main rounded-lg text-[10px] font-black text-text-main border border-border/50 uppercase">
                        {item.service}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <p className="font-black text-text-main text-sm leading-tight">
                        {item.date}
                      </p>
                      <p className="text-[10px] text-primary font-black uppercase italic tracking-tighter mt-0.5">
                        Confirmed
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border shadow-sm ${
                          item.status?.toLowerCase() === "done"
                            ? "bg-success-bg border-success-text/10 text-success-text"
                            : "bg-accent-bg border-accent-text/10 text-accent-text"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${item.status?.toLowerCase() === "done" ? "bg-success-text" : "bg-accent-text"}`}
                        ></div>
                        <span className="text-[10px] font-black uppercase tracking-widest">
                          {item.status}
                        </span>
                      </div>
                    </td>

                    <td className="px-8 py-5 text-right">
                      <button className="p-2.5 bg-bg-main hover:bg-primary hover:text-white rounded-xl text-text-soft transition-all shadow-sm">
                        <FaEllipsisV size={12} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-8 py-20 text-center">
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
