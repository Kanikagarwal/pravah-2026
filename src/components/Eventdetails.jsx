import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbarr from "./Navbar";
import DesktopFooter from "./DesktopFooter";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaArrowRight, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import Coordinator from "./Coordinator";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import RecommendedEventsSlider from "./RecommendedEventsSlider";
import Dynamicfield from "./Dynamicfield";
import { FaDownload } from "react-icons/fa6";
import { Button, Drawer } from "flowbite-react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Confetti from 'react-confetti'
import { FaShareAlt } from "react-icons/fa";
import { Tooltip } from "flowbite-react";
import CategoryTable from "./CategoryTable";
import { Alert } from "flowbite-react";

const Eventdetails = () => {
  const { eventid } = useParams(); // Get the eventid from URL
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [loadingRelated, setLoadingRelated] = useState(true);



  const handleClose = () => setIsOpen(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [bottomdrawer, setBottomdrawer] = useState(false);
  const [bottomteamdrawer, setBottomteamdrawer] = useState(false);


  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDesktop(true);
        setIsOpen(false)
      } else {
        setIsOpen(true)
        setIsDesktop(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  // Function to format date in '12 December 2024' format
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  // Function to format time in AM/PM format
  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };



  const currentUrl = window.location.href;
  const pageTitle = document.title;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: pageTitle,
        url: currentUrl,
      })
        .then(() => console.log("Shared successfully!"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Web Share API is not supported on your device.");
    }
  };


  // Fetch event details using event ID
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/events/${eventid}`
        );

        if (response.status === 404) {
          setError("Event not found. Please check the event ID.");
        } else if (!response.ok) {
          setError("Failed to fetch event details. Please try again later.");
        } else {
          const data = await response.json();
          setEvent(data); // Set event details
          fetchRelatedEvents(data.eventCategory); // Fetch related events by category
        }
      } catch (error) {
        setError("Failed to fetch event details. Please check your network connection.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    // Fetch related events by category
    const fetchRelatedEvents = async (category) => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/events/category/${category}`
        );
        const data = await response.json();
        const formattedEvents = data
          .filter((e) => e._id !== eventid && e.eventFees !== 0)
          .map((event) => ({
            name: event.eventTitle,
            image: event.eventImage,
            url: `/skit-pravah-2025-events/${event.eventCategory}/${event._id}`,
          }));
        setRelatedEvents(formattedEvents);
      } catch (error) {
        console.error("Failed to fetch related events:", error);
      } finally {
        setLoadingRelated(false);
      }
    };

    fetchEventDetails();
  }, [eventid]);

  if (loading) {
    return (
      <div className="w-full text-center py-10 text-gray-600">
        Loading event details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-10 text-red-500">
        {error}
      </div>
    );
  }



  function startCountdown(targetDate, elementId) {
    const target = new Date(targetDate).getTime();

    if (isNaN(target)) {
      console.error("Invalid date format. Please provide a valid date.");
      return;
    }

    const countdownElement = document.getElementById(elementId);
    if (!countdownElement) {
      console.error(`Element with id "${elementId}" not found.`);
      return;
    }

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = target - now;

      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = ``;
        return;
      }

      // Calculate hours, minutes, and seconds
      const totalSeconds = Math.floor(timeRemaining / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      // Update the countdown element
      countdownElement.innerHTML = `
        <div class="countdown-box">${hours}<span>H</span></div>
        <div class="countdown-box">${minutes}<span>M</span></div>
        <div class="countdown-box">${seconds}<span>S</span></div>
      `;
    }, 1000);
  }

  startCountdown(event?.timerDate ? event?.timerDate : event?.eventDate, "countdown")

  return (
    <div>
      {event && (
        <Helmet>
          <title>{`${event?.eventTitle} - Explore ${event?.eventCategory} Excellence | SKIT`}</title>
          <meta name="theme-color" content="white" />
          <meta
            name="description"
            content={`Dive into ${event?.eventTitle}, a hallmark of ${event?.eventCategory} excellence at SKIT. Join us for an unforgettable experience celebrating innovation and culture.`}
          />
          <meta
            name="keywords"
            content={`${event?.eventTitle}, ${event?.eventCategory}, ${event?.eventCategory} events, SKIT, Swami Keshvanand Institute of Technology, workshops, seminars, cultural programs`}
          />
          <meta
            property="og:title"
            content={`${event?.eventTitle} - Explore ${event?.eventCategory} Excellence | SKIT`}
          />
          <meta
            property="og:description"
            content={`Join ${event?.eventTitle} to experience the best of ${event?.eventCategory} at SKIT. Unleash your creativity and talents!`}
          />
          <meta
            property="og:url"
            content={`https://pravah.skit.ac.in/skit-pravah-2025-events/${event?.eventCategory}/${eventid}`}
          />

          <meta
            name="author"
            content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
          />
          <meta
            name="organization"
            content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
          />
        </Helmet>
      )}
      <Navbarr eventName={event?.eventTitle} />
      <ParallaxProvider>
        <Parallax speed={-15}>
          <main className="min-h-screen flex flex-col items-center px-6 md:px-12 mt-32 relative mb-40">


            {/* Event Details */}
            {loading ? (
              <div className="w-full max-w-6xl mb-40">
                <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden w-full border border-gray-200">
                  <Skeleton height={300} width="100%" />
                  <div className="p-6 w-full">
                    <Skeleton height={40} width="80%" />
                    <Skeleton height={20} width="40%" />
                    <Skeleton height={40} width="60%" />
                    <Skeleton height={20} width="30%" />
                  </div>
                </div>
              </div>
            ) : error ? (
              <p className="text-red-500 relative">{error}</p>
            ) : (


              <div className="flex flex-row gap-6 h-auto w-full justify-center">
                {/* Left Card */}
                <motion.div
                  className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-50 to-gray-50 rounded-2xl shadow-lg overflow-hidden w-full md:w-5/6 mb-16 transition-transform transform hover:scale-105 border border-gray-200 h-full m-auto"
                  initial={{ opacity: 0, y: 160 }}
                  animate={{ opacity: 1, y: 150 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                >
                  {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#f0f9ff] to-[#e9ffff] bg-pattern-stripes -z-10 opacity-10"></div> */}


                  {/* Event Image */}
                  <div className="w-full md:w-1/2 h-60 md:h-80 relative border-r border-gray-200">
                    {/* <div className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md">
                      {event.eventparticipationCategory === "Single"
                        ? "Individual Event"
                        : "Team Event"}
                    </div> */}
                    <img
                      className="object-cover w-full h-full rounded-l-lg"
                      src={event?.eventImage}
                      alt={event?.eventTitle}
                      draggable="false"
                      loading="lazy"
                    />
                    <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black via-transparent to-transparent z-0 opacity-40"></div>
                  </div>

                  {/* Event Info */}
                  <div className="flex flex-col items-center md:items-start w-full md:w-1/2 p-8 space-y-6 h-full justify-stretch text-center md:text-left font-sans">

                    <p className="text-lg text-gray-700">
                      <strong>Date:</strong> {formatDate(event?.eventDate)}
                    </p>
                    <p className="text-lg text-gray-700">
                      <strong>Timings:</strong>{" "}
                      {formatTime(event?.eventTimings.from)} - {formatTime(event?.eventTimings.to)}
                    </p>
                    <p className="text-lg text-gray-700">
                      <strong>Venue:</strong> {event?.eventVenue}
                    </p>

                    <p className="text-lg text-gray-700">
                      <strong>Team Size:</strong> {event?.additionalFields.length > 0 ? (
                        <span className="bg-gray-200 px-2 text-gray-700 rounded-md font-medium border border-gray-500 ml-2 cursor-pointer" onClick={() => setBottomteamdrawer(true)}>
                          View

                        </span>
                      ) : event?.teamSize + " Member"}
                    </p>






                    {/* <div className="w-full mt-4">
        {event?.eventFees === 0 ? (
          <button
            className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold w-full px-6 py-3 rounded-md shadow-lg flex justify-center items-center text-sm"
            disabled
          >
            No Registration Fee Required
          </button>
        ) : (
          <button
            onClick={() => window.open(event?.erpLink, "_blank")}
            className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold w-full px-6 py-3 rounded-md shadow-lg flex justify-center items-center"
          >
            Register Now <FaArrowRight className="ml-2" />
          </button>
        )}
      </div> */}


                    <div className="w-full mt-4">
                      <button
                        onClick={() => window.open(event?.ruleBook, "_blank")}
                        className="bg-gradient-to-r from-gray-500 to-gray-500 text-white font-semibold w-full px-6 py-3 rounded-md shadow-lg flex justify-center items-center"
                      >
                        Download Rule Book <FaDownload className="ml-2" />
                      </button>
                    </div>

                  </div>


                  {/* Right Card */}
                  <motion.div
                    className="w-full md:w-1/2 h-60 md:h-80 relative bg-gray-50 p-4 border-l border-gray-400 rounded-r-lg border-dotted"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  >
        
                    <div className="border-b border-gray-300 pb-2 mb-4">
                      <h1 className="text-xl font-semibold text-gray-800">Register</h1>
                      <button
                        onClick={() => {
                          if (navigator.clipboard) {
                            navigator.clipboard.writeText(window.location.href)
                              .then(() => {
                                toast.success("Link copied to clipboard!", {
                                  position: "top-right",
                                  autoClose: 3000,
                                  hideProgressBar: true,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  theme: "colored",
                                });
                              })
                              .catch((err) => {
                                toast.error("Failed to copy link. Please try again.", {
                                  position: "top-right",
                                  autoClose: 3000,
                                  hideProgressBar: true,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  theme: "colored",
                                });
                                console.error("Clipboard error:", err);
                              });
                          } else {
                            toast.error("Clipboard API not supported in this browser.", {
                              position: "top-right",
                              autoClose: 3000,
                              hideProgressBar: true,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              theme: "colored",
                            });
                          }
                        }}
                        className="absolute top-4 right-4 bg-gray-200 text-black font-medium text-sm px-3 py-1 rounded-lg  transition duration-300 border border-gray-300"
                      >
                        Copy Link
                      </button>
                    </div>
                    {!event?.erpLink &&
                      <Dynamicfield additionalFields={event?.additionalFields} />
                    }

                    {event?.erpLink && (
                      <>
                        {/* Registration Fee */}
                        <p className="text-lg text-gray-700 mb-2 border rounded-xl p-3 opacity-100 bg-white">
                          <strong>Registration Fee:</strong>{" "}
                          {event?.additionalFields.length > 0
                            ? "Fees may vary"
                            : event?.eventFees !== 0
                              ? `₹${event?.eventFees}`
                              : "FREE"}
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          * Note: The fee once paid is non-refundable.
                        </p>
                        {/* Register Button */}
                        <a
                          href={event.erpLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-black via-black to-black rounded-xl shadow-md transition-transform focus:outline-none focus:ring focus:ring-offset-2 text-center space-x-3 w-full"
                        >
                          <span className="relative z-10">Register Now</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 relative z-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                    
                      </>
                    )}


                  </motion.div>

                </motion.div>


              </div>




            )}


            <motion.div
              className="max-w-6xl mx-auto px-6 md:px-0 mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 40 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <h3 className="text-3xl font-extrabold text-gray-800 text-center mb-10  relative font-sans  tracking-tight">
                Event Description
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-[5px] bg-gradient-to-r from-[#351332] to-[#9e1c9e] mt-1 rounded-full"></span>
              </h3>
              <motion.p
                className="text-2xl text-gray-600 leading-relaxed text-center squada-one-regular tracking-wider"
              >

                <div
                  dangerouslySetInnerHTML={{
                    __html: event?.eventDescription || "No description available.",
                  }}
                />


              </motion.p>
            </motion.div>




            <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-20 relative font-sans  tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                className="relative inline-block"
              >

                {event?.eventCoordinators?.length > 1 ? "Student Coordinator's" : "Student Coordinator"}


                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-[4px] bg-gradient-to-r from-[#280f38] to-[#5a015a] mt-1 rounded-full"></span>
              </motion.span>
            </h2>


            <div className="flex justify-center items-center font-sans relative z-50 flex-row">
              <div
                className={`${event?.eventCoordinators?.length === 1
                  ? "flex flex-col items-center gap-4 w-full max-w-sm"
                  : "grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 w-full max-w-xs sm:max-w-md md:max-w-lg"
                  } md:flex md:gap-8 md:justify-center`}
              >
                {event?.eventCoordinators?.map((coordinator, index) => (
                  <Coordinator
                    key={index}
                    name={coordinator.name}
                    number={coordinator.number}
                  />
                ))}
              </div>
            </div>




            <RecommendedEventsSlider devents={relatedEvents} />

          </main>
        </Parallax>



        <Drawer

          open={isOpen}
          onClose={() => window.location.href = `/skit-pravah-2025-events/${event?.eventCategory}`}
          style={{ zIndex: 1000 }}
          className="w-screen h-screen  flex flex-col bg-white"
        >
          {/* <Confetti
                width={500}
                height={50}
              /> */}

          {bottomdrawer && (
            <div className="bg-black opacity-60 fixed top-0 left-0 w-full h-full z-50"></div>
          )}

          {bottomteamdrawer && (
            <div className="bg-black opacity-60 fixed top-0 left-0 w-full h-full z-50"></div>
          )}


          <Drawer.Header title="Event Registration" className="border-b border-gray-300" />
          <Drawer.Items>
            {/* Main Content Area */}



            <div className="flex-grow overflow-y-auto px-0 py-6 scrollbar-hide ">

              {/* <h2 className="text-2xl font-bold text-gray-800 font-sans mb-4">{event?.eventTitle}</h2> */}
              <div className="relative">
                <img
                  className="object-cover w-full h-52 rounded-2xl  shadow-md"
                  src={event?.eventImage}
                  alt={event?.eventTitle}
                  draggable="false"
                  loading="lazy"
                />


                {/* <div className="absolute top-2 left-2 bg-gradient-to-r from-green-400 to-green-400 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md">
                  {event.eventparticipationCategory === "Single"
                    ? "Individual Event"
                    : "Team Event"}
                </div> */}

                <button
                  onClick={handleShare}
                  className="text-gray-600 text-2xl absolute top-2 right-2 bg-white rounded-xl p-2 border border-gray-100 shadow-lg"
                >
                  <FaShareAlt />
                </button>

              </div>

              <div className="mt-6 space-y-5">

                {/* <hr className="border-gray-100 w-full" /> */}
                <div className="flex justify-between items-center gap-4">


                  <h2 className="text-2xl font-semibold text-gray-800 font-sans">{event?.eventTitle}</h2>



                  <div id="countdown" ></div>

                </div>

                {/* <hr className="mt-4 border-gray-100 w-full" /> */}

                <a
                  href={event?.ruleBook}
                  target="_blank"
                  rel=""
                  className="w-full px-6 py-3 text-center text-white bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring focus:ring-gray-600 flex justify-between align-middle items-center gap-2 font-normal"
                >
                  Download Event Rulebook <FaDownload />
                </a>

                {/* <hr className="mt-4 border-gray-100 w-full shadow-xl" /> */}

                <div className="bg-gray-50 p-3 rounded-lg border border-gray-300 shadow-sm mt-4">

                  <div className="flex items-center mb-2 justify-between">
                    <span className="text-sm font-medium text-gray-600">Date:</span>
                    <p className="ml-2 text-sm text-gray-800">{formatDate(event?.eventDate)}</p>

                  </div>

                  <hr className="border-gray-100 w-full" />

                  <div className="flex items-center mb-2 justify-between mt-2">
                    <span className="text-sm font-medium text-gray-600">Time:</span>
                    <p className="ml-2 text-sm text-gray-800">
                      {formatTime(event?.eventTimings.from)} - {formatTime(event?.eventTimings.to)}
                    </p>
                  </div>


                  <hr className="border-gray-100 w-full" />

                  <div className="flex items-center mb-2 justify-between mt-2 ">
                    <span className="text-sm font-medium text-gray-600">Team Size:</span>
                    <p className="ml-2 text-sm text-gray-800 ">

                      {event?.additionalFields.length > 0 ? (
                        <span className="flex justify-center items-center gap-2 bg-gray-200 px-2 text-gray-700 rounded-md font-medium border border-gray-500" onClick={() => setBottomteamdrawer(true)}>
                          View

                        </span>
                      ) : event?.teamSize + " Member"}

                    </p>
                  </div>


                  <hr className="border-gray-100 w-full" />

                  <div className="flex items-center mb-2 justify-between mt-2 ">
                    <span className="text-sm font-medium text-gray-600">Venue:</span>
                    <p className="ml-2 text-sm text-gray-800 ">{event?.eventVenue}</p>
                  </div>




                  <hr className="border-gray-100 w-full" />

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-medium text-gray-600">Registration Fee:</span>
                    <p className="ml-2 text-sm text-gray-800">
                      {event?.additionalFields.length > 0 ? (
                        <span className="flex justify-center items-center gap-2">
                          Fees may vary{" "}
                          <Tooltip content="Fee varies by category (e.g., skit/non-skit, solo/duo/group). Click register to know the exact fee amount.">
                            <FaInfoCircle className="text-gray-600" />
                          </Tooltip>

                        </span>
                      ) : event?.eventFees !== 0 ? (
                        `₹${event?.eventFees}`
                      ) : (
                        "FREE"
                      )}
                    </p>
                  </div>

                </div>

              </div>
              {event?.eventNote &&
                <Alert color="gray" className="mt-4 border border-gray-300">
                  <span className="font-bold">Note : </span>{event?.eventNote}
                </Alert>
              }
              <div className="bg-white p-3 rounded-lg mt-4 shadow-lg w-full shadow-gray-50 border ">
                <div className="text-justify">
                  <span className='text-black font-bold '>Description : </span>
                  <span className="text-pretty text-justify text-sm mt-4 text-gray-600 font-sans font-normal"
                    dangerouslySetInnerHTML={{
                      __html: event?.eventDescription || "No description available.",
                    }}
                  />

                </div>
              </div>
              <div className="flex flex-col items-center">
                {/* Main Share Button */}


              </div>


              <div className="w-full max-w-sm rounded-xl mt-4 mb-20 border p-4 border-gray-300">
                {event?.eventCoordinators?.length > 0 ? (
                  <ul className="space-y-4">
                    {event.eventCoordinators.map((coordinator, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center bg-white shadow-sm rounded-lg p-4"
                      >
                        <div className="flex flex-col">
                          <span className="text-gray-900 font-semibold text-lg">
                            {coordinator.name}
                          </span>
                          <span className="text-gray-600 text-sm">
                            +91 {coordinator.number}
                          </span>
                        </div>
                        <a
                          className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-600 transition flex gap-3 justify-center items-center font-medium"
                          href={`tel:${coordinator?.number}`}
                        >
                          <FaPhoneAlt className="h-4 w-4" />     Call
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white text-center">No coordinators available.</p>
                )}
              </div>



            </div>

            {/* Fixed Footer Section */}
            <div className="bg-gray-50 border-t border-gray-300 p-5 w-full fixed bottom-0 left-0 z-10">
              <div className="flex justify-between items-center flex-col gap-4">


                {event?.erpLink && (
                  <a
                    href={event.erpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-6 py-3 font-semibold text-black rounded-xl w-full text-center overflow-hidden flex justify-between items-center gap-2 text-md bg-opacity-30 backdrop-blur-md border border-black shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    style={{
                      backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
                    }}
                  >
                    <span className="relative z-10">Register Now</span>
                    <IoMdArrowDroprightCircle className="text-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 opacity-30 animate-move-background"></div>
                  </a>
                )}



                {!event?.erpLink && (
                  <a
                    onClick={() => setBottomdrawer(true)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-6 py-3 font-semibold text-black rounded-lg w-full text-center overflow-hidden flex justify-between items-center gap-2 text-md bg-opacity-30 backdrop-blur-md border border-black shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    style={{
                      backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
                    }}
                  >
                    <span className="relative z-10">Register Now</span>
                    <IoMdArrowDroprightCircle className="text-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 opacity-30 animate-move-background"></div>
                  </a>
                )}

              </div>
            </div>
          </Drawer.Items>
        </Drawer>





        <Drawer open={bottomdrawer} onClose={() => setBottomdrawer(false)} position="bottom" style={{ zIndex: 20000 }} className="shadow-2xl border-t border-gray-300 rounded-t-2xl bg-white">
          <Drawer.Header title="Register" />
          <Drawer.Items>
            <div className="rounded-xl p-3">
              <Dynamicfield additionalFields={event?.additionalFields} />
            </div>
          </Drawer.Items>
        </Drawer>



        <Drawer open={bottomteamdrawer} onClose={() => setBottomteamdrawer(false)} position={isDesktop ? "right" : "bottom"} style={{ zIndex: 20000 }} className="shadow-2xl border-t border-gray-300 rounded-t-2xl sm:rounded-none bg-white h-m" backdrop={false}>
          <Drawer.Header title="Team Size" />
          <Drawer.Items>
            <div className="p-3">
              <CategoryTable additionalFields={event?.additionalFields} />
            </div>
          </Drawer.Items>
        </Drawer>

        <motion.div
          className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/rb_2149151140.png"
            alt="Pravah 2025 - Incredible India | SKIT"
            className="w-full h-auto object-cover transform translate-y-[0px] sm:translate-y-[200px] translate-x-0 opacity-30"
          />
        </motion.div>

        <div className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-20">
          <img
            src="/rb_2149158780.png"
            alt="Pravah 2025 - Incredible India | SKIT"
            className="w-full h-auto object-cover transform translate-y-[0px] sm:translate-y-[300px] translate-x-0 opacity-10"
          />
        </div>


      </ParallaxProvider>


      <DesktopFooter />
      <ToastContainer />
    </div>
  );
};

export default Eventdetails;