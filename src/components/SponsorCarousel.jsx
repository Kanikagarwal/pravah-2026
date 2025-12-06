import React from "react";

const SponsorCarousel = ({ sponsors, speed = 30 }) => {
  const sponsorList = sponsors.concat(sponsors); // Duplicate the list for seamless looping

  return (
    <div className="relative w-full h-96  items-center justify-center overflow-hidden mb-52 hidden sm:flex mt-10">
      <div
        className="flex items-center whitespace-nowrap animate-slide"
        style={{
          animation: `scroll ${speed}s linear infinite`,
        }}
      >
        {sponsorList.map((sponsor, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-44 h-44 space-y-2 mx-1 cursor-pointer"
          >
            <div className="w-24 h-24 p-1 flex items-center justify-center overflow-hidden">
              <img
                src={sponsor.image}
                alt=""
                className="w-24 h-24 object-contain filter grayscale invert brightness-200 hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorCarousel;
