// eslint-disable-next-line no-unused-vars
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
    <header className="flex flex-col md:flex-row justify-between  items-center  px-4 md:px-16 py-2">
    {/* Logo */}
    <div className='flex flex-row justify-between items-center w-full md:w-auto'>
    <div className="flex items-center">
          <div className="">
            <img className="w-32 h-12 md:w-44 md:h-16" src={logo} alt="Logo" />
          </div>
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
          isMobileMenuOpen ? 'flex justify-end  w-full mt-10 ' : 'hidden'
        } md:flex md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 md:mt-0`}
      >
        <ul
          className={`${
            isMobileMenuOpen ? 'block ' : 'hidden'
          } md:flex md:flex-row  items-center space-y-2 md:space-y-0 md:space-x-10`}
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
      <div className='flex flex-row' onClick={toggleDropdown}>
        <a href="#howitworks" className="text-gray-800 hover:text-gray-600">
          How It Works
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          style={{ transform: `rotate(${rotation}deg)` }} // Rotate the SVG based on the rotation state
        >
          <g clipPath="url(#clip0_323_9)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.207 15.7071C13.0195 15.8946 12.7652 15.9999 12.5 15.9999C12.2348 15.9999 11.9805 15.8946 11.793 15.7071L6.136 10.0501C6.04049 9.95785 5.96431 9.84751 5.9119 9.7255C5.85949 9.6035 5.8319 9.47228 5.83075 9.3395C5.8296 9.20672 5.8549 9.07504 5.90518 8.95215C5.95546 8.82925 6.02971 8.7176 6.1236 8.6237C6.2175 8.52981 6.32915 8.45556 6.45205 8.40528C6.57494 8.355 6.70662 8.32969 6.8394 8.33085C6.97218 8.332 7.1034 8.35959 7.2254 8.412C7.34741 8.46441 7.45775 8.54059 7.55 8.6361L12.5 13.5861L17.45 8.6361C17.6386 8.45394 17.8912 8.35315 18.1534 8.35542C18.4156 8.3577 18.6664 8.46287 18.8518 8.64828C19.0372 8.83369 19.1424 9.0845 19.1447 9.3467C19.147 9.60889 19.0462 9.8615 18.864 10.0501L13.207 15.7071Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_323_9">
              <rect width="24" height="24" fill="white" transform="translate(0.5)" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <ul className={`absolute left-0 mt-2 p-2 bg-white shadow-md rounded ${isDropdownOpen ? 'block' : 'hidden'}`}>
        {/* Dropdown menu items */}
        <li><a href="#feature1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Feature 1</a></li>
        <li><a href="#feature2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Feature 2</a></li>
        <li><a href="#feature3" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Feature 3</a></li>
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
