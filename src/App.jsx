import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";

function App() {
  //Lazy load pages
  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const Appointments = lazy(() => import("./pages/Appointments"));
  const Pets = lazy(() => import("./pages/Pets"));
  const Owners = lazy(() => import("./pages/Owners"));

  const NotFound = lazy(() => import("./pages/NotFound"));
  const Error400 = lazy(() => import("./pages/Error400"));
  const Error401 = lazy(() => import("./pages/Error401"));
  const Error403 = lazy(() => import("./pages/Error403"));

  const AddAppointments = lazy(() => import("./pages/AddApointments"));
  const AddPet = lazy(() => import("./pages/AddPets"));
  const AddOwner = lazy(() => import("./pages/AddOwners"));

  //Layout
  const MainLayout = lazy(() => import("./layouts/MainLayout"));
  const AuthLayout = lazy(() => import("./layouts/AuthLayout"));

  //Auth pages
  const Login = lazy(() => import("./pages/auth/Login"));
  const Register = lazy(() => import("./pages/auth/Register"));
  const Forgot = lazy(() => import("./pages/auth/Forgot"));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/owners" element={<Owners />} />

          <Route path="/appointments/add" element={<AddAppointments />} />
          <Route path="/pets/add" element={<AddPet />} />
          <Route path="/owners/add" element={<AddOwner />} />

          <Route path="/400" element={<Error400 />} />
          <Route path="/401" element={<Error401 />} />
          <Route path="/403" element={<Error403 />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
