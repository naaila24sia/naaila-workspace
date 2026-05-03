import { useState } from "react";
import servicesData from "./servicesData.json";

export default function AdminView() {
  // 🔥 GANTI JADI SATU STATE
  const [dataForm, setDataForm] = useState({
    search: "",
    category: "",
    rating: ""
  });

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value
    });
  };

  // 🔥 FILTER LOGIC BARU
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
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 font-medium">
            Manage and monitor all available services
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-200 active:scale-95">
          + Add New Service
        </button>
      </div>

      {/* Control Panel (Search & Filter) */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
          <input
            type="text"
            name="search" // 🔥 TAMBAH INI
            placeholder="Search by service name..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            onChange={handleChange} // 🔥 GANTI
          />
        </div>

        <select
          name="category" // 🔥 TAMBAH INI
          className="bg-gray-50 border border-gray-200 p-2.5 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 font-semibold text-gray-600"
          onChange={handleChange} // 🔥 GANTI
        >
          <option value="">All Categories</option>
          {["Household", "Technical", "Beauty", "Automotive", "Creative", "Health", "Food", "Logistics"].map(e => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>

        <select
          name="rating" // 🔥 TAMBAH INI
          className="bg-gray-50 border border-gray-200 p-2.5 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 font-semibold text-gray-600"
          onChange={handleChange} // 🔥 GANTI
        >
          <option value="">All Ratings</option>
          <option value="4">⭐ 4+</option>
          <option value="4.5">⭐ 4.5+</option>
        </select>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-gray-400">Service Name</th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-gray-400">Category</th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-gray-400">Price</th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-gray-400">Rating</th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-gray-400">Provider Info</th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-gray-400 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{item.name}</p>
                    <p className="text-[10px] text-gray-400">ID: #{item.id.toString().padStart(4, '0')}</p>
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">
                      {item.category}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-700">Rp {item.price.toLocaleString()}</p>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <span className="text-orange-400">⭐</span>
                      <span className="font-bold text-gray-600">{item.rating}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-700">{item.provider.name}</p>
                    <p className="text-xs text-gray-400">📍 {item.provider.location}</p>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button className="p-2 hover:bg-white rounded-lg text-gray-400 hover:text-blue-500 transition-all border border-transparent hover:border-gray-100 shadow-sm hover:shadow-md">
                        ✏️
                      </button>
                      <button className="p-2 hover:bg-white rounded-lg text-gray-400 hover:text-red-500 transition-all border border-transparent hover:border-gray-100 shadow-sm hover:shadow-md">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center">
          <p className="text-xs font-medium text-gray-500">
            Showing <span className="text-gray-900 font-bold">{filtered.length}</span> services
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs font-bold text-gray-400 cursor-not-allowed">Prev</button>
            <button className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs font-bold text-gray-600 hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}