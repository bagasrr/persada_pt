import { Copyright, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full py-8 px-5 md:px-10">
      {/* Wrapper */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Kolom Sosial Media */}
        <div className="flex flex-col items-center md:items-start p-5 rounded-lg">
          <img src="/src/persada_white.png" alt="Logo" className="h-10 md:h-12" />
          <h4 className="font-bold mt-3">IKUTI KAMI</h4>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Kolom Informasi */}
        <div>
          <h4 className="font-bold text-lg">INFORMASI</h4>
          <p className="mt-3 text-gray-300">
            PT Persada Nusantara Bersaudara adalah perusahaan yang bergerak di bidang penjualan dan pemasangan panel surya. Kami berkomitmen untuk menghadirkan solusi energi terbarukan yang ramah lingkungan dan efisien bagi masyarakat
            Indonesia.
          </p>
        </div>

        {/* Kolom Kontak */}
        <div>
          <h4 className="font-bold text-lg">KONTAK</h4>
          <div className="mt-3 flex flex-col space-y-3 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Jl. Jend. Example No. 1, Jakarta, DKI Jakarta</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>0XbGc@example.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400">
        <span>
          Made with ❤️ by{" "}
          <a href="https://www.instagram.com/prodigydigitalsolution/" target="_blank" className="hover:text-blue-500">
            Prodigy Solution
          </a>
        </span>
        <div className="flex justify-center items-center gap-1 mt-2">
          <Copyright size={15} />
          <span>PT Persada Nusantara Bersaudara | 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
