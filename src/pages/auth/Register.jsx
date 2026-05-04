import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="font-barlow">
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-poppins font-black text-text-main uppercase tracking-tight">
          Join the Pack <span className="text-primary">✨</span>
        </h2>
        <p className="text-[11px] font-bold text-text-soft uppercase tracking-widest mt-1">
          Create New Admin Account
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Email Input */}
        <div className="mb-5">
          <label className="block text-[10px] font-black text-text-soft uppercase tracking-[0.15em] mb-2 ml-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-5 py-3 bg-bg-main border border-border rounded-2xl text-sm font-bold text-text-main outline-none focus:ring-4 focus:ring-primary-soft focus:border-primary transition-all placeholder-text-soft/30"
            placeholder="new.admin@anabul.com"
          />
        </div>

        {/* Password Input */}
        <div className="mb-5">
          <label className="block text-[10px] font-black text-text-soft uppercase tracking-[0.15em] mb-2 ml-1">
            Create Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-5 py-3 bg-bg-main border border-border rounded-2xl text-sm font-bold text-text-main outline-none focus:ring-4 focus:ring-primary-soft focus:border-primary transition-all placeholder-text-soft/30"
            placeholder="••••••••"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-8">
          <label className="block text-[10px] font-black text-text-soft uppercase tracking-[0.15em] mb-2 ml-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-5 py-3 bg-bg-main border border-border rounded-2xl text-sm font-bold text-text-main outline-none focus:ring-4 focus:ring-primary-soft focus:border-primary transition-all placeholder-text-soft/30"
            placeholder="••••••••"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-black py-4 px-4 rounded-2xl transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3"
        >
          <FaUserPlus /> Register Account
        </button>
      </form>
      
      {/* Back to Login Link */}
      <p className="text-center mt-8 text-[11px] font-bold text-text-soft uppercase tracking-wider">
        Already have an account? {" "}
        <Link to="/login" className="text-primary font-black hover:underline decoration-2 underline-offset-4">
          Login Here
        </Link>
      </p>
    </div>
  );
}