import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaExclamationTriangle,
  FaCheckCircle,
  FaCommentAlt,
  FaSearch,
  FaFilter,
  FaRegSmile,
  FaRegMeh,
  FaRegFrown,
  FaSpinner,
} from "react-icons/fa";
import Customers from "../data/Customers.json";
import PageHeader from "../components/PageHeader";

export default function Feedback() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterReview, setFilterReview] = useState("all");
  const [filterComplaint, setFilterComplaint] = useState("all");

  const [isLoading, setIsLoading] = useState(true);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // --- 1. METRICS CALCULATIONS (CRM INSIGHTS) ---
  const metrics = useMemo(() => {
    const totalCustomers = Customers.length;
    let totalComplaints = 0;
    let criticalCustomersCount = 0;
    let negativeReviewCount = 0;

    Customers.forEach((c) => {
      totalComplaints += c.riwayatKomplain || 0;
      if ((c.riwayatKomplain || 0) >= 3) criticalCustomersCount++;
      if (c.feedbackReview === "Kurang Puas") negativeReviewCount++;
    });

    return {
      totalCustomers,
      totalComplaints,
      criticalCustomersCount,
      negativeReviewCount,
    };
  }, []);

  // --- 2. FILTER & SEARCH LOGIC ---
  const filteredCustomers = useMemo(() => {
    return Customers.filter((customer) => {
      const matchesSearch =
        customer.namaLengkapPemilik
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        customer.idCustomer?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesReview =
        filterReview === "all" ||
        customer.feedbackReview?.toLowerCase() === filterReview.toLowerCase();

      const matchesComplaint =
        filterComplaint === "all" ||
        (filterComplaint === "has-complaints" &&
          customer.riwayatKomplain > 0) ||
        (filterComplaint === "critical" && customer.riwayatKomplain >= 3) ||
        (filterComplaint === "none" && customer.riwayatKomplain === 0);

      return matchesSearch && matchesReview && matchesComplaint;
    });
  }, [searchTerm, filterReview, filterComplaint]);

  const getReviewBadge = (review) => {
    switch (review) {
      case "Sangat Puas":
        return {
          bg: "bg-emerald-50 text-emerald-700 border-emerald-200",
          icon: <FaRegSmile className="text-emerald-500" />,
        };
      case "Puas":
        return {
          bg: "bg-teal-50 text-teal-700 border-teal-200",
          icon: <FaRegSmile className="text-teal-400" />,
        };
      case "Cukup":
        return {
          bg: "bg-amber-50 text-amber-700 border-amber-200",
          icon: <FaRegMeh className="text-amber-500" />,
        };
      case "Kurang Puas":
        return {
          bg: "bg-rose-50 text-rose-700 border-rose-200",
          icon: <FaRegFrown className="text-rose-500" />,
        };
      default:
        return {
          bg: "bg-zinc-50 text-zinc-600 border-zinc-200",
          icon: <FaCommentAlt />,
        };
    }
  };

  return (
    <div className="p-6 space-y-6 bg-bg-main min-h-screen font-barlow text-text-main">
      {/* HEADER SECTION */}
      <div className="space-y-6">
        <PageHeader
          title="Feedback and Complaints"
          breadcrumb={["Dashboard", "Feedback and Complaints"]}
        />
      </div>

      {/* METRIC STATS CARDS*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl border border-border p-5 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-text-soft block">
              Total Komplain Masuk
            </span>
            <span className="text-3xl font-poppins font-black text-text-main block mt-1">
              {metrics.totalComplaints}
            </span>
            <span className="text-[9px] font-bold text-text-soft/60 block uppercase mt-1">
              Akumulasi seluruh riwayat
            </span>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl text-amber-500">
            <FaExclamationTriangle size={20} />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl border border-border p-5 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-text-soft block">
              Pelanggan Kritikal
            </span>
            <span className="text-3xl font-poppins font-black text-rose-600 block mt-1">
              {metrics.criticalCustomersCount}
            </span>
            <span className="text-[9px] font-bold text-rose-600/70 block uppercase mt-1">
              Memiliki Komplain ≥ 3
            </span>
          </div>
          <div className="p-4 bg-rose-50 rounded-xl text-rose-500">
            <FaExclamationTriangle size={20} />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl border border-border p-5 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-text-soft block">
              Review "Kurang Puas"
            </span>
            <span className="text-3xl font-poppins font-black text-orange-600 block mt-1">
              {metrics.negativeReviewCount}
            </span>
            <span className="text-[9px] font-bold text-text-soft/60 block uppercase mt-1">
              Perlu Retensi Khusus
            </span>
          </div>
          <div className="p-4 bg-orange-50 rounded-xl text-orange-500">
            <FaRegFrown size={20} />
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl border border-border p-5 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-text-soft block">
              Total Responden
            </span>
            <span className="text-3xl font-poppins font-black text-emerald-600 block mt-1">
              {metrics.totalCustomers}
            </span>
            <span className="text-[9px] font-bold text-emerald-600/70 block uppercase mt-1">
              100% Data Teranalisis
            </span>
          </div>
          <div className="p-4 bg-emerald-50 rounded-xl text-emerald-500">
            <FaCheckCircle size={20} />
          </div>
        </div>
      </div>

      {/* CONTROLS BAR (SEARCH & FILTER)  */}
      <div className="bg-white rounded-2xl border border-border p-4 shadow-soft flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-3.5 text-text-soft/50 text-xs" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Cari nama atau ID customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-bg-main/50 border border-border/70 rounded-xl pl-10 pr-4 py-2 text-xs font-bold uppercase tracking-wider focus:outline-none focus:border-primary/50 transition-all placeholder:text-text-soft/40"
          />
        </div>

        {/* Filters Group */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-center">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <FaFilter className="text-text-soft/60 text-xs hidden sm:block" />
            <select
              value={filterReview}
              onChange={(e) => setFilterReview(e.target.value)}
              className="w-full sm:w-auto bg-bg-main/50 border border-border/70 rounded-xl px-3 py-2 text-xs font-black uppercase tracking-wider focus:outline-none"
            >
              <option value="all">Semua Tingkat Kepuasan</option>
              <option value="Sangat Puas">Sangat Puas</option>
              <option value="Puas">Puas</option>
              <option value="Cukup">Cukup</option>
              <option value="Kurang Puas">Kurang Puas</option>
            </select>
          </div>

          <select
            value={filterComplaint}
            onChange={(e) => setFilterComplaint(e.target.value)}
            className="w-full sm:w-auto bg-bg-main/50 border border-border/70 rounded-xl px-3 py-2 text-xs font-black uppercase tracking-wider focus:outline-none"
          >
            <option value="all">Semua Riwayat Komplain</option>
            <option value="has-complaints">Pernah Komplain</option>
            <option value="critical">Kritikal / Sering</option>
            <option value="none">Bersih Komplain</option>
          </select>
        </div>
      </div>

      {/* DATA FEEDBACK TABLE LIST  */}
      <div className="bg-white rounded-[2rem] border border-border shadow-soft overflow-hidden">
        
        {/* E. CONDITIONING VIEW MENGGUNAKAN STATE DARI USEEFFECT */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24 space-y-3">
            <FaSpinner className="text-primary text-3xl animate-spin" />
            <p className="text-xs font-black uppercase tracking-widest text-text-soft/60">
              Menganalisis Sentimen CRM Klinik...
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs font-bold">
              <thead>
                <tr className="bg-bg-main/50 border-b border-border text-text-soft uppercase tracking-widest text-[10px]">
                  <th className="p-4 pl-6">Customer</th>
                  <th className="p-4">Riwayat Komplain</th>
                  <th className="p-4">Ulasan Terakhir</th>
                  <th className="p-4">Catatan Operasional / Admin</th>
                  <th className="p-4 text-center pr-6">Aksi</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border/60">
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((customer) => {
                    const badge = getReviewBadge(customer.feedbackReview);
                    return (
                      <tr
                        key={customer.idCustomer}
                        className="hover:bg-bg-main/20 transition-all"
                      >
                        {/* Column 1: Profile Bio */}
                        <td className="p-4 pl-6">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-primary-soft flex items-center justify-center font-poppins font-black text-sm text-primary shadow-sm uppercase">
                              {customer.initial ||
                                customer.namaLengkapPemilik?.charAt(0)}
                            </div>
                            <div>
                              <p className="font-poppins font-black text-sm uppercase tracking-wide leading-tight text-text-main">
                                {customer.namaLengkapPemilik}
                              </p>
                              <p className="text-[10px] text-text-soft/70 uppercase tracking-widest mt-0.5">
                                {customer.idCustomer} • {customer.kota}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Column 2: Complaint Counter */}
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2.5 py-1 rounded-lg text-xs font-black ${
                                customer.riwayatKomplain >= 3
                                  ? "bg-rose-100 text-rose-700"
                                  : customer.riwayatKomplain > 0
                                    ? "bg-amber-100 text-amber-700"
                                    : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                              }`}
                            >
                              {customer.riwayatKomplain} Kali
                            </span>
                            {customer.riwayatKomplain >= 3 && (
                              <span className="text-[9px] font-black text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded uppercase tracking-wider animate-pulse">
                                Critical
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Column 3: Review Badge */}
                        <td className="p-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[10px] font-black uppercase border ${badge.bg}`}
                          >
                            {badge.icon} {customer.feedbackReview || "N/A"}
                          </span>
                        </td>

                        {/* Column 4: Operational Notes */}
                        <td className="p-4 max-w-xs md:max-w-sm">
                          <p
                            className="text-text-soft leading-relaxed truncate"
                            title={customer.catatanAdmin}
                          >
                            {customer.catatanAdmin || "-"}
                          </p>
                        </td>

                        {/* Column 5: Link To Details */}
                        <td className="p-4 text-center pr-6">
                          <Link
                            to={`/owners/${customer.idCustomer}`}
                            className="inline-block text-[10px] font-black text-primary bg-primary-soft hover:bg-primary hover:text-white px-3 py-1.5 rounded-xl transition-all uppercase tracking-wider shadow-sm"
                          >
                            Detail CRM
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="p-8 text-center text-text-soft/60 italic font-bold"
                    >
                      Tidak ada data feedback atau komplain yang sesuai dengan
                      filter pencarian.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}