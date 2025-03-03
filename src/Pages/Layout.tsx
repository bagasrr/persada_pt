import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import LoadingAnimation from "../Components/LoadingAnimation";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-1 bg-blue-300 overflow-x-hidden transition-all duration-300 p-10 mt-16 `}>
        {<Outlet /> ? (
          <Outlet />
        ) : (
          <div className="flex flex-col items-center justify-center h-[40dvh]">
            <LoadingAnimation />
            <p className="mt-5">Loading content...</p>
          </div>
        )}
        {/* Komponen ini akan berubah sesuai halaman yang dikunjungi */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
