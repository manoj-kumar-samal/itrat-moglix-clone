import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';


const Home: React.FC = () => {
  const mockProducts = [
    {
      title: "Cooler",
      description: "Moonstruck Suprimo Wind 40 Litre 140W Light Grey Air Cooler",
      image: "https://cdn.moglix.com/p/YeknEpq8SVKTM-medium.jpg",
    },
    {
      title: "Bicycle",
      description: "Leader Beast 26 inch Matt Black & Sea Green 7 Speed Mountain Bicycle with Front Suspension & Dual Disc Brake",
      image: "https://cdn.moglix.com/p/67axdFvyynyXC-medium.jpg",
    },
    {
      title: "Screwdriver",
      description: "Tomahawk 12V Cordless Screwdriver Machine with Reversible Switch Multi-Torque Clutch, T7386",
      image: "https://cdn.moglix.com/p/Q2CcKGlPyKq5M-medium.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">BESTSELLERS</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {mockProducts.map((item, idx) => (
            <ProductCard key={idx} {...item} />
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
