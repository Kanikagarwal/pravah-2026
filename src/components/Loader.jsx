import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLoader } from './useLoader';

const Loader = () => {
    const loaderProgress = useLoader(7, 300); // Custom hook for progress tracking
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        if (loaderProgress === 100) {
            const timeOut = setTimeout(() => {
                setShowLoader(false);
            }, 2000);
            return () => clearTimeout(timeOut); // Clean up timeout on unmount
        }
    }, [loaderProgress]);

    const LoaderExitAnimationVariants = {
        initial: { opacity: 1, x: 0 },
        exit: { opacity: 0, y: -100, transition: { duration: 0.2 } },
    };

    return (
        <AnimatePresence>
            {showLoader && (
                <motion.div
                    variants={LoaderExitAnimationVariants}
                    initial="initial"
                    exit="exit"
                    className="fixed top-0 left-0 z-[60] flex h-full w-full items-center justify-center bg-[#EDE1D0]"
                >
                    {/* Bottom Text */}
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center">
    <p className="text-lg sm:text-2xl md:text-3xl font-bold uppercase text-[#5A3E36]">
        {loaderProgress !== 100
            ? `Loading ${Math.floor(loaderProgress)}%`
            : "PRAVAH 2026"}
    </p>
</div>


                    {/* Center SVG */}
                    <svg
                        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
                        viewBox="0 0 120 120"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Center Bindu */}
                        <circle cx="60" cy="60" r="6" fill="#D4AF6A">
                            <animate
                                attributeName="opacity"
                                values="0.5;1;0.5"
                                dur="1.8s"
                                repeatCount="indefinite"
                            />
                        </circle>

                        {/* Lotus Petals */}
                        <g transform="translate(60 60)">
                            {[
                                "#ff3568", // Shringara – Love
                                "#f9b639", // Hasya – Joy
                                "#46a8f7", // Karuna – Compassion
                                "#fe4040", // Raudra – Anger
                                "#ffaf3e", // Veera – Courage
                                "#8e5bfc", // Bhayanaka – Fear
                                "#64f975", // Bibhatsa – Disgust
                                "#69eaf8", // Adbhuta – Wonder
                                "#F8F5F0", // Shanta – Peace
                            ].map((color, index) => (
                                <path
                                    key={index}
                                    d="M 0 -12 C 10 -20, 14 -42, 0 -56 C -14 -42, -10 -20, 0 -12 Z"
                                    fill={color}
                                    stroke="#D4AF6A"
                                    strokeWidth="0.5"
                                    opacity="0"
                                    transform={`rotate(${index * 40})`}
                                >
                                    <animate
                                        attributeName="opacity"
                                        values="0;0.9;0.9;0"
                                        dur="3s"
                                        begin={`${index * 0.2}s`}
                                        repeatCount="indefinite"
                                    />
                                </path>
                            ))}
                        </g>
                    </svg>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
