import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const NavbarLink = ({ to, children }: { to: string; children: string }) => {
  return (
    <li className="relative group">
      <NavLink to={to} className="relative flex items-center justify-center p-2 h-[80px] text-center">
        {({ isActive }) => (
          <>
            {/* Background Biru Bergerak */}
            {isActive && <motion.div layoutId="activeBackground" className="absolute inset-0 bg-blue-500" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
            {/* Teks Link */}
            <span className={`${isActive ? "text-white font-bold" : "text-gray-400"} relative z-10 group-hover:text-white text-md`}>{children}</span>
          </>
        )}
      </NavLink>
    </li>
  );
};
