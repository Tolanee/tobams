// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import '../css/Header.css'
import logo from '../assets/logo.png'

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-4 py-2">
      <div className="logo">
       <img className=' w-44 h-16' src={logo}/>
      </div>
     <nav className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
        <ul className="flex items-center space-x-10">
        <li><a href="#hotel" className="text-gray-800 hover:text-gray-600">Hotel</a></li>
          <li><a href="#brand" className="text-gray-800 hover:text-gray-600">Brand</a></li>
          <li><a href="#about" className="text-gray-800 hover:text-gray-600">About Us</a></li>
          <li className={`relative ${isDropdownOpen ? 'active' : ''}`}>
            <a href="#howitworks" onClick={toggleDropdown} className="text-gray-800 hover:text-gray-600">
              How It Works
            </a>
            <ul className={`absolute left-0 mt-2 p-2 bg-white shadow-md rounded ${isDropdownOpen ? 'block' : 'hidden'}`}>
              {/* Dropdown menu items */}
              <li><a href="#feature1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Feature 1</a></li>
              <li><a href="#feature2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Feature 2</a></li>
              <li><a href="#feature3" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Feature 3</a></li>
            </ul>
          </li>
          <li><a href="#pricing" className="text-gray-800 hover:text-gray-600">Pricing</a></li>
          <li><a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a></li>
         
        </ul>
      </nav>
      <div className={`text-xl md:hidden cursor-pointer ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
        {/* Hamburger icon for mobile */}
        <div className="w-6 h-px bg-black mb-1"></div>
        <div className="w-6 h-px bg-black mb-1"></div>
        <div className="w-6 h-px bg-black"></div>
      </div>
      <div className="text-xl hidden md:block">User Profile</div>
    </header>
  );
};

export default Header;





