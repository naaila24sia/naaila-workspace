import { NavLink } from "react-router-dom"; // Import untuk navigasi halaman
import Badge from "./Badge";
import Pets from "../data/Appointments.json";

export default function AppointmentTable() {
  return (
    <div className="col-span-2 card p-5 bg-white rounded-2xl border border-border shadow-soft font-body">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading font-bold text-lg text-text-main">
          Upcoming Appointments
        </h3>

        {/* Tombol diarahkan ke halaman detail list appointment utama */}
        <NavLink to="/appointments">
          <button className="w-30 h-8 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center font-bold text-base transition-colors shadow-sm cursor-pointer">
            View All
          </button>
        </NavLink>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/60">
              <th className="pb-3 text-xs font-bold font-heading text-text-soft uppercase tracking-wider">
                Pet
              </th>
              <th className="pb-3 text-xs font-bold font-heading text-text-soft uppercase tracking-wider">
                Owner
              </th>
              <th className="pb-3 text-xs font-bold font-heading text-text-soft uppercase tracking-wider">
                Appointment
              </th>
              <th className="pb-3 text-xs font-bold font-heading text-text-soft uppercase tracking-wider">
                Date
              </th>
              <th className="pb-3 text-xs font-bold font-heading text-text-soft uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border/40">
            {/* Menggunakan slice(0, 5) agar murni menampilkan maksimal 5 data saja */}
            {Pets.slice(0, 5).map((item) => (
              <tr
                key={item.id}
                className="hover:bg-bg-main/20 transition-colors group"
              >
                {/* PET */}
                <td className="py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-border/60 flex items-center justify-center p-1 shadow-sm overflow-hidden">
                      <img
                        src={item.img || "https://cdn-icons-png.flaticon.com/512/616/616408.png"}
                        alt={item.pet}
                        className="w-9 h-9 object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-heading font-bold text-text-main uppercase leading-tight">
                        {item.pet}
                      </p>
                      <p className="text-xs text-text-soft uppercase mt-0.5 font-medium">
                        {item.type}
                      </p>
                    </div>
                  </div>
                </td>

                {/* OWNER */}
                <td className="py-3.5 text-sm font-medium text-text-main">
                  {item.owner}
                </td>

                {/* SERVICE */}
                <td className="py-3.5">
                  <span className="text-xs bg-bg-main border border-border/50 text-text-main px-2 py-1 rounded-md font-semibold uppercase">
                    {item.service}
                  </span>
                </td>

                {/* DATE */}
                <td className="py-3.5 text-sm font-semibold text-text-main">
                  {item.date}
                </td>

                {/* STATUS */}
                <td className="py-3.5">
                  <Badge status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}