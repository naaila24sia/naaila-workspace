import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, Heart } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    ownerName: "",
    petName: "",
    petType: "Kucing",
    doctorName: "Drh. Sarah Amalia",
    appointmentDate: "",
    complaint: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.ownerName.trim()) newErrors.ownerName = "Nama pemilik wajib diisi.";
    if (!formData.petName.trim()) newErrors.petName = "Nama anabul wajib diisi.";
    if (!formData.appointmentDate) newErrors.appointmentDate = "Pilih tanggal kunjungan.";
    if (!formData.complaint.trim()) newErrors.complaint = "Tuliskan keluhan atau jenis layanan (vaksin/grooming).";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({
        ownerName: "",
        petName: "",
        petType: "Kucing",
        doctorName: "Drh. Sarah Amalia",
        appointmentDate: "",
        complaint: "",
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Booking Form */}
        <div className="lg:col-span-7 bg-bg-main/30 border border-border/60 rounded-3xl p-6 md:p-10 shadow-soft text-left space-y-6">
          <div>
            <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-full">
              Booking Jadwal Medis
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-text-main mt-4 leading-tight">
              Reservasi Jadwal Konsultasi Dokter Hewan
            </h2>
            <p className="text-text-soft text-xs md:text-sm mt-1 leading-relaxed">
              Jadwalkan kunjungan periksa medis, vaksinasi, atau grooming anabul Anda secara praktis tanpa antrean lobi.
            </p>
          </div>

          {submitted ? (
            <div className="bg-success/10 border border-success/30 p-6 rounded-2xl flex flex-col items-center justify-center gap-3">
              <CheckCircle2 className="w-10 h-10 text-success animate-pulse" />
              <div className="text-center">
                <p className="text-base font-extrabold text-text-main">Reservasi Berhasil Diajukan!</p>
                <p className="text-xs text-text-soft mt-1 leading-relaxed max-w-sm">
                  Terima kasih. Konfirmasi jadwal janji temu dan nomor antrean digital anabul Anda akan segera kami kirimkan ke WhatsApp Anda dalam waktu 10 menit.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nama Pemilik */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-text-main uppercase tracking-wider pl-1">Nama Pemilik (Anda)</label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Darmawan"
                    className="input text-sm"
                  />
                  {errors.ownerName && <p className="text-[10px] text-error font-semibold pl-1">{errors.ownerName}</p>}
                </div>
                
                {/* Nama Anabul */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-text-main uppercase tracking-wider pl-1">Nama Anabul</label>
                  <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleChange}
                    placeholder="Contoh: Milo"
                    className="input text-sm"
                  />
                  {errors.petName && <p className="text-[10px] text-error font-semibold pl-1">{errors.petName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Jenis Anabul */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-text-main uppercase tracking-wider pl-1">Jenis Hewan</label>
                  <select
                    name="petType"
                    value={formData.petType}
                    onChange={handleChange}
                    className="input text-sm bg-white"
                  >
                    <option value="Kucing">Kucing</option>
                    <option value="Anjing">Anjing</option>
                    <option value="Kelinci">Kelinci</option>
                    <option value="Burung">Burung</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Pilihan Dokter */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-text-main uppercase tracking-wider pl-1">Pilih Dokter</label>
                  <select
                    name="doctorName"
                    value={formData.doctorName}
                    onChange={handleChange}
                    className="input text-sm bg-white"
                  >
                    <option value="Drh. Sarah Amalia">Drh. Sarah Amalia (Feline)</option>
                    <option value="Drh. Ridwan Hakim">Drh. Ridwan Hakim (Bedah)</option>
                    <option value="Drh. Nadia Safira">Drh. Nadia Safira (Gigi)</option>
                  </select>
                </div>

                {/* Tanggal Kunjungan */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-text-main uppercase tracking-wider pl-1">Tanggal Rencana</label>
                  <input
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    className="input text-sm"
                  />
                  {errors.appointmentDate && <p className="text-[10px] text-error font-semibold pl-1">{errors.appointmentDate}</p>}
                </div>
              </div>

              {/* Keluhan */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-text-main uppercase tracking-wider pl-1">Keluhan Medis / Jenis Perawatan</label>
                <textarea
                  name="complaint"
                  value={formData.complaint}
                  onChange={handleChange}
                  placeholder="Deskripsikan kondisi anabul saat ini atau tuliskan jenis periksa (contoh: Vaksin Tahunan, Mandi Jamur, scaling gigi)..."
                  rows={4}
                  className="input text-sm resize-none"
                />
                {errors.complaint && <p className="text-[10px] text-error font-semibold pl-1">{errors.complaint}</p>}
              </div>

              <button
                type="submit"
                className="button-accent text-sm w-full py-3.5 mt-2 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all font-bold cursor-pointer uppercase tracking-wider shadow-lg shadow-accent/25"
              >
                Ajukan Jadwal Janji Temu
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Contact info & Map */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          {/* Contact Details */}
          <div className="bg-bg-main/20 border border-border/50 rounded-3xl p-6 text-left space-y-4">
            <h3 className="font-heading font-bold text-lg text-text-main">
              Klinik Utama VetCare Gading Serpong
            </h3>
            
            <div className="space-y-4 text-xs md:text-sm text-text-main/80">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="leading-snug">
                  Jl. Boulevard Satwa Raya No. 42, Gading Serpong, Tangerang, Banten 15810
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-secondary-dark shrink-0 mt-0.5" />
                <p>Hotline: +62 (21) 5432-1090 / 0812-3456-7890 (WhatsApp Darurat)</p>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p>care@vetcareclinic.com / info@vetcareclinic.com</p>
              </div>
            </div>
          </div>

          {/* Premium Google Map Mockup */}
          <div className="bg-bg-main/30 border border-border/80 rounded-3xl overflow-hidden h-64 shadow-soft relative flex items-center justify-center group cursor-pointer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d15863.023247012353!2d106.6133917871582!3d-6.230043899999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbe00e572009%3A0xe21288258385b0d0!2sSummarecon%20Mall%20Serpong!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(1.1) opacity(0.85)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VetCare Clinic Location Map"
            />
            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-border shadow-lg p-2 rounded-xl text-left text-[10px] font-bold text-text-main flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
              <span>Lokasi Klinik Utama Kami</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
