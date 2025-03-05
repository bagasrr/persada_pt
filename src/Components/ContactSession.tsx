const ContactSection = () => {
  return (
    <section className="relative bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-left">
          <h2 className="text-3xl font-bold">Saatnya beralih ke energi surya.</h2>
        </div>
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Hubungi kami untuk mendapatkan penawaran</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Nama Kamu" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Alamat Anda" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Telepon Anda" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Proyek Anda" className="w-full p-2 border rounded" />
            <textarea placeholder="Pesan" className="w-full p-2 border rounded"></textarea>
            <button className="w-full bg-blue-600 text-white py-2 rounded">Kirim</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
