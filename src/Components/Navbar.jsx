import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const role = localStorage.getItem("role");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status, setStatus] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role");
    setIsMenuOpen(false); // Close menu after logout
    setStatus(!status);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false); // Close menu when an item is clicked
  };

   const handleLogin=()=>{
    navigate('/login')
  }
  return (
    <div>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <nav
        className={`fixed w-full z-50 py-4 px-6 md:px-10 transition-all duration-500 ease-in-out ${
          scrolling ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
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
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Menu */}
          <ul
            className={`absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto bg-black md:bg-transparent md:flex md:space-x-6 p-6 md:p-0 space-y-4 md:space-y-0 transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a
                href="#home"
                className="text-white text-sm uppercase tracking-wide hover:text-green-500"
                onClick={handleMenuClick}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white text-sm uppercase tracking-wide hover:text-green-500"
                onClick={handleMenuClick}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#myskills"
                className="text-white text-sm uppercase tracking-wide hover:text-green-500"
                onClick={handleMenuClick}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="text-white text-sm uppercase tracking-wide hover:text-green-500"
                onClick={handleMenuClick}
              >
                Projects
              </a>
            </li>
            {role === "Admin" && (
              <>
                <li>
                  <Link
                    to="/createproject"
                    className="text-white text-sm uppercase tracking-wide hover:text-green-500"
                    onClick={handleMenuClick}
                  >
                    Create Project
                  </Link>
                </li>

                <li>
                  <Link
                    to="/manageproject"
                    className="text-white text-sm uppercase tracking-wide hover:text-green-500"
                    onClick={handleMenuClick}
                  >
                    Manage Project
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Right Aligned Buttons */}
          <div className="hidden md:flex space-x-4">
            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download="jim_CV.pdf"
              className="px-4 py-2 text-white text-sm border border-white rounded-md hover:bg-green-500 hover:border-green-500"
            >
              Download CV
            </a>

            {role === "Admin" && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-white text-sm border border-white rounded-md hover:bg-green-500 hover:border-green-500"
              >
                Log out
              </button>
            )}

            <button
                onClick={handleLogin}
                className="px-4 py-2 text-white text-sm border border-white rounded-md hover:bg-green-500 hover:border-green-500"
              >
                Log in
              </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
