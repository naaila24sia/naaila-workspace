import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { authAPI } from "../services/authAPI";

export default function Register() {
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

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
        role: dataForm.role
      };

      await authAPI.registerUsers(payload);

      setSuccess("Akun berhasil dibuat! Silakan login dengan akun baru Anda.");
      setDataForm({ email: "", password: "", confirmPassword: "", role: "" });

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      setError("Gagal mendaftarkan akun. Email mungkin sudah terdaftar atau masalah jaringan.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-body">

      {/* TITLE */}
      <div className="mb-6">
        <h2 className="text-[28px] font-semibold text-text-main">
          Create Account
        </h2>

        <p className="text-sm text-text-soft mt-2">
          Join the platform and manage your veterinary system.
        </p>
      </div>

      {/* ERROR & SUCCESS ALERT */}
      {error && (
        <div className="bg-error-soft/20 text-error p-3 rounded-lg mb-4 flex items-center gap-2 text-sm border border-error/20">
          <MdError className="text-lg shrink-0" /> {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-sm border border-green-200">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* EMAIL */}
        <div>
          <label className="block text-xs text-text-soft mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="new.admin@anabul.com"
            value={dataForm.email}
            onChange={handleChange}
            className="input focus:ring-accent w-full"
            required
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block text-xs text-text-soft mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={dataForm.password}
            onChange={handleChange}
            className="input focus:ring-accent w-full"
            required
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <div>
          <label className="block text-xs text-text-soft mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            value={dataForm.confirmPassword}
            onChange={handleChange}
            className="input focus:ring-accent w-full"
            required
          />
        </div>

        {/* DROPDOWN ROLE */}
        <div>
          <label className="block text-xs text-text-soft mb-2">
            Account Role
          </label>
          <div className="relative">
            <select
              name="role"
              value={dataForm.role}
              onChange={handleChange}
              className={`input focus:ring-accent w-full appearance-none cursor-pointer pr-10 ${
                dataForm.role === "" ? "text-text-soft" : "text-text-main"
              }`}
              required
            >
              <option value="" disabled hidden>Role</option>
              <option value="admin" className="text-text-main">Admin</option>
              <option value="dokter" className="text-text-main">Dokter</option>
            </select>
            
            {/* Ikon panah kustom */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-soft">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition cursor-pointer mt-2"
        >
          {loading ? (
            <>
              <AiOutlineLoading3Quarters className="animate-spin text-lg" />
              Registering...
            </>
          ) : (
            <>
              <FaUserPlus /> Register Account
            </>
          )}
        </button>
      </form>

      {/* LOGIN LINK */}
      <p className="text-center mt-6 text-sm text-text-soft">
        Already have an account?{" "}
        <Link to="/login" className="text-accent font-semibold hover:underline">
          Login here
        </Link>
      </p>

    </div>
  );
}