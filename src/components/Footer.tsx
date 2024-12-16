import React from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import social icons

const Footer = () => {
  return (
    <div className="bg-[#F0F0F0] py-10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Left Side: Company Info and Links */}
          <div className="flex flex-col sm:w-1/2 space-y-4 text-center sm:text-left">
            <h2 className="text-3xl font-bold">SHOP.CO</h2>
            <p className="text-sm sm:text-base">
              We have clothes that suit your style and which you’re proud to wear. From women to men, our collection will elevate your wardrobe.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {/* Links */}
              <div>
                <h3 className="font-semibold">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>About</li>
                  <li>Features</li>
                  <li>Works</li>
                  <li>Career</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Customer Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>Delivery Details</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Account</h3>
                <ul className="space-y-2 text-sm">
                  <li>Manage Deliveries</li>
                  <li>Orders</li>
                  <li>Payments</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>Free eBooks</li>
                  <li>Development Tutorial</li>
                  <li>How to - Blog</li>
                  <li>YouTube Playlist</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Payment and Social Media Icons */}
          <div className="flex flex-col sm:w-1/2 mt-6 sm:mt-0 items-center space-y-6 sm:space-y-0">
            {/* Payment Icons */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-6 mb-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Visa_Logo.svg/1200px-Visa_Logo.svg.png" alt="Visa" className="w-12 h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/PayPal.svg" alt="PayPal" className="w-12 h-8" />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a href="#" className="text-2xl text-gray-700 hover:text-blue-600">
                <FaGithub />
              </a>
              <a href="#" className="text-2xl text-gray-700 hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl text-gray-700 hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl text-gray-700 hover:text-blue-400">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
