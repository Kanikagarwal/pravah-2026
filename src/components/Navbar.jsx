import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation to detect active link
import '../style.css';

const Navbarr = ({ bgColor = "bg-slate-100", textColor, filter, announce, navbarDisplay , logo , eventName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // alert(bgColor);
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to determine if the current link is active
  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 transition-colors duration-1000 ease-in-out ${isDesktop ? bgColor : 'bg-slate-100'} ${isDesktop ? navbarDisplay : "block"}`}
        style={{ zIndex: 1000 }}
      >
        {/* Announcement Bar */}
        <div className={`bg-gradient-to-r from-[#221b63] via-[#01001d] to-[#3d0075] text-white text-sm md:text-base font-medium py-2 ${isDesktop ? announce : 'block'}`}>
          <div className="max-w-screen-xl mx-auto px-4 text-center font-sans">
            🌟 Join **Pravah 2025**! Have you registered yet?{' '}
            <Link to="/skit-pravah-2025-events" className="text-blue-200 underline font-semibold hover:text-blue-600 transition">
              Register Now
            </Link>{' '}
            and be part of the celebration!
          </div>
        </div>



        {/* Navbar */}
        <div className={`flex items-center justify-between mx-auto px-4 py-4 dynapuff ${isDesktop ? bgColor : 'bg-white'} sm:border-b border-gray-200 sm:border-none`}>
          
          {/* Left Links (for desktop) */}
          <div className="hidden md:flex space-x-8 items-center flex-grow justify-start">
          <a 
  href={`/skit-pravah-2025`}
  className={`text-md font-medium ${isDesktop ? textColor : 'text-black'} relative pb-1 group`}
>
              HOME
              <span
                className={`absolute bottom-0 left-0 h-1 bg-yellow-900 rounded-full transition-all duration-500 group-hover:w-full ${isActiveLink('/skit-pravah-2025') || isActiveLink('/') ? 'w-full' : 'w-0'}`}
              ></span>
            </a>
            <Link
              to="/skit-pravah-2025-events"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'} relative pb-1 group`}
            >
              DISCOVER EVENTS
              <span
                className={`absolute bottom-0 left-0 h-1 bg-yellow-900 rounded-full transition-all duration-500 group-hover:w-full ${isActiveLink('/skit-pravah-2025-events') ? 'w-full' : 'w-0'}`}
              ></span>
            </Link>
            <Link
              to="/skit-pravah-2025-AAVEG"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'} relative pb-1 group`}
            >
              AAVEG
              <span
                className={`absolute bottom-0 left-0 h-1 bg-yellow-900 rounded-full transition-all duration-500 group-hover:w-full ${isActiveLink('/skit-pravah-2025-AAVEG') ? 'w-full' : 'w-0'}`}
              ></span>
            </Link>
          </div>

          {/* Logo (Centered) */}
          <a href={`/skit-pravah-2025`}>
            <div className="sm:flex sm:justify-center sm:items-center flex-grow">

              <img
                src="/skit_logo.png"
                className={`sm:w-14 w-14 ${filter || ''} mx-4 hidden sm:block`} // Apply filter dynamically
                alt="SKIT M & G Logo"
              />


              <img
                src="/logo-skit.png"
                className={`sm:w-32 w-32 ${filter || ''} mx-4`} // Apply filter dynamically
                alt="SKIT M & G Logo"
              />

              <img
                src={logo ? logo : "https://ik.imagekit.io/2lfvkrya5/sxt058o5ftklmmq3biva-min.png?updatedAt=1739642885356"}
                className="sm:w-16 w-16 hidden sm:block mx-4" // Apply filter dynamically
                alt="SKIT M & G Logo"
              />
            </div>
          </a>
          {/* Right Links (for desktop) */}
          <div className="hidden md:flex space-x-8 items-center flex-grow justify-end">
            <Link
              to="/about-skit-pravah-2025"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'} relative pb-1 group`}
            >
              ABOUT US
              <span
                className={`absolute bottom-0 left-0 h-1 bg-yellow-900 rounded-full transition-all duration-500 group-hover:w-full ${isActiveLink('/about-skit-pravah-2025') ? 'w-full' : 'w-0'}`}
              ></span>
            </Link>
            <Link
              to="/skit-pravah-2025-events-schedule"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'} relative pb-1 group`}
            >
              SCHEDULE
              <span
                className={`absolute bottom-0 left-0 h-1 bg-yellow-900 rounded-full transition-all duration-500 group-hover:w-full ${isActiveLink('/skit-pravah-2025-events-schedule') ? 'w-full' : 'w-0'}`}
              ></span>
            </Link>
            <Link
              to="/skit-pravah-2025-sponsors"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'} relative pb-1 group`}
            >
              SPONSORS
              <span
                className={`absolute bottom-0 left-0 h-1 bg-yellow-900 rounded-full transition-all duration-500 group-hover:w-full ${isActiveLink('/skit-pravah-2025-sponsors') ? 'w-full' : 'w-0'}`}
              ></span>
            </Link>

          </div>




          {/* Toggler Button for Mobile */}
          <button
            className="md:hidden text-black focus:outline-none text-3xl"
            onClick={toggleNavbar}
          >
☰
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden transition-all duration-500 bg-white ${isOpen ? 'h-screen w-full' : 'h-0 w-0'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -20,
          }}
          transition={{ duration: 0.5 }}
          style={{
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeNavbar}
            className="absolute top-4 right-4 text-3xl text-black"
          >
            &times;
          </button>


          <div className="flex flex-col items-center space-y-4 py-8">
            <Link
              to="/"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              HOME
            </Link>
            <Link
              to="/skit-pravah-2025-events"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              EVENTS & REGISTRATIONS
            </Link>
            <Link
              to="/skit-pravah-2025-AAVEG"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              AAVEG
            </Link>
            <Link
              to="/about-skit-pravah-2025"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              ABOUT US
            </Link>
            <Link
              to="/skit-pravah-2025-events-schedule"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              EVENT SCHEDULE
            </Link>
            <Link
              to="/skit-pravah-2025-sponsors"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              SPONSORS
            </Link>
            <Link
              to="/the-team-behind-skit-pravah-2025"
              className="text-lg font-medium text-black hover:text-yellow-600 transition"
            >
              TEAM PRAVAH
            </Link>

            {/* Pravah 2025 - Incredible India | SKIT graphic image */}
            <img
              src="/himalya.png"
              alt="Pravah 2025 - Incredible India | SKIT Graphics"
              className="mt-8 w-full max-w-md object-contain transform translate-y-1/2"
            />
          </div>

        </motion.div>
      </nav>


      <motion.section
                            className={`text-center mt-6 p-2  border-gray-200 sm:border-none ${eventName ? "block" : "hidden"} bg-white h-auto sm:bg-slate-100`}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 130 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                           
                                <div className="relative">
                                    <motion.h1
                                        className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black font-sans tracking-tight"
                                    >
                                        {eventName}
                                        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-[4px] bg-gradient-to-r from-[#581852] to-[#9e1c9e] mt-1 rounded-full  sm:block"></span>
                                    </motion.h1>
                                </div>

                           

                            {/* <motion.div
                                className="relative w-96 max-w-2xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                <input
                                    type="text"
                                    placeholder={`Search ${eventcat} events...`}
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    className="w-full px-5 py-3 text-gray-800 bg-white bg-opacity-70 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12"
                                    style={{ backdropFilter: 'blur(10px)' }}
                                />
                                <span className="absolute inset-y-0 right-4 flex items-center text-purple-600">
                                    <FaSearch className="text-lg" />
                                </span>

                            </motion.div> */}
                        </motion.section>


    </>
  );
};

export default Navbarr;
