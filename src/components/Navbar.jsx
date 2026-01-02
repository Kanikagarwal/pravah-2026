import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "../style.css";

const Navbarr = ({
  bgColor = "bg-transgparent",
  textColor = "text-[#5a3e36]",
  filter,
  announce,
  navbarDisplay,
  logo,
  eventName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false); // ✅ NEW
  const location = useLocation();

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  // Desktop check
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ NEW: Hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHideNavbar(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: hideNavbar ? -140 : 0,
          opacity: hideNavbar ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed w-full top-0 left-0 transition-colors duration-1000 ease-in-out ${
          isDesktop ? bgColor : "bg-slate-100"
        } ${isDesktop ? navbarDisplay : "block"}`}
        style={{ zIndex: 1000 }}
      >
        {/* Announcement Bar (unchanged) */}
        {/* ...your commented code remains here... */}

        {/* Navbar */}
        <div
          className={`flex items-center justify-between mx-auto px-4 py-4 dynapuff ${
            isDesktop ? bgColor : "bg-[#392823]"
          } sm:border-b border-gray-200 sm:border-none`}
        >
          {/* Left Logo */}
          <a href={`/skit-pravah-2025`}>
            <div className="sm:flex sm:justify-center sm:items-center flex-grow">
              <img
                src={logo ? `/${logo}` : "/logo.png"}
                className="sm:w-20 w-16 min-[760px]:block mx-4"
                alt="SKIT Logo"
              />
            </div>
          </a>

          {/* Center Links */}
          <div className="flex flex-row justify-end mb-4">
            <div className="hidden md:flex space-x-8 px-8 items-center flex-grow justify-end">
              <a
                href={`/skit-pravah-2025`}
                className={`text-md font-medium ${
                  isDesktop ? textColor : "text-black"
                } relative pb-1 group`}
              >
                HOME
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#5A3E36] transition-all duration-500 ${
                    isActiveLink("/skit-pravah-2025") ||
                    isActiveLink("/")
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </a>

              <Link
                to="/skit-pravah-2025-events"
                className={`text-md font-medium ${
                  isDesktop ? textColor : "text-white"
                } relative pb-1 group`}
              >
                DISCOVER EVENTS
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#5A3E36] transition-all duration-500 ${
                    isActiveLink("/skit-pravah-2025-events")
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </Link>

              <Link
                to="/skit-pravah-2025-AAVEG"
                className={`text-md font-medium ${
                  isDesktop ? textColor : "text-black"
                } relative pb-1 group`}
              >
                AAVEG
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#5A3E36] transition-all duration-500 ${
                    isActiveLink("/skit-pravah-2025-AAVEG")
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </Link>
            </div>

            {/* Right Links */}
            <div className="hidden md:flex space-x-8 items-center flex-grow justify-start">
              <Link
                to="/about-skit-pravah-2025"
                className={`text-md font-medium ${
                  isDesktop ? textColor : "text-black"
                } relative pb-1 group`}
              >
                ABOUT US
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#5A3E36] transition-all duration-500 ${
                    isActiveLink("/about-skit-pravah-2025")
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </Link>

              <Link
                to="/skit-pravah-2025-events-schedule"
                className={`text-md font-medium ${
                  isDesktop ? textColor : "text-black"
                } relative pb-1 group`}
              >
                SCHEDULE
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#5A3E36] transition-all duration-500 ${
                    isActiveLink("/skit-pravah-2025-events-schedule")
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </Link>

              <Link
                to="/skit-pravah-2025-sponsors"
                className={`text-md font-medium ${
                  isDesktop ? textColor : "text-black"
                } relative pb-1 group`}
              >
                SPONSORS
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-[#5A3E36] transition-all duration-500 ${
                    isActiveLink("/skit-pravah-2025-sponsors")
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#FFF1B8] text-3xl"
            onClick={toggleNavbar}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu (unchanged) */}
        {/* your existing mobile menu code remains exactly the same */}
      </motion.nav>

      {/* Event Title Section (unchanged) */}
      <motion.section
        className={`text-center mt-6 p-2 ${
          eventName ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 130 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-[#5a3e36] text-3xl md:text-5xl font-extrabold">
          {eventName}
        </h1>
      </motion.section>
    </>
  );
};

export default Navbarr;
