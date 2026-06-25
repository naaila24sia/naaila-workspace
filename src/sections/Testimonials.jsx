import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Sangat senang dengan WhatsApp reminder-nya! Kucing saya, Luna, tidak pernah telat vaksin rabies lagi karena H-3 saya sudah menerima pengingat dan bisa booking online.",
      author: "Rania Tasya",
      role: "Pemilik Luna (Kucing Persia)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      rating: 5,
    },
    {
      quote: "Grafik berat badan di Portal Member membantu saya memantau kondisi Milo (Golden Retriever) setelah sterilisasi agar dia tidak obesitas. Rekam medisnya juga bisa diakses kapan saja.",
      author: "Budi Darmawan",
      role: "Pemilik Milo (Golden Retriever)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      rating: 5,
    },
    {
      quote: "Dokternya sangat sabar dan penyayang binatang. Saya paling suka fitur resep obat digitalnya, saya tinggal tunggu SMS/WA bahwa obat di apotek sudah siap diambil tanpa perlu antre kasir.",
      author: "Jessica Albert",
      role: "Pemilik Kiki (Kelinci Anggora)",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-full">
            Ulasan Pemilik Anabul
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-main tracking-tight mt-2">
            Mengapa Mereka Memilih Klinik VetCare
          </h2>
          <p className="text-text-soft text-sm md:text-base leading-relaxed">
            Cerita jujur dari mereka yang telah mempercayakan kesehatan hewan kesayangannya di klinik kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="bg-bg-main/30 p-6 rounded-2xl border border-border/40 shadow-soft flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-text-main/80 text-sm leading-relaxed italic text-left">
                  "{testi.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-border/40 text-left">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-primary/20 shadow-inner">
                  <img
                    src={testi.avatar}
                    alt={testi.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-text-main">
                    {testi.author}
                  </h4>
                  <p className="text-text-soft text-[10px] font-semibold">
                    {testi.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
