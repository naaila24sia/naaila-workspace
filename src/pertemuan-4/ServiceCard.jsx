export default function ServiceCard({ service }) {
  return (
    
    <div className="group bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-lg transition-all duration-200 ease-out border
                   border-gray-100 flex flex-col h-full cursor-pointer active:scale-95 will-change-transform">
      
      <div className="relative overflow-hidden rounded-[1.5rem] h-48">
        <img
          src={service.image}
          alt={service.name}
          // 3. Transformasi gambar dipercepat & pakai 'translate-z-0' untuk hardware acceleration
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-out fill-mode-forwards"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
          <p className="text-[10px] font-bold text-blue-600 uppercase">
            {service.category}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col flex-grow px-1">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-extrabold text-gray-800 leading-tight">
            {service.name}
          </h2>
          <span className="flex items-center gap-1 text-sm font-bold text-orange-500">
            ⭐ {service.rating}
          </span>
        </div>

        <p className="mt-2 text-2xl font-black text-gray-900">
          Rp {service.price.toLocaleString()}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-gray-700">👤 {service.provider.name}</p>
            <p className="text-[11px] text-gray-400">📍 {service.provider.location}</p>
          </div>
          
          {/* Tombol yang memberi feedback instan saat ditekan */}
          <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}