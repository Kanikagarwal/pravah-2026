import React, { useState, useRef } from 'react';
import Navbarr from './Navbar';
// import '../gallery.css';
import DesktopFooter from './DesktopFooter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { RiVoiceprintFill } from "react-icons/ri";

const Surgallery = () => {


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


  return (
    <div className="text-gray-900 relative overflow-hidden bg-black">
       <style>{`
        :root {
          --gap: 1rem;
          --card-width: clamp(280px, 20vw, 100vw);
          --card-aspect-ratio: 5 / 7;
          --card-height: calc(var(--card-width) * (7 / 5));
        }

        .gallery-grid {
          display: grid;
          justify-content: center;
          grid-template-columns: repeat(5, var(--card-width));
          gap: 1rem;
          overflow: hidden;
        }

        .columnn {
          display: grid;
          gap: 1rem;
          align-content: start;
        }

        .columnn img {
          border-radius: 10px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          transition: all 0.3s ease-in-out; 
        }

        .columnn:not(:nth-of-type(3)) {
          animation: scale 1s linear both;
          animation-timeline: scroll(root);
        }

        .columnn:is(:nth-of-type(2), :nth-of-type(4)) {
          --origin: calc(var(--gap) * -1);
          --destination: calc(var(--card-height) * 1.5 + var(--gap));
        }

        .columnn:is(:nth-of-type(1), :nth-of-type(5)) {
          --origin: calc(var(--gap) * -2);
          --destination: calc(var(--card-height) * 3.4 + var(--gap));
        }

        @keyframes scale {
          0% {
            transform: translateY(var(--origin, 0%));
          }
          100% {
            transform: translateY(var(--destination, -50%));
          }
        }
      `}</style>
      <Helmet>
        <title>Sur - Musical Harmony & Culture | SKIT</title>
        <meta
          name="description"
          content="Sur, SKIT's cultural music event, celebrates Incredible India with vibrant melodies, diverse traditions, and rich heritage, uniting hearts harmoniously."
        />
        <meta
          name="keywords"
          content="Sur, singing competition, cultural events, Incredible India, SKIT, Swami Keshvanand Institute of Technology, youth fest, gallery"
        />
        <meta
          property="og:title"
          content="Sur Gallery - Celebrating Musical Harmony | SKIT"
        />
        <meta
          property="og:description"
          content="Immerse yourself in the beautiful melodies and soulful performances of Sur, SKIT's annual musical celebration, honoring India's rich music tradition."
        />
        <meta property="og:url" content="https://pravah.skit.ac.in/skit-pravah-2025-events-Sur-gallery" />
        <meta
          name="author"
          content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
        />
        <meta
          name="organization"
          content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
        />
      </Helmet>



      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      <Navbarr />

      <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 mt-16 relative z-20">
        {/* Heading Section */}
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-black via-transparent to-transparent z-10"></div>

        {/* Gallery Section */}
        <div className="grid gallery-grid">
          <div className="columnn">
            <img src="SUR/1.png" alt="" />
            <img src="SUR/2.png" alt="" />
            <img src="SUR/3.png" alt="" />
            <img src="SUR/4.png" alt="" />
            <img src="SUR/5.png" alt="" />
            <img src="SUR/6.png" alt="" />

          </div>
          <div className="columnn">
            <img src="SUR/7.png" alt="" />
            <img src="SUR/8.png" alt="" />
            <img src="SUR/9.png" alt="" />
            <img src="SUR/10.png" alt="" />
            <img src="SUR/11.png" alt="" />
            <img src="SUR/15.png" alt="" />
          </div>
          <div className="columnn">
            <img src="SUR/12.png" alt="" />
            <img src="SUR/14.png" alt="" />
            <img src="SUR/17.png" alt="" />
            <img src="SUR/16.png" alt="" />
            <img src="SUR/12.png" alt="" />
            <img src="SUR/18.png" alt="" />

            <motion.section
              className="text-center"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 20 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="relative mt-10 mb-20">
                {/* Main Heading */}
                <motion.h1
                  className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-300 tracking-widest pattaya-regular"
                >
                  Sur
                </motion.h1>

              </div>
            </motion.section>

          </div>
          <div className="columnn">
            <img src="SUR/13.png" alt="" />
            <img src="SUR/18.png" alt="" />
            <img src="SUR/19.png" alt="" />
            <img src="SUR/20.png" alt="" />
            <img src="SUR/21.png" alt="" />
            <img src="SUR/22.png" alt="" />

          </div>
          <div className="columnn">
            <img src="SUR/23.png" alt="" />
            <img src="SUR/24.png" alt="" />
            <img src="SUR/25.png" alt="" />
            <img src="SUR/10.png" alt="" />
            <img src="SUR/11.png" alt="" />
            <img src="SUR/12.png" alt="" />
          </div>



        </div>
      </main>

      {/* Voice Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleAudioToggle}
          className="p-3 bg-gradient-to-r from-black to-black text-white rounded-full shadow-lg border-2 border-purple-400"

        >
          {isPlaying ? <FaMicrophoneSlash size={24} color='white' /> : <RiVoiceprintFill size={24} color='white' />}
        </button>

      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src="Sur/audio.mp3" />

      <DesktopFooter />
    </div>
  );
};

export default Surgallery;
