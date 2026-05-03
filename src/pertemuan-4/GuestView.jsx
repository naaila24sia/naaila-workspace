import { useState } from "react";
import servicesData from "./servicesData.json";
import ServiceCard from "./ServiceCard";

export default function GuestView() {
  const [dataForm, setDataForm] = useState({
    search: "",
    category: "",
    rating: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value
    });
  };

  const filtered = servicesData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(dataForm.search.toLowerCase()) ||
      item.provider.name.toLowerCase().includes(dataForm.search.toLowerCase());

    const matchesCategory =
      dataForm.category ? item.category === dataForm.category : true;

    const matchesRating =
      dataForm.rating ? item.rating >= Number(dataForm.rating) : true;

    return matchesSearch && matchesCategory && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50/50 p-6">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">
          Explore <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-gray-500 mt-2 font-medium">
          Temukan jasa terbaik untuk kebutuhan harianmu.
        </p>
      </header>

      {/* Filter */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-white p-3 rounded-[2rem] shadow-xl border flex flex-col lg:flex-row gap-3">

          {/* 🔍 SEARCH */}
          <div className="relative flex-grow">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
            <input
              type="text"
              name="search"
              placeholder="Cari jasa apa hari ini?"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-[1.5rem] focus:ring-2 focus:ring-blue-500/20 outline-none"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-row gap-3">
            {/* 🎯 CATEGORY */}
            <select
              name="category"
              className="bg-gray-50 px-6 py-4 rounded-[1.5rem] font-bold"
              onChange={handleChange}
            >
              <option value="">Semua Kategori</option>
              <option value="Household">Household</option>
              <option value="Technical">Technical</option>
              <option value="Beauty">Beauty</option>
              <option value="Automotive">Automotive</option>
              <option value="Creative">Creative</option>
              <option value="Health">Health</option>
              <option value="Food">Food</option>
              <option value="Logistics">Logistics</option>
            </select>

            {/* ⭐ RATING */}
            <select
              name="rating"
              className="bg-gray-50 px-6 py-4 rounded-[1.5rem] font-bold"
              onChange={handleChange}
            >
              <option value="">Semua Rating</option>
              <option value="4">⭐ 4+</option>
              <option value="4.5">⭐ 4.5+</option>
            </select>
          </div>
        </div>
      </div>

      {/* GRID */}
      <main className="max-w-7xl mx-auto">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((item) => (
              <ServiceCard key={item.id} service={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🏜️</p>
            <h3 className="text-xl font-bold text-gray-800">
              Layanan tidak ditemukan
            </h3>
            <p className="text-gray-500">
              Coba ubah kata kunci atau filter kamu.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}