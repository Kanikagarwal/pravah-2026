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
  const [hideNavbar, setHideNavbar] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  // Desktop check
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => setHideNavbar(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: hideNavbar ? -140 : 0, opacity: hideNavbar ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed w-full top-0 left-0 transition-colors duration-1000 ease-in-out ${
          isDesktop ? bgColor : "bg-[#f9eddd]"
        } ${isDesktop ? navbarDisplay : "block"}`}
        style={{ zIndex: 1000 }}
      >
        
        {/* Navbar Content */}
        <div
          className={`flex items-center justify-between mx-auto px-4 py-4 font-bold ${
            isDesktop ? bgColor : "bg-[#392823]"
          }`}
        >
          {/* LOGO */}
          <a href="/">
            <img
              src={logo ? `/${logo}` : "/logo.png"}
              className="sm:w-20 w-16 mx-4"
              alt="SKIT Logo"
            />
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`${textColor}`}>HOME</Link>
            <Link to="/skit-pravah-2025-events" className={`${textColor}`}>DISCOVER EVENTS</Link>
            <Link to="/skit-pravah-2025-AAVEG" className={`${textColor}`}>AAVEG</Link>
            <Link to="/about-skit-pravah-2025" className={`${textColor}`}>ABOUT US</Link>
            <Link to="/skit-pravah-2025-events-schedule" className={`${textColor}`}>SCHEDULE</Link>
            <Link to="/skit-pravah-2025-sponsors" className={`${textColor}`}>SPONSORS</Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-[#FFF1B8] text-3xl"
            onClick={toggleNavbar}
          >
            ☰
          </button>
        </div>

        {/* 🔥 MOBILE MENU (RESTORED FROM OLD NAVBAR) */}
        <motion.div
          className={`md:hidden bg-[#3d251e] ${
            isOpen ? "h-screen w-full" : "h-0 w-0"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute", top: 0, left: 0, overflow: "hidden" }}
        >
          <button
            onClick={closeNavbar}
            className="absolute top-4 right-4 text-3xl text-[#FFF1B8]"
          >
            &times;
          </button>

          <div className="flex flex-col items-center space-y-4 py-8 text-[#FFF1B8]">
            <Link to="/"  className="text-lg font-medium text-[#FFF1b8] hover:text-yellow-600 transition"  onClick={closeNavbar}>HOME</Link>
            <Link to="/skit-pravah-2025-events"  className="text-lg font-medium text-[#FFF1b8] hover:text-yellow-600 transition"  onClick={closeNavbar}>EVENTS & REGISTRATIONS</Link>
            <Link to="/skit-pravah-2025-AAVEG"  className="text-lg font-medium text-[#FFF1b8] hover:text-yellow-600 transition"  onClick={closeNavbar}>AAVEG</Link>
            <Link to="/about-skit-pravah-2025"  className="text-lg font-medium text-[#FFF1b8] hover:text-yellow-600 transition"  onClick={closeNavbar}>ABOUT US</Link>
            <Link to="/skit-pravah-2025-events-schedule"  className="text-lg font-medium text-[#FFF1b8] hover:text-yellow-600 transition"  onClick={closeNavbar}>EVENT SCHEDULE</Link>
            <Link to="/skit-pravah-2025-sponsors"  className="text-lg font-medium text-[#FFF1b8] hover:text-yellow-600 transition"  onClick={closeNavbar}>SPONSORS</Link>
            <Link to="/the-team-behind-skit-pravah-2025" className="text-lg font-medium text-[#FFF1b8] hover:text-yellow-600 transition" onClick={closeNavbar}> TEAM PRAVAH </Link>
            <img src="navras/mandala.png" alt="Pravah 2025 - Incredible India | SKIT Graphics" className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-md object-contain pointer-events-none opacity-90" />
          </div>
        </motion.div>
      </motion.nav>

      {/* EVENT TITLE */}
      <motion.section
        className={`text-center mt-6 ${eventName ? "block" : "hidden"}`}
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
