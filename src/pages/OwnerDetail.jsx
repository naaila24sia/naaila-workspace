import { useParams, NavLink } from "react-router-dom";
import { 
  FaArrowLeft, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, 
  FaCalendarAlt, FaExclamationTriangle, FaCommentAlt, FaUserClock
} from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import Customers from "../data/Customers.json"; 
import PageHeader from "../components/PageHeader";

export default function OwnerDetail() {
  const { id } = useParams();
  
  // Mencari data pelanggan secara dinamis dari file JSON Customers
  const customers = Customers?.find((item) => item.idCustomer === id);

  // Antisipasi jika ID tidak cocok atau data belum termuat
  if (!customers) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-bg-main text-text-soft font-bold">
        Data pemilik tidak ditemukan...
      </div>
    );
  }

  // Helper styling membership badge (Gold, Silver, dll)
  const getMembershipBadge = (tier) => {
    switch (tier?.toLowerCase()) {
      case "gold": return "bg-amber-50 text-amber-600 border-amber-200";
      case "silver": return "bg-zinc-100 text-zinc-600 border-zinc-200";
      default: return "bg-orange-50 text-orange-700 border-orange-200";
    }
  };

  // Helper format nomor HP untuk mengembalikan leading zero (0) jika tipenya number
  const formatPhoneNumber = (num) => {
    if (!num) return "-";
    const numStr = num.toString();
    return numStr.startsWith('0') || numStr.startsWith('+') ? numStr : `0${numStr}`;
  };

  return (
    <div className="p-6 space-y-6 bg-bg-main min-h-screen font-barlow text-text-main">
      
      <div className="space-y-6">
            <PageHeader
              title="New Appointment"
              breadcrumb={["Dashboard", "Owners", "Detail"]}
            />
      </div>
      {/* 1. TOP NAVIGATION & STATUS MEMBER */}
      <div className="flex items-center justify-between">
        <NavLink to="/owners" className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-text-soft hover:text-primary transition-colors">
          <FaArrowLeft /> Back to Directory
        </NavLink>
        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border ${customers.statusMember === 'Aktif' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-rose-50 text-rose-600 border-rose-200'}`}>
          Member {customers.statusMember}
        </span>
      </div>

      {/* 2. GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="space-y-6">
          {/* CARD BIO */}
          <div className="bg-white rounded-[2rem] border border-border p-6 shadow-soft text-center relative overflow-hidden">
            
            {/* Foto Profil / Avatar */}
            <div className="w-24 h-24 rounded-3xl bg-primary-soft mx-auto flex items-center justify-center font-poppins font-black text-3xl border-4 border-white shadow-md text-primary mb-4 overflow-hidden">
              {customers.fotoProfil ? (
                <img 
                  src={`/assets/profiles/${customers.fotoProfil}`} 
                  alt={customers.namaLengkapPemilik} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerText = customers.initial || customers.namaLengkapPemilik?.charAt(0);
                  }}
                />
              ) : (
                customers.initial || customers.namaLengkapPemilik?.charAt(0)
              )}
            </div>
            
            <h2 className="font-poppins font-black text-xl uppercase tracking-wide leading-tight">{customers.namaLengkapPemilik}</h2>
            <p className="text-[10px] font-bold text-text-soft/70 uppercase tracking-widest mt-1">{customers.idCustomer}</p>
            
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[10px] font-black uppercase mt-3 border ${getMembershipBadge(customers.levelMembership)}`}>
              {customers.levelMembership} Member
            </span>

            <hr className="my-5 border-border" />

            {/* KONTAK & ALAMAT */}
            <div className="text-left space-y-3 text-xs font-bold">
              <div className="flex items-center gap-3 text-text-soft">
                <FaPhoneAlt className="text-primary w-3" />
                <span>{formatPhoneNumber(customers.nomorHP)}</span>
              </div>
              <div className="flex items-center gap-3 text-text-soft">
                <FaEnvelope className="text-primary w-3" />
                <span className="truncate">{customers.email}</span>
              </div>
              <div className="flex items-start gap-3 text-text-soft">
                <FaMapMarkerAlt className="text-primary w-3 mt-0.5" />
                <span className="leading-relaxed">
                  {customers.alamat}{customers.kota ? `, ${customers.kota}` : ''}
                </span>
              </div>
            </div>
          </div>

          {/* CARD REGISTERED ANABUL */}
          <div className="bg-white rounded-[2rem] border border-border p-6 shadow-soft">
            <h3 className="text-xs font-black uppercase tracking-widest text-text-soft mb-4 flex items-center gap-2">
              <MdOutlinePets className="text-primary text-sm" /> Registered Pets ({customers.petsCount || customers.pets?.length || 0})
            </h3>
            <div className="space-y-2">
              {customers.pets && customers.pets.length > 0 ? (
                customers.pets.map((pet, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-bg-main/40 border border-border/50 rounded-xl hover:border-primary/30 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center text-[10px] font-black text-primary uppercase">
                        {pet.charAt(0)}
                      </div>
                      <span className="text-sm font-bold uppercase tracking-wide">{pet}</span>
                    </div>
                    <span className="text-[10px] font-extrabold text-primary bg-primary-soft px-2 py-0.5 rounded-md">VIEW</span>
                  </div>
                ))
              ) : (
                <p className="text-xs font-bold text-text-soft/60 italic p-2">Tidak ada anabul terdaftar</p>
              )}
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="lg:grid-cols-1 lg:col-span-2 space-y-6">
          
          {/* CRM METRICS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            
            {/* Keuangan Card */}
            <div className="bg-white rounded-2xl border border-border p-5 shadow-soft flex flex-col justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-text-soft block">Total Revenue</span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-xs font-bold text-emerald-600">Rp</span>
                <span className="text-2xl font-poppins font-black text-text-main">
                  {customers.totalTransaksi?.toLocaleString("id-ID") || 0}
                </span>
              </div>
              <span className="text-[9px] font-bold text-text-soft/60 mt-2 block uppercase">Via {customers.metodePembayaran || "-"}</span>
            </div>

            {/* Kunjungan Card */}
            <div className="bg-white rounded-2xl border border-border p-5 shadow-soft flex flex-col justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-text-soft block">Total Kunjungan</span>
              <div className="mt-2">
                <span className="text-3xl font-poppins font-black text-primary">{customers.riwayatKunjungan || 0}</span>
                <span className="text-xs font-bold text-text-soft ml-1">Times</span>
              </div>
              <span className="text-[9px] font-bold text-text-soft/60 mt-2 block uppercase">Sejak {customers.tanggalDaftar || "-"}</span>
            </div>

            {/* Aktivitas Terakhir Card */}
            <div className="bg-white rounded-2xl border border-border p-5 shadow-soft flex flex-col justify-between col-span-2 sm:col-span-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-text-soft block">Last Interaction</span>
              <div className="mt-2 space-y-1 text-xs font-bold text-text-main">
                <p className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-primary text-[10px]" /> Tx: {customers.tanggalTransaksiTerakhir || "-"}
                </p>
                <p className="flex items-center gap-1.5 text-text-soft">
                  <FaUserClock className="text-text-soft/60 text-[10px]" /> App: {customers.loginTerakhir || "-"}
                </p>
              </div>
              <span className="text-[9px] font-bold text-text-soft/60 mt-2 block uppercase">Aktivitas Sistem</span>
            </div>

          </div>

          {/* CRM RETENTION INSIGHTS */}
          <div className="bg-white rounded-[2rem] border border-border p-6 shadow-soft space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-text-soft border-b border-border pb-3">
              CRM Retensi & Kepuasan Pelanggan
            </h3>

            {/* Alert Komplain */}
            {customers.riwayatKomplain > 0 && (
              <div className="flex gap-4 p-4 bg-rose-50/50 border border-rose-100 rounded-2xl">
                <div className="p-3 bg-white rounded-xl shadow-sm text-rose-500 h-fit">
                  <FaExclamationTriangle size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-rose-700 uppercase tracking-wide">Pernah Mengajukan Komplain</h4>
                  <p className="text-xs font-bold text-rose-600/80 mt-0.5">Tercatat {customers.riwayatKomplain} kali memberikan feedback kritikal. Tangani dengan perhatian ekstra.</p>
                </div>
              </div>
            )}

            {/* Review / Feedback Text */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-text-soft flex items-center gap-1.5">
                <FaCommentAlt className="text-primary text-[9px]" /> Last Review & Feedback
              </label>
              <div className="bg-bg-main/40 border border-border/60 rounded-2xl p-4 italic text-sm font-semibold text-text-main">
                "{customers.feedbackReview || customers['Feedback/Review'] || "Tidak ada feedback"}"
              </div>
            </div>

            {/* Catatan Admin Internal */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-text-soft flex items-center gap-1.5">
                Internal Operational Notes (Resepsionis & Dokter)
              </label>
              <div className="bg-amber-50/30 border border-amber-200/50 rounded-2xl p-4 text-xs font-bold text-amber-900/80 leading-relaxed">
                {customers.catatanAdmin || "Tidak ada catatan internal."}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}