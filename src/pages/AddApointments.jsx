import { FaCalendarAlt, FaPaw, FaStethoscope } from "react-icons/fa";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import DateField from "../components/DateField";
import PageHeader from "../components/PageHeader";
import { FaSearch, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
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
  return (
    <div className="space-y-6">
      <PageHeader
        title="New Appointment"
        breadcrumb={["Dashboard", "Appointments", "Add"]}
      />

      {/* HEADER */}
      <div className="bg-bg-card rounded-[2.5rem] border border-border shadow-soft overflow-hidden">
        <div className="p-10 border-b border-border flex items-start gap-5">
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

        {/* FORM */}
        <div className="grid grid-cols-2 gap-12 p-10">
          {/* LEFT */}
          <div>
            {/* TITLE */}
            <div className="flex items-center gap-2 mb-5 text-primary font-bold uppercase tracking-wide">
              <FaPaw />

              <span className="text-sm">Patient Information</span>
            </div>

            <div className="space-y-5">
              <InputField label="Pet Name" placeholder="e.g Bella" />

              <div className="grid grid-cols-2 gap-5">
                <SelectField
                  label="Pet Type"
                  options={["Dog", "Cat", "Rabbit"]}
                />

                <InputField label="Owner Name" placeholder="e.g Wawan" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {/* TITLE */}
            <div className="flex items-center gap-2 mb-5 text-primary font-bold uppercase tracking-wide">
              <FaStethoscope />

              <span className="text-sm">Service & Schedule</span>
            </div>

            <div className="space-y-5">
              <SelectField
                label="Service Type"
                options={["Vaccination", "Checkup", "Surgery"]}
              />

              <div className="grid grid-cols-2 gap-5">
                <DateField label="Appointment Date" />

                <SelectField
                  label="Time Slot"
                  options={["09:00 AM", "11:00 AM", "01:00 PM"]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-border p-8 flex justify-end gap-5">
          <SubmitButton type="secondary">Discard</SubmitButton>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <SubmitButton type="primary">Confirm Appointment</SubmitButton>
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
