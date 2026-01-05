import React from "react";
import { motion } from "framer-motion";

const Carousel = ({ celebrities, frameImage, speed = 40 }) => {
  const images = [...celebrities, ...celebrities]; // only used for desktop

  return (
    
    <div className="relative w-full h-96 lg:mb-5 2xl:mb-28 mt-10 sm:mt-40">
     {/* MOBILE */}
<div className="sm:hidden relative overflow-hidden">
  <div className="no-scrollbar">
    <motion.div className="flex items-center px-4 auto-scroll carousel-track"
    animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
    >
      {images.map((celebrity, index) => (
        <div
          key={index}
          className="flex-shrink-0 flex flex-col items-center mx-6"
        >
          <div className="relative w-48 h-48 flex items-center justify-center">
            <img
              src={frameImage}
              alt="Frame"
              className="absolute w-64 h-64 object-contain z-10 scale-105"
            />

            <div className="w-40 h-40 rounded-full overflow-hidden z-0">
              <img
                src={celebrity.image}
                alt={celebrity.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="text-center mt-3 text-sm font-extrabold text-[#5a3e36] tracking-wider uppercase">
            {celebrity.name}
          </div>
        </div>
      ))}
    </motion.div>
  </div>
</div>

      {/* ===== DESKTOP: linear auto animation ===== */}
      <div className="hidden sm:flex overflow-hidden">
        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          }}
        >
          {images.map((celebrity, index) => (
            <div key={index} className="flex flex-col items-center mx-7">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <img
                  src={frameImage}
                  alt="Frame"
                  className="absolute w-64 h-64 object-contain z-10 scale-105"
                />

                <div className="w-40 h-40 rounded-full overflow-hidden z-0">
                  <img
                    src={celebrity.image}
                    alt={celebrity.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <div className="text-center mt-3 text-sm font-extrabold text-[#5a3e36] uppercase">
                {celebrity.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;