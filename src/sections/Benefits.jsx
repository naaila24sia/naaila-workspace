import React from "react";
import { Clock, ShieldAlert, Sparkles, TrendingUp, HelpCircle, Heart, PhoneCall, Award } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "Bebas Antre & Cepat",
      icon: Clock,
      color: "bg-primary/10 text-primary-hover",
      desc: "Booking dokter online dari rumah, konfirmasi dengan scan QR di klinik. Waktu tunggu terpangkas hingga di bawah 10 menit.",
    },
    {
      title: "Reminder Otomatis WA",
      icon: PhoneCall,
      color: "bg-secondary/10 text-secondary-dark",
      desc: "Pesan WhatsApp pengingat otomatis dikirim ke ponsel Anda sebelum tanggal jatuh tempo vaksinasi booster atau kontrol bulanan anabul.",
    },
    {
      title: "Rekam Medis Transparan",
      icon: ShieldAlert,
      color: "bg-accent/10 text-accent-hover",
      desc: "Lihat hasil diagnosis dokter, resep obat, catatan laboratorium, dan riwayat klinis anabul secara lengkap kapan pun melalui Portal Member.",
    },
    {
      title: "Loyalty Poin & Hadiah",
      icon: Award,
      color: "bg-success-soft/10 text-success",
      desc: "Tiap transaksi pemeriksaan, grooming, atau belanja pakan di apotek menghasilkan poin member yang dapat ditukar voucher diskon khusus.",
    },
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-bg-main relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-main tracking-tight mt-2">
            Mengapa Pemilik Anabul Mempercayakan VetCare?
          </h2>
          <p className="text-text-soft text-sm md:text-base leading-relaxed">
            Kami mengintegrasikan teknologi medis terbaik dan kemudahan akses digital demi memastikan pengalaman berobat yang paling nyaman bagi Anda dan anabul.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="card border border-border/50 bg-white hover:border-primary hover:-translate-y-1.5 transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div className="space-y-4 text-left">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${benefit.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-text-main">
                    {benefit.title}
                  </h3>
                  <p className="text-text-soft text-xs leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
