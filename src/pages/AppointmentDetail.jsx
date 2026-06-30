import { useParams, NavLink } from "react-router-dom";
import appointmentsData from "../data/Appointments.json";
import doctorsData from "../data/Doctors.json";
import { User, MapPin, Stethoscope, FileText, Phone, Mail, Calendar, Clock } from "lucide-react";

export default function AppointmentDetail() {
  const { id } = useParams();

  const appointment = appointmentsData.find(
    (item) => item.id.toString() === id
  );

  if (!appointment) {
    return (
      <div className="p-10 text-center font-barlow">
        <h1 className="text-3xl font-black text-text-main">Appointment Not Found</h1>
        <NavLink to="/appointments">
          <button className="mt-4 px-5 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary/95 transition">
            Back to List
          </button>
        </NavLink>
      </div>
    );
  }

  // Find corresponding doctor info if available
  const doctor = doctorsData.find(
    (doc) => doc.name.toLowerCase() === appointment.doctorName?.toLowerCase()
  );

  return (
    <div className="p-6 bg-bg-main min-h-screen font-barlow">
      {/* BACK BUTTON */}
      <NavLink to="/appointments">
        <button className="mb-6 px-5 py-2.5 bg-white border border-border rounded-xl font-bold hover:bg-gray-50 transition shadow-sm text-sm text-text-soft flex items-center gap-2 cursor-pointer">
          ← Back to Appointments
        </button>
      </NavLink>

      {/* MAIN CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN - PET PROFILE */}
        <div className="bg-white rounded-[2.5rem] border border-border shadow-soft p-8 flex flex-col items-center text-center">
          <div className="w-40 h-40 bg-primary-soft rounded-[2rem] flex items-center justify-center border-4 border-white shadow-lg overflow-hidden mb-6">
            <img
              src={appointment.img || "https://cdn-icons-png.flaticon.com/512/616/616408.png"}
              alt={appointment.pet}
              className="w-28 h-28 object-contain"
            />
          </div>

          <h2 className="text-3xl font-black text-text-main uppercase tracking-tight leading-none mb-1">
            {appointment.pet}
          </h2>
          <span className="px-3.5 py-1 bg-primary/10 text-primary text-xs font-black uppercase rounded-full tracking-wider">
            {appointment.type}
          </span>

          <div className="w-full border-t border-border/80 my-6"></div>

          {/* QUICK DETAILS */}
          <div className="w-full space-y-4 text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-text-soft uppercase tracking-wider">Appointment ID</span>
              <span className="text-sm font-black text-text-main uppercase">APPT-00{appointment.id}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-text-soft uppercase tracking-wider">Pet Parent</span>
              <span className="text-sm font-bold text-text-main">{appointment.owner}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-text-soft uppercase tracking-wider">Status</span>
              <span
                className={`px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider ${
                  appointment.status === "Done"
                    ? "bg-emerald-100 text-emerald-700"
                    : appointment.status === "In Progress"
                    ? "bg-sky-100 text-sky-700"
                    : appointment.status === "Cancelled"
                    ? "bg-rose-100 text-rose-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {appointment.status}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - DETAILED INFO */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* APPOINTMENT & ROOM DETAILS */}
          <div className="bg-white rounded-[2.5rem] border border-border shadow-soft p-8">
            <h3 className="text-lg font-black text-text-main uppercase tracking-wide mb-6 flex items-center gap-2">
              <Calendar size={18} className="text-primary" /> Session & Schedule
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-bg-main/40 border border-border/40 rounded-2xl p-5 flex gap-4 items-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary border border-border/60">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-soft uppercase tracking-wider">Date & Time</p>
                  <p className="text-base font-black text-text-main mt-0.5">{appointment.date}</p>
                  <p className="text-xs font-bold text-primary flex items-center gap-1 mt-0.5">
                    <Clock size={12} /> Slot: {appointment.time || "09:00 AM"}
                  </p>
                </div>
              </div>

              <div className="bg-bg-main/40 border border-border/40 rounded-2xl p-5 flex gap-4 items-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary border border-border/60">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-soft uppercase tracking-wider">Location / Room</p>
                  <p className="text-base font-black text-text-main mt-0.5">{appointment.room || "Ruang Periksa B"}</p>
                  <p className="text-xs font-bold text-text-soft/60 mt-0.5 uppercase tracking-wider">Vet Clinic Main Area</p>
                </div>
              </div>

              <div className="bg-bg-main/40 border border-border/40 rounded-2xl p-5 flex gap-4 items-center md:col-span-2">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary border border-border/60 shrink-0">
                  <Stethoscope size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-soft uppercase tracking-wider">Service Type</p>
                  <p className="text-base font-black text-text-main mt-0.5">{appointment.service}</p>
                  <p className="text-xs text-text-soft/80 mt-0.5 font-medium">Standard medical procedures & professional care</p>
                </div>
              </div>
            </div>
          </div>

          {/* DOCTOR DETAILS */}
          <div className="bg-white rounded-[2.5rem] border border-border shadow-soft p-8">
            <h3 className="text-lg font-black text-text-main uppercase tracking-wide mb-6 flex items-center gap-2">
              <User size={18} className="text-primary" /> Veterinarian in Charge
            </h3>

            {doctor ? (
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-16 h-16 rounded-2xl bg-bg-main border-2 border-border text-text-main flex items-center justify-center font-poppins font-black text-2xl shrink-0 shadow-sm">
                  {doctor.name.replace("drh. ", "").charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-xl font-black text-text-main">{doctor.name}</h4>
                    <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {doctor.status}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mt-0.5">
                    {doctor.specialization} ({doctor.nip})
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-border/60">
                    <div className="flex items-center gap-2 text-text-main font-semibold text-xs">
                      <Phone size={12} className="text-text-soft" />
                      <span>{doctor.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-main font-semibold text-xs">
                      <Mail size={12} className="text-text-soft" />
                      <span className="lowercase">{doctor.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 p-4 bg-bg-main/40 border border-border/40 rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-border/60 font-black text-text-soft shrink-0">
                  ?
                </div>
                <div>
                  <h4 className="text-sm font-black text-text-main">{appointment.doctorName || "Doctor Unassigned"}</h4>
                  <p className="text-xs font-bold text-text-soft/60 uppercase mt-0.5">{appointment.doctorSpecialization || "General Practitioner"}</p>
                </div>
              </div>
            )}
          </div>

          {/* NOTES / CLINICAL SYMPTOMS */}
          <div className="bg-white rounded-[2.5rem] border border-border shadow-soft p-8">
            <h3 className="text-lg font-black text-text-main uppercase tracking-wide mb-4 flex items-center gap-2">
              <FileText size={18} className="text-primary" /> Symptoms & Medical Notes
            </h3>
            
            <div className="bg-bg-main/30 border border-border/50 rounded-2xl p-6 min-h-[100px] flex gap-3">
              <span className="text-xl text-primary font-serif">“</span>
              <p className="text-sm font-medium text-text-main italic leading-relaxed mt-1">
                {appointment.notes || "Belum ada catatan klinis yang ditambahkan untuk janji temu ini."}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}