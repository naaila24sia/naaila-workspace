import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Bagaimana cara mendaftarkan anabul saya pertama kali?",
      a: "Anda dapat mendaftar langsung secara online melalui link 'Daftar Anabul' di bagian atas website, atau mengisi formulir kontak di bawah. Data pendaftaran Anda akan langsung tersambung dan Anda akan menerima tautan akses Portal Member.",
    },
    {
      q: "Apakah saya bisa melihat hasil laboratorium anabul saya?",
      a: "Ya. Setiap hasil pemeriksaan laboratorium (cek darah, tes urin, rontgen) akan diunggah oleh dokter hewan kami secara langsung ke cloud dan dapat Anda unduh dalam format PDF/gambar di Portal Member.",
    },
    {
      q: "Bagaimana cara kerja pengingat WhatsApp dari klinik?",
      a: "Sistem otomatis kami terintegrasi langsung dengan kalender imunisasi/kontrol dokter. H-3 sebelum jadwal vaksinasi booster atau janji temu anabul tiba, kami akan mengirim pesan otomatis WhatsApp lengkap dengan tombol konfirmasi kedatangan Anda.",
    },
    {
      q: "Bagaimana cara menukarkan poin loyalitas member?",
      a: "Setiap transaksi bernilai Rp 10.000 akan dikonversi menjadi 1 poin reward. Poin terkumpul dapat ditukar dengan voucher diskon makanan hewan, grooming salon gratis, atau diskon biaya konsultasi dokter langsung di Portal Member Anda.",
    },
    {
      q: "Apakah rekam medis anabul saya aman?",
      a: "Kami menjaga kerahasiaan medis anabul Anda dengan sangat ketat. Seluruh riwayat pengobatan dan informasi profil pemilik dienkripsi menggunakan standar keamanan cloud terkini (AES-256) dan tidak akan dibagikan ke pihak ketiga.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-bg-main relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
            Tanya Jawab (FAQ)
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-main tracking-tight mt-2">
            Pertanyaan yang Sering Diajukan Pemilik Hewan
          </h2>
          <p className="text-text-soft text-sm leading-relaxed text-center">
            Temukan jawaban cepat mengenai pendaftaran anabul, cara melihat rekam medis, integrasi pengingat WhatsApp, dan penukaran poin member.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className="bg-white border border-border/60 rounded-2xl overflow-hidden shadow-soft transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 font-heading font-bold text-sm md:text-base text-text-main hover:text-primary transition-colors cursor-pointer text-left"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-text-soft shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-soft shrink-0" />
                  )}
                </button>

                {/* Collapse Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-text-soft leading-relaxed border-t border-border/30">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
