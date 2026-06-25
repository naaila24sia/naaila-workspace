import React from "react";
import { motion } from "framer-motion";

// Sections Imports
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import TrustedBy from "../sections/TrustedBy";
import About from "../sections/About";
import Features from "../sections/Features";
import DashboardPreview from "../sections/DashboardPreview";
import Workflow from "../sections/Workflow";
import Benefits from "../sections/Benefits";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import Newsletter from "../sections/Newsletter";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Guest() {
  return (
    <div className="bg-bg-main text-text-main font-body antialiased min-h-screen selection:bg-primary/30 relative">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* Main Page Layout Wrapper */}
      <main>
        {/* 2. HERO SECTION */}
        <Hero />

        {/* 3. TRUSTED BY SECTION */}
        <TrustedBy />

        {/* 4. TENTANG VETCARE CRM */}
        <About />

        {/* 5. FITUR UTAMA CRM */}
        <Features />

        {/* 6. DASHBOARD PREVIEW & ANALYTICS */}
        <DashboardPreview />

        {/* 7. CRM WORKFLOW TIMELINE */}
        <Workflow />

        {/* 8. BENEFIT OPERASIONAL */}
        <Benefits />

        {/* 9. TESTIMONIALS */}
        <Testimonials />

        {/* 10. FAQ (ACCODRION) */}
        <FAQ />

        {/* 11. NEWSLETTER */}
        <Newsletter />

        {/* 12. CONTACT FORM & MAP */}
        <Contact />
      </main>

      {/* 13. FOOTER */}
      <Footer />
    </div>
  );
}