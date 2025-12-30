import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import helper from '../Helper';
import mobileHelper from '../mobileHelper';

const ImageAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const data = helper;
  const mobileXOffset = isMobile && currentIndex !== 4 ? 30 : 0;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    /* ✅ CONTAINMENT FIX */
    <div className="relative overflow-hidden min-h-[420px] flex items-center justify-center">
      
      {/* Text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`text-${currentIndex}`}
          className="font-bold text-[#5A3E36] text-xl mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {data[currentIndex].name}
        </motion.p>
      </AnimatePresence>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`img-${currentIndex}`}
          src={data[currentIndex].bgImage}
          alt={data[currentIndex].name}
          initial={{
            opacity: 0,
            scale: 0.95,
            y: data[currentIndex].translateY,
            x: mobileXOffset,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: data[currentIndex].translateY + 10,
            x: mobileXOffset,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: data[currentIndex].translateY,
            x: mobileXOffset,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="block"
          style={{
            width: data[currentIndex].width,
            maxWidth: "100%",
            borderRadius: "16px",
            filter: "drop-shadow(0 10px 20px grey)",
          }}
        />
      </AnimatePresence>

    </div>
  );
};

export default ImageAnimation;
