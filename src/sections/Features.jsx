import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Dog,
  Calendar,
  FileSpreadsheet,
  Syringe,
  TrendingUp,
  LineChart,
  BarChart4,
  MessageSquare,
  Mail,
  Heart,
  Award,
  Gift,
  Megaphone,
} from "lucide-react";

export default function Features() {
  const [activeTab, setActiveTab] = useState("operational");

  const categories = [
    { id: "operational", label: "Layanan Medis (Operational)", desc: "Kemudahan reservasi dan pencatatan medis digital anabul secara langsung." },
    { id: "collaborative", label: "Otomasi & Notifikasi (Collaborative)", desc: "Pemberitahuan real-time untuk mengingatkan jadwal perawatan anabul Anda." },
    { id: "strategic", label: "Keanggotaan & Diskon (Strategic)", desc: "Keuntungan eksklusif bagi pemilik loyal melalui pengumpulan poin reward." },
    { id: "analytical", label: "Pemantauan Tumbuh Kembang (Analytical)", desc: "Pelacakan berat badan dan riwayat nutrisi klinis untuk anabul sehat." },
  ];

  const featuresData = {
    operational: [
      { name: "Online Booking Dokter", icon: Calendar, desc: "Pilih dokter hewan spesialis, tanggal, dan waktu kunjungan secara online tanpa antrean resepsionis." },
      { name: "Digital EHR (Rekam Medis)", icon: FileSpreadsheet, desc: "Akses riwayat medis, diagnosis dokter, dan lampiran tes darah/rontgen anabul secara instan." },
      { name: "Kartu Vaksin Digital", icon: Syringe, desc: "Pencatatan riwayat vaksinasi anabul yang terintegrasi di cloud, mudah diunduh untuk perjalanan/boarding." },
      { name: "Profil Hewan Terpadu", icon: Dog, desc: "Penyimpanan data anabul (umur, ras, berat badan, alergi obat, makanan pantangan) yang terpusat." },
    ],
    collaborative: [
      { name: "WhatsApp Vaksin Reminder", icon: MessageSquare, desc: "Pengingat otomatis H-3 sebelum masa berlaku vaksin anabul habis langsung ke nomor WA Anda." },
      { name: "Notifikasi Pengambilan Obat", icon: Mail, desc: "Dapatkan pesan instan ketika resep obat racikan anabul telah selesai disiapkan oleh tim apoteker." },
      { name: "Feedback Kepuasan Klien", icon: Heart, desc: "Kesempatan memberikan ulasan pelayanan dokter pasca-kunjungan untuk peningkatan mutu klinik." },
    ],
    strategic: [
      { name: "Member Tiers (Silver/Gold)", icon: Award, desc: "Sistem keanggotaan klinik yang memberikan diskon jasa periksa, grooming, dan rawat inap khusus." },
      { name: "Loyalty Poin Reward", icon: Gift, desc: "Kumpulkan poin dari setiap transaksi periksa/belanja makanan untuk ditukarkan dengan layanan gratis." },
      { name: "Promo Khusus Anabul", icon: Megaphone, desc: "Penawaran diskon musiman khusus untuk jenis hewan terdaftar (misal: diskon scaling gigi kucing)." },
    ],
    analytical: [
      { name: "Grafik Berat & Suhu", icon: TrendingUp, desc: "Visualisasi tren kenaikan atau penurunan berat badan anabul guna mencegah obesitas." },
      { name: "Pelacakan Tumbuh Kembang", icon: LineChart, desc: "Pantau perkembangan tinggi dan lingkar tubuh anabul dari usia anakan hingga dewasa." },
      { name: "Analisis Nutrisi Klinis", icon: BarChart4, desc: "Rekomendasi pakan dan porsi kalori ideal berdasarkan tingkat keaktifan harian hewan." },
    ],
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-bg-main relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-full">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-main tracking-tight mt-2">
            Perawatan Hewan Berbasis Teknologi Modern
          </h2>
          <p className="text-text-soft text-sm md:text-base leading-relaxed">
            Menyediakan kenyamanan optimal bagi Anda dan perlindungan kesehatan menyeluruh bagi sahabat bulu kesayangan Anda.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 shadow-soft cursor-pointer ${
                activeTab === cat.id
                  ? "bg-primary text-white scale-[1.02]"
                  : "bg-white text-text-main/80 hover:bg-bg-main border border-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-text-main/90 font-bold text-sm">
            {categories.find((c) => c.id === activeTab)?.desc}
          </p>
        </div>

        {/* Tab Content Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {featuresData[activeTab].map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={index}
                    className="card border border-border/50 bg-white hover:border-primary hover:shadow-xl transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between"
                  >
                    <div className="space-y-4 text-left">
                      <div className="bg-primary/10 w-11 h-11 rounded-xl flex items-center justify-center text-primary-hover">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-text-main">
                        {feat.name}
                      </h3>
                      <p className="text-text-soft text-xs leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
