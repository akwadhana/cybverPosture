import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GradientButton } from "./Button";
import { Logo } from "../assets";

const MobileNav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#11121B] relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-5" src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className="hidden md:block text-white">
            <div className="justify-center flex items-baseline space-x-4">
             
              <div className="px-3 py-2 text-sm font-medium">Services</div>
              <div className="px-3 py-2 text-sm font-medium">About</div>
              <div className="px-3 py-2 text-sm font-medium">Contact Us</div>
            </div>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block text-white">
            <Link to="/schedule">
              <GradientButton text="Schedule a Call" />
            </Link>
          </div>

         
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transition-transform ${isMobileMenuOpen ? "rotate-45" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 transition-transform ${isMobileMenuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

   
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMobileMenu}
        ></div>
      )}




      <div
        className={`fixed  mt-3  top-0 left-0 h-full w-64 bg-[#11121B] text-white transform transition-transform duration-1000 ease-in-out z-20 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>


        <div className="flex-shrink-0 mt-5">
            <Link to="/">
              <img className="h-5 px-3" src={Logo} alt="Logo" />
            </Link>
          </div>

        <div className="px-2 mt-10 pt-2 pb-3 space-y-1 sm:px-3">
         
          <div className="block px-3 text-white py-2 text-sm font-medium">Services</div>
          <div className="block px-3 text-white py-2 text-sm font-medium">About</div>
          <div className="block px-3 text-white py-2 text-sm font-medium">Contact Us</div>
          <div className="mt-4">
            <Link to="/schedule">
              <GradientButton text="Schedule a Call" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
