import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-purple-600 mb-5">About</h3>
            <p className="text-gray-400">
              Passionate developer creating innovative web solutions for businesses
              and individuals.
            </p>
          </div>
          <div>
            <h3 className="text-purple-600 mb-5">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-gray-400 no-underline hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                to="/bio"
                className="text-gray-400 no-underline hover:text-blue-500"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-400 no-underline hover:text-blue-500"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 no-underline hover:text-blue-500"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-purple-600 mb-5">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-100 text-lg" title="GitHub">
                GitHub
              </a>
              <a href="#" className="text-gray-100 text-lg" title="LinkedIn">
                LinkedIn
              </a>
              <a href="#" className="text-gray-100 text-lg" title="Twitter">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-10 mt-10 border-t border-gray-700">
          <p className="text-gray-400">&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 