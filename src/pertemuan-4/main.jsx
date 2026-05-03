import { createRoot } from "react-dom/client";
import "./tailwind.css";
import GuestView from "./GuestView";
import AdminView from "./AdminView";

createRoot(document.getElementById("root")).

    render(
        <div className="bg-gray-100 min-h-screen">
            <GuestView />
            <AdminView />
        </div>
);
