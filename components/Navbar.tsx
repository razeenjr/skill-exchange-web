// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            <Link href="/">SkillExchange</Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link href="/login">
              <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;