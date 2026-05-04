import PageHeader from "../components/PageHeader";
import { FaCalendarAlt, FaClock, FaStethoscope, FaUserAlt } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

export default function AddAppointments() {
  return (
    <div className="p-8 bg-bg-main min-h-screen font-barlow relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-primary-soft rounded-full opacity-30 blur-3xl"></div>

      <PageHeader 
        title="Create Appointment"
        breadcrumb={["Dashboard", "Appointments", "Add"]}
      />

      <div className="mt-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-[3rem] shadow-soft border border-border overflow-hidden">
          
          {/* Header Form */}
          <div className="p-10 border-b border-border bg-gradient-to-r from-white to-bg-main">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                <FaCalendarAlt size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-poppins font-black text-text-main uppercase tracking-tight">Booking Details</h2>
                <p className="text-sm text-text-soft font-medium">Schedule a new medical session for our fluffy patient.</p>
              </div>
            </div>
          </div>

          {/* Body Form */}
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Kolom Kiri: Patient & Owner */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <MdOutlinePets />
                  <span className="text-xs font-black uppercase tracking-widest">Patient Information</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Pet Name</label>
                    <div className="relative">
                      <input 
                        type="text"
                        placeholder="e.g. Bella" 
                        className="w-full pl-4 pr-4 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft focus:border-primary outline-none transition-all font-bold text-text-main" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Pet Type</label>
                    <select className="w-full px-4 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main cursor-pointer">
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Bird</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Owner Name</label>
                    <input 
                      type="text"
                      placeholder="e.g. Wawan" 
                      className="w-full px-4 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main" 
                    />
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Service & Schedule */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <FaStethoscope />
                  <span className="text-xs font-black uppercase tracking-widest">Service & Schedule</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Service Type</label>
                    <select className="w-full px-4 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main cursor-pointer uppercase text-[11px] tracking-widest">
                      <option>Vaccination</option>
                      <option>Consultation</option>
                      <option>Grooming</option>
                      <option>Surgery</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Appointment Date</label>
                      <div className="relative">
                        <input 
                          type="date"
                          className="w-full px-4 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-text-main mb-3 uppercase tracking-wider">Time Slot</label>
                      <div className="relative">
                        <select className="w-full px-4 py-3.5 bg-bg-main border border-border rounded-2xl focus:ring-4 focus:ring-primary-soft outline-none font-bold text-text-main cursor-pointer">
                          <option>09:00 AM</option>
                          <option>11:00 AM</option>
                          <option>02:00 PM</option>
                          <option>04:00 PM</option>
                        </select>
                      </div>
                    </div>
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
              Confirm Appointment <FaCalendarAlt size={12} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}