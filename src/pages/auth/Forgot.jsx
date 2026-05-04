import { FaPaperPlane, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Forgot() {
  return (
    <div className="font-barlow">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-poppins font-black text-text-main uppercase tracking-tight">
          Forgot Password? <span className="text-primary">🔑</span>
        </h2>
        <p className="text-[11px] font-bold text-text-soft uppercase tracking-widest mt-3 leading-relaxed max-w-[250px] mx-auto">
          Enter your email and we'll send a reset link to your inbox.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Email Input */}
        <div className="mb-8">
          <label className="block text-[10px] font-black text-text-soft uppercase tracking-[0.15em] mb-2 ml-1">
            Registered Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-5 py-3 bg-bg-main border border-border rounded-2xl text-sm font-bold text-text-main outline-none focus:ring-4 focus:ring-primary-soft focus:border-primary transition-all placeholder-text-soft/30"
            placeholder="admin@anabul.com"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-black py-4 px-4 rounded-2xl transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3"
        >
          <FaPaperPlane className="text-[10px]" /> Send Reset Link
        </button>
      </form>
      
      {/* Back to Login Link */}
      <div className="text-center mt-10">
        <Link 
          to="/login" 
          className="inline-flex items-center gap-2 text-[10px] font-black text-text-soft uppercase tracking-widest hover:text-primary transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Login
        </Link>
      </div>
    </div>
  );
}