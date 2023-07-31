import React, { useState } from 'react';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import flag from '../assets/ukFlag.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setRotation(rotation => rotation + 180);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-2">
      {/* Logo */}
      <div className="flex items-center w-full justify-between">
        <div className="">
          <img className="w-32 h-12 md:w-44 md:h-16" src={logo} alt="Logo" />
        </div>

        <div
        className={`text-xl md:hidden cursor-pointer ${
          isMobileMenuOpen ? 'active' : ''
        }`}
        onClick={toggleMobileMenu}
      >
        {/* Hamburger icon for mobile */}
        <div className="w-6 h-px bg-black mb-1"></div>
        <div className="w-6 h-px bg-black mb-1"></div>
        <div className="w-6 h-px bg-black"></div>
      </div>
      </div>

      {/* Mobile Menu Toggle */}
     

      {/* Navigation Menu */}
      <nav
        className={`${
          isMobileMenuOpen ? 'flex justify-end w-full ' : 'hidden'
        } md:flex md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 md:mt-0`}
      >
        <ul
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:flex md:flex-row items-center space-y-2 md:space-y-0 md:space-x-10`}
        >
          <li>
            <a href="#hotel" className="text-gray-800 hover:text-gray-600">
              Hotel
            </a>
          </li>
          <li>
            <a href="#brand" className="text-gray-800 hover:text-gray-600">
              Brand
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-800 hover:text-gray-600">
              About Us
            </a>
          </li>
          <li className={`relative ${isDropdownOpen ? 'active' : ''}`}>
            <div className="flex flex-row" onClick={toggleDropdown}>
              <a href="#howitworks" className="text-gray-800 hover:text-gray-600">
                How It Works
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {/* ... SVG Path ... */}
              </svg>
            </div>
            <ul
              className={`mt-2 p-2 bg-white shadow-md rounded ${
                isDropdownOpen ? 'block' : 'hidden'
              }`}
            >
              {/* Dropdown menu items */}
              <li>
                <a
                  href="#feature1"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Feature 1
                </a>
              </li>
              <li>
                <a
                  href="#feature2"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Feature 2
                </a>
              </li>
              <li>
                <a
                  href="#feature3"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Feature 3
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#pricing" className="text-gray-800 hover:text-gray-600">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* User and Flag icons */}
      <div className="md:flex flex-row space-x-4 hidden">
        <img src={flag} alt="Flag" className="w-10 h-10" />
        <img src={user} alt="User" className="w-10 h-10" />
      </div>
    </header>
  );
};

export default Header;
