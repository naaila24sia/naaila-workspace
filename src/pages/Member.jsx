import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Crown, 
  Scissors, 
  PhoneCall, 
  Clock, 
  MessageSquare, 
  LogOut, 
  Stethoscope, 
  Activity, 
  Sparkles, 
  Smile,
  ChevronRight,
  Dog,
  FileText,
  Bell,
  Calendar
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Member() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState({
    name: "Loading...",
    role: "Member",
    avatar: "https://cdn-icons-png.flaticon.com/512/616/616408.png"
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const savedUser = localStorage.getItem("user_profile");

    if (!token || role?.toLowerCase() !== "member") {
      navigate("/login");
      return;
    }

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [navigate]);

  const handleLogout = (e) => {
    if (e) e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user_profile");
    navigate("/");
  };

  const whatsappNumber = "6281234567890";
  const whatsappMessage = encodeURIComponent(
    `Halo VetCare, saya member VIP (${user.name}) ingin klaim promo diskon tindakan medis...`
  );

  const [activeChart, setActiveChart] = useState("growth");

  // Mock data: Weight tracking of Luna (Kucing) & Milo (Anjing) in kg
  const growthData = [
    { name: "Jan", Luna: 3.2, Milo: 22.1 },
    { name: "Feb", Luna: 3.4, Milo: 23.5 },
    { name: "Mar", Luna: 3.6, Milo: 24.8 },
    { name: "Apr", Luna: 3.9, Milo: 25.2 },
    { name: "Mei", Luna: 4.1, Milo: 26.9 },
    { name: "Jun", Luna: 4.2, Milo: 28.0 },
  ];

  // Mock data: Monthly visits by service category
  const visitData = [
    { name: "Jan", Medis: 2, Vaksin: 1, Grooming: 3 },
    { name: "Feb", Medis: 1, Vaksin: 0, Grooming: 2 },
    { name: "Mar", Medis: 0, Vaksin: 1, Grooming: 4 },
    { name: "Apr", Medis: 3, Vaksin: 0, Grooming: 3 },
    { name: "Mei", Medis: 1, Vaksin: 2, Grooming: 5 },
    { name: "Jun", Medis: 2, Vaksin: 1, Grooming: 4 },
  ];

  // Mock data: Care expenses distribution (in %)
  const expenseData = [
    { name: "Pakan & Nutrisi", value: 45, color: "#A3D65C" }, // Primary
    { name: "Jasa Medis & Obat", value: 35, color: "#4DA3FF" }, // Secondary
    { name: "Grooming & Salon", value: 20, color: "#E76445" }, // Accent
  ];

  // Mock Recent Activities of Pets
  const activities = [
    { id: 1, time: "Hari Ini - 10:30", type: "medical", msg: "Drh. Sarah mengunggah rekam medis 'Milo': Pembersihan Karang Gigi berhasil dilakukan." },
    { id: 2, time: "25 Juni - 09:00", type: "grooming", msg: "Luna menyelesaikan paket Mandi Jamur & Kutu di Salon Pet Grooming VetCare." },
    { id: 3, time: "23 Juni - 14:00", type: "whatsapp", msg: "WhatsApp reminder otomatis untuk jadwal Vaksin Rabies Milo (28 Juni) berhasil Anda terima." },
    { id: 4, time: "20 Juni - 11:30", type: "billing", msg: "Anda berhasil menukar 100 Poin Loyalitas dengan Voucher Diskon Pakan Rp 50.000." },
    { id: 5, time: "18 Juni - 16:00", type: "pharmacy", msg: "Resep Obat Cacing (Drontal Kucing) untuk Luna siap diambil di konter apotek." },
  ];

  const statCards = [
    { label: "Anabul Terdaftar", value: "2 Ekor", icon: Dog, color: "text-primary bg-primary/10" },
    { label: "Janji Temu Terdekat", value: "28 Juni - 10:00", icon: Calendar, color: "text-secondary-dark bg-secondary/10" },
    { label: "Total Rekam Medis", value: "14 Catatan", icon: FileText, color: "text-accent bg-accent/10" },
    { label: "Poin Loyalitas Anda", value: "120 Poin", icon: Crown, color: "text-success bg-success-soft/10" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-bg-main text-text-main font-body antialiased min-h-screen selection:bg-primary/30 relative">
      
      {/* Background Blurs (Mengikuti gaya Landing Page) */}
      <div className="absolute top-[-10%] left-[-10%] -z-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] -z-10 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] -z-10 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 1. NAVBAR */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-card/85 backdrop-blur-lg border-b border-border/80 shadow-soft"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo (Gaya Guest + Badge VIP Member) */}
          <a href="#home" className="flex items-center gap-2 cursor-pointer group">
            <div className="transition-transform group-hover:scale-[1.02] duration-300">
              <div className="flex items-baseline gap-1.5">
                <h1 className="font-heading text-3xl font-extrabold text-text-main tracking-tight">
                  Vet<span className="text-primary group-hover:text-primary-hover transition-colors">Care</span>
                </h1>
                {/* Badge VIP */}
                <span className="inline-flex items-center gap-1 text-[10px] font-heading font-extrabold bg-accent text-white px-2 py-0.5 rounded-md tracking-wider shadow-sm animate-pulse align-middle self-center">
                  <Crown className="w-2.5 h-2.5" /> VIP
                </span>
              </div>
              <p className="text-[10px] text-text-soft mt-0.5 uppercase tracking-widest font-bold block">
                Veterinary Member Portal
              </p>
            </div>
          </a>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-text-main/80">
            <a href="#home" className="relative hover:text-primary transition duration-300 py-1 group">
              VIP Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#portal-anabul" className="relative hover:text-primary transition duration-300 py-1 group">
              Portal Anabul
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#promos" className="relative hover:text-primary transition duration-300 py-1 group">
              Diskon Member
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#perks" className="relative hover:text-primary transition duration-300 py-1 group">
              Benefit Spesial
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          {/* User Profile Info & Logout */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5 bg-bg-card px-4 py-2 rounded-xl border border-border shadow-soft transition-transform hover:scale-[1.02]">
              <img
                src={user.avatar}
                alt="Member Avatar"
                className="w-7 h-7 rounded-full object-cover ring-2 ring-primary/20"
              />
              <span className="hidden sm:inline font-bold text-xs text-text-main tracking-tight">
                {user.name}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="text-text-soft font-semibold text-xs hover:text-error transition duration-300 cursor-pointer bg-transparent border-none outline-none flex items-center gap-1"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-primary/15 text-success font-semibold text-xs px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-success animate-ping"></span>
              Welcome Back! Anda Berada di Area Eksklusif Member VIP
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-text-main leading-[1.1] tracking-tight">
              Perawatan Premium, <br />
              Dengan Biaya{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-dark via-primary to-accent relative inline-block">
                Lebih Hemat
              </span>
            </h1>
            <p className="text-text-main/70 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
              Selamat menikmati potongan harga langsung untuk setiap tindakan
              medis, konsultasi dokter tanpa antre, dan kupon gratis perawatan
              bulanan khusus untuk anabul kesayangan Anda.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#promos"
                className="button-primary px-8 py-4 shadow-lg shadow-primary/20 hover:scale-[1.03] active:scale-[0.97] transition-all text-sm font-bold text-center rounded-xl flex items-center gap-2"
              >
                <span>Lihat Kupon Diskon</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border bg-bg-card hover:bg-bg-main hover:border-text-soft text-text-main font-semibold px-6 py-4 rounded-xl transition duration-300 flex items-center gap-2 text-sm"
              >
                <MessageSquare className="w-4 h-4 text-accent" />
                <span>Hubungi Dokter VIP</span>
              </a>
            </div>
          </motion.div>

          {/* Hero Right Content (Images) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6 relative px-4 lg:px-0"
          >
            <div className="bg-primary/95 rounded-[2.5rem] overflow-hidden pt-12 px-4 flex justify-center items-end h-[380px] md:h-[480px] shadow-xl shadow-primary/10 hover:-translate-y-2 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=400"
                alt="Veterinarian with dog"
                className="object-cover h-[92%] w-full rounded-t-3xl"
              />
            </div>
            <div className="bg-secondary/95 rounded-[2.5rem] overflow-hidden pt-12 px-4 flex justify-center items-end h-[380px] md:h-[480px] shadow-xl shadow-secondary/10 mt-8 lg:mt-12 hover:-translate-y-2 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400"
                alt="Happy cat"
                className="object-cover h-[92%] w-full rounded-t-3xl"
              />
            </div>

            {/* Floating Badge Tier */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 8 }}
              className="absolute -right-2 top-1/3 bg-bg-card text-text-main font-heading font-bold px-5 py-3 rounded-2xl shadow-xl border border-border/80 flex items-center gap-3 transform rotate-6 hidden md:flex cursor-pointer"
            >
              <span className="text-accent bg-accent/10 p-2.5 rounded-xl">
                <Crown className="w-6 h-6 text-accent" />
              </span>
              <div className="text-left text-xs">
                <p className="font-extrabold text-accent">GOLD MEMBER</p>
                <p className="text-text-soft font-normal">
                  Hemat s.d 25% Tiap Berobat
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* 2.5. PORTAL MEMBER ANABUL */}
      <section id="portal-anabul" className="py-20 md:py-28 bg-white relative border-t border-border overflow-hidden">
        {/* Background blurs */}
        <div className="absolute top-1/4 left-1/4 -z-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          
          {/* Title */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 bg-primary/15 text-success font-semibold text-xs px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
              Portal Member Anabul
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-main tracking-tight mt-2">
              Pantau Kesehatan & Tumbuh Kembang Anabul Anda
            </h2>
            <p className="text-text-soft text-sm md:text-base leading-relaxed">
              Selamat datang di portal pribadi Anda. Di bawah ini adalah data kesehatan, janji temu medis terdekat, riwayat diagnosa, serta perkembangan fisik anabul kesayangan Anda secara real-time.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 text-left">
            {statCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-bg-card border border-border/80 rounded-2xl p-5 shadow-soft hover:shadow-md transition duration-300 flex items-center gap-4 animate-fade-in"
                >
                  <div className={`p-3 rounded-2xl shrink-0 ${card.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-soft font-bold uppercase tracking-wider">
                      {card.label}
                    </p>
                    <p className="text-sm md:text-base font-extrabold text-text-main mt-0.5 whitespace-nowrap">
                      {card.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Main Interface Preview Frame */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-bg-main/40 border border-border/80 rounded-3xl p-4 md:p-6 shadow-soft">
            
            {/* Left Block: Chart Area (8 cols) */}
            <div className="lg:col-span-8 bg-white border border-border/50 rounded-2xl p-5 shadow-soft flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-border/40">
                <div className="text-left">
                  <h3 className="font-heading font-bold text-base text-text-main flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary-hover animate-pulse" />
                    <span>Grafik Perkembangan Anabul</span>
                  </h3>
                  <p className="text-text-soft text-[11px] font-medium">
                    Gunakan tombol di samping untuk mengganti kategori pantauan.
                  </p>
                </div>

                {/* Chart Tabs */}
                <div className="flex bg-bg-main p-1 rounded-xl border border-border/40 text-xs font-bold gap-1">
                  <button
                    onClick={() => setActiveChart("growth")}
                    className={`px-3 py-1.5 rounded-lg cursor-pointer transition ${
                      activeChart === "growth" ? "bg-white text-primary-hover shadow-sm" : "text-text-main/70 hover:text-text-main"
                    }`}
                  >
                    Berat Badan
                  </button>
                  <button
                    onClick={() => setActiveChart("visits")}
                    className={`px-3 py-1.5 rounded-lg cursor-pointer transition ${
                      activeChart === "visits" ? "bg-white text-primary-hover shadow-sm" : "text-text-main/70 hover:text-text-main"
                    }`}
                  >
                    Janji Temu
                  </button>
                  <button
                    onClick={() => setActiveChart("expenses")}
                    className={`px-3 py-1.5 rounded-lg cursor-pointer transition ${
                      activeChart === "expenses" ? "bg-white text-primary-hover shadow-sm" : "text-text-main/70 hover:text-text-main"
                    }`}
                  >
                    Biaya Perawatan
                  </button>
                </div>
              </div>

              {/* Recharts Area Container */}
              <div className="h-64 sm:h-72 w-full text-xs font-medium">
                <ResponsiveContainer width="100%" height="100%">
                  {activeChart === "growth" ? (
                    <AreaChart data={growthData}>
                      <defs>
                        <linearGradient id="colorLuna" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#A3D65C" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#A3D65C" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorMilo" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4DA3FF" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#4DA3FF" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" stroke="#BDBDBD" />
                      <YAxis stroke="#BDBDBD" unit="kg" />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" name="Luna (Kucing)" dataKey="Luna" stroke="#A3D65C" strokeWidth={3} fillOpacity={1} fill="url(#colorLuna)" />
                      <Area type="monotone" name="Milo (Anjing)" dataKey="Milo" stroke="#4DA3FF" strokeWidth={3} fillOpacity={1} fill="url(#colorMilo)" />
                    </AreaChart>
                  ) : activeChart === "visits" ? (
                    <BarChart data={visitData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" stroke="#BDBDBD" />
                      <YAxis stroke="#BDBDBD" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Medis" name="Medis" fill="#4DA3FF" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Vaksin" name="Vaksinasi" fill="#A3D65C" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Grooming" name="Grooming" fill="#E76445" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  ) : (
                    <PieChart>
                      <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={85}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right Block: Recent Activities (4 cols) */}
            <div className="lg:col-span-4 bg-white border border-border/50 rounded-2xl p-5 shadow-soft flex flex-col justify-between">
              <div className="mb-4 pb-3 border-b border-border/40 text-left">
                <h3 className="font-heading font-bold text-base text-text-main flex items-center gap-2">
                  <Bell className="w-5 h-5 text-accent animate-pulse" />
                  <span>Histori Medis Terakhir</span>
                </h3>
                <p className="text-text-soft text-[11px] font-medium">
                  Pembaruan pengobatan, grooming, dan transaksi anabul.
                </p>
              </div>

              <div className="space-y-4 overflow-y-auto max-h-64 pr-1 text-left">
                {activities.map((act) => (
                  <div key={act.id} className="flex gap-3 text-xs border-b border-border/30 pb-3 last:border-none last:pb-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <div className="text-left space-y-0.5">
                      <p className="text-[9px] text-text-soft font-bold">{act.time} WIB</p>
                      <p className="text-text-main/90 leading-snug">{act.msg}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 mt-2 border-t border-border/40 text-center">
                <span className="text-xs text-text-soft font-medium">
                  Status Rekam Medis Terverifikasi 🐾
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PROMOS & SERVICES SECTION */}
      <section
        id="promos"
        className="bg-bg-main/30 py-20 md:py-28 border-t border-border relative overflow-hidden"
      >
        <div className="absolute bottom-0 right-10 -z-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 bg-primary/15 text-success font-semibold text-xs px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
              Katalog Privilege
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-main mt-4 leading-tight">
              Layanan Khusus & Promo Aktif
            </h2>
            <p className="text-text-soft text-sm md:text-base leading-relaxed">
              Daftar pelayanan medis dengan penyesuaian tarif hemat otomatis
              khusus untuk ID Member Anda bulan ini.
            </p>
          </div>

          {/* Service Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Promo Card 1: Check-up */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-bg-card border border-border/80 rounded-[2rem] p-6 flex flex-col justify-between min-h-[320px] group hover:border-primary/50 hover:shadow-soft transition-all duration-300 relative overflow-hidden text-left"
            >
              <span className="absolute top-0 right-0 bg-primary text-white font-extrabold text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wide">
                Diskon 15%
              </span>
              <div className="space-y-4">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-text-main group-hover:text-primary transition-colors">
                  VIP Medical Check-Up
                </h3>
                <p className="text-text-main/70 text-xs md:text-sm leading-relaxed">
                  Pemeriksaan fisik mendalam, cek darah lengkap, dan evaluasi
                  organ dalam dengan potongan harga member langsung.
                </p>
              </div>
              <div className="pt-5 border-t border-border/80 flex items-center justify-between mt-6">
                <span className="text-[10px] text-text-soft font-bold tracking-wider">
                  KODE: MEM-CHECK
                </span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover font-bold text-sm inline-flex items-center gap-1 transition-colors"
                >
                  Klaim Promo →
                </a>
              </div>
            </motion.div>

            {/* Promo Card 2: Vaksin */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-bg-card border border-border/85 rounded-[2rem] p-6 flex flex-col justify-between min-h-[320px] group hover:border-primary/50 hover:shadow-soft transition-all duration-300 relative overflow-hidden text-left"
            >
              <span className="absolute top-0 right-0 bg-primary text-white font-extrabold text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wide">
                Potongan 50k
              </span>
              <div className="space-y-4">
                <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-text-main group-hover:text-primary transition-colors">
                  Paket Vaksinasi Berkala
                </h3>
                <p className="text-text-main/70 text-xs md:text-sm leading-relaxed">
                  Lengkapi perlindungan virus (F3/F4/Rabies) untuk anabul Anda.
                  Potongan harga instan khusus kunjungan member.
                </p>
              </div>
              <div className="pt-5 border-t border-border/80 flex items-center justify-between mt-6">
                <span className="text-[10px] text-text-soft font-bold tracking-wider">
                  KODE: MEM-VACC
                </span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover font-bold text-sm inline-flex items-center gap-1 transition-colors"
                >
                  Klaim Promo →
                </a>
              </div>
            </motion.div>

            {/* Promo Card 3: Steril Bedah */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-bg-card border border-border/85 rounded-[2rem] p-6 flex flex-col justify-between min-h-[320px] group hover:border-primary/50 hover:shadow-soft transition-all duration-300 relative overflow-hidden text-left"
            >
              <span className="absolute top-0 right-0 bg-primary text-white font-extrabold text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wide">
                Diskon 20%
              </span>
              <div className="space-y-4">
                <div className="bg-accent/10 text-accent w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-text-main group-hover:text-primary transition-colors">
                  Tindakan Steril & Bedah
                </h3>
                <p className="text-text-main/70 text-xs md:text-sm leading-relaxed">
                  Operasi steril aman terkendali dengan dokter spesialis senior.
                  Diskon besar untuk meminimalisir biaya perawatan.
                </p>
              </div>
              <div className="pt-5 border-t border-border/80 flex items-center justify-between mt-6">
                <span className="text-[10px] text-text-soft font-bold tracking-wider">
                  KODE: MEM-SURGERY
                </span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover font-bold text-sm inline-flex items-center gap-1 transition-colors"
                >
                  Klaim Promo →
                </a>
              </div>
            </motion.div>

            {/* Promo Card 4: Scaling Gigi */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-bg-card border border-border/85 rounded-[2rem] p-6 flex flex-col justify-between min-h-[320px] group hover:border-primary/50 hover:shadow-soft transition-all duration-300 relative overflow-hidden text-left"
            >
              <span className="absolute top-0 right-0 bg-primary text-white font-extrabold text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wide">
                Hemat 10%
              </span>
              <div className="space-y-4">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
                  <Smile className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-text-main group-hover:text-primary transition-colors">
                  Scaling Karang Gigi
                </h3>
                <p className="text-text-main/70 text-xs md:text-sm leading-relaxed">
                  Pembersihan plak dan bau mulut anabul secara total menggunakan
                  alat ultrasonik modern yang bebas stres.
                </p>
              </div>
              <div className="pt-5 border-t border-border/80 flex items-center justify-between mt-6">
                <span className="text-[10px] text-text-soft font-bold tracking-wider">
                  KODE: MEM-SCALING
                </span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover font-bold text-sm inline-flex items-center gap-1 transition-colors"
                >
                  Klaim Promo →
                </a>
              </div>
            </motion.div>

            {/* Promo Card 5: USG & Rontgen */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-bg-card border border-border/85 rounded-[2rem] p-6 flex flex-col justify-between min-h-[320px] group hover:border-primary/50 hover:shadow-soft transition-all duration-300 relative overflow-hidden text-left"
            >
              <span className="absolute top-0 right-0 bg-primary text-white font-extrabold text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wide">
                Diskon 15%
              </span>
              <div className="space-y-4">
                <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-text-main group-hover:text-primary transition-colors">
                  Advanced Diagnostics
                </h3>
                <p className="text-text-main/70 text-xs md:text-sm leading-relaxed">
                  Fasilitas penunjang medis komprehensif berupa USG abdomen dan
                  foto Rontgen dengan pembacaan hasil instan kilat.
                </p>
              </div>
              <div className="pt-5 border-t border-border/80 flex items-center justify-between mt-6">
                <span className="text-[10px] text-text-soft font-bold tracking-wider">
                  KODE: MEM-DIAG
                </span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover font-bold text-sm inline-flex items-center gap-1 transition-colors"
                >
                  Klaim Promo →
                </a>
              </div>
            </motion.div>

            {/* Card 6: CTA Promo Card (Auth Accent Color) */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-accent rounded-[2rem] p-6 flex flex-col justify-between min-h-[320px] text-white shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-left"
            >
              <div className="space-y-3">
                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-extrabold text-xl leading-snug">
                  Butuh Darurat / Janji VIP?
                </h3>
                <p className="text-white/80 text-xs md:text-sm">
                  Gunakan hak prioritas Anda. Tim dokter kami siap mendahulukan
                  kedatangan Anda tanpa perlu mengantre lama.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-accent font-bold px-4 py-3 rounded-xl text-sm w-full block text-center hover:bg-bg-main active:scale-95 transition-all"
                >
                  Amankan Antrean Prioritas
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. SECTION: EXCLUSIVE MEMBER PERKS */}
      <section
        id="perks"
        className="py-20 md:py-28 bg-white relative overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/3 -z-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-xs px-4 py-2 rounded-full border border-accent/20 backdrop-blur-sm">
              Fasilitas Mewah
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-main mt-4 leading-tight">
              Keuntungan Tambahan VIP Anda
            </h2>
            <p className="text-text-soft text-sm md:text-base leading-relaxed">
              Nikmati berbagai layanan gratis dan hak istimewa yang otomatis
              melekat pada status kepemilikan akun Anda.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Perk 1 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-bg-card border border-border/85 rounded-[2rem] p-6 space-y-4 hover:border-primary/50 hover:shadow-soft transition-all duration-300 text-left"
            >
              <div className="bg-primary/10 text-primary w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-extrabold text-lg text-text-main">
                Bebas Antrean Resepsionis
              </h4>
              <p className="text-text-main/70 text-xs md:text-sm leading-relaxed font-body">
                Cukup informasikan nama akun member Anda saat tiba, tim
                operasional kami akan memprioritaskan rekam medis Anda ke ruang
                periksa utama.
              </p>
            </motion.div>

            {/* Perk 2 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-bg-card border border-border/85 rounded-[2rem] p-6 space-y-4 hover:border-primary/50 hover:shadow-soft transition-all duration-300 text-left"
            >
              <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
                <Scissors className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-extrabold text-lg text-text-main">
                Gratis Potong Kuku & Bersih Telinga
              </h4>
              <p className="text-text-main/70 text-xs md:text-sm leading-relaxed font-body">
                Fasilitas kosmetik penunjang yang diberikan cuma-cuma tanpa
                dipungut biaya tambahan setiap kali anabul Anda melakukan
                grooming di klinik.
              </p>
            </motion.div>

            {/* Perk 3 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-bg-card border border-border/85 rounded-[2rem] p-6 space-y-4 hover:border-primary/50 hover:shadow-soft transition-all duration-300 text-left"
            >
              <div className="bg-success/10 text-success w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-extrabold text-lg text-text-main">
                Telekonsultasi Dokter 24 Jam
              </h4>
              <p className="text-text-main/70 text-xs md:text-sm leading-relaxed font-body">
                Akses jalur pesan instan khusus tengah malam bersama dokter jaga
                apabila terjadi kondisi medis darurat atau kepanikan di rumah.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-dark text-white pt-16 pb-8 border-t border-neutral-800 text-left">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="inline-block group">
              <h1 className="font-heading text-3xl font-extrabold text-white tracking-tight">
                Vet<span className="text-primary group-hover:text-primary-hover transition-colors">Care</span>
              </h1>
              <p className="small-text text-white/40 mt-1 uppercase tracking-widest text-xs font-bold">
                Veterinary VIP Portal
              </p>
            </a>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              Area khusus pelanggan setia VetCare. Maksimalkan perlindungan
              kesehatan anabul dengan efisiensi pengeluaran biaya terbaik dari
              sistem kami.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-primary">
              Privilege Links
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-neutral-400">
              <li>
                <a href="#home" className="hover:text-white transition duration-300">
                  Halaman Member
                </a>
              </li>
              <li>
                <a href="#promos" className="hover:text-white transition duration-300">
                  Klaim Kupon Diskon
                </a>
              </li>
              <li>
                <a href="#perks" className="hover:text-white transition duration-300">
                  Fasilitas Penunjang
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-accent">
              Emergency Contact
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-neutral-400 font-medium">
              <li className="flex justify-between">
                <span>Hotline Member:</span>{" "}
                <span className="text-white font-semibold">24 Jam Siaga</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-success bg-success/10 px-3 py-1 rounded-lg w-fit mt-2">
                <span className="w-1.5 h-1.5 bg-success rounded-full animate-ping"></span>{" "}
                Bebas Antrean untuk Akun Anda
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© 2026 VetCare Privilege System. All member benefits reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300 transition duration-300">
              Syarat Ketentuan Promo
            </a>
            <a href="#" className="hover:text-neutral-300 transition duration-300">
              Kebijakan Akun Member
            </a>
          </div>
        </div>
      </footer>

      {/* 6. FLOATING WHATSAPP BUTTON */}
      <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      >
        <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-500 opacity-40 animate-ping"></span>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-500 text-white p-3.5 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
          aria-label="Chat VIP Member Line"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.748.002-2.607-1.01-5.059-2.85-6.902C16.643 2.113 14.2 1.1 11.593 1.1 6.157 1.1 1.734 5.47 1.732 10.85c-.001 1.693.456 3.348 1.321 4.833l-.999 3.648 3.733-.981zM17.656 14.4c-.312-.156-1.848-.912-2.129-1.014-.282-.102-.487-.153-.692.153-.205.306-.795 1.014-.974 1.218-.179.205-.359.23-.672.074-1.284-.642-2.132-1.048-2.983-1.503-.64-.343-1.258-.871-1.636-1.52-.162-.279-.017-.43.123-.57.126-.126.282-.328.423-.492.141-.164.188-.281.282-.47.094-.188.047-.352-.023-.492-.07-.141-.692-1.666-.949-2.285-.25-.601-.524-.519-.723-.529-.187-.01-.402-.01-.617-.01a1.182 1.182 0 00-.853.398c-.292.317-1.118 1.094-1.118 2.668 0 1.573 1.147 3.091 1.306 3.303.159.212 2.257 3.447 5.469 4.833.764.33 1.36.527 1.822.674.767.244 1.467.21 2.02.128.617-.092 1.848-.755 2.11-1.446.263-.691.263-1.285.184-1.408-.078-.123-.282-.196-.594-.352z" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}