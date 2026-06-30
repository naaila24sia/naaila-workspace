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
  const Doctors = lazy(() => import("./pages/Doctors"));
  const Users = lazy(() => import("./pages/Users"));
  const Feedback = lazy(() => import("./pages/Feedback"));
  const Guest = lazy(() => import("./pages/Guest"));
  const Member = lazy(() => import("./pages/Member"));

  const NotFound = lazy(() => import("./pages/NotFound"));
  const Error400 = lazy(() => import("./pages/Error400"));
  const Error401 = lazy(() => import("./pages/Error401"));
  const Error403 = lazy(() => import("./pages/Error403"));

  const AddAppointments = lazy(() => import("./pages/AddApointments"));
  const AddPets = lazy(() => import("./pages/AddPets"));
  const AddOwner = lazy(() => import("./pages/AddOwners"));
  const AddUsers = lazy(() => import("./pages/AddUsers"));

  const EditUsers = lazy(() => import("./pages/EditUsers"));
  const AppointmentDetail = lazy(() => import("./pages/AppointmentDetail"));
  const PetDetail = lazy(() => import("./pages/PetDetail"));
  const OwnerDetail = lazy(() => import("./pages/OwnerDetail"));

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
        <Route path="/" element={<Guest />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/member" element={<Member />} />
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/users" element={<Users />} />
          <Route path="/feedback" element={<Feedback />} />

          <Route path="/appointments/add" element={<AddAppointments />} />
          <Route path="/pets/add" element={<AddPets />} />
          <Route path="/owners/add" element={<AddOwner />} />
          <Route path="/users/add" element={<AddUsers />} />

          <Route path="/users/edit/:id" element={<EditUsers />} />

          <Route path="/appointments/:id" element={<AppointmentDetail />} />
          <Route path="/petdetail/:id" element={<PetDetail />} />
          <Route path="/ownerdetail/:id" element={<OwnerDetail />} />

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
