import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { Users, Dog, Calendar, DollarSign, Activity, Bell, Award, FileText } from "lucide-react";

export default function DashboardPreview() {
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
    { label: "Poin Loyalitas Anda", value: "120 Poin", icon: Award, color: "text-success bg-success-soft/10" },
  ];

  return (
    <section id="analytics" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
            Portal Member Anabul
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-main tracking-tight mt-2">
            Pantau Kesehatan & Tumbuh Kembang Anabul Anda
          </h2>
          <p className="text-text-soft text-sm md:text-base leading-relaxed">
            Melalui akun Portal Member, Anda dapat melihat riwayat medis, mengunduh kartu vaksin, melacak grafik berat badan, hingga melihat poin reward anabul secara real-time.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 text-left">
          {statCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="card border border-border/60 hover:shadow-lg transition flex items-center gap-4">
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
              </div>
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
                  <Activity className="w-5 h-5 text-primary-hover" />
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

            <div className="space-y-4 overflow-y-auto max-h-60 pr-1 text-left">
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
              <a
                href="/login"
                className="text-xs font-bold text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1"
              >
                <span>Masuk Ke Portal Member Lengkap</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
