import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Register() {
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

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">

        {/* EMAIL */}
        <div>
          <label className="block text-xs text-text-soft mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="new.admin@anabul.com"
            className="input focus:ring-accent"
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block text-xs text-text-soft mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="input focus:ring-accent"
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <div>
          <label className="block text-xs text-text-soft mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="input focus:ring-accent"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition"
        >
          <FaUserPlus /> Register Account
        </button>
      </form>

      {/* LOGIN LINK */}
      <p className="text-center mt-6 text-sm text-text-soft">
        Already have an account?{" "}
        <Link to="/" className="text-accent font-semibold hover:underline">
          Login here
        </Link>
      </p>

    </div>
  );
}