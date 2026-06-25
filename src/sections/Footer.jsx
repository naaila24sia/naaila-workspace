import React from "react";
import { ArrowUp } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800 text-left">
        
        {/* Company Column */}
        <div className="md:col-span-5 space-y-4">
          <a href="#home" className="inline-block group">
            <h1 className="font-heading text-3xl font-extrabold text-white tracking-tight">
              Vet<span className="text-primary group-hover:text-primary-hover transition-colors">Care</span>
            </h1>
            <p className="text-[10px] text-white/40 mt-0.5 uppercase tracking-widest font-bold block">
              Klinik Dokter Hewan
            </p>
          </a>
          
          <p className="text-neutral-400 text-xs md:text-sm max-w-sm leading-relaxed">
            Mitra andalan untuk digitalisasi manajemen klinik hewan. Menyediakan platform rekam medis elektronik, otomasi WhatsApp, dan sistem loyalitas terpadu.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <a href="#" className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary transition duration-300">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary transition duration-300">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary transition duration-300">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary transition duration-300">
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-primary">Tautan Cepat</h4>
          <ul className="space-y-2 text-xs md:text-sm text-neutral-400">
            <li><a href="#about" className="hover:text-white transition duration-300">Tentang Kami</a></li>
            <li><a href="#features" className="hover:text-white transition duration-300">Fitur CRM</a></li>
            <li><a href="/login" className="hover:text-white transition duration-300">Portal Member</a></li>
            <li><a href="#workflow" className="hover:text-white transition duration-300">Alur Kerja</a></li>
            <li><a href="#faq" className="hover:text-white transition duration-300">Tanya Jawab (FAQ)</a></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-accent">Legalitas & Kontak</h4>
          <ul className="space-y-2 text-xs md:text-sm text-neutral-400">
            <li><a href="#" className="hover:text-white transition duration-300">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Syarat & Ketentuan</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Service Level Agreement (SLA)</a></li>
            <li className="pt-2 text-[11px] text-neutral-400 font-medium">
              Senin - Jumat: 09:00 - 18:00 WIB
            </li>
            <li className="text-[11px] text-success font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-success rounded-full animate-ping" />
              <span>Tim Dukungan Teknis Siaga</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
        <p>© 2026 VetCare CRM System. Hak cipta dilindungi undang-undang.</p>
        <button
          onClick={handleScrollToTop}
          className="bg-neutral-900 border border-neutral-800 p-2.5 rounded-xl hover:text-white hover:border-primary transition-all duration-300 flex items-center justify-center gap-1.5 group cursor-pointer"
          aria-label="Kembali ke atas"
        >
          <span className="text-[10px] font-bold">Ke Atas</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
