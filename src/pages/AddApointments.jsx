import { FaCalendarAlt, FaPaw, FaStethoscope } from "react-icons/fa";

import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import DateField from "../components/DateField";
import PageHeader from "../components/PageHeader";
import { FaSearch, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";

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
        <SubmitButton type="secondary">
          Discard
        </SubmitButton>

        <SubmitButton type="primary">
          Confirm Appointment
        </SubmitButton>
      </div>
    </div>
    </div>
  );
}
