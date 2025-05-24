import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-red-600">Moglix Clone</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/service" className="hover:text-red-500">Service</Link>
        <Link to="/contact" className="hover:text-red-500">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
