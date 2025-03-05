import { ProductCard } from "../Elements/Card";

const ProductCarousel = () => {
  const products = [
    { image: "/battery.png", title: "Battery", description: "Lorem Ipsum is simply dummy text." },
    { image: "/solar_panel.png", title: "Solar Panels", description: "Lorem Ipsum is simply dummy text." },
    { image: "/inverter.png", title: "Inverter", description: "Lorem Ipsum is simply dummy text." },
    { image: "/mcb.png", title: "32A MCB AC", description: "Lorem Ipsum is simply dummy text." },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Produk Kami</h2>
      <div className="mt-6 flex overflow-x-auto space-x-6 px-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
