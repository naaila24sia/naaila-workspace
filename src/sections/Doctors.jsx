import React from "react";
import { Star, ShieldCheck, Heart, Stethoscope } from "lucide-react";

export default function Doctors() {
  const doctors = [
    {
      name: "Drh. Sarah Amalia",
      specialty: "Spesialis Kesehatan Kucing (Feline Medicine)",
      experience: "8 Tahun Pengalaman",
      education: "Lulusan Universitas Airlangga",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=350",
      color: "border-primary hover:shadow-primary/10",
      badgeColor: "bg-primary/10 text-primary-hover",
    },
    {
      name: "Drh. Ridwan Hakim",
      specialty: "Spesialis Bedah Hewan & Ortopedi",
      experience: "10 Tahun Pengalaman",
      education: "Lulusan Institut Pertanian Bogor",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=350",
      color: "border-secondary hover:shadow-secondary/10",
      badgeColor: "bg-secondary/10 text-secondary-dark",
    },
    {
      name: "Drh. Nadia Safira",
      specialty: "Spesialis Gigi Satwa & Perawatan Mulut",
      experience: "6 Tahun Pengalaman",
      education: "Lulusan Universitas Gadjah Mada",
      avatar: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=350",
      color: "border-accent hover:shadow-accent/10",
      badgeColor: "bg-accent/10 text-accent-hover",
    },
  ];

  return (
    <section id="doctors" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
            Tim Medis Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-main tracking-tight mt-2">
            Ditangani oleh Dokter Hewan Spesialis Berpengalaman
          </h2>
          <p className="text-text-soft text-sm md:text-base leading-relaxed">
            Tim medis kami terdiri dari dokter hewan berlisensi resmi yang memiliki dedikasi tinggi serta sertifikasi keahlian khusus di bidang kedokteran hewan.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className={`border border-border/60 rounded-3xl overflow-hidden bg-bg-card shadow-soft hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between`}
            >
              {/* Image & Specialization Badge */}
              <div className="h-64 overflow-hidden relative group">
                <img
                  src={doc.avatar}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-black uppercase px-3 py-1.5 rounded-xl shadow-md bg-white ${doc.badgeColor.split(" ")[1]}`}>
                    {doc.experience}
                  </span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-6 text-left space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-lg ${doc.badgeColor}`}>
                    {doc.specialty}
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-text-main pt-1">
                    {doc.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-text-soft">
                    <Stethoscope className="w-4 h-4 text-primary shrink-0" />
                    <span>{doc.education}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-success font-black text-xs">
                    <ShieldCheck className="w-4.5 h-4.5" />
                    <span>Sertifikasi PDHI</span>
                  </div>
                  <a
                    href="#contact"
                    className="button-primary text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Booking Jadwal
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
