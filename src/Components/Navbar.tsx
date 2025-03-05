import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavbarLink } from "../Elements/InsideNavbar";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(true); // Navbar tetap muncul di atas halaman
      } else if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar saat scroll ke bawah
      } else {
        // Show navbar saat scroll ke atas
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const mouseLeave = () => {
    setTimeout(() => {
      window.scrollY > 0 && setIsVisible(false);
    }, 2000);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full min-h-[80px] bg-(--color-s) backdrop-blur-2xl font-(--font-poppins) text-white z-50 transition-all ease-in-out duration-300 flex justify-center px-5 ${
        isVisible ? "lg:translate-y-0" : "lg:translate-y-[-95%]"
      }`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => mouseLeave()}
    >
      <div className="container mx-auto flex justify-between items-center text-secondary z-40 font-arbitron">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 min-w-[50%] hover:scale-101 duration-500 ease-out top-0 z-30">
          <img src="/src/persada_white.png" alt="Logo" className="h-8 md:h-10 lg:h-12" />
          <span>
            <div className="text-xs md:text-lg lg:text-2xl font-bold">PT PERSADA NUSANTARA BERSAUDARA</div>
            <div className="text-xs">SMART GREEN ENERGY PROVIDER</div>
          </span>
        </Link>

        {/* Link Navbar untuk Layar Besar */}
        <ul className="hidden lg:flex space-x-6">
          <NavbarLink to="/home">Home</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/kalkulator">Kalkulator</NavbarLink>
          <NavbarLink to="/produk">Jasa & Produk</NavbarLink>
          <NavbarLink to="/blog">Blog</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
        </ul>

        {/* Tombol Menu untuk Layar Kecil */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden relative z-50 p-2 rounded-full cursor-pointer">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navbar Dropdown untuk Layar Kecil dengan AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ scale: 0, opacity: 0, transformOrigin: "top right" }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="fixed top-20 right-0 bg-(--color-s) w-64 rounded-bl-xl shadow-lg overflow-hidden lg:hidden"
            >
              <NavbarLink to="/">Home</NavbarLink>
              <NavbarLink to="/about">About</NavbarLink>
              <NavbarLink to="/kalkulator">Kalkulator</NavbarLink>
              <NavbarLink to="/produk">Jasa & Produk</NavbarLink>
              <NavbarLink to="/blog">Blog</NavbarLink>
              <NavbarLink to="/contact">Contact</NavbarLink>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
