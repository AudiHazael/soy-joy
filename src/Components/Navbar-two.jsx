import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

function NavbarTwo() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Soy Joy Logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="text-lg font-bold text-gray-800">Soy Joy</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-500">
            About
          </Link>
          <Link to="/products" className="hover:text-orange-500">
            Products
          </Link>
          <Link to="/blog" className="hover:text-orange-500">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-orange-500">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-orange-500">
            <FiSearch size={20} />
          </button>
          <button className="text-gray-600 hover:text-orange-500">
            <FiHeart size={20} />
          </button>
          <button className="text-gray-600 hover:text-orange-500">
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-4 pb-4">
        <nav className="flex flex-col space-y-2 font-medium">
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-500">
            About
          </Link>
          <Link to="/products" className="hover:text-orange-500">
            Products
          </Link>
          <Link to="/blog" className="hover:text-orange-500">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-orange-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavbarTwo;
