import { FaPaperPlane, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Forgot() {
  return (
    <div className="font-body">

      {/* TITLE */}
      <div className="mb-6">
        <h2 className="text-[28px] font-semibold text-text-main">
          Forgot Password?
        </h2>

        <p className="text-sm text-text-soft mt-2 leading-relaxed">
          Enter your email and we'll send a reset link to your inbox.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">

        {/* EMAIL */}
        <div>
          <label className="block text-xs font-medium text-text-soft mb-2">
            Registered Email
          </label>

          <input
            type="email"
            placeholder="admin@anabul.com"
            className="input focus:ring-primary w-full text-text-main placeholder:text-text-soft bg-bg-main focus:bg-bg-card"
            required
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition cursor-pointer shadow-md shadow-primary/10"
        >
          <FaPaperPlane /> Send Reset Link
        </button>
      </form>

      {/* BACK */}
      <div className="text-center mt-6">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-text-soft hover:text-primary transition-colors font-medium"
        >
          <FaArrowLeft /> Back to Login
        </Link>
      </div>

    </div>
  );
}