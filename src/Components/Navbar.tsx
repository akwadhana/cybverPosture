import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../assets";
import { GradientButton } from "./Button";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <nav className="bg-[#11121B]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 ml">
            <Link to="/">
              <img className="h-5" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block text-white">
            <div className="justify-center flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/apartment") ? "text-primary" : ""
                }`}
              >
                Services
              </Link>
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/faqs") ? "text-primary" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/contact") ? "text-primary" : ""
                }`}
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="hidden md:block text-white">
            <Link to="#">
              {" "}
              <GradientButton text="Schedule a Call" />
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
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
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
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
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className={`px-3 text-white py-2 text-sm font-medium ${
              isActive("/apartment") ? "text-primary" : ""
            }`}
          >
            Home
          </Link>

          <div>
            <Link
              to="/"
              className={`px-3 text-white py-2 text-sm font-medium ${
                isActive("/apartment") ? "text-primary" : ""
              }`}
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className={`px-3 text-white py-2 text-sm font-medium ${
                isActive("/faqs") ? "text-primary" : ""
              }`}
            >
              About
            </Link>
          </div>

          <div>
            <Link
              to="/"
              className={`px-3 py-2 text-white text-sm font-medium ${
                isActive("/contact") ? "text-primary" : ""
              }`}
            >
              Contact us
            </Link>
          </div>

          <GradientButton text="Schedule a Call" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
