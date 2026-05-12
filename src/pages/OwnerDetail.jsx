import { useParams, NavLink } from "react-router-dom";
import ownersData from "../data/Owners.json";

export default function OwnerDetail() {
  const { id } = useParams();

  const owner = ownersData.find(
    (item) => item.id.toString() === id
  );

  if (!owner) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Owner Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 bg-bg-main min-h-screen">

      {/* BACK BUTTON */}
      <NavLink to="/owners">
        <button className="mb-6 px-5 py-2 bg-white border border-border rounded-xl font-bold hover:bg-bg-main transition">
          ← Back
        </button>
      </NavLink>

      {/* MAIN CARD */}
      <div className="bg-white rounded-[2rem] border border-border shadow-soft p-8">

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

          {/* AVATAR */}
          <div
            className={`w-48 h-48 rounded-[2rem] flex items-center justify-center text-6xl font-black shadow-lg border-4 border-white ${owner.color}`}
          >
            {owner.initial}
          </div>

          {/* DETAILS */}
          <div className="flex-1 space-y-4">

            {/* HEADER */}
            <div>
              <h1 className="text-4xl font-black text-text-main uppercase">
                {owner.name}
              </h1>

              <p className="text-primary font-bold uppercase tracking-widest mt-1">
                OWNER ID-00{owner.id}
              </p>
            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

              {/* PHONE */}
              <div className="bg-bg-main rounded-2xl p-4">
                <p className="text-xs font-black uppercase text-text-soft">
                  Phone Number
                </p>

                <p className="text-lg font-bold text-text-main mt-1">
                  {owner.phone}
                </p>
              </div>

              {/* EMAIL */}
              <div className="bg-bg-main rounded-2xl p-4">
                <p className="text-xs font-black uppercase text-text-soft">
                  Email Address
                </p>

                <p className="text-lg font-bold text-text-main mt-1 break-all">
                  {owner.email}
                </p>
              </div>

              {/* REGISTERED PETS */}
              <div className="bg-bg-main rounded-2xl p-4 md:col-span-2">
                <p className="text-xs font-black uppercase text-text-soft">
                  Registered Pets
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  {owner.pets.map((pet, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 rounded-xl bg-primary-soft text-primary font-bold shadow-sm"
                    >
                      {pet}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* STATUS BADGE */}
            <div className="mt-6">
              <span className="px-5 py-2 rounded-xl text-sm font-black uppercase tracking-widest bg-primary-soft text-primary">
                {owner.petsCount} Total Pets
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}