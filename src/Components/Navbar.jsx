import React, { useState,useContext ,useRef  } from "react";
import { useNavigate } from "react-router-dom";

import  {AuthContext}  from "../Utils/AuthContext"; 
import UserRegisterPopup from "../Components/UserRegisterPopup"; // Import popup
import CustomerLicenseListPopup from "../Components/User/CustomerLicenseListPopup"; // Import popup


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false); // Control popup state
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { user, logout } = useContext(AuthContext);

 // Extract user details from context
 const userRoles = user?.roles || [];
 const userEmail = user?.sub || "Guest";
 const navigate = useNavigate();

 const handleRedirect = () => {
   navigate("/customerlicenselist");
 };
 console.log("user in Navbar: " + JSON.stringify(user));
 
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                  onMouseLeave={() => setIsDropdownOpen(false)}
>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
        
            {/* <a href="/">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            </a> */}
            <h6 className="text-4xl text-white font-serif">GTasterix</h6>
          </div>

          {/* Mobile Profile Icon */}
          {/* <div className="flex sm:hidden items-center">
            <div className="relative">
              <button
                type="button"
                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile Avatar"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign outfvds
                  </a>
                </div>
              )}
            </div>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}

          {(Array.isArray(userRoles) && (userRoles.includes("ADMIN") || userRoles.includes("USER"))) && (
              <div className="hidden sm:flex sm:items-center sm:space-x-4">
    <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-white">
      Home
    </a>

    {/* Services Dropdown */}
    {(Array.isArray(userRoles) && userRoles.includes("ADMIN") ) && (
    <div className="relative group">
      <button className="rounded-md px-3 py-2 text-sm font-medium text-white focus:outline-none">
        Services ▼
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
        <a
          href="dashboard"
          className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
        >
          Dashboard
        </a>
        <a
          href="customermanagement"
          className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
        >
          Customer Management
        </a>
        <a
          href="licensemanagement"
          className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
        >
          License Management
        </a>
        <a
      href="licensemanager"
      className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
      >
      Add License
    </a>
      </div>
    </div>)}
    <a href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-white">
      About
    </a> <a href="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-white">
      Contact
    </a>
   
  </div>
)}

        <div className="relative"   ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            // onMouseLeave={() => setIsDropdownOpen(false)}
            >
    <button
      type="button"
      className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      onClick={toggleDropdown}
    >
      <span className="sr-only">Open user menu</span>
      <img
        className="h-8 w-8 rounded-full"
        src="https://ui-avatars.com/api/?name=Dummy+User&background=random"
        alt="Profile Avatar"
      />
    </button>
    {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 origin-top-right 
              rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  z-50"
              
              onMouseEnter={() => setIsDropdownOpen(true)}  // Keep it open when hovering over dropdown
              onMouseLeave={() => setIsDropdownOpen(false)}>
                {user ? (
                  <>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Welcome {user.sub} - {user.roles?.join(", ")}  </a>

                    {(Array.isArray(userRoles) && userRoles.includes("USER")) && (
                    <button 
                    onClick={handleRedirect}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Licenses
                  </button>
                    )}
                    <button
                    onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                       <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign Out
                  </a>
                    </button>
                  </>
                ) : (
                    <>
                    {/* <button
                      onClick={() => setShowRegisterPopup(true)} // Open popup when clicked
                      className="block w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                    >
                      Register
                    </button> */}
                    <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign In
                    </a>
                    <a href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      SignUp
                    </a>
                  </>
                )}
              </div>
            )}
  </div>
        </div>
        
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (Array.isArray(userRoles) && (userRoles.includes("ADMIN")||userRoles.includes("USER")))?(
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
          <a
    href="/"
    className="rounded-md px-3 py-2 text-sm font-medium text-white"
  >
    Home
  </a>

  {(Array.isArray(userRoles) && userRoles.includes("ADMIN") ) && (
    <>
            <a
              href="adminsection"
              className="block rounded-md  px-3 py-2 text-base font-medium text-white"
            >
              Dashboard
            </a>
            <a
              href="customermanagement"
              className="block rounded-md  px-3 py-2 text-base font-medium text-white"
            >
              CustomerManagement
            </a>
            <a
              href="licensemanagement"
              className="block rounded-md  px-3 py-2 text-base font-medium text-white"
            >
              LiceneseManagement
            </a>
            <a
              href="licensemanager"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Add License 
            </a>
            </>
)}


            <a
              href="about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </a> 
             <a
              href="contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact
            </a>
          </div>
    
        </div>
      ):null}


    </nav>
  );
};

export default Navbar;
