import { useParams, NavLink } from "react-router-dom";
import petsData from "../data/Pets.json";
import appointmentsData from "../data/Appointments.json";
import { 
  Activity, 
  Thermometer, 
  Heart, 
  AlertTriangle, 
  Syringe, 
  Calendar, 
  Clock, 
  User, 
  FileText, 
  CheckCircle2 
} from "lucide-react";

export default function PetDetail() {
  const { id } = useParams();

  const pet = petsData.find(
    (item) => item.id.toString() === id
  );

  if (!pet) {
    return (
      <div className="p-10 text-center font-barlow">
        <h1 className="text-3xl font-black text-text-main">Pet Not Found</h1>
        <NavLink to="/pets">
          <button className="mt-4 px-5 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary/95 transition">
            Back to List
          </button>
        </NavLink>
      </div>
    );
  }

  // Filter appointments for this pet
  const petAppointments = appointmentsData.filter(
    (appt) => appt.pet.toLowerCase() === pet.pet.toLowerCase()
  );

  // Check if pet has allergies (i.e. allergies list is not empty, and first element is not "None")
  const hasAllergies = pet.allergies && pet.allergies.length > 0 && pet.allergies[0] !== "None";

  return (
    <div className="p-6 bg-bg-main min-h-screen font-barlow">
      
      {/* BACK BUTTON */}
      <NavLink to="/pets">
        <button className="mb-6 px-5 py-2.5 bg-white border border-border rounded-xl font-bold hover:bg-gray-50 transition shadow-sm text-sm text-text-soft flex items-center gap-2 cursor-pointer">
          ← Back to Patients
        </button>
      </NavLink>

      {/* MAIN CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN - PATIENT IDENTITY CARD */}
        <div className="space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-border shadow-soft p-8 flex flex-col items-center text-center">
            
            {/* IMAGE */}
            <div className="w-40 h-40 bg-primary-soft rounded-[2rem] flex items-center justify-center border-4 border-white shadow-lg overflow-hidden mb-6">
              <img
                src={pet.img || "https://cdn-icons-png.flaticon.com/512/616/616408.png"}
                alt={pet.pet}
                className="w-28 h-28 object-contain"
              />
            </div>

            {/* NAME */}
            <h2 className="text-3xl font-black text-text-main uppercase tracking-tight leading-none mb-1">
              {pet.pet}
            </h2>
            <span className="px-3.5 py-1 bg-primary/10 text-primary text-xs font-black uppercase rounded-full tracking-wider">
              {pet.type}
            </span>

            <div className="w-full border-t border-border/80 my-6"></div>

            {/* QUICK DETAILS */}
            <div className="w-full space-y-4 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-soft uppercase tracking-wider">Patient ID</span>
                <span className="text-sm font-black text-text-main">PET-00{pet.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-soft uppercase tracking-wider">Breed / Ras</span>
                <span className="text-sm font-bold text-text-main">{pet.breed}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-soft uppercase tracking-wider">Age / Umur</span>
                <span className="text-sm font-bold text-text-main">{pet.age}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-soft uppercase tracking-wider">Gender</span>
                <span className="text-sm font-bold text-text-main">{pet.gender}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-soft uppercase tracking-wider">Parent / Owner</span>
                <span className="text-sm font-bold text-text-main flex items-center gap-1">
                  <User size={13} className="text-text-soft" /> {pet.owner}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-soft uppercase tracking-wider">Last Visit</span>
                <span className="text-sm font-bold text-text-main">{pet.last_visit}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-soft uppercase tracking-wider">Status</span>
                <span
                  className={`px-3.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider ${
                    pet.status === "Healthy"
                      ? "bg-emerald-100 text-emerald-700"
                      : pet.status === "Recovery"
                      ? "bg-amber-100 text-amber-700"
                      : pet.status === "Critical"
                      ? "bg-red-600 text-white animate-pulse"
                      : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {pet.status}
                </span>
              </div>
            </div>
          </div>

          {/* ALLERGIES WARNING BOX */}
          {hasAllergies && (
            <div className="bg-red-50 border border-red-200 rounded-[2rem] p-6 shadow-sm flex gap-4 items-start">
              <div className="p-2.5 bg-red-500 text-white rounded-xl shadow-md shadow-red-500/10">
                <AlertTriangle size={18} />
              </div>
              <div>
                <h4 className="text-sm font-black text-red-800 uppercase tracking-wide">Allergy Warning!</h4>
                <p className="text-xs font-bold text-red-600/90 mt-1 uppercase tracking-wider leading-relaxed">
                  Contraindicated Substances:
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {pet.allergies.map((allergy, index) => (
                    <span key={index} className="bg-red-600 text-white px-2 py-0.5 rounded text-[10px] font-black uppercase">
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - DETAILED CLINICAL STATS & HISTORY */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* VITAL SIGNS & METRICS */}
          <div className="bg-white rounded-[2.5rem] border border-border shadow-soft p-8">
            <h3 className="text-lg font-black text-text-main uppercase tracking-wide mb-6 flex items-center gap-2">
              <Activity size={18} className="text-primary" /> Vitals & Vitals Signs
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Weight */}
              <div className="bg-bg-main/40 border border-border/40 rounded-2xl p-5 flex gap-4 items-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary border border-border/60">
                  <Activity size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-soft uppercase tracking-wider">Weight</p>
                  <p className="text-lg font-black text-text-main mt-0.5">{pet.weight || "N/A"}</p>
                </div>
              </div>

              {/* Temperature */}
              <div className="bg-bg-main/40 border border-border/40 rounded-2xl p-5 flex gap-4 items-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary border border-border/60">
                  <Thermometer size={20} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-soft uppercase tracking-wider">Body Temp</p>
                  <p className="text-lg font-black text-text-main mt-0.5">{pet.temp || "N/A"}</p>
                </div>
              </div>

              {/* Heart Rate */}
              <div className="bg-bg-main/40 border border-border/40 rounded-2xl p-5 flex gap-4 items-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary border border-border/60">
                  <Heart size={20} className="text-red-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-soft uppercase tracking-wider">Heart Rate</p>
                  <p className="text-lg font-black text-text-main mt-0.5">{pet.heartRate || "N/A"}</p>
                </div>
              </div>

            </div>
          </div>

          {/* VACCINATION HISTORY */}
          <div className="bg-white rounded-[2.5rem] border border-border shadow-soft p-8">
            <h3 className="text-lg font-black text-text-main uppercase tracking-wide mb-6 flex items-center gap-2">
              <Syringe size={18} className="text-primary" /> Vaccination Card
            </h3>

            <div className="overflow-x-auto border border-border/60 rounded-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-bg-main/50 border-b border-border/60">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-text-soft">Vaccine Name</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-text-soft">Administration Date</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-text-soft text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 text-xs font-bold text-text-main">
                  {pet.vaccines && pet.vaccines.length > 0 ? (
                    pet.vaccines.map((vax, index) => (
                      <tr key={index} className="hover:bg-bg-main/10 transition-colors">
                        <td className="px-6 py-4 uppercase">{vax.name}</td>
                        <td className="px-6 py-4">{vax.date}</td>
                        <td className="px-6 py-4 text-right">
                          <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase ${
                            vax.status === "Complete" ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"
                          }`}>
                            {vax.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="px-6 py-8 text-center text-text-soft/60">
                        No vaccination records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* MEDICAL HISTORY / APPOINTMENTS TIMELINE */}
          <div className="bg-white rounded-[2.5rem] border border-border shadow-soft p-8">
            <h3 className="text-lg font-black text-text-main uppercase tracking-wide mb-6 flex items-center gap-2">
              <FileText size={18} className="text-primary" /> EHR Medical Records & History
            </h3>

            {petAppointments.length > 0 ? (
              <div className="relative border-l border-border/80 ml-4 pl-8 space-y-8 py-2">
                {petAppointments.map((appt) => (
                  <div key={appt.id} className="relative">
                    {/* TIMELINE INDICATOR DOT */}
                    <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-primary shadow-sm flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>

                    <div className="bg-bg-main/30 border border-border/40 hover:border-primary/30 transition-colors rounded-2xl p-6">
                      
                      {/* HEADER */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 bg-primary text-white text-[10px] font-black uppercase rounded-lg tracking-wider">
                            {appt.service}
                          </span>
                          <span className="text-xs font-black text-text-soft uppercase tracking-wider">
                            APPT-00{appt.id}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-3 text-xs font-bold text-text-soft">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} className="text-primary" /> {appt.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} className="text-primary" /> {appt.time || "09:00 AM"}
                          </span>
                        </div>
                      </div>

                      {/* CLINICAL NOTE */}
                      <p className="text-sm font-medium text-text-main leading-relaxed italic mb-4">
                        "{appt.notes || "No clinical description recorded."}"
                      </p>

                      <div className="border-t border-border/50 pt-3 flex flex-wrap items-center justify-between gap-4">
                        <span className="text-xs font-bold text-text-soft uppercase tracking-wider flex items-center gap-1">
                          📍 Room: <span className="text-text-main font-black">{appt.room || "Ruang Periksa B"}</span>
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-bg-main text-text-main flex items-center justify-center font-poppins font-black text-[10px] border border-border">
                            {appt.doctorName ? appt.doctorName.replace("drh. ", "").charAt(0) : "D"}
                          </div>
                          <span className="text-xs font-bold text-text-main">
                            {appt.doctorName || "Doctor Unassigned"}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-bg-main/20 border border-border/40 rounded-2xl text-text-soft/60 font-black uppercase text-xs tracking-wider">
                No past visit records in the database.
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}