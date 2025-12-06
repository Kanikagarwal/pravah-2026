import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const RecommendedEventsSlider = ({ devents }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (


        <div className="w-full px-0 mt-10">
            {devents.length >= 3 && (
                <>
                    <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10 mt-0 relative font-sans tracking-tight">
                        Recommended Events
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-[4px] bg-gradient-to-r from-[#280f38] to-[#5a015a] mt-1 rounded-full"></span>
                    </h2>
                    <Slider {...sliderSettings}>
                        {devents.map((event, index) => (
                            <div key={index} className="px-2">
                                <div
                                    className="relative flex-shrink-0 w-full h-52 rounded-xl bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${event.image})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                    }}
                                >
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-xl"></div>

                                    {/* Event Name */}
                                    <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white z-10 drop-shadow-md">
                                        {event.name}
                                    </h3>

                                    {/* Explore Button */}
                                    <a
                                        href={`${event.url}`}
                                        className="absolute right-4 bottom-4 flex items-center justify-center w-10 h-10 text-lg font-medium text-white bg-gradient-to-r from-orange-400 to-red-500 border-2 border-white rounded-full transition-transform duration-300 ease-out hover:scale-110 hover:from-orange-500 hover:to-red-600"
                                    >
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </>
            )
            } 

        </div>



    );
};

export default RecommendedEventsSlider;
