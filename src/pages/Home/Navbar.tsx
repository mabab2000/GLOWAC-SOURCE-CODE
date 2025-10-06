import { useState } from "react";
import evsImage from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [geotechOpen, setGeotechOpen] = useState(false);

  return (
    <nav className="bg-gray-300 shadow-md fixed top-0 left-1/2 transform -translate-x-1/2 w-full md:w-[70%] z-50">
      <div className="h-30 px-4 flex items-center justify-between md:justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={evsImage} alt="Logo" className="h-20 w-40" />
          <span className="text-4xl font-bold text-gray-300">Glowac</span>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            className="text-[#0d9488] bg-gray-300 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`absolute md:static top-40 left-0 w-full md:w-auto text-[#0d9488] md:flex md:items-center md:space-x-6 md:ml-auto ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col bg-gray-300 md:flex-row md:items-center md:space-x-6 text-lg md:text-left md:justify-start justify-end">
            <li>
              <a
                href="/"
                className="block px-4 py-2 text-[#0d9488] hover:bg-gray-100 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="./#/about"
                className="block px-4 py-2 text-[#0d9488] hover:bg-gray-100 rounded"
              >
                About
              </a>
            </li>

            {/* Services Dropdown */}
            <li className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full bg-gray-300 md:w-auto flex items-center justify-between px-4 py-2 text-[#0d9488] rounded"
              >
                Services
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              <ul
                className={`md:absolute left-0 bg-gray-300 border rounded shadow-md md:mt-1 w-auto min-w-max z-50 text-left transition-all duration-300 ${
                  servicesOpen ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <li>
                  <a
                    href={`#/service?name=${encodeURIComponent(
                      "Topographical Survey Service"
                    )}`}
                    className="block px-4 py-2 text-lg text-[#0d9488] hover:bg-gray-100"
                  >
                    Topographical Survey Service
                  </a>
                </li>
                <li>
                  <a
                    href={`#/service?name=${encodeURIComponent(
                      "Environment Impact Assessment"
                    )}`}
                    className="block px-4 py-2 text-lg text-[#0d9488] hover:bg-gray-100"
                  >
                    Environment Impact Assessment
                  </a>
                </li>

                {/* Geotechnical Submenu */}
                <li className="relative">
                  <button
                    onClick={() => setGeotechOpen(!geotechOpen)}
                    className="w-full bg-gray-300 flex items-center justify-between px-4 py-2 text-lg"
                  >
                    Geotechnical
                    <svg
                      className="ml-2 w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Submenu items */}
                  <ul
                    className={`bg-gray-300 border rounded shadow-md w-auto min-w-max text-left transition-all duration-300 ${
                      geotechOpen ? "block opacity-100" : "hidden opacity-0"
                    }`}
                  >
                    <li>
                      <a
                        href={`#/service?name=${encodeURIComponent(
                          "Soil Testing"
                        )}`}
                        className="block px-4 py-2 text-lg text-[#0d9488] hover:bg-gray-100"
                      >
                        Soil Testing
                      </a>
                    </li>
                    <li>
                      <a
                        href={`#/service?name=${encodeURIComponent(
                          "Cement Testing"
                        )}`}
                        className="block px-4 py-2 text-lg text-[#0d9488] hover:bg-gray-100"
                      >
                        Cement Testing
                      </a>
                    </li>
                    <li>
                      <a
                        href={`#/service?name=${encodeURIComponent(
                          "Aggregate & Concrete Testing"
                        )}`}
                        className="block px-4 py-2 text-lg text-[#0d9488] hover:bg-gray-100"
                      >
                        Aggregate & Concrete Testing
                      </a>
                    </li>
                    <li>
                      <a
                        href={`#/service?name=${encodeURIComponent(
                          "Water Testing"
                        )}`}
                        className="block px-4 py-2 text-lg text-[#0d9488] hover:bg-gray-100"
                      >
                        Water Testing
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="#/contact"
                className="block px-4 py-2 text-[#0d9488] hover:bg-gray-100 rounded"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
