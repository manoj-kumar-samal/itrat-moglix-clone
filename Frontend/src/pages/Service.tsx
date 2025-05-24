import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Service: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <ul className="space-y-2">
          <li className="p-4 border rounded">Custom Procurement Solutions</li>
          <li className="p-4 border rounded">Enterprise Sourcing</li>
          <li className="p-4 border rounded">Inventory Management</li>
        </ul>
      </div>
      <Footer/>
    </>
  );
};

export default Service;
