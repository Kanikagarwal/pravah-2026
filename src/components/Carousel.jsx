import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Carousel = ({ celebrities, frameImage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % celebrities.length);
    };

    const images = [...celebrities, ...celebrities];

    return (
        <div className="relative w-full h-96 items-center justify-center overflow-hidden lg:mb-5 2xl:mb-28  sm:flex mt-10 sm:mt-0">
            <div className="relative w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    className="flex items-center transition-transform ease-in-out duration-3000"
                    style={{
                        transform: `translateX(-${currentIndex * 200}px)`,
                        transitionDuration: "3000ms",
                    }}
                >
                    {images.map((celebrity, index) => (
                        <div className="flex flex-col items-center" key={index}>
                            <motion.div
                                className="flex flex-col items-center justify-center sm:w-48 sm:h-48 space-y-2 mx-7 relative w-40 h-40"
                            >
                                {/* Border Frame */}
                                <img
                                    src={frameImage}
                                    alt="Frame"
                                    className="absolute w-52 h-52 object-contain z-10"
                                />

                                {/* Main Image */}
                                <div className="sm:w-48 sm:h-48 w-40 h-40 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden relative z-0">
                                    <img
                                        src={celebrity.image}
                                        alt={celebrity.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                    {/* <div className="absolute inset-0 bg-black opacity-20 rounded-full"></div> */}
                                </div>
                            </motion.div>

                            {/* Styled Name */}
                            <motion.div
                                className="text-center mt-3"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <div className="text-sm font-extrabold text-white tracking-wider uppercase">
                                    {celebrity.name}
                                </div>
                            </motion.div>
                        </div>


                    ))}
                </motion.div>


            </div>

            {/* <Link to="/skit-pravah-2025-events-schedule" >
                <button className="px-6 py-3 w-40 mt-14 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 shadow-md transition-all flex justify-center items-center m-auto sm:hidden">
                    View Schedule
                </button>
            </Link> */}

        </div>
    );
};

export default Carousel;
