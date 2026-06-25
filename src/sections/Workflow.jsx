import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  QrCode,
  FolderOpen,
  Stethoscope,
  CloudLightning,
  Receipt,
  Gift,
  PhoneCall,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Scan QR Check-In",
      icon: QrCode,
      desc: "Saat tiba di klinik, cukup pindai kode QR di lobi dengan ponsel Anda untuk melakukan konfirmasi kedatangan.",
      crmFeature: "Antrean masuk antrean digital otomatis, menghemat waktu tunggu hingga 15 menit."
    },
    {
      title: "Profil Medis Aktif",
      icon: FolderOpen,
      desc: "Petugas resepsionis mendeteksi kedatangan Anda dan riwayat rekam medis anabul langsung aktif di layar komputer periksa.",
      crmFeature: "Pencarian profil instan menghindari kekeliruan rekam medis hewan."
    },
    {
      title: "Pemeriksaan Dokter",
      icon: Stethoscope,
      desc: "Dokter memeriksa anabul di ruang periksa dengan mendeteksi rekam medis dan alergi secara langsung.",
      crmFeature: "Hasil pemeriksaan, resep obat, dan instruksi terapi langsung diinput ke sistem digital."
    },
    {
      title: "Resep Digital",
      icon: CloudLightning,
      desc: "Setelah periksa, resep obat terkirim secara instan ke bagian farmasi/apotek tanpa perlu membawa kertas resep.",
      crmFeature: "Mengurangi kesalahan penafsiran tulisan tangan obat oleh apoteker."
    },
    {
      title: "Pembayaran Instan",
      icon: Receipt,
      desc: "Kasir memproses tagihan pengobatan secara transparan berdasarkan detail input tindakan dokter.",
      crmFeature: "Mendukung pembayaran non-tunai (QRIS, Kartu Debit, Transfer) yang cepat."
    },
    {
      title: "Poin Reward Member",
      icon: Gift,
      desc: "Setiap nominal transaksi periksa, grooming, atau belanja pakan otomatis dikonversi menjadi poin loyalitas member.",
      crmFeature: "Poin dapat dikumpulkan dan ditukar langsung di portal member anabul."
    },
    {
      title: "WhatsApp Reminder",
      icon: PhoneCall,
      desc: "Sebelum jadwal vaksinasi booster atau kontrol bulanan tiba, ponsel Anda akan menerima pesan WhatsApp pengingat otomatis.",
      crmFeature: "Sistem otomatis mengirim notifikasi H-3 dan H-1 lengkap dengan link konfirmasi jadwal."
    },
  ];

  return (
    <section id="workflow" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-secondary-dark font-bold text-xs uppercase tracking-widest bg-secondary/10 px-3 py-1.5 rounded-full">
            Alur Pelayanan Klinik
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-main tracking-tight mt-2">
            Pengalaman Berobat Anabul yang Cepat & Bebas Stres
          </h2>
          <p className="text-text-soft text-sm md:text-base leading-relaxed">
            Dari kedatangan pertama hingga pengingat pasca-kunjungan, kami mendigitalisasi proses klinik agar Anda tidak perlu mengantre lama.
          </p>
        </div>

        {/* Interactive Steps Flowchart */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch mt-10">
          
          {/* Left Column: Timeline Navigation */}
          <div className="lg:col-span-8 flex-1 grid grid-cols-3 sm:grid-cols-7 lg:grid-cols-3 xl:grid-cols-7 gap-4 items-center justify-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? "border-primary bg-primary/10 scale-105 shadow-md"
                      : "border-border/60 bg-bg-main/50 hover:bg-bg-main hover:border-text-soft"
                  }`}
                >
                  {/* Badge index */}
                  <span className={`absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border-2 border-white shadow-sm ${
                    isActive ? "bg-primary text-white" : "bg-text-soft text-white"
                  }`}>
                    {index + 1}
                  </span>

                  <Icon className={`w-6 h-6 ${isActive ? "text-primary-hover" : "text-text-soft group-hover:text-text-main"}`} />
                  <span className="text-[10px] font-bold text-center mt-2 truncate w-full leading-none">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Step Description Detail Card */}
          <div className="lg:w-96 shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="card border border-primary/40 bg-gradient-to-br from-white to-primary/5 p-6 h-full flex flex-col justify-between shadow-lg relative overflow-hidden text-left"
              >
                {/* Decorative Background Icon */}
                {React.createElement(steps[activeStep].icon, {
                  className: "absolute -right-8 -bottom-8 w-36 h-36 text-primary/10 pointer-events-none"
                })}

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary-hover shrink-0">
                      {React.createElement(steps[activeStep].icon, { className: "w-5 h-5" })}
                    </div>
                    <div>
                      <p className="text-[9px] text-text-soft font-bold uppercase">Langkah {activeStep + 1} dari 7</p>
                      <h4 className="font-heading font-extrabold text-base text-text-main">{steps[activeStep].title}</h4>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs text-text-main/80 leading-relaxed">
                      {steps[activeStep].desc}
                    </p>
                    <div className="bg-white/80 border border-border/40 p-3 rounded-xl">
                      <p className="text-[10px] text-primary-hover font-black uppercase tracking-wider">Keunggulan Digital:</p>
                      <p className="text-xs text-text-main font-semibold mt-1 leading-snug">
                        {steps[activeStep].crmFeature}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 mt-6 border-t border-border/40">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="text-xs font-bold text-text-soft hover:text-text-main transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  >
                    ← Sebelumnya
                  </button>
                  <button
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="text-xs font-bold text-primary hover:text-primary-hover transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  >
                    Selanjutnya →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
