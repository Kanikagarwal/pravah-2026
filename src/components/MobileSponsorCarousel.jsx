import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const MobileSponsorCarousel = ({ sponsors, speed = 35 }) => {
  const sponsorList = [...sponsors, ...sponsors];

  return (
    // MOBILE ONLY
    <>
      <div
        className="
    relative
    w-screen h-screen
    sm:hidden
    flex flex-col items-center justify-center
    overflow-hidden z-10 pb-8 
  "
        style={{
          backgroundImage: "url('navras/bg3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.h2
          className="mb-8 text-center text-[#5a3e36] font-bold text-4xl"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Past Patrons
        </motion.h2>

        <div
          className="flex items-center whitespace-nowrap mt-10"
          style={{
            animation: `scroll ${speed}s linear infinite`,
          }}
        >
          {sponsorList.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-36 h-36 mx-4"
            >
              <img
                src={sponsor.image}
                alt=""
                className="w-28 h-28 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="sm:hidden" style={{ position: "relative", zIndex: 12 }}> */}
        <Footer />
      {/* </div> */}
    </>
  );
};

export default MobileSponsorCarousel;
