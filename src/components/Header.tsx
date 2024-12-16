"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white text-black">
      {/* Promo Bar */}
      <div className="text-center py-2 bg-black text-white text-sm">
        Sign up and get 20% off your first order.{" "}
        <a href="#" className="text-yellow-400 underline hover:text-yellow-300">
          Sign Up Now
        </a>
      </div>

      {/* Navigation Section */}
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold">SHOP.CO</h1>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="text-black text-2xl md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`fixed inset-0 md:static bg-black md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end space-y-6 md:space-y-0 md:space-x-8 p-6 md:p-0 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-center">
            <li className="py-2 md:py-0">
              <a
                href="#"
                className="text-white md:text-black hover:text-gray-300 md:hover:text-gray-700 transition-all"
              >
                Shop
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#"
                className="text-white md:text-black hover:text-gray-300 md:hover:text-gray-700 transition-all"
              >
                On Sale
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#"
                className="text-white md:text-black hover:text-gray-300 md:hover:text-gray-700 transition-all"
              >
                New Arrivals
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#"
                className="text-white md:text-black hover:text-gray-300 md:hover:text-gray-700 transition-all"
              >
                Brands
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
