import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import helper from '../Helper';

const ImageAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = helper;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="relative overflow-hidden min-h-[420px] flex items-center translate-y-24">
      
      {/* ✅ FIXED TEXT (LEFT, DOES NOT MOVE) */}
      <div className="w-1/3 text-end">
        <AnimatePresence mode="wait">
          <motion.p
            key={`text-${currentIndex}`}
            className="font-bold text-[#5A3E36] text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {data[currentIndex].name}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* ✅ IMAGE CONTAINER (FIXED SIZE & OFFSET) */}
      <div className="w-2/3 flex relative bottom-0 justify-center items-end">
        <div className="w-[400px] h-[200px] flex items-end justify-center ">
          <AnimatePresence mode="wait">
            <motion.img
              key={`img-${currentIndex}`}
              src={data[currentIndex].bgImage}
              alt={data[currentIndex].name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="object-contain"
              style={{
                width: "80%",
                height: "100%",
                borderRadius: "16px",
                filter: "drop-shadow(0 10px 20px grey)",
              }}
            />
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
};

export default ImageAnimation;
