import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "../style.css";
import { FaArrowRight } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";
import { RiVoiceprintFill } from "react-icons/ri";
import Home from "./Home";

const Landing = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAudioToggle = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="relative h-screen overflow-hidden "
      style={{
                  overflowX: "hidden",
                  backgroundImage: "url('navras/bg3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                }}
      >
        
        {/* Soft glow circles */}
        <div className="absolute w-[600px] h-[600px] bg-[#80328e4a] top-[-200px] left-[-150px] rounded-full blur-[140px] opacity-40"></div>
        <div className="absolute w-[700px] h-[700px] bg-[#ff4d6d2a] bottom-[-250px] right-[-200px] rounded-full blur-[150px] opacity-40"></div>

        {/* Audio Toggle */}
        <div className="fixed bottom-5 right-5 z-[200]">
          <button
            onClick={handleAudioToggle}
            className="p-3 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full shadow-lg hover:scale-110 transition"
          >
            {isPlaying ? (
              <FaMicrophoneSlash size={22} color="white" />
            ) : (
              <RiVoiceprintFill size={22} color="white" />
            )}
          </button>
        </div>

        <audio ref={audioRef} src="/section1-audio.mp3" />
<div className="fixed bottom-4 left-4 z-50">
                <img
                  src="/skit_logo.png"
                  alt="Logo"
                  className="w-16 h-16 sm:w-16 sm:h-16 object-contain hidden sm:block"
                />
              </div>
        {/* LANDING SCREEN */}
        {showLanding && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-50"
          >
            {/* Main Title */}
            <motion.h1
              className="text-[#5A3E36] uppercase text-[18vw] sm:text-[11vw] max-[640px]:text-[9vw] font-bold"
              style={{
                textShadow: `
    0 2px 2px rgba(0,0,0,0.2),
    0 4px 4px rgba(0,0,0,0.15),
    0 8px 8px rgba(0,0,0,0.1),
    0 12px 18px rgba(0,0,0,0.08)
  `
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              Pravah'26
            </motion.h1>

            {/* College Name */}
            <motion.p
              className="text-[#5A3e36] text-lg sm:text-3xl font-light tracking-wide mt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Swami Keshvanand Institute of Technology, Management & Gramothan, Jaipur
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="text-[#7a5c50] text-xl sm:text-3xl mt-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Celebrating 26 Years of Excellence & The Spirit of Incredible India
            </motion.p>

            {/* Type Line */}
            <motion.p
              className="text-[#6B4F45] mt-5 text-xl sm:text-3xl tracking-wide font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Annual <span className="font-semibold">Techno</span> •{" "}
              <span className="font-semibold">Cultural</span> •{" "}
              <span className="font-semibold">Sports</span> Fest
            </motion.p>

            {/* Button */}
            <motion.button
              className="mt-10 px-10 py-4 bg-gradient-to-r from-[#5a3836] to-[#5a4636] rounded-full text-white text-xl font-semibold shadow-xl hover:scale-110 transition-all relative overflow-hidden"
              onClick={() => setShowLanding(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Dive Into Pravah
              <FaArrowRight className="inline-block ml-3" />
            </motion.button>
          </motion.div>
        )}

        {/* HOME PAGE */}
        {!showLanding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-40 h-full w-full"
          >
            <Home />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Landing;
