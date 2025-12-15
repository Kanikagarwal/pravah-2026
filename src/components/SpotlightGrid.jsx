import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { RiVoiceprintFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Comingsoon from "./Comingsoon";

import Confetti from "react-confetti";
import { Alert } from "flowbite-react";
import "../style.css";

const SpotlightGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });

  // Handle mouse movement to update the CSS variables
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Calculate percentage positions relative to the element
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;

    setMousePos({ x: `${x}%`, y: `${y}%` });
  };

  const [isOpen, setIsOpen] = useState(null);

  return (
    <div
      className="relative h-screen w-screen overflow-hidden hidden sm:block" /*hidden sm:block*/
      onMouseMove={handleMouseMove}
      style={{ zIndex: 1000 }}
    >
      <div
        className="radial-grid absolute inset-0"
        style={{ "--mx": mousePos.x, "--my": mousePos.y }}
      />

      <div className="absolute bottom-4 right-4 z-50 hidden sm:block">
        <button
          onClick={handleAudioToggle}
          className="p-3 bg-gradient-to-r from-black to-black text-white rounded-full shadow-2xl border border-purple-600"
        >
          {isPlaying ? (
            <FaMicrophone size={24} color="white" />
          ) : (
            <RiVoiceprintFill size={24} color="white" />
          )}
        </button>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src="/section2-audio.mp3" />

      <motion.h2
        className="text-4xl font-bold text-center mb-8 my-16 audiowide-regular text-white relative lg:left-20"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Unveil Pravah'26
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-[4px] bg-gradient-to-r from-[#FF6A00] to-[#660066] mt-1 rounded-full"></span>
      </motion.h2>

      {selectedVideo && (
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full h-full">
            <video
              src={
                selectedVideo === "teaser"
                  ? "https://res.cloudinary.com/dktkdi3sm/video/upload/v1735058849/jh7kxjik6xrk9ya0tjnm.mp4"
                  : "http://res.cloudinary.com/dktkdi3sm/video/upload/v1735058976/pdgzqt05kbfyrcts8rkz.mov"
              }
              className="w-full h-full object-cover"
              loop
              autoPlay
            ></video>
            <button
              className="absolute lg:bottom-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600 font-bold bottom-20"
              onClick={() => setSelectedVideo(null)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}

      <div className="relative sm:flex sm:flex-row gap-0 min-h-screen hidden justify-center z-10 pointer-events-auto left-20 ">
        {/* Left Video Card */}
        <motion.div
          className="video-card p-4 hover:scale-105 transform transition self-center relative z-10 pointer-events-auto cursor-pointer bg-gray-800"
          style={{ top: "30px", right: "50px" }}
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          whileInView={{ opacity: 1, y: -120, rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onClick={() => setSelectedVideo("teaser")}
        >
          {/* Background effect with dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-5 rounded-lg"></div>

          {/* Positioned Image at Top-Left Corner */}
          <img
            src="rb_2149621072.png" // Replace with your image path
            alt="Background"
            className="absolute top-[0px] left-[0px] w-full object-cover opacity-30 z-0 h-full"
          />

          {/* Video Thumbnail */}
          <img
            src="teaser_graphic.png"
            alt=""
            className="w-80 h-44 rounded-lg relative z-10"
          />

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 text-center mt-4 z-20 silkscreen-regular relative">
            Pravah Teaser
          </h3>

          {/* Add glow effect */}
          <div className="absolute inset-0 border-4 border-solid border-transparent rounded-lg glow-effect"></div>
        </motion.div>

        {/* Right Video Card */}
        <motion.div
          className="video-card p-4 hover:scale-105 transform transition self-center relative z-10 pointer-events-auto cursor-pointer bg-gray-800"
          style={{ top: "30px", left: "50px" }}
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          whileInView={{ opacity: 1, y: -120, rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          onClick={() => setSelectedVideo("logo")}
        >
          {/* Background effect with dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-5 rounded-lg"></div>
          <img
            src="rb_2149621072.png" // Replace with your image path
            alt="Background"
            className="absolute top-[0px] left-[0px] w-full object-cover opacity-30 z-0 h-full"
          />
          {/* Video Thumbnail */}
          <img
            src="logo_graphic.png"
            alt=""
            className="w-80 h-44 rounded-lg z-15 relative"
          />

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 text-center mt-4 z-20 silkscreen-regular relative">
            Pravah Logo
          </h3>

          {/* Add glow effect */}
          <div className="absolute inset-0 border-4 border-solid border-transparent rounded-lg glow-effect"></div>
        </motion.div>
      </div>

      <div className="relative lg:hidden gap-0 min-h-screen justify-center z-10 pointer-events-auto p-8">
        {/* Left Video Card */}
        <motion.div
          className="video-card p-4 hover:scale-105 transform transition self-center relative z-10 pointer-events-auto cursor-pointer bg-gray-800 rounded-lg"
          style={{ top: "100px", right: "0px" }}
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          whileInView={{ opacity: 1, y: -120, rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          // onClick={() => setSelectedVideo("teaser")}
        >
          {/* Background effect with dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 rounded-lg"></div>

          {/* Video Thumbnail */}
          <iframe
            src="https://www.youtube.com/embed/esOx6T4uQwI"
            title="Teaser Launch of Pravah 2024"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-64 h-44 rounded-lg relative z-50"
          ></iframe>

          {/* Title */}
          <h3 className="text-lg font-bold text-white text-center mt-4 z-20 font-mono">
            Pravah Teaser
          </h3>
        </motion.div>
        {/* Right Video Card */}
        <motion.div
          className="video-card p-4 hover:scale-105 transform transition self-center relative z-10 pointer-events-auto cursor-pointer bg-gray-800 rounded-lg"
          style={{ top: "120px", left: "0px" }}
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          whileInView={{ opacity: 1, y: -120, rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          onClick={() => setSelectedVideo("logo")}
        >
          {/* Background effect with dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 rounded-lg"></div>

          {/* Video Thumbnail */}
          <img src="logo_graphic.png" alt="" className="w-80 h-44 rounded-lg" />

          {/* Title */}
          <h3 className="text-lg font-bold text-white text-center mt-4 z-20 font-mono">
            Pravah Logo
          </h3>
        </motion.div>
      </div>

      <div className="justify-center absolute -right-1 top-6 hidden lg:flex">
        <button
          className="px-6 py-3 text-lg font-bold text-purple-100 bg-black border border-white rounded-l-full shadow-lg"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Reveal Celebrities
        </button>
      </div>

      <AnimatePresence>
        {(isOpen === null && isOpen !== false) ^ (isOpen === true) && (
          <div className="overflow-hidden w-full min-h-screen bg-black">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              exit={{ x: "-100%" }}
              className="flex absolute bg-[#5C3A3A] inset-0 flex-col items-center h-screen z-50 justify-center overflow-hidden"
              style={{
  background: `
    linear-gradient(
      135deg,
      #2A1414 0%,
      #3A1C1C 35%,
      #4A2525 50%,
      #3A1C1C 65%,
      #2A1414 100%
    )
  `
}}


              >
              {/* Confetti animation */}
              <Confetti width={3000} height={1000} />

              {/* Main heading with animated text */}
              <h1 className="sm:text-5xl text-4xl cookie-regular font-extrabold text-[#FFF1B8] text-center animate__animated animate__bounceInDown mb-10"
          
              >
                Get Ready to Meet
              </h1>

              {/* Crazy animated posters for the reveal--------------- POSTERS OF CELEBRITY */}
              {/* <Comingsoon/>------ */}

              {/* <h1 className="sm:text-4xl text-3xl font-extrabold text-white tracking-wide text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                Coming Soon...
              </h1> */}
              <div className="flex justify-center items-center mt-8 space-x-16 z-50 perspective-1000">
  { <div
    className="relative w-80 h-80 animate__animated animate__flipInY animate__delay-1s"
    style={{ transform: "rotateY(20deg)", transformOrigin: "center", perspective: "1000px" }}
  >
    <img
      src="https://res.cloudinary.com/dcw8a8qlb/image/upload/v1739423198/sswpswp5rortpx2qawmx.png"
      alt="Celebrity Poster"
      className="w-full h-full object-cover rounded-lg hover:scale-110 transition-all duration-500"
    />
  </div> }

  { <div
    className="relative w-80 h-80 animate__animated animate__flipInY animate__delay-1s"
    style={{ transform: "rotateY(0deg)", transformOrigin: "center", perspective: "1000px" }}
  >
    <img
      src="https://res.cloudinary.com/dcw8a8qlb/image/upload/v1739423198/dhjza6ljt2hnwz28vi31.png"
      alt="Comedian Poster"
      className="w-full h-full object-cover rounded-lg scale-110 transition-all duration-500"
    />
  </div> }

  { <div
    className="relative w-80 h-80 animate__animated animate__flipInY animate__delay-1s"
    style={{ transform: "rotateY(-20deg)", transformOrigin: "center", perspective: "1000px" }}
  >
    <img
      src="https://res.cloudinary.com/dcw8a8qlb/image/upload/v1739423198/luugmfurhwye9mkar9le.png"
      alt="Comedian Poster"
      className="w-full h-full object-cover rounded-lg hover:scale-110 transition-all duration-500"
    />
  </div> }
</div>

              {/* Close Button */}
              {/* The arrow button to reveal celeb */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-white text-black rounded-full shadow-lg transition duration-300 font-extrabold border border-white z-10 "
              >
                <IoIosArrowBack />
              </button>

              {/* Glassmorphism background */}

              <div className="absolute inset-0  rounded-lg "></div>

              {/* Animated Background image */}
              <div className="absolute bottom-0 -right-0 w-full hidden sm:block pointer-events-none">
                {/* <img
                  src="rb_2149151140 -celerity.png" // Replace with relevant dynamic background image
                  alt="Background Image"
                  className="w-full object-cover transform lg:translate-y-[120px] 2xl:translate-y-[120px] opacity-40"
                /> */}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="absolute inset-y-0 left-0 w-1/3  z-10"></div>

      <motion.div
        className="absolute bottom-0 -left-40 w-full hidden sm:block z-0 pointer-events-none h-screen"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <motion.img
          src="rb_2148402774.png"
          alt="Pravah 2025 - Incredible India | SKIT"
          className="object-cover transform opacity-100 h-screen"
        />
      </motion.div>

      <div className="absolute bottom-0 -right-0 w-full hidden sm:block z-0 pointer-events-none">
        <img
          src="rb_2.png"
          alt="Pravah 2025 - Incredible India | SKIT"
          className="w-full object-cover transform lg:translate-y-[170px] 2xl:translate-y-[170px] opacity-100"
        />
      </div>
    </div>
  );
};

export default SpotlightGrid;
