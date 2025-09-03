// components/Navbar.js
import Link from 'next/link';
import { LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
  return (
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            SkillExchange
          </h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <LogIn size={20} />
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <UserPlus size={20} />
              Sign Up
            </button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;