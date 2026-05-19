import { FaPaw, FaCloudUploadAlt, FaSave } from "react-icons/fa";

import PageHeader from "../components/PageHeader";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import SubmitButton from "../components/SubmitButton";

export default function AddPets() {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <PageHeader
        title="Patient Profile"
        subtitle="Enter the medical identity for the new anabul."
        breadcrumb={["Dashboard", "Pets", "Add Pet"]}
        icon={<FaPaw className="text-primary text-xl" />}
      />

      {/* FORM */}
      <div className="bg-bg-card rounded-[2.5rem] border border-border shadow-soft overflow-hidden">
        {/* CONTENT */}
        <div className="grid grid-cols-2 gap-12 p-10">
          {/* LEFT */}
          <div>
            {/* TITLE */}
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide mb-5">
              <FaPaw />

              <span className="text-sm">Identity & Photo</span>
            </div>

            {/* PHOTO */}
            <div className="border-2 border-dashed border-border rounded-[2rem] h-[180px] flex flex-col items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-bg-main border border-border flex items-center justify-center shadow-soft">
                <FaCloudUploadAlt className="text-primary text-2xl" />
              </div>

              <p className="small-text text-text-soft mt-5 uppercase tracking-wide">
                Click to upload pet photo
              </p>
            </div>

            {/* INPUT */}
            <div className="space-y-5">
              <InputField label="Pet Name" placeholder="e.g. Snowy" />

              <div className="grid grid-cols-2 gap-5">
                <SelectField
                  label="Species"
                  options={["Dog", "Cat", "Rabbit", "Bird"]}
                />

                <SelectField label="Gender" options={["Male", "Female"]} />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {/* TITLE */}
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide mb-5">
              <FaPaw />

              <span className="text-sm">Ownership Detail</span>
            </div>

            <div className="space-y-5">
              <InputField
                label="Breed / Variety"
                placeholder="e.g. Golden Retriever"
              />

              <InputField label="Birth Date / Age" placeholder="e.g. 2 Years" />

              {/* OWNER BOX */}
              <div className="border border-dark rounded-[2rem] p-6 mt-4">
                <label className="body-text font-semibold uppercase text-text-main">
                  Parent / Owner
                </label>

                <input
                  type="text"
                  placeholder="Search registered owner..."
                  className="input mt-4 h-16 rounded-2xl"
                />

                <p className="text-[10px] font-bold italic text-text-soft mt-4 uppercase">
                  *note: owner must be registered first
                </p>
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
            Save Patient
            <FaSave />
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}
