import { Helmet } from "react-helmet-async";

const Banner = () => {
  return (
    <div className="relative w-full h-screen flex items-center bg-gray-900">
      <Helmet>
        <title>Panel Surya Berkualitas | PT Persada Nusantara Bersaudara</title>

        <meta name="description" content="Ubah sinar matahari menjadi energi listrik dengan panel surya berkualitas tinggi. Hemat tagihan listrik dan gunakan energi ramah lingkungan." />

        <meta name="keywords" content="panel surya, energi matahari, hemat listrik, energi terbarukan, solar panel" />
      </Helmet>

      <img src="/src/banner.png" alt="Solar Panels" className="absolute inset-0 w-full h-full object-cover opacity-50" loading="lazy" />
      <div className="relative z-10 max-w-4xl px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          UBAH SINAR MATAHARI <br /> MENJADI SOLUSI <br />
          ENERGI ANDA
        </h1>
        <section>
          <p className="mt-4 text-lg md:text-xl">Dapatkan kemerdekaan energi dan kurangi tagihan listrik Anda dengan panel surya berkualitas tinggi.</p>
        </section>
      </div>
    </div>
  );
};

export default Banner;
