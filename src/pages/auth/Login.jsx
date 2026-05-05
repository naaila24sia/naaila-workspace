import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdError } from "react-icons/md";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((res) => {
        localStorage.setItem("token", "login");
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err.response?.data?.message || err.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {/* TITLE */}
      <h2 className="text-[28px] font-semibold text-text-main mb-2">
        Log in
      </h2>

      <p className="text-sm text-text-soft mb-6">
        Not a member yet?{" "}
        <span className="text-accent font-semibold cursor-pointer">
          Register now
        </span>
      </p>

      {/* ERROR */}
      {error && (
        <div className="bg-error-soft text-error p-3 rounded-lg mb-4 flex items-center gap-2 text-sm">
          <MdError /> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* EMAIL */}
        <input
          type="text"
          name="email"
          placeholder="Email or Username"
          onChange={handleChange}
          className="input focus:ring-accent"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="input focus:ring-accent"
        />

        {/* OPTIONS */}
        <div className="flex items-center justify-between text-sm text-text-soft">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Keep me logged in
          </label>

          <span className="text-accent cursor-pointer hover:underline">
            Forgot password?
          </span>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition"
        >
          {loading ? (
            <>
              <AiOutlineLoading3Quarters className="animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <FaPaw /> SIGN UP
            </>
          )}
        </button>

        {/* DIVIDER */}
        <p className="text-center text-sm text-text-soft mt-4">
          Or sign in with
        </p>

        {/* SOCIAL */}
        <div className="flex justify-center gap-4 mt-2">
          {["G", "A", "F", "X"].map((item, i) => (
            <div
              key={i}
              className="w-10 h-10 flex items-center justify-center border border-border rounded-full text-text-main hover:bg-bg-main cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </form>
    </>
  );
}