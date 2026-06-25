import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle2, Calendar, ShieldCheck, Award, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
    >
      {/* Background Blurs */}
      <div className="absolute top-1/4 left-1/4 -z-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -z-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Left Content */}
      <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-primary/15 text-success font-semibold text-xs px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-success rounded-full animate-ping" />
          <span>Klinik Hewan Modern Berbasis Cloud</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-text-main leading-[1.1] tracking-tight"
        >
          Kesehatan Peliharaan Anda, Dipantau dengan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-dark via-primary to-accent relative inline-block">
            Teknologi Pintar
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-main/70 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body"
        >
          Klinik Hewan VetCare memadukan kasih sayang medis terbaik dengan sistem digital terintegrasi. Booking dokter online, akses rekam medis instan, dan dapatkan pengingat vaksinasi otomatis di WhatsApp Anda.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
        >
          <a
            href="#contact"
            className="button-primary px-8 py-4 shadow-lg shadow-primary/20 hover:scale-[1.03] active:scale-[0.97] transition-all rounded-xl flex items-center gap-2 text-sm font-bold"
          >
            <span>Booking Dokter Hewan</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#analytics"
            className="border border-border bg-bg-card hover:bg-bg-main hover:border-text-soft text-text-main font-semibold px-6 py-4 rounded-xl transition duration-300 flex items-center gap-2 text-sm"
          >
            <Play className="w-4 h-4 text-accent fill-accent" />
            <span>Lihat Portal Member</span>
          </a>
        </motion.div>

        {/* Quick Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50 max-w-md mx-auto lg:mx-0"
        >
          <div className="flex items-center gap-1.5 text-xs text-text-main/80 font-medium">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span>Antrean Tertata Rapi</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-text-main/80 font-medium">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span>WhatsApp Reminder</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-text-main/80 font-medium">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span>Rekam Medis Cloud</span>
          </div>
        </motion.div>
      </div>

      {/* Hero Right: Premium Interactive Member Portal Mockup */}
      <div className="lg:col-span-6 relative mt-8 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-bg-card border border-border shadow-soft rounded-[2rem] overflow-hidden p-3 md:p-4 hover:shadow-2xl transition-shadow duration-500"
        >
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/60">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-error-soft" />
              <span className="w-3 h-3 rounded-full bg-warning" />
              <span className="w-3 h-3 rounded-full bg-success-soft" />
            </div>
            <div className="bg-bg-main text-[10px] text-text-soft px-8 py-1 rounded-lg border border-border/40 font-mono select-none">
              member.vetcareclinic.com/dashboard
            </div>
            <div className="w-6" />
          </div>

          {/* Mock App UI Grid */}
          <div className="grid grid-cols-12 gap-3 min-h-[300px] md:min-h-[380px]">
            {/* Member Sidebar Mockup */}
            <div className="col-span-3 bg-bg-main rounded-xl p-2.5 hidden sm:block space-y-2">
              <div className="h-6 w-full bg-primary/20 rounded-md mb-4 flex items-center justify-center text-[9px] font-black text-text-main">
                MEMBER AREA
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white shadow-sm">
                <div className="w-3.5 h-3.5 bg-primary rounded-sm" />
                <div className="text-[9px] font-bold text-text-main">Anabul Saya</div>
              </div>
              {["Janji Temu", "Rekam Medis", "Vaksinasi", "Poin Reward"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/50 transition">
                  <div className="w-3.5 h-3.5 bg-text-soft/20 rounded-sm" />
                  <div className="text-[9px] font-medium text-text-soft">{item}</div>
                </div>
              ))}
            </div>

            {/* Member Workspace Mockup */}
            <div className="col-span-12 sm:col-span-9 space-y-4 text-left">
              {/* Top Greeting */}
              <div className="flex justify-between items-center bg-bg-main/50 p-3 rounded-xl">
                <div>
                  <h4 className="text-xs font-extrabold text-text-main">Halo, Budi Darmawan!</h4>
                  <p className="text-[9px] text-text-soft font-semibold">Tingkat Keanggotaan: Gold Member</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/25 border border-primary flex items-center justify-center text-xs font-black text-text-main">
                  BD
                </div>
              </div>

              {/* Stats Row (Pets Profiling) */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="card p-3 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-text-soft font-bold uppercase">Luna</span>
                    <Heart className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="mt-2">
                    <p className="text-xs font-black text-text-main">Kucing Persia</p>
                    <span className="text-[8px] bg-success/15 text-success font-black px-1.5 py-0.5 rounded-md mt-1 block w-fit">Sehat</span>
                  </div>
                </div>

                <div className="card p-3 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-text-soft font-bold uppercase">Milo</span>
                    <Heart className="w-3.5 h-3.5 text-secondary-dark" />
                  </div>
                  <div className="mt-2">
                    <p className="text-xs font-black text-text-main">Golden Retriever</p>
                    <span className="text-[8px] bg-warning/15 text-warning-dark font-black px-1.5 py-0.5 rounded-md mt-1 block w-fit">Vaksin H-2</span>
                  </div>
                </div>

                <div className="card p-3 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-text-soft font-bold uppercase">Loyalty Poin</span>
                    <Award className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div className="mt-2">
                    <p className="text-xs font-black text-text-main">120 Poin</p>
                    <span className="text-[8px] text-accent font-black mt-1 block cursor-pointer hover:underline">Tukar Voucher</span>
                  </div>
                </div>
              </div>

              {/* Next Vaccine Scheduler */}
              <div className="card p-3 flex justify-between items-center bg-secondary/5 border border-secondary/20">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-secondary/15 rounded-lg text-secondary-dark">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-extrabold text-text-main">Jadwal Periksa Selanjutnya</h5>
                    <p className="text-[9px] text-text-soft">Vaksin Booster Rabies - Milo (Golden)</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-extrabold text-secondary-dark block">28 Juni 2026</span>
                  <span className="text-[8px] text-text-soft">Pukul 10:00 WIB</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Notification Badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-4 -bottom-6 bg-white border border-border shadow-2xl p-4 rounded-2xl flex items-center gap-3 max-w-[260px] cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="p-2 bg-success/15 rounded-xl">
            <ShieldCheck className="w-5 h-5 text-success animate-pulse" />
          </div>
          <div className="text-left">
            <p className="text-xs font-extrabold text-text-main">WhatsApp Reminder</p>
            <p className="text-[10px] text-text-soft leading-tight mt-0.5">
              Pesan WA: "Hai Budi, jadwal vaksin Milo besok jam 10:00. Ketik Y untuk konfirmasi!"
            </p>
          </div>
        </motion.div>

        {/* Floating Doctor Badge */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -left-6 top-1/3 bg-white border border-border shadow-2xl p-3.5 rounded-2xl flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300 hidden sm:flex"
        >
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-primary/20">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=60" alt="Doctor" className="w-full h-full object-cover" />
          </div>
          <div className="text-left text-xs">
            <p className="font-extrabold text-primary-hover">Dokter Siaga</p>
            <p className="text-text-soft font-semibold text-[9px]">Drh. Sarah - Spesialis Bedah Kucing</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
