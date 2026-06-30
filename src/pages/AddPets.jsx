import { FaPaw, FaCloudUploadAlt, FaSave, FaArrowLeft } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import SubmitButton from "../components/SubmitButton";
import { NavLink } from "react-router-dom";

export default function AddPets() {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <PageHeader
        title="Patient Profile"
        subtitle="Enter the medical identity for the new anabul."
        breadcrumb={["Dashboard", "Pets", "Add Pet"]}
        icon={FaPaw} 
      >
        <NavLink to="/pets">
          <button className="flex items-center gap-2 bg-white border border-border text-text-main hover:text-white hover:bg-primary hover:border-primary px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:scale-105 active:scale-95 transition-all uppercase tracking-wider">
            <FaArrowLeft className="text-xs" /> Back to Pets
          </button>
        </NavLink>
      </PageHeader>

      {/* FORM */}
      <div className="bg-bg-card rounded-[2.5rem] border border-border shadow-soft overflow-hidden">
        {/* CONTENT */}
        <div className="grid grid-cols-2 gap-12 p-10">
          {/* LEFT: Identity & Photo */}
          <div>
            {/* TITLE */}
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide mb-5">
              <FaPaw />
              <span className="text-sm">Identity & Photo</span>
            </div>

            {/* PHOTO */}
            <div className="border-2 border-dashed border-border rounded-[2rem] h-[180px] flex flex-col items-center justify-center mb-8 bg-white/50 hover:bg-white hover:border-primary/50 transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-2xl bg-bg-main border border-border flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
                <FaCloudUploadAlt className="text-primary text-2xl" />
              </div>
              <p className="small-text text-text-soft mt-5 uppercase tracking-wide font-bold">
                Click to upload pet photo
              </p>
            </div>

            {/* INPUT */}
            <div className="space-y-5">
              <InputField label="Pet Name" placeholder="e.g. Snowy" />

              <div className="grid grid-cols-2 gap-5">
                <SelectField
                  label="Species / Type"
                  options={["Dog", "Cat", "Rabbit", "Bird"]}
                />
                <SelectField label="Gender" options={["Male", "Female"]} />
              </div>
            </div>
          </div>

          {/* RIGHT: Ownership & Status Detail */}
          <div>
            {/* TITLE */}
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide mb-5">
              <FaPaw />
              <span className="text-sm">Ownership & Status</span>
            </div>

            <div className="space-y-5">
              <InputField
                label="Breed / Variety"
                placeholder="e.g. Golden Retriever"
              />

              {/* Grid untuk menyamakan komposisi baris */}
              <div className="grid grid-cols-2 gap-5">
                <InputField label="Age" placeholder="e.g. 2 Years" />

                {/* Status disamakan dengan opsi yang ada di tabel */}
                <SelectField
                  label="Initial Status"
                  options={["Healthy", "Treatment", "Sick"]}
                />
              </div>

              {/* OWNER BOX */}
              <div className="border border-border bg-bg-main/30 rounded-[2rem] p-6 mt-4 shadow-inner">
                <InputField
                  label="Parent / Owner"
                  placeholder="Search registered owner..."
                />
                <p className="text-[10px] font-black italic text-text-soft mt-3 uppercase tracking-wider">
                  *note: owner must be registered first in the directory
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-border p-8 flex justify-end gap-5 bg-bg-main/10">
          <NavLink to="/pets">
            <SubmitButton type="secondary">Discard</SubmitButton>
          </NavLink>

          <SubmitButton type="primary">
            Save Patient
            <FaSave className="ml-1" />
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}
