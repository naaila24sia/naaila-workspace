import React from "react";
import { Clock, ShieldCheck, Heart, Sparkles, X, Check } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Rata-rata Waktu Menunggu", value: "< 10 Menit", icon: Clock },
    { label: "Tingkat Kepuasan Pemilik", value: "99.4%", icon: Heart },
    { label: "Anabul Terdaftar", value: "5,000+", icon: Sparkles },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Comparison Block on Left */}
        <div className="lg:col-span-6 space-y-6">
          <div className="text-center lg:text-left">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
              Tentang Klinik VetCare
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-main mt-4 leading-tight">
              Standar Baru Perawatan Medis Hewan
            </h2>
            <p className="text-text-soft text-base mt-2 leading-relaxed">
              Kami memadukan dokter spesialis berpengalaman, fasilitas laboratorium modern, serta sistem digital untuk pengalaman berobat anabul yang nyaman dan bebas stres.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 text-left">
            {/* Conventional Clinic Card */}
            <div className="border border-border/80 rounded-2xl p-5 bg-bg-main/30 space-y-4">
              <div className="flex items-center gap-2 text-error font-extrabold text-sm uppercase tracking-wide">
                <X className="w-5 h-5 border-2 border-error rounded-full p-0.5" />
                <span>Klinik Biasa</span>
              </div>
              <ul className="space-y-3 text-xs text-text-main/80 font-medium">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-error shrink-0 mt-0.5" />
                  <span>Antrean pendaftaran panjang dan ruang tunggu yang bising.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-error shrink-0 mt-0.5" />
                  <span>Pemilik sering lupa jadwal berkala vaksinasi anabul.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-error shrink-0 mt-0.5" />
                  <span>Hasil lab kertas terpisah dan mudah tercecer/rusak.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-error shrink-0 mt-0.5" />
                  <span>Tidak ada pelacakan histori berat badan & nutrisi anabul.</span>
                </li>
              </ul>
            </div>

            {/* VetCare CRM Card */}
            <div className="border-2 border-primary rounded-2xl p-5 bg-primary/5 space-y-4 relative shadow-soft">
              <span className="absolute -top-3 right-4 bg-primary text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full">
                Sistem Kami
              </span>
              <div className="flex items-center gap-2 text-success font-extrabold text-sm uppercase tracking-wide">
                <Check className="w-5 h-5 text-success border-2 border-success rounded-full p-0.5" />
                <span>Klinik VetCare Modern</span>
              </div>
              <ul className="space-y-3 text-xs text-text-main/90 font-semibold">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span>Booking online instan dan antrean terjadwal rapi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span>Pengingat WhatsApp otomatis harian sebelum jadwal vaksin.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span>Rekam medis & resep digital terpusat di cloud yang aman.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span>Grafik tumbuh kembang dapat dipantau di portal member.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rich Description & Stats on Right */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4 text-text-main/80 text-sm leading-relaxed text-left">
            <p>
              Di <strong>Klinik Hewan VetCare</strong>, kami percaya bahwa setiap hewan peliharaan berhak mendapatkan perawatan berkualitas tinggi tanpa membuat pemiliknya stres. Oleh karena itu, kami merancang operasional klinik kami secara digital.
            </p>
            <p>
              Mulai dari pendaftaran melalui scan QR mandiri di lobi, konsultasi bersama dokter hewan yang memeriksa histori kesehatan anabul secara instan di tablet, hingga resep obat yang langsung tersambung ke apoteker untuk disiapkan. Semua berjalan efisien agar waktu anabul bersama dokter menjadi lebih maksimal dan menenangkan.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="space-y-2 text-center sm:text-left">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary-dark mx-auto sm:mx-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-extrabold text-text-main">
                      {stat.value}
                    </h4>
                    <p className="text-[11px] text-text-soft font-bold leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
