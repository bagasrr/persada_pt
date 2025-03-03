import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center">
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="mt-10 md:mt-0 md:w-1/2 text-center md:text-right space-y-4">
          <h2 className="text-6xl font-bold text-red-600">404</h2>
          <p className="text-gray-300 text-lg">Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.</p>
          <Link to="/" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg inline-block mt-4 transition">
            Kembali ke Beranda
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex flex-col items-center text-center md:text-left md:w-1/2 space-y-4">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <img src="/src/error_page.webp" alt="Error Animation" className="w-48 md:w-64" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold text-red-500">Oops! Ada Kesalahan</h1>
          <p className="text-gray-300 text-lg">Halaman yang Anda cari tidak ditemukan.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;
