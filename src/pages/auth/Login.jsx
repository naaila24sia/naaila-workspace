import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdError } from "react-icons/md"; // Sudah diperbaiki dari typo kemarin ya!
import { authAPI } from "../../services/authAPI";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dataForm.role) {
      setError("Silakan pilih Role terlebih dahulu!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const responseData = await authAPI.loginUsers(
        dataForm.email,
        dataForm.password,
      );

      if (responseData.length > 0) {
        const userMatched = responseData[0];

        if (userMatched.role.toLowerCase() !== dataForm.role.toLowerCase()) {
          setError(
            `Akun Anda terdaftar sebagai ${userMatched.role}, bukan ${dataForm.role}!`,
          );
          setLoading(false);
          return;
        }

        if (userMatched) {
          localStorage.setItem("token", "login-sukses-auth");
          localStorage.setItem("role", userMatched.role);

          localStorage.setItem(
            "user_profile",
            JSON.stringify({
              name:
                userMatched.name ||
                userMatched.username ||
                dataForm.email.split("@")[0],
              role: userMatched.role,
              avatar:
                userMatched.avatar ||
                "https://cdn-icons-png.flaticon.com/512/616/616408.png",
            }),
          );

          if (userMatched.role.toLowerCase() === "member") {
            navigate("/member");
          } else {
            navigate("/dashboard");
          }
        }
      } else {
        setError("Email atau password salah!");
      }
    } catch (err) {
      setError("Gagal terhubung ke database Supabase. Periksa jaringan Anda.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* TITLE */}
      <h2 className="font-heading text-[32px] font-semibold text-text-main mb-1">
        Log in
      </h2>

      <p className="text-sm text-text-soft mb-8">
        Not a member yet?{" "}
        <NavLink
          to="/register"
          className="text-primary font-semibold hover:underline transition-colors hover:text-primary-hover"
        >
          Register now
        </NavLink>
      </p>

      {/* ERROR ALERT */}
      {error && (
        <div className="bg-error/10 text-error p-3 rounded-lg mb-4 flex items-center gap-2 text-sm border border-error/20">
          <MdError className="text-lg shrink-0" /> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* EMAIL / USERNAME */}
        <input
          type="text"
          name="email"
          placeholder="Email or Username"
          value={dataForm.email}
          onChange={handleChange}
          className="py-3.5 px-5 bg-bg-main border border-border rounded-full text-text-main placeholder:text-text-soft focus:ring-primary focus:bg-bg-card transition-all text-sm w-full outline-none focus:ring-2"
          required
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={dataForm.password}
          onChange={handleChange}
          className="py-3.5 px-5 bg-bg-main border border-border rounded-full text-text-main placeholder:text-text-soft focus:ring-primary focus:bg-bg-card transition-all text-sm w-full outline-none focus:ring-2"
          required
        />

        {/* DROPDOWN ROLE */}
        <div className="relative">
          <select
            name="role"
            value={dataForm.role}
            onChange={handleChange}
            className={`py-3.5 px-5 bg-bg-main border border-border rounded-full focus:ring-primary focus:bg-bg-card transition-all text-sm w-full outline-none focus:ring-2 appearance-none cursor-pointer ${
              dataForm.role === "" ? "text-text-soft" : "text-text-main"
            }`}
            required
          >
            <option value="" disabled hidden>
              Role
            </option>
            {/* Ditambahkan bg-bg-card dan text-text-main agar pilihan dropdown tidak ungu/hitam bawaan browser */}
            <option value="admin" className="text-text-main bg-bg-card">
              Admin
            </option>
            <option value="dokter" className="text-text-main bg-bg-card">
              Dokter
            </option>
            <option value="member" className="text-text-main bg-bg-card">
              Member
            </option>
          </select>

          {/* Ikon panah kecil */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-text-soft">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        {/* OPTIONS */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-text-main/80 pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary"
            />
            Keep me logged in
          </label>

          <NavLink
            to="/forgot"
            className="text-text-main font-semibold hover:underline hover:text-primary transition-colors"
          >
            Forgot your password?
          </NavLink>
        </div>

        {/* SUBMIT BUTTON - Sekarang Pakai Hijau Utama (--color-primary) */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-primary/20 mt-4 cursor-pointer"
        >
          {loading ? (
            <>
              <AiOutlineLoading3Quarters className="animate-spin text-lg" />
              Logging in...
            </>
          ) : (
            "LOG IN"
          )}
        </button>

        {/* DIVIDER */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-border/50"></div>
          <span className="flex-shrink mx-4 text-xs text-text-soft font-medium">
            Or sign in with
          </span>
          <div className="flex-grow border-t border-border/50"></div>
        </div>

        {/* SOCIAL SIGN IN */}
        <div className="flex justify-center gap-4 pt-1">
          <button
            type="button"
            className="w-12 h-12 flex items-center justify-center border border-border rounded-full bg-bg-card hover:bg-bg-main transition shadow-sm cursor-pointer"
          >
            <FcGoogle className="text-xl" />
          </button>
          <button
            type="button"
            className="w-12 h-12 flex items-center justify-center border border-border rounded-full bg-bg-card hover:bg-bg-main transition shadow-sm cursor-pointer"
          >
            <FaApple className="text-xl text-dark" />
          </button>
          <button
            type="button"
            className="w-12 h-12 flex items-center justify-center border border-border rounded-full bg-bg-card hover:bg-bg-main transition shadow-sm cursor-pointer"
          >
            <FaFacebookF className="text-lg text-[#1877F2]" />
          </button>
          <button
            type="button"
            className="w-12 h-12 flex items-center justify-center border border-border rounded-full bg-bg-card hover:bg-bg-main transition shadow-sm cursor-pointer"
          >
            <RiTwitterXFill className="text-lg text-dark" />
          </button>
        </div>
      </form>
    </>
  );
}