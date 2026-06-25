import { useState, useEffect } from "react";
import { FaUserEdit, FaUserShield, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom"; 
import PageHeader from "../components/PageHeader";
import SubmitButton from "../components/SubmitButton";
import { authAPI } from "../services/authAPI";
import { MdError } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function EditUsers() {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true); 
  const [error, setError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "", 
  });

  useEffect(() => {
    const fetchTargetUser = async () => {
      try {
        setFetching(true);
        const response = await authAPI.fetchUserById(id); 
        
        if (response) {
          setDataForm({
            email: response.email || "",
            password: response.password || "",
            confirmPassword: response.password || "",
            role: response.role ? response.role.charAt(0).toUpperCase() + response.role.slice(1) : "",
          });
        }
      } catch (err) {
        console.error("Gagal memuat data user:", err);
        setError("Gagal memuat data pengguna dari server.");
      } finally {
        setFetching(false);
      }
    };

    if (id) fetchTargetUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setError(""); 

    // Validasi Input
    if (!dataForm.email || !dataForm.password || !dataForm.confirmPassword) {
      setError("Silakan isi semua field terlebih dahulu!");
      return;
    }

    if (!dataForm.role) {
      setError("Silakan pilih Role terlebih dahulu!");
      return;
    }

    if (dataForm.password !== dataForm.confirmPassword) {
      setError("Password dan Confirm Password tidak cocok!");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        email: dataForm.email,
        password: dataForm.password,
        role: dataForm.role.toLowerCase(),
      };

      console.log(`Mengupdate User ID: ${id} dengan Payload:`, payload);
      
      await authAPI.updateUser(id, payload);

      setShowSuccessModal(true);

    } catch (err) {
      console.error("Detail Lengkap Error API Update:", err);

      const msgFromServer = err.response?.data?.message || "";
      const msgDirect = err.message || "";
      const msgDescription = err.error_description || "";
      const msgHint = err.response?.data?.hint || ""; 

      const combinedErrors = `${msgFromServer} ${msgDirect} ${msgDescription} ${msgHint}`.toLowerCase();

      if (
        combinedErrors.includes("already exists") || 
        combinedErrors.includes("already registered") ||
        combinedErrors.includes("duplicate key") || 
        combinedErrors.includes("unique violation") || 
        err.response?.status === 409
      ) {
        setError("Email sudah terdaftar oleh pengguna lain! Gagal memperbarui.");
      } else {
        const displayError = err.response?.data?.message || err.message || "Gagal memperbarui user.";
        setError(`Gagal memperbarui data user: ${displayError}`);
      }
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3 text-text-soft font-bold font-barlow">
        <AiOutlineLoading3Quarters className="animate-spin text-primary text-3xl" />
        <p className="tracking-wide">loading user credentials...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Modify User Credentials"
        breadcrumb={["Dashboard", "Users", "Edit"]}
      />

      <div className="bg-bg-card rounded-[2.5rem] border border-border shadow-soft overflow-hidden">
        
        {/* HEADER FORM */}
        <div className="p-10 border-b border-border flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white text-xl shadow-lg">
            <FaUserEdit />
          </div>

          <div>
            <h2 className="font-heading text-4xl font-bold text-text-main uppercase">
              Update Account Details
            </h2>
            <p className="body-text text-text-soft mt-2">
              Modify system access rights and internal credentials for User ID: <span className="text-primary font-bold">USR-{String(id).padStart(3, '0')}</span>
            </p>
          </div>
        </div>

        {error && (
          <div className="mx-10 mt-6 bg-error-soft/20 text-error p-4 rounded-2xl flex items-center gap-2 text-sm border border-error/20">
            <MdError className="text-lg shrink-0" /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-12 p-10">
            
            {/* LEFT COLUMN: Identity & Role */}
            <div>
              <div className="flex items-center gap-2 mb-5 text-primary font-bold uppercase tracking-wide">
                <FaUserShield />
                <span className="text-sm">Account Identity</span>
              </div>

              <div className="space-y-5">
                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-main">Email Address</label>
                  <input 
                    name="email"
                    type="email"
                    placeholder="e.g. dokter.budi@vetcare.com"
                    value={dataForm.email}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-border bg-white text-text-main focus:outline-none focus:border-primary transition-all"
                    required
                  />
                </div>

                {/* Account Role */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-main">Account Role</label>
                  <select
                    name="role"
                    value={dataForm.role}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-border bg-white text-text-main focus:outline-none focus:border-primary transition-all cursor-pointer appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
                    required
                  >
                    <option value="" disabled hidden>Pilih Role...</option>
                    <option value="Admin">Admin</option>
                    <option value="Dokter">Dokter</option>
                    <option value="Member">Member</option>
                  </select>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Security Passwords */}
            <div>
              <div className="flex items-center gap-2 mb-5 text-primary font-bold uppercase tracking-wide">
                <FaLock />
                <span className="text-sm">Security & Password</span>
              </div>

              <div className="space-y-5">
                {/* Password */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-main">Password</label>
                  <div className="relative w-full">
                    <input 
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={dataForm.password}
                      onChange={handleChange}
                      className="w-full h-12 pl-4 pr-12 rounded-xl border border-border bg-white text-text-main focus:outline-none focus:border-primary transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-text-main transition-colors focus:outline-none"
                    >
                      {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-main">Confirm Password</label>
                  <div className="relative w-full">
                    <input 
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={dataForm.confirmPassword}
                      onChange={handleChange}
                      className="w-full h-12 pl-4 pr-12 rounded-xl border border-border bg-white text-text-main focus:outline-none focus:border-primary transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-text-main transition-colors focus:outline-none"
                    >
                      {showConfirmPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER ACTIONS */}
          <div className="border-t border-border p-8 flex justify-end gap-5">
            <SubmitButton 
              type="secondary" 
              onClick={() => navigate("/users")}
              disabled={loading}
            >
              Discard
            </SubmitButton>

            <SubmitButton 
              type="primary" 
              onClick={handleSubmit} 
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <AiOutlineLoading3Quarters className="animate-spin" /> Updating...
                </div>
              ) : (
                "Update User Account"
              )}
            </SubmitButton>
          </div>
        </form>
      </div>

      {/* SUCCESS DIALOG */}
      <AlertDialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <AlertDialogContent className="rounded-[2.5rem] border border-border bg-white p-8 max-w-sm mx-auto font-barlow flex flex-col items-center justify-center text-center shadow-2xl">
          <div className="flex flex-col items-center justify-center mb-5 shrink-0">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border-2 border-blue-100 shadow-sm">
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <AlertDialogHeader className="space-y-2 flex flex-col items-center justify-center w-full text-center border-none p-0">
            <AlertDialogTitle className="font-poppins font-black text-text-main text-2xl uppercase tracking-tight text-center w-full">
              Account Updated 🐾
            </AlertDialogTitle>

            <AlertDialogDescription className="text-sm text-text-soft/80 font-medium leading-relaxed px-4 text-center max-w-[290px]">
              The internal account credentials have been successfully updated and synced across all VetCare active servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="mt-8 flex flex-col items-center justify-center w-full border-none p-0 sm:justify-center">
            <AlertDialogAction 
              onClick={() => navigate("/users")}
              className="w-full max-w-[240px] h-12 rounded-xl bg-primary text-white font-black uppercase tracking-wider text-xs shadow-lg shadow-primary/20 hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 outline-none cursor-pointer flex items-center justify-center border-none"
            >
              Back to Users
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}