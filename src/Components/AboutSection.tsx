import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.005 },
  }),
};
const textVariantsTitle = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.1 },
  }),
};

const AboutSection = () => {
  const title = "INDONESIA'S LEADING INTEGRATED SOLAR DEVELOPER COMPANY";
  const paragraph1 = `PT Persada Nusantara Bersaudara is a company specializing in the sale and installation of solar panels, dedicated to providing sustainable and efficient renewable energy solutions to customers across Indonesia. With a team of experienced professionals and top-tier solar technology, we offer professional installation services and high-quality products that cater to both residential and commercial needs.`;
  const paragraph2 = `Our vision is to help homes and businesses transition to clean, cost-effective energy, supporting a greener and more sustainable future while reducing dependence on fossil fuels. We provide tailored solutions to meet the unique energy requirements of each customer, with a strong focus on innovation, excellent service, and long-term support.`;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const [showParagraph1, setShowParagraph1] = useState(false);
  const [showParagraph2, setShowParagraph2] = useState(false);

  useEffect(() => {
    if (isInView) {
      const titleDuration = title.length * 110;
      const timeout1 = setTimeout(() => setShowParagraph1(true), titleDuration);

      return () => clearTimeout(timeout1);
    }
  }, [isInView]);

  useEffect(() => {
    if (showParagraph1) {
      const paragraph1Duration = paragraph1.length * 5;
      const timeout2 = setTimeout(() => setShowParagraph2(true), paragraph1Duration);

      return () => clearTimeout(timeout2);
    }
  }, [showParagraph1]);

  return (
    <div ref={ref} className="relative min-h-screen text-white py-16 px-6 flex flex-col lg:flex-row justify-center items-center">
      <img src="/src/abt-bg.svg" alt="abt-bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" loading="lazy" />

      {/* Gambar */}
      <motion.img src="/src/abt.svg" alt="img" className="w-2/3 md:w-1/3" initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1 }} />

      {/* Konten */}
      <motion.div className="max-w-5xl mx-auto w-full lg:w-1/2 text-left" initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1 }}>
        {/* Efek Ketikan untuk Title */}
        <h2 className="text-2xl md:text-5xl font-bold">
          {isInView &&
            title.split("").map((char, i) => (
              <motion.span key={i} custom={i} variants={textVariantsTitle} initial="hidden" animate="visible">
                {char}
              </motion.span>
            ))}
        </h2>

        {/* Efek Ketikan untuk Paragraf 1 (Muncul setelah judul selesai) */}
        {showParagraph1 && (
          <motion.p className="mt-4 text-gray-300 text-sm md:text-md">
            {paragraph1.split("").map((char, i) => (
              <motion.span key={i} custom={i} variants={textVariants} initial="hidden" animate="visible">
                {char}
              </motion.span>
            ))}
          </motion.p>
        )}

        {/* Efek Ketikan untuk Paragraf 2 (Muncul setelah paragraf 1 selesai) */}
        {showParagraph2 && (
          <motion.p className="mt-4 text-gray-300 text-sm md:text-md">
            {paragraph2.split("").map((char, i) => (
              <motion.span key={i} custom={i} variants={textVariants} initial="hidden" animate="visible">
                {char}
              </motion.span>
            ))}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default AboutSection;
