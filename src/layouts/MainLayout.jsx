import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
    return (
       <div className="bg-[var(--color-bg-main)] min-h-screen flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Header />

        <Outlet />
      </div>
    </div>
    );
}