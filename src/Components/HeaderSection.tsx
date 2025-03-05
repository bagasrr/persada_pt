import { HSectionCard } from "../Elements/Card";
import { motion } from "framer-motion";

const HeaderSection = () => {
  const data = [
    {
      title: "Hidup yang Ramah Lingkungan",
      desc: "Pemasangan panel surya mengurangi dampak emisi karbon Anda dan mewujudkan lingkungan yang lebih sehat. Jadikan rumah Anda simbol energi keberlanjutan yang menginspirasi lingkungan Anda.",
      image: "/src/hsec1.svg",
    },
    {
      title: "Hemat Tagihan Listrik",
      desc: "Manfaatkan tenaga surya untuk menghasilkan energi mandiri agar dapat mengurangi biaya listrik bulanan.",
      image: "/src/hsec2.svg",
    },
    {
      title: "Kinerja dan Teknologi Terbaik",
      desc: "Teknologi terdepan dari PT Persada Nusantara Bersaudara memastikan penghematan energi, dan pengembalian investasi yang maksimal. Nikmati ketenangan hidup dengan desain dan layanan terbaik dari PT Persada Nusantara Bersaudara.",
      image: "/src/hsec3.svg",
    },
  ];

  return (
    <div className="relative text-center py-12 bg-white">
      <h2 className="text-3xl font-bold">Mulailah Upgrade Rumah Anda</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto py-10 min-h-[70dvh] px-5">
        {data.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true, amount: 0.2 }}>
            <HSectionCard image={item.image} title={item.title} description={item.desc} />
          </motion.div>
        ))}
      </div>
      <img src="/src/hsec-bg.svg" alt="background" className="absolute bottom-0 right-0" />
    </div>
  );
};

export default HeaderSection;
