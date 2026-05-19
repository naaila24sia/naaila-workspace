import Badge from "./Badge";
import Pets from "../data/Appointments.json";

export default function AppointmentTable() {
  return (
    <div className="col-span-2 card p-5">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">

        <h3 className="h3">
          Upcoming Appointments
        </h3>

        <button className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center">
          +
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full">

        <thead>

          <tr className="border-b border-border">

            <th className="py-3 text-left small-text text-text-soft">
              Pet
            </th>

            <th className="py-3 text-left small-text text-text-soft">
              Owner
            </th>

            <th className="py-3 text-left small-text text-text-soft">
              Appointment
            </th>

            <th className="py-3 text-left small-text text-text-soft">
              Date
            </th>

            <th className="py-3 text-left small-text text-text-soft">
              Status
            </th>
          </tr>
        </thead>

        <tbody>

          {Pets.map((item) => (

            <tr
              key={item.id}
              className="border-b border-border last:border-none"
            >

              {/* PET */}
              <td className="py-3">

                <div className="flex items-center gap-3">

                  <img
                    src={item.img}
                    alt={item.pet}
                    className="w-11 h-11 rounded-2xl bg-bg-main p-1"
                  />

                  <div>

                    <p className="text-[13px] font-semibold text-text-main">
                      {item.pet}
                    </p>

                    <p className="small-text text-text-soft">
                      {item.type}
                    </p>
                  </div>
                </div>
              </td>

              {/* OWNER */}
              <td className="text-[13px] text-text-main">
                {item.owner}
              </td>

              {/* SERVICE */}
              <td className="text-[13px] text-text-main">
                {item.service}
              </td>

              {/* DATE */}
              <td className="text-[13px] text-text-main">
                {item.date}
              </td>

              {/* STATUS */}
              <td>
                <Badge status={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}