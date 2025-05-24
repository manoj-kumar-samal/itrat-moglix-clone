const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-3">ItratTech</h4>
          <p className="text-sm text-gray-400">
            Empowering industry with technology. Simplified solutions for complex needs.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-red-400">Home</a></li>
            <li><a href="/services" className="hover:text-red-400">Services</a></li>
            <li><a href="/contact" className="hover:text-red-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Contact Info</h4>
          <p className="text-sm text-gray-400">Email: support@itratech.com</p>
          <p className="text-sm text-gray-400">Phone: +91 12345 67890</p>
        </div>
      </div>
      <div className="bg-gray-900 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Itrat Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
