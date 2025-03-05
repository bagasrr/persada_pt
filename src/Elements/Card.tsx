interface ProductProps {
  image: string;
  title: string;
  description: string;
}

interface pointProps {
  src: string;
  caption: string;
}

export const ProductCard = ({ image, title, description }: ProductProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center w-64">
      <img src={image} alt={title} className="w-full h-32 object-contain" />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Pesan Sekarang</button>
    </div>
  );
};

export const Point = ({ src, caption }: pointProps) => {
  return (
    <div className="flex bg-slate-300 gap-3 p-5 items-center rounded-lg hover:bg-slate-50 transition-all duration-300 shadow-md w-50 md:w-60 lg:w-fit max-h-23">
      <img src={src} alt="point" className="w-12 sm:w-14" />
      <section className="text-sm sm:text-md font-bold">{caption}</section>
    </div>
  );
};

export const HSectionCard = ({ image, title, description }: ProductProps) => {
  return (
    <div className="bg-white rounded-lg p-6 text-center w-full max-w-xs mx-auto">
      <img src={image} alt={title} className="w-full h-32 object-contain" />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-600 mt-3">{description}</p>
    </div>
  );
};
