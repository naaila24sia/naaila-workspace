import { FaUserAlt, FaArrowLeft } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import { NavLink } from "react-router-dom";

export default function AddOwners() {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <PageHeader
        title="Client Registration"
        subtitle="Add a new owner to the directory database."
        breadcrumb={["Dashboard", "Owners", "Add Owner"]}
        icon={FaUserAlt} 
      >
        <NavLink to="/owners">
          <button className="flex items-center gap-2 bg-white border border-border text-text-main hover:text-white hover:bg-primary hover:border-primary px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:scale-105 active:scale-95 transition-all uppercase tracking-wider">
            <FaArrowLeft className="text-xs" /> Back to Owners
          </button>
        </NavLink>
      </PageHeader>

      {/* FORM */}
      <div className="bg-bg-card rounded-[2.5rem] border border-border shadow-soft overflow-hidden">
        <div className="grid grid-cols-2 gap-12 p-10">
          {/* LEFT: Identity & Contact */}
          <div>
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide mb-5">
              <FaUserAlt />
              <span className="text-sm">Identity & Contact</span>
            </div>

            <div className="space-y-5">
              <InputField label="Full Name" placeholder="e.g. John Doe" />

              <div className="grid grid-cols-2 gap-5">
                <InputField label="Phone Number" placeholder="+62..." />
                <InputField
                  label="Email Address"
                  placeholder="example@mail.com"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Initial Pet Info */}
          <div>
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide mb-5">
              <FaUserAlt />
              <span className="text-sm">Initial Pet Info</span>
            </div>

            <div className="space-y-5">
              <InputField label="Pet Name" placeholder="e.g. Snowy" />
              
              <p className="small-text text-text-soft -mt-2 italic">
                This will create the first pet entry for this owner.
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-border p-8 flex justify-end gap-5">
          <NavLink to="/owners">
            <SubmitButton type="secondary">
              Discard
            </SubmitButton>
          </NavLink>

          <SubmitButton type="primary">
            Save to Directory
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}