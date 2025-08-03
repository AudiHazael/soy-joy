import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const closeMenuOnScroll = () => setIsOpen(false);
    window.addEventListener("scroll", closeMenuOnScroll);
    return () => window.removeEventListener("scroll", closeMenuOnScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/75 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="/Home" className="flex items-center">
          <img src="/Logo.png" alt="logo" className="h-10 object-contain" />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black/75 px-6 py-4 md:static md:bg-transparent md:flex md:items-center md:space-x-6 md:w-auto transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col px-4 py-4 md:p-0 md:flex-row md:space-y-0 space-y-3 text-white font-medium gap-4">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-indigo-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/varieties"
                className="hover:text-indigo-300"
                onClick={() => setIsOpen(false)}
              >
                Varieties
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-indigo-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-indigo-300"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
