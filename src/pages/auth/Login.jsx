import { FaPaw } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  // 🔹 navigate + state (sesuai praktikum)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  // 🔹 handle change
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // 🔹 handle submit (GAYA PRAKTIKUM)
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }

        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // 🔹 error & loading (style praktikum, tapi masuk ke UI kamu)
  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <MdError className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <AiOutlineLoading3Quarters className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div className="font-barlow">
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-poppins font-black text-text-main uppercase tracking-tight">
          Welcome Back{" "}
          <span className="text-primary inline-block hover:animate-bounce">
            👋
          </span>
        </h2>
        <p className="text-[11px] font-bold text-text-soft uppercase tracking-widest mt-1">
          Admin Portal Access
        </p>
      </div>

      {/* 🔹 STATUS (ditambah, tapi ga ganggu tampilan utama) */}
      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="mb-5">
          <label className="block text-[10px] font-black text-text-soft uppercase tracking-[0.15em] mb-2 ml-1">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            className="w-full px-5 py-3 bg-bg-main border border-border rounded-2xl text-sm font-bold text-text-main outline-none focus:ring-4 focus:ring-primary-soft focus:border-primary transition-all placeholder-text-soft/30"
            placeholder="admin@anabul.com"
          />
        </div>

        {/* Password Input */}
        <div className="mb-2">
          <label className="block text-[10px] font-black text-text-soft uppercase tracking-[0.15em] mb-2 ml-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="w-full px-5 py-3 bg-bg-main border border-border rounded-2xl text-sm font-bold text-text-main outline-none focus:ring-4 focus:ring-primary-soft focus:border-primary transition-all placeholder-text-soft/30"
            placeholder="••••••••"
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-8">
          <button
            type="button"
            className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-white font-black py-4 px-4 rounded-2xl transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {loading ? (
            <>
              <AiOutlineLoading3Quarters className="animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <FaPaw /> Sign In to Dashboard
            </>
          )}
        </button>
      </form>

      {/* Optional */}
      <p className="text-center mt-8 text-[11px] font-bold text-text-soft uppercase tracking-wider">
        Don't have an account?{" "}
        <button
          type="button"
          className="text-primary font-black hover:underline"
        >
          Create an Account
        </button>
      </p>
    </div>
  );
}