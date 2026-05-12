import { useParams, NavLink } from "react-router-dom";
import appointmentsData from "../data/Appointments.json";

export default function AppointmentDetail() {
  const { id } = useParams();

  const appointment = appointmentsData.find(
    (item) => item.id.toString() === id
  );

  if (!appointment) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Appointment Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 bg-bg-main min-h-screen">

      {/* BACK BUTTON */}
      <NavLink to="/appointments">
        <button className="mb-6 px-5 py-2 bg-white border border-border rounded-xl font-bold hover:bg-bg-main transition">
          ← Back
        </button>
      </NavLink>

      {/* CARD */}
      <div className="bg-white rounded-[2rem] border border-border shadow-soft p-8">

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

          {/* IMAGE */}
          <div className="w-48 h-48 bg-primary-soft rounded-[2rem] flex items-center justify-center border-4 border-white shadow-lg">
            <img
              src={appointment.img}
              alt={appointment.pet}
              className="w-36 h-36 object-contain"
            />
          </div>

          {/* DETAILS */}
          <div className="flex-1 space-y-4">

            <div>
              <h1 className="text-4xl font-black text-text-main uppercase">
                {appointment.pet}
              </h1>

              <p className="text-primary font-bold uppercase tracking-widest mt-1">
                APPOINTMENT ID-00{appointment.id}
              </p>
            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

              <div className="bg-bg-main rounded-2xl p-4">
                <p className="text-xs font-black uppercase text-text-soft">
                  Pet Type
                </p>
                <p className="text-lg font-bold text-text-main mt-1">
                  {appointment.type}
                </p>
              </div>

              <div className="bg-bg-main rounded-2xl p-4">
                <p className="text-xs font-black uppercase text-text-soft">
                  Owner
                </p>
                <p className="text-lg font-bold text-text-main mt-1">
                  {appointment.owner}
                </p>
              </div>

              <div className="bg-bg-main rounded-2xl p-4">
                <p className="text-xs font-black uppercase text-text-soft">
                  Service
                </p>
                <p className="text-lg font-bold text-text-main mt-1">
                  {appointment.service}
                </p>
              </div>

              <div className="bg-bg-main rounded-2xl p-4">
                <p className="text-xs font-black uppercase text-text-soft">
                  Appointment Date
                </p>
                <p className="text-lg font-bold text-text-main mt-1">
                  {appointment.date}
                </p>
              </div>

            </div>

            {/* STATUS */}
            <div className="mt-6">
              <span
                className={`px-5 py-2 rounded-xl text-sm font-black uppercase tracking-widest ${
                  appointment.status === "Done"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {appointment.status}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}