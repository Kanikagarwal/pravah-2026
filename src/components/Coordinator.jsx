import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Importing the call icon
import { motion } from 'framer-motion'; // Importing motion from framer-motion

const Coordinator = ({ name, number, photo }) => {
  return (
    <motion.div
      className="flex py-10 sm:py-10 sm:w-64 w-full"
      initial={{ opacity: 0, y: 50 }} // Start with the card off-screen
      whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
      viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of the card is visible
      transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for the animation
    >
      <div
        className={`relative p-6 bg-slate-100 w-full sm:w-[320px] border text-center border-gray-400 rounded-[15px] flex flex-col justify-center ${number ? 'pb-14' : 'pb-8'}`}
      >
        {/* Profile Photo (Only if provided) */}
        {photo && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <img
              src={photo}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover bg-white"
            />
          </div>
        )}

        {/* Name */}
        <h2 className={`text-sm sm:text-lg font-semibold text-gray-800 font-sans capitalize ${photo ? 'mt-10' : ''}`}>
          {name}
        </h2>

        {/* Call Button (Shown Only if the Phone Number Exists) */}
        {number && (
          <a
            href={`tel:${number}`} // Trigger call on click
            className="absolute bottom-0 left-0 right-0 flex justify-center items-center rounded-b-[15px] bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] px-6 py-3 text-center text-sm font-bold text-white"
          >
            Call Now
            <FaPhoneAlt className="ml-2 h-4 w-4" /> {/* Call icon from React Icons */}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Coordinator;
