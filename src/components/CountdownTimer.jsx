import React, { useState, useEffect } from "react";

const CountdownTimer = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const diff = +new Date(eventDate) - +new Date();

    if (diff <= 0) return {};

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const isLive = +new Date(eventDate) <= +new Date();

  useEffect(() => {
    if (isLive) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate, isLive,calculateTimeLeft]);

  if (isLive) {
    return (
      <div className="flex items-center justify-center mt-8 space-x-3">
        {/* Left Pulse */}
        {/* <div className="relative">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping absolute inset-0"></div>
          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
        </div> */}

        {/* Live Text */}
        <span className="text-lg font-bold tracking-wide dynapuff text-red-600">
          16 <sup>th</sup> – 21 <sup>st</sup> February
        </span>

        {/* Right Pulse */}
        {/* <div className="relative">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping absolute inset-0"></div>
          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
        </div> */}
      </div>
    );
  }

  const units = [
    { label: "Days", key: "days" },
    { label: "Hours", key: "hours" },
    { label: "Mins", key: "minutes" },
    { label: "Sec", key: "seconds" },
  ];

  return (
    <div className="text-center">
      <div className="flex justify-center space-x-4 sm:space-x-8">
        {units.map(({ label, key }) => (
          <div
            key={label}
            className="w-16 h-16 lg:w-24 lg:h-24 bg-[#fff1b8] rounded-full flex flex-col items-center justify-center text-[#5a3e36] shadow-lg transform transition-transform duration-300 hover:scale-105"
            style={{ aspectRatio: "1 / 1" }}
          >
            <p className="text-2xl sm:text-4xl font-extrabold">
              {timeLeft[key] ?? 0}
            </p>
            <p className="text-xs sm:text-sm font-medium uppercase tracking-wide dynapuff">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const EventCountdown = () => {
  // IST-safe event time
  const eventDate = "2026-02-16T00:00:00+05:30";

  return (
    <div className="p-3 sm:p-0">
      <CountdownTimer eventDate={eventDate} />
    </div>
  );
};

export default EventCountdown;
