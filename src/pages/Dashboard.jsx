import { useState, useEffect } from "react";
import StatsCard from "../components/StatsCard";
import AppointmentTable from "../components/AppointmentTable";
import ChartCard from "../components/ChartCard";
import ReportCard from "../components/ReportCard";
import PageHeader from "../components/PageHeader";
import { NavLink } from "react-router-dom";
import { FaPaw, FaChartPie, FaPlus } from "react-icons/fa";

export default function Dashboard() {
  // 1. Buat state untuk menampung nama user secara dinamis
  const [userName, setUserName] = useState("Loading...");

  // 2. Ambil nama dari localStorage saat halaman dimuat
  useEffect(() => {
    const savedUser = localStorage.getItem("user_profile");
    if (savedUser) {
      const userObj = JSON.parse(savedUser);
      setUserName(userObj.name); // Mengambil nama dinamis (misal: "admin123", "Ahmad", dll)
    } else {
      setUserName("Guest"); // Fallback jika tidak terdeteksi data login
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-bg-main font-body">
      
      <main className="flex-1 p-6 overflow-y-auto">
        {/* WELCOME */}
        <div className="flex items-center justify-between mb-6">
          <div>
            {/* 3. Teks Dr Naaila diganti dengan variabel userName */}
            <h1 className="h1">Welcome back, {userName} 👋</h1>

            <p className="body-text text-text-soft mt-1">
              Your clinic is working in the mode:
              <span className="text-primary font-semibold"> Normal</span>
            </p>
          </div>

          <button className="button-primary px-5 py-2.5">Add Patient</button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          <StatsCard title="Total Clients" value={"8434"} icon={<FaPaw />} />

          <StatsCard title="Total Staff" value="240" icon={<FaChartPie />} />

          <StatsCard title="Total Rooms" value="340" icon={<FaPlus />} />
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-3 gap-5">
          <AppointmentTable />

          <div className="space-y-5">
            <ChartCard />
            <ReportCard />
          </div>
        </div>
      </main>
    </div>
  );
}