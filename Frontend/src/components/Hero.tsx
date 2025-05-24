const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Industrial Products at Your Fingertips
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Buy high-quality industrial tools and supplies from top brands with ease.
      </p>
      <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition">
        Explore Products
      </button>
    </section>
  );
};

export default Hero;
