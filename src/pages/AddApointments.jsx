import { FaCalendarAlt, FaPaw, FaStethoscope, FaClipboardList } from "react-icons/fa";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import DateField from "../components/DateField";
import PageHeader from "../components/PageHeader";
import { NavLink } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import doctorsData from "../data/Doctors.json";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function AddAppointment() {
  // Get active doctors for selection
  const activeDoctors = doctorsData
    .filter((doc) => doc.status === "Aktif")
    .map((doc) => `${doc.name} (${doc.specialization})`);

  return (
    <div className="space-y-6 font-barlow">
      <PageHeader
        title="New Appointment"
        breadcrumb={["Dashboard", "Appointments", "Add"]}
      />

      {/* CARD CONTAINER */}
      <div className="bg-bg-card rounded-[2.5rem] border border-border shadow-soft overflow-hidden">
        
        {/* BOOKING DETAILS HEADER */}
        <div className="p-10 border-b border-border flex items-start gap-5 bg-white">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white text-xl shadow-lg">
            <FaCalendarAlt />
          </div>

          <div>
            <h2 className="font-heading text-4xl font-bold text-text-main uppercase">
              Booking Details
            </h2>
            <p className="body-text text-text-soft mt-2">
              Schedule a new medical session for our fluffy patient.
            </p>
          </div>
        </div>

        {/* FORM CONTENT */}
        <div className="p-10 space-y-10 bg-white/50">
          
          {/* TWO COLUMNS (PATIENT & SCHEDULE) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* LEFT - Patient Information */}
            <div>
              <div className="flex items-center gap-2 mb-5 text-primary font-bold uppercase tracking-wide">
                <FaPaw />
                <span className="text-sm">Patient Information</span>
              </div>

              <div className="space-y-5">
                <InputField label="Pet Name" placeholder="e.g. Bella" />

                <div className="grid grid-cols-2 gap-5">
                  <SelectField
                    label="Pet Type"
                    options={["Dog", "Cat", "Rabbit", "Bird", "Hamster"]}
                  />
                  <InputField label="Owner Name" placeholder="e.g. Wawan" />
                </div>
              </div>
            </div>

            {/* RIGHT - Service & Schedule */}
            <div>
              <div className="flex items-center gap-2 mb-5 text-primary font-bold uppercase tracking-wide">
                <FaStethoscope />
                <span className="text-sm">Service & Schedule</span>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <SelectField
                    label="Service Type"
                    options={["Vaccination", "Checkup", "Surgery", "Grooming", "Sterilization"]}
                  />
                  <SelectField
                    label="Treatment Room"
                    options={["Ruang Periksa A", "Ruang Periksa B", "Ruang Periksa C", "Ruang Periksa D", "Ruang Bedah Utama", "Ruang Grooming C", "Ruang Grooming D"]}
                  />
                </div>

                <SelectField
                  label="Assign Doctor"
                  options={activeDoctors.length > 0 ? activeDoctors : ["No active doctors available"]}
                />

                <div className="grid grid-cols-2 gap-5">
                  <DateField label="Appointment Date" />
                  <SelectField
                    label="Time Slot"
                    options={["08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "01:00 PM", "02:30 PM", "03:00 PM", "04:00 PM"]}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* FULL WIDTH ROW - CLINICAL NOTES & SYMPTOMS */}
          <div className="border-t border-border pt-8">
            <div className="flex items-center gap-2 mb-5 text-primary font-bold uppercase tracking-wide">
              <FaClipboardList />
              <span className="text-sm">Symptoms & Clinical Notes</span>
            </div>
            
            <div className="space-y-2">
              <label className="body-text font-semibold uppercase text-text-main">
                Symptoms / Treatment Notes
              </label>
              <textarea
                rows={4}
                placeholder="Describe pet's symptoms, required treatment details, or special instructions..."
                className="w-full border border-border bg-white rounded-2xl p-4 text-sm font-medium text-text-main outline-none focus:ring-4 focus:ring-primary-soft transition-all placeholder:text-text-soft/40"
              />
            </div>
          </div>

        </div>

        {/* FOOTER ACTIONS */}
        <div className="border-t border-border p-8 flex justify-end gap-5 bg-white">
          <NavLink to="/appointments">
            <SubmitButton type="secondary">Discard</SubmitButton>
          </NavLink>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div>
                <SubmitButton type="primary">Confirm Appointment</SubmitButton>
              </div>
            </AlertDialogTrigger>

            <AlertDialogContent className="rounded-[2.5rem] border border-border bg-white p-8 max-w-sm mx-auto font-barlow flex flex-col items-center justify-center text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <div className="flex flex-col items-center justify-center mb-5 shrink-0">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center border-2 border-green-100 shadow-sm">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <AlertDialogHeader className="space-y-2 flex flex-col items-center justify-center w-full text-center border-none p-0">
                <AlertDialogTitle className="font-poppins font-black text-text-main text-2xl uppercase tracking-tight text-center w-full">
                  Appointment Created 🐾
                </AlertDialogTitle>

                <AlertDialogDescription className="text-sm text-text-soft/80 font-medium leading-relaxed px-4 text-center max-w-[290px]">
                  The appointment has been successfully created and scheduled
                  into the VetCare active system.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter className="mt-8 flex flex-col items-center justify-center w-full border-none p-0 before:hidden after:hidden sm:justify-center sm:space-x-0">
                <NavLink
                  to="/appointments"
                  className="w-full flex justify-center"
                >
                  <AlertDialogAction className="w-full max-w-[240px] h-12 rounded-xl bg-primary text-white font-black uppercase tracking-wider text-xs shadow-lg shadow-primary/20 hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 outline-none cursor-pointer flex items-center justify-center border-none">
                    View Appointments
                  </AlertDialogAction>
                </NavLink>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

      </div>
    </div>
  );
}
