import { motion } from "framer-motion";

const text = "A Fullstack Developer crafting futuristic digital experiences".split("");

const HeroSection = () => {
  return (
    <div className="font-poppins bg-indigo-900 text-white min-h-screen flex flex-col justify-center items-center p-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Bagas Ramadhan Rusnadi</h1>

      <motion.div initial={{ perspective: 10000 }} className="relative text-lg md:text-xl font-semibold flex flex-wrap justify-center mt-5">
        {text.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{
              delay: index * 0.05,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="inline-block neon-text"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      <p className="text-6xl font-extrabold text-white stroke-black stroke-2 shadow-[4px_4px_0px_#ff0000]">3D Text</p>
    </div>
  );
};

export default HeroSection;
