import React, { useState } from "react";
import { getUserRole } from "../Utils/authUtils";
import { getTokenDetails } from "../Utils/authUtils";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const userRoles = getUserRole() || [];
  const userDetails = getTokenDetails();
  const isLoggedIn = !!userDetails; // Check if user is logged in

  console.log("user role in Navbar"+userRoles)
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login"; // Redirect to login page
  };
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
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

          {(Array.isArray(userRoles) && userRoles.includes("ADMIN"))? (
  <div className="hidden sm:flex sm:items-center sm:space-x-4">
  <a
    href="adminsection"
    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
  >
    Dashboard
  </a>
  <a
    href="licensemanager"
    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
  >
    Add License 
  </a>
 

  {/* Avatar Icon */}
  
</div>
          ):null}
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
                {isLoggedIn ? (
                  <>
                    <a href="/userprofile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Welcome {userDetails?.sub} - {userDetails?.roles?.join(", ")}
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </a>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign In
                  </a>
                )}
              </div>
            )}
  </div>
        </div>
        
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (Array.isArray(userRoles) && userRoles.includes("ADMIN"))?(
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="adminsection"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            >
              Dashboard
            </a>
            <a
              href="licensemanager"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Add License 
            </a>
            {/* <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a> */}
            {/* <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a> */}
          </div>
        </div>
      ):null}
    </nav>
  );
};

export default Navbar;
