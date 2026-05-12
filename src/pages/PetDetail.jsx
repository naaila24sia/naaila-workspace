import { useParams, NavLink } from "react-router-dom";
import petsData from "../data/Pets.json";

export default function PetDetail() {
  const { id } = useParams();

  const pet = petsData.find(
    (item) => item.id.toString() === id
  );

  if (!pet) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Pet Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 bg-bg-main min-h-screen">
      
      {/* BACK BUTTON */}
      <NavLink to="/pets">
        <button className="mb-6 px-5 py-2 bg-white border border-border rounded-xl font-bold hover:bg-bg-main transition">
          ← Back
        </button>
      </NavLink>

      {/* CARD */}
      <div className="bg-white rounded-[2rem] border border-border shadow-soft p-8">
        
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          
          {/* IMAGE */}
          <div className="w-48 h-48 bg-primary-soft rounded-[2rem] flex items-center justify-center border-4 border-white shadow-lg">
            <img
              src={pet.img}
              alt={pet.pet}
              className="w-36 h-36 object-contain"
            />
          </div>

          {/* DETAIL */}
          <div className="flex-1 space-y-4">
            
            <div>
              <h1 className="text-4xl font-black text-text-main uppercase">
                {pet.pet}
              </h1>

              <p className="text-primary font-bold uppercase tracking-widest mt-1">
                ID-00{pet.id}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              
              <div className="bg-bg-main rounded-2xl p-4">
                <p className="text-xs font-black uppercase text-text-soft">
                  Type
                </p>
                <p className="text-lg font-bold text-text-main mt-1">
                  {pet.type}
                </p>
              </div>

              <div className="bg-bg-main rounded-2xl p-4">
                <p className="text-xs font-black uppercase text-text-soft">
                  Breed
                </p>
                <p className="text-lg font-bold text-text-main mt-1">
                  {pet.breed}
                </p>
              </div>

              <div className="bg-bg-main rounded-2xl p-4">
                <p className="text-xs font-black uppercase text-text-soft">
                  Age
                </p>
                <p className="text-lg font-bold text-text-main mt-1">
                  {pet.age}
                </p>
              </div>

              <div className="bg-bg-main rounded-2xl p-4">
                <p className="text-xs font-black uppercase text-text-soft">
                  Gender
                </p>
                <p className="text-lg font-bold text-text-main mt-1">
                  {pet.gender}
                </p>
              </div>

              <div className="bg-bg-main rounded-2xl p-4">
                <p className="text-xs font-black uppercase text-text-soft">
                  Owner
                </p>
                <p className="text-lg font-bold text-text-main mt-1">
                  {pet.owner}
                </p>
              </div>

              <div className="bg-bg-main rounded-2xl p-4">
                <p className="text-xs font-black uppercase text-text-soft">
                  Last Visit
                </p>
                <p className="text-lg font-bold text-text-main mt-1">
                  {pet.last_visit}
                </p>
              </div>

            </div>

            {/* STATUS */}
            <div className="mt-6">
              <span
                className={`px-5 py-2 rounded-xl text-sm font-black uppercase tracking-widest ${
                  pet.status === "Healthy"
                    ? "bg-green-100 text-green-600"
                    : pet.status === "Recovery"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {pet.status}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}