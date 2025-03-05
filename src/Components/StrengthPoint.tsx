import { Point } from "../Elements/Card";
import { motion } from "framer-motion";

const StrengthPoint = () => {
  return (
    <div className="relative -mt-[100px] md:-mt-[150px] lg:-mt-10 mb-10 z-20 w-full flex flex-wrap md:flex-nowrap justify-center gap-5 md:gap-10 px-5">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <Point src="/src/point1.svg" caption="LICENSED & AUTHORIZED COMPANY" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
        <Point src="/src/point2.svg" caption="NATIONAL CERTIFIED ENGINEER" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
        <Point src="/src/point3.svg" caption="EXPERIENCED SOLAR PV EXPERTS" />
      </motion.div>
    </div>
  );
};

export default StrengthPoint;
