import { Link } from "react-router";

export default function Header() {
  return (
    <nav className="bg-gray-800 py-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <Link to="/" className="text-gray-100 text-2xl font-bold no-underline">
          Raul Gage Portfolios
        </Link>
        <div className="flex gap-8">
          <Link
            to="/"
            className="text-gray-100 no-underline hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/bio"
            className="text-gray-100 no-underline hover:text-blue-500 transition-colors"
          >
            Bio
          </Link>
          <Link
            to="/services"
            className="text-gray-100 no-underline hover:text-blue-500 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-100 no-underline hover:text-blue-500 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 