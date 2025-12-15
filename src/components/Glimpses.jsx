import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Glimpses = () => {
    const images = {
        thirak: [
            [
                "Thirak/19.JPG",
                "Thirak/22.JPG",
                "Thirak/3.JPG",
                "Thirak/4.JPG",
                "Thirak/5.JPG",
                "Thirak/6.JPG"
            ],
            [
                "Thirak/20.JPG",
                "Thirak/8.JPG",
                "Thirak/9.JPG",
                "Thirak/10.JPG",
                "Thirak/11.JPG",
                "Thirak/12.JPG"
            ],
            [
                "Thirak/21.JPG",
                "Thirak/14.JPG",
                "Thirak/15.JPG",
                "Thirak/16.JPG",
                "Thirak/17.JPG",
                "Thirak/18.JPG"
            ],
        ],
        rawaz: [
            [
                "Rawaz/1.JPG",
                "Rawaz/2.JPG",
                "Rawaz/3.JPG",
                "Rawaz/4.JPG",
                "Rawaz/5.JPG",
                "Rawaz/6.JPG",
            ],
            [
                "Rawaz/7.JPG",
                "Rawaz/8.JPG",
                "Rawaz/9.JPG",
                "Rawaz/10.JPG",
                "Rawaz/11.JPG",
                "Rawaz/12.JPG",
            ],
            [
                "Rawaz/13.JPG",
                "Rawaz/14.JPG",
                "Rawaz/15.JPG",
                "Rawaz/16.JPG",
                "Rawaz/17.JPG",
                "Rawaz/18.JPG",
            ],
        ],
        djnight: [
            [
                "djnight/1.JPG",
                "djnight/2.JPG",
                "djnight/3.JPG",
                "djnight/4.JPG",
                "djnight/5.JPG",
                "djnight/6.JPG",
            ],
            [
                "djnight/7.JPG",
                "djnight/15.JPG",
                "djnight/9.JPG",
                "djnight/10.JPG",
                "djnight/11.JPG",
                "djnight/12.JPG",
            ],
            [
                "djnight/13.JPG",
                "djnight/14.JPG",
                "djnight/8.JPG",
                "djnight/16.JPG",
                "djnight/17.JPG",
                "djnight/18.JPG",
            ],
        ],
        sur: [
            [
                "SUR/1.png",
                "SUR/2.png",
                "SUR/3.png",
                "SUR/4.png",
                "SUR/5.png",
                "SUR/6.png"
            ],
            [
                "SUR/7.png",
                "SUR/8.png",
                "SUR/9.png",
                "SUR/10.png",
                "SUR/11.png"
            ],
            [
                "SUR/12.png",
                "SUR/13.png",
                "SUR/14.png",
                "SUR/15.png",
                "SUR/16.png",
                "SUR/17.png"
            ],
        ],
        celebnight: [
            [
                "Celebrity/1.JPG",
                "Celebrity/8.JPG",
                "Celebrity/3.JPG",
                "Celebrity/23.JPG",
                "Celebrity/5.JPG",
                "Celebrity/6.JPG"
            ],
            [
                "Celebrity/7.JPG",
                "Celebrity/21.JPG",
                "Celebrity/18.JPG",
                "Celebrity/10.JPG",
                "Celebrity/11.JPG"
            ],
            [
                "Celebrity/12.JPG",
                "Celebrity/13.JPG",
                "Celebrity/22.JPG",
                "Celebrity/15.JPG",
                "Celebrity/20.JPG",
                "Celebrity/9.JPG"
            ],
        ],
        AnnualDay: [
            [
                "AnnualDay/1.JPG",
                "AnnualDay/2.JPG",
                "AnnualDay/3.JPG",
                "AnnualDay/4.JPG",
                "AnnualDay/5.JPG",
                "AnnualDay/6.JPG"
            ],
            [
                "AnnualDay/7.JPG",
                "AnnualDay/8.JPG",
                "AnnualDay/9.JPG",
                "AnnualDay/10.JPG",
                "AnnualDay/11.JPG"
            ],
            [
                "AnnualDay/12.JPG",
                "AnnualDay/13.JPG",
                "AnnualDay/14.JPG",
                "AnnualDay/15.JPG",
                "AnnualDay/16.JPG",
                "AnnualDay/17.JPG"
            ],
        ],
        ClashOfBands: [
            [
                "COB/1.JPG",
                "COB/2.JPG",
                "COB/3.JPG",
                "COB/4.JPG",
                "COB/5.JPG",
                "COB/6.JPG"
            ],
            [
                "COB/7.JPG",
                "COB/8.JPG",
                "COB/22.JPG",
                "COB/10.JPG",
                "COB/11.JPG"
            ],
            [
                "COB/12.JPG",
                "COB/13.JPG",
                "COB/14.JPG",
                "COB/15.JPG",
                "COB/16.JPG",
                "COB/17.JPG"
            ],
        ],
    };

    const [selectedCategory, setSelectedCategory] = useState("thirak");
    const [isFading, setIsFading] = useState(false);
    const [showCategories, setShowCategories] = useState(false);

    const scrollVariants = (speed) => ({
        animate: {
            y: ["0%", "-100%"],
            transition: {
                duration: speed,
                ease: "linear",
                repeat: Infinity,
            },
        },
    });

    const handleCategoryChange = (category) => {
        if (category !== selectedCategory) {
            setIsFading(true);
            setTimeout(() => {
                setSelectedCategory(category);
                setIsFading(false);
            }, 500);
        }
    };

    const categories = ["thirak", "rawaz", "djnight", "sur", "celebnight", "ClashOfBands", "AnnualDay"];


    return (


        <>

            <div className="relative h-screen overflow-hidden text-white sm:hidden flex flex-col items-center">

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1b1b1b] to-[#0f0f0f] opacity-90"></div>
                <div className="absolute top-10 left-20 w-60 h-60 bg-[#333333] rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#006d77] rounded-full filter blur-2xl opacity-70 animate-pulse"></div>




                {/* Heading */}
                {/* <h1
                    className="z-20 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-gray-400 mb-8"
                    style={{
                        height: "10vh",
                        textAlign: "center",
                    }}
                >
                    Pravah'25 Glimpses
                </h1> */}

                {/* Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10"></div> */}

                {/* Toggler Button */}
                <div className="absolute bottom-20 right-6 z-50">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#1b1b1b]/100 backdrop-blur-md text-gray-300 w-16 h-16 rounded-full shadow-xl border border-[#333] flex items-center justify-center"
                        onClick={() => setShowCategories((prev) => !prev)}
                    >
                        ☰
                    </motion.button>
                </div>


                {/* Popup for Categories */}
                <AnimatePresence>
                    {showCategories && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="absolute bottom-40 right-6 bg-[#1a1a1a]/90 backdrop-blur-lg p-6 rounded-lg shadow-2xl border border-[#444] z-50"
                        >
                            <div className="flex flex-col space-y-4">
                                {categories.map((category) => (
                                    <motion.button
                                        key={category}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`py-2 px-4 rounded-md text-lg font-semibold transition-all duration-300 font-sans ${selectedCategory === category
                                            ? "bg-gradient-to-r from-[#333] to-[#555] text-white shadow-md"
                                            : "bg-[#1c1c1c]/70 text-gray-400 hover:text-white hover:bg-[#2a2a2a]/80"
                                            }`}
                                        onClick={() => handleCategoryChange(category)}
                                    >
                                        {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, " $1")}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Images Section */}
                <div className="relative w-full flex flex-wrap justify-center items-start gap-4 overflow-y-auto px-4"
                style={{
                  overflowX: "hidden",
                  backgroundImage: "url('navras/bg3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                }}
                >
                    {images[selectedCategory].map((columnImages, columnIndex) => (
                        <div
                            key={columnIndex}
                            className="w-5/12
                            
                            flex-shrink-1 relative overflow-hidden px-2 mb-6"
                        >
                            <motion.div
                                variants={scrollVariants(columnIndex + 16)}
                                animate="animate"
                                className="flex flex-col"
                            >
                                {columnImages.map((image, imageIndex) => (
                                    <img
                                        key={imageIndex}
                                        src={image}
                                        alt={`Gallery Image ${imageIndex}`}
                                        className="rounded-lg shadow-lg w-full h-auto mb-4 border border-gray-700"
                                        style={{
                                            boxShadow: "0px 6px 12px #5a3e36",
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>



















            <div className="relative h-screen overflow-hidden bg-blue-400 text-white justify-center sm:flex hidden"
             style={{ zIndex: "100", 
                overflowX: "hidden",
                  backgroundImage: "url('navras/bg3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
             }}
             >


                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-grey-400 via-transparent to-transparent z-10"></div>
                <h1
                    className="absolute z-20 flex items-center justify-center cookie-regular text-[#5A3e36] font-bold"
                    style={{
                        height: "20vh",
                        textAlign: "center",
                        fontSize: "50px",
                    }}
                >
                    Pravah'25 Glimpses
                </h1>

                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

                {/* Category Buttons */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-16 z-20 cookie-regular">
                    {["thirak", "rawaz", "djnight", "sur", "celebnight", "ClashOfBands", "AnnualDay"].map((category) => (
                        <button
                            key={category}
                            className={`relative text-3xl font-bold transition-all duration-500 text-nowrap ${selectedCategory === category
                                ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300"
                                : "text-white"
                                }`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {/* Button Text */}
                            {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, " $1")}

                            {/* Underline */}
                            <span
                                className={`absolute bottom-0 left-1/2 w-0 h-1 transition-all duration-500 transform -translate-x-1/2 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full ${selectedCategory === category ? "w-full" : "w-0"
                                    }`}
                            ></span>
                        </button>
                    ))}
                </div>



                <div
                    className={`flex space-x-4 h-full transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"
                        }`}
                >

                    {images[selectedCategory].map((columnImages, columnIndex) => (
                        <div
                            key={columnIndex}
                            className="w-1/3 flex-shrink-1 relative overflow-hidden h-full px-2"
                        >
                            <motion.div
                                variants={scrollVariants(columnIndex + 16)} animate="animate"
                                className="flex flex-col"
                            >
                                {columnImages.map((image, imageIndex) => (
                                    <img
                                        key={imageIndex}
                                        src={image}
                                        alt={`Gallery Image ${imageIndex}`}
                                        className="rounded-lg shadow-lg w-full h-auto mb-4 border border-black"
                                        style={{
                                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Glimpses;