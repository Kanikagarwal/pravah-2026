import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Eventcardmob = ({ events }) => {
  const [activeEvent, setActiveEvent] = useState(null);

  const handleCardClick = (event) => {
    setActiveEvent(event);
  };

  const closeDrawer = () => {
    setActiveEvent(null);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-6 sm:hidden h-screen">
{/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#f3cb7d] to-[#043045] opacity-90"></div>
<div className="absolute top-10 left-20 w-60 h-60 bg-[#d84303] rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
<div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#B3E5FC] rounded-full filter blur-2xl opacity-70 animate-pulse"></div> */}


      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-6 w-full">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-md transform transition-transform duration-300 hover:scale-105 bg-white"
            style={{
              backgroundImage: `url(${event.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: "1/1.2", // Consistent card aspect ratio
            }}
            onClick={() => handleCardClick(event)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold mb-2 opacity-90">{event.name}</h3>
            </div>

            {/* Highlight border when active */}
            <div className="absolute inset-0 border-4 border-transparent rounded-2xl transition-all group-hover:border-[#FFF1b8]"></div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Drawer (Only shown when a card is clicked) */}
      <AnimatePresence>
        {activeEvent && (
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#fff4c6] to-[#f8eec5] p-6 rounded-t-3xl shadow-2xl z-50"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {/* Drag Indicator */}
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-1.5 bg-orange-800 rounded-full"></div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#5a3e36]">{activeEvent.name}</h3>
              <button
                className="text-gray-500 hover:text-gray-800 font-semibold"
                onClick={closeDrawer}
              >
                Close
              </button>
            </div>
            <p className="text-gray-600 leading-6 text-sm">{activeEvent.description}</p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Eventcardmob;
