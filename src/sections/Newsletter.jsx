import React, { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email tidak boleh kosong.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Masukkan format email yang valid.");
      return;
    }

    // Success state
    setError("");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-dark/95 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-neutral-800">
          
          {/* Decorative Pattern */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-primary/25 border border-primary/40 flex items-center justify-center text-primary mx-auto">
              <Mail className="w-6 h-6 animate-bounce" />
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-extrabold tracking-tight">
              Tips Perawatan Anabul Langsung dari Dokter Hewan
            </h2>
            
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
              Bergabunglah dengan ribuan pemilik hewan lainnya untuk menerima panduan gizi harian, tips mencegah penyakit musiman satwa, dan info promosi diskon klinik langsung ke email Anda.
            </p>

            {submitted ? (
              <div className="bg-success/15 border border-success/30 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 max-w-md mx-auto">
                <CheckCircle2 className="w-8 h-8 text-success animate-pulse" />
                <div className="text-center">
                  <p className="text-sm font-bold text-white">Berhasil Berlangganan!</p>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
                    Terima kasih. Kami akan mengirimkan tips edukasi kesehatan anabul berkualitas secara berkala.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <div className="flex-1 text-left">
                  <input
                    type="email"
                    placeholder="Masukkan alamat email Anda"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary placeholder:text-neutral-500"
                  />
                  {error && (
                    <p className="text-[11px] text-error-soft font-bold mt-1.5 pl-1 text-left">
                      {error}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="button-accent text-sm px-6 py-3 shrink-0 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer font-bold"
                >
                  Dapatkan Edukasi
                </button>
              </form>
            )}

            <p className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider">
              Kami Menjaga Privasi Anda. Batalkan Berlangganan Kapan Saja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
