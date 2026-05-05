import { MdOutlineVideoCall, MdOutlineHomeWork, MdCheckCircleOutline } from "react-icons/md";
import { FaPaw, FaChartLine, FaRegClock } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8 bg-bg-main min-h-screen font-body">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="h2 text-text-main">Dashboard</h1>
          <p className="small-text text-text-soft">Welcome back 👋</p>
        </div>

        <button className="flex items-center gap-2 border border-border px-4 py-2 rounded-xl small-text font-semibold text-text-soft hover:bg-bg-card transition">
          <FaRegClock />
          Last 7 Days
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* WELCOME CARD */}
          <div className="card flex justify-between items-center">
            <div>
              <h1 className="h2">
                Welcome back, <span className="text-primary">Dr. Naaila</span>
              </h1>
              <p className="body-text text-text-soft mt-2">
                You have 12 appointments for today. Let's save lives!
              </p>
            </div>

            <img
              src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
              className="w-20 opacity-80 hidden md:block"
            />
          </div>

          {/* TITLE */}
          <div className="flex justify-between items-center">
            <h3 className="h3">Upcoming Bookings</h3>
            <button className="text-primary small-text font-semibold hover:underline">
              See all bookings
            </button>
          </div>

          {/* LIST */}
          <div className="space-y-4">
            {[
              { pet: "Miko", type: "Vaccination", owner: "Andi", time: "09:00 AM", category: "Clinic Visit", icon: <FaPaw /> },
              { pet: "Bruno", type: "Checkup", owner: "Santi", time: "10:30 AM", category: "Video Call", icon: <MdOutlineVideoCall /> },
              { pet: "Snowy", type: "Grooming", owner: "Budi", time: "02:00 PM", category: "House Visit", icon: <MdOutlineHomeWork /> },
            ].map((item, i) => (
              <div key={i} className="card flex items-center justify-between hover:shadow-soft transition">

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-bg-main rounded-xl flex items-center justify-center text-primary">
                    {item.icon}
                  </div>

                  <div>
                    <p className="caption text-text-soft uppercase tracking-wider">
                      {item.category}
                    </p>

                    <h4 className="font-heading font-semibold text-text-main">
                      {item.pet}
                      <span className="text-text-soft text-xs ml-1">
                        ({item.type})
                      </span>
                    </h4>

                    <p className="small-text text-text-soft">
                      Owner: {item.owner} •{" "}
                      <span className="text-primary font-semibold">
                        {item.time}
                      </span>
                    </p>
                  </div>
                </div>

                <button className="px-5 py-2 bg-bg-main hover:bg-primary hover:text-white rounded-xl small-text font-semibold transition">
                  VIEW DETAILS
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* WARNING CARD */}
          <div className="p-6 rounded-2xl bg-warning/20 border border-border shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <FaRegClock className="text-warning-dark" />
              <h4 className="font-semibold text-warning-dark">
                Incomplete Bookings
              </h4>
            </div>

            <h2 className="h1 text-warning-dark">4</h2>

            <button className="mt-4 w-full py-2 bg-white rounded-xl small-text font-semibold text-warning-dark hover:shadow-soft">
              VIEW DETAILS
            </button>
          </div>

          {/* SUCCESS CARD */}
          <div className="p-6 rounded-2xl bg-success-soft border border-border shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <MdCheckCircleOutline className="text-success" size={24} />
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-success">
                +40%
              </span>
            </div>

            <h4 className="font-semibold text-success">
              Completed Bookings
            </h4>

            <h2 className="h1 text-success mt-2">51</h2>

            <button className="mt-4 w-full py-2 bg-white rounded-xl small-text font-semibold text-success hover:shadow-soft">
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}