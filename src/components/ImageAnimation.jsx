import React from 'react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import  helper from '../Helper';

const ImageAnimation = () => {
      const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % helper.length); // loop through images
    }, 6000); // change image every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
      <><AnimatePresence mode="wait">
  <motion.p
    key={currentIndex}   // VERY important for re-animation
    className="font-bold text-[#5A3E36] text-xl mb-10"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }} // 1.2s fade in/out with delay
  >
    {helper[currentIndex].name}
  </motion.p>
</AnimatePresence>

      {/* <p className='font-bold text-[#5A3E36] text-xl mb-10'>{helper[currentIndex].name}</p> */}
  <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={helper[currentIndex].bgImage}
          initial={{ opacity: 0, scale: 0.95, y: helper[currentIndex].translateY, x: 0  }}
          animate={{ opacity: 1, scale: 1, y: helper[currentIndex].translateY+10, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: helper[currentIndex].translateY, x: 0  }}
          transition={{ duration: 2, ease: "easeInOut" }} // 2s fade in/out
          style={{
            width: `${helper[currentIndex].width}`,
            // transform: `translateY(${helper[currentIndex].translateY}) translateX(-8rem)`,
            borderRadius: "16px",
            filter: `drop-shadow(0 10px 20px grey)`,
          }}
        />
      </AnimatePresence>
  
</>

  )
}

export default ImageAnimation
