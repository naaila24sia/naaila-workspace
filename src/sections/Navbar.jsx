import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Layanan", href: "#features" },
    { name: "Portal Anabul", href: "#analytics" },
    { name: "Alur", href: "#workflow" },
    { name: "Dokter", href: "#doctors" },
    { name: "Benefit", href: "#benefits" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-card/80 backdrop-blur-lg border-b border-border/80 shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 cursor-pointer group">
          <div className="transition-transform group-hover:scale-105 duration-300">
            <h1 className="font-heading text-3xl font-extrabold text-text-main tracking-tight">
              Vet<span className="text-primary group-hover:text-primary-hover transition-colors">Care</span>
            </h1>
            <p className="text-[10px] text-text-soft mt-0.5 uppercase tracking-widest font-bold block">
              Klinik Dokter Hewan
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 font-semibold text-sm text-text-main/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative hover:text-primary transition duration-300 py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/login"
            className="text-text-main font-semibold text-sm hover:text-primary px-4 py-2 rounded-xl transition duration-300"
          >
            Login
          </a>
          <a
            href="#contact"
            className="button-primary text-sm shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
          >
            <span>Daftar Anabul</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-text-main hover:text-primary transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-bg-card border-b border-border/80 shadow-lg overflow-hidden absolute w-full left-0 z-40"
          >
            <div className="px-6 py-6 flex flex-col gap-4 font-semibold text-base text-text-main/95">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors py-2 border-b border-border/30 last:border-none"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border/30">
                <a
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 font-bold hover:text-primary transition-colors"
                >
                  Portal Member
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center button-primary flex justify-center items-center gap-2"
                >
                  <span>Daftar Anabul</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
