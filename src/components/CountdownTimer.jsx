import React, { useState, useEffect } from "react";

const CountdownTimer = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isLive, setIsLive] = useState(false); // Track if the event is live

  useEffect(() => {
    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      setTimeLeft(time);

      // Check if the countdown is over
      if (Object.keys(time).length === 0) {
        setIsLive(true); // Set event as live
        clearInterval(timer); // Stop the timer
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isLive) {
    return (
      <div className="flex items-center justify-center mt-8 space-x-3">
        {/* Gradient Circle */}
        {/* <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping relative">
          <div className="absolute inset-0 w-full h-full bg-red-500 rounded-full"></div>
        </div> */}
        {/* Live Text */}
        <span className="text-lg font-bold tracking-wide dynapuff text-red-600">
          15 <sup>th</sup> - 22 <sup>nd</sup> February
        </span>

        {/* Gradient Circle */}
        {/* <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping relative">
          <div className="absolute inset-0 w-full h-full bg-red-500 rounded-full"></div>
        </div> */}
      </div>
    );
  }

  return (
    <div className="text-center">
      {/* Countdown Timer */}
      <div className="flex justify-center space-x-4 sm:space-x-8 mt-0">
        {["Days", "Hours", "Mins", "Sec"].map((unit, index) => (
          <div
            key={unit}
            className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full flex flex-col items-center justify-center text-white shadow-lg transform transition-transform duration-300 hover:scale-105"
            style={{ aspectRatio: '1' }} // Ensure the aspect ratio is always 1:1
          >
            <p className="text-2xl sm:text-4xl font-extrabold">
              {Object.values(timeLeft)[index] || 0}
            </p>
            <p className="text-xs sm:text-sm font-medium uppercase tracking-wide dynapuff">
              {unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const EventCountdown = () => {
  const eventDate = "2025-02-15T00:00:00";

  return (
    <div className="p-3 sm:p-0">
      <CountdownTimer eventDate={eventDate} />
    </div>
  );
};

export default EventCountdown;
