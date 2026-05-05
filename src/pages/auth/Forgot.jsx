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
            className="input focus:ring-accent"
            required
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition"
        >
          <FaPaperPlane /> Send Reset Link
        </button>
      </form>

      {/* BACK */}
      <div className="text-center mt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-text-soft hover:text-accent transition"
        >
          <FaArrowLeft /> Back to Login
        </Link>
      </div>

    </div>
  );
}