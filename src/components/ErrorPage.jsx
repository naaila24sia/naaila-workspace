import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ErrorPage({ code, description, image }) {
  return (
    <div className="p-5 flex justify-center mt-10">
      <div className="max-w-md w-full text-center">

        <div className="bg-white p-10 rounded-3xl shadow-xl relative overflow-hidden">

          {/* Dekorasi */}
          <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-merah/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-hijau/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            {/* Gambar Error */}
            {image && (
              <div className="flex justify-center mb-6">
                <img src={image} alt="error" className="w-24 h-24" />
              </div>
            )}

            {/* Code */}
            <h1 className="text-7xl font-black text-gray-900 mb-2">
              {code}
            </h1>

            {/* Title (optional, bisa tetap) */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Oops! Error
            </h2>

            {/* Deskripsi */}
            <p className="text-gray-500 mb-8">
              {description}
            </p>

            {/* Button */}
            <Link 
              to="/" 
              className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gray-900 text-white rounded-xl font-bold"
            >
              <FaArrowLeft />
              <span>Back to Dashboard</span>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}