import React, { useEffect, useState } from "react";
import Navbarr from "./Navbar";
import DesktopFooter from "./DesktopFooter";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Helmet } from "react-helmet";

const Schedule = () => {
  const [events, setEvents] = useState([]);

  // ✅ MANUAL EVENTS (added)
  const manualEvents = [
    {
      _id: "manual1",
      eventTitle: "DJ Night",
      eventCategory: "special",
      eventImage: "/Celebrity/7.JPG",
      eventDate: "2026-02-19T00:00:00",
      eventTimings: { from: "19:00", to: "22:00" },
      schedule: true,
    },
    {
      _id: "manual2",
      eventTitle: "Celeb Night",
      eventCategory: "special",
      eventImage: "/Celebrity/3.JPG",
      eventDate: "2026-02-20T00:00:00",
      eventTimings: { from: "19:00", to: "22:00" },
      schedule: true,
    },

    {
      _id: "manual3",
      eventTitle: "Prize Distribution",
      eventCategory: "special",
      eventImage: "/AnnualDay/6.JPG",
      eventDate: "2026-02-21T00:00:00",
      eventTimings: { from: "14:00", to: "17:00" },
      schedule: true,
    },

    {
      _id: "manual4",
      eventTitle: "Inaugural Ceremony",
      eventCategory: "special",
      eventImage: "/AnnualDay/5.JPG",
      eventDate: "2026-02-16T00:00:00",
      eventTimings: { from: "09:30", to: "12:00" },
      schedule: true,
    },
    
    {
      _id: "manual3",
      eventTitle: "Annual Day",
      eventCategory: "special",
      eventImage: "/AnnualDay/7.JPG",
      eventDate: "2026-02-21T00:00:00",
      eventTimings: { from: "18:00", to: "22:00" },
      schedule: true,
    },
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/events`
        );
        const data = await response.json();

        const filteredEvents = data.filter(
          (event) => event.schedule !== false
        );

        // ✅ merge API + manual events
        setEvents([...filteredEvents, ...manualEvents]);
      } catch (error) {
        console.error("Error fetching events:", error);

        // fallback: show manual events if API fails
        setEvents(manualEvents);
      }
    };

    fetchEvents();
  }, []);

  // group events by date
  const groupedEvents = events.reduce((acc, event) => {
    const eventDate = event.eventDate.split("T")[0];
    if (!acc[eventDate]) acc[eventDate] = [];
    acc[eventDate].push(event);
    return acc;
  }, {});

  // sort by date & time
  const sortedGroupedEvents = Object.entries(groupedEvents)
    .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
    .reduce((acc, [date, events]) => {
      acc[date] = events.sort((a, b) => {
        const [aH, aM] = a.eventTimings.from.split(":").map(Number);
        const [bH, bM] = b.eventTimings.from.split(":").map(Number);
        return aH * 60 + aM - (bH * 60 + bM);
      });
      return acc;
    }, {});

  const isLiveEvent = (timings) => {
    const { from, to } = timings;
    const now = new Date();

    const [fh, fm] = from.split(":").map(Number);
    const [th, tm] = to.split(":").map(Number);

    const start = new Date();
    const end = new Date();

    start.setHours(fh, fm, 0, 0);
    end.setHours(th, tm, 0, 0);

    return now >= start && now <= end;
  };

  const formatTime = (time) => {
    const [h, m] = time.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hour = h % 12 || 12;
    return `${hour}:${String(m).padStart(2, "0")} ${period}`;
  };

  const formatDayAndMonth = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });

    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";

    return `${day}${suffix} ${month}`;
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <Helmet>
        <title>Event Schedule - Pravah 2026 | SKIT</title>
      </Helmet>

      <div
        className="section relative overflow-hidden bg-slate-100"
        style={{
          backgroundImage: "url('navras/bg3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbarr eventName={"Event's Schedule"} />

        <ParallaxProvider>
          <Parallax speed={-10}>
            <main className="min-h-screen px-6 md:px-12 mt-16 relative mb-72">
              <div className="flex flex-col space-y-10 mb-20 mt-36">
                {Object.entries(sortedGroupedEvents).map(
                  ([day, eventsForDay], index) => (
                    <motion.div
                      key={day}
                      className="flex flex-col space-y-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1, y: 130 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                      <div className="flex justify-between items-center py-4">
                        <h2 className="text-4xl font-extrabold">
                          DAY {index + 1} - {formatDayAndMonth(day)}
                        </h2>

                        {day === today && (
                          <div className="flex items-center space-x-2">
                            <FaCircle className="text-red-700 animate-pulse" />
                            <span className="text-sm text-red-900 font-bold">
                              Live
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="sm:flex sm:flex-wrap grid grid-cols-2 gap-4 sm:gap-8">
                        {eventsForDay.map((event, i) => (
                          <motion.div
                            key={event._id}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                          >
                            {event._id.startsWith("manual") ? (
  <div className="relative bg-[#5a3e36] rounded-xl p-2 shadow-lg border border-black cursor-default">
    <div
      className="relative w-full h-20 sm:h-32 bg-cover bg-center rounded-xl"
      style={{
        backgroundImage: `url(${event.eventImage})`,
      }}
    />

    <div className="flex justify-between items-center mt-3 py-2">
      <h3 className="text-lg font-bold text-[#f9eddd]">
        {event.eventTitle.length > 10
          ? `${event.eventTitle.substring(0, 10)}...`
          : event.eventTitle}
      </h3>

      <p className="text-sm bg-[#f9eddd] px-2 py-1 rounded-lg">
        {formatTime(event.eventTimings.from)}
      </p>
    </div>
  </div>
) : (
  <Link
    to={`/skit-pravah-2026-events/${event.eventCategory}/${event._id}`}
  >
    <div className="relative bg-[#5a3e36] rounded-xl p-2 shadow-lg hover:shadow-2xl transition-all duration-300 border border-black">
      <div
        className="relative w-full h-20 sm:h-32 bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url(${event.eventImage})`,
        }}
      />

      <div className="flex justify-between items-center mt-3 py-2">
        <h3 className="text-lg font-bold text-[#f9eddd]">
          {event.eventTitle.length > 10
            ? `${event.eventTitle.substring(0, 10)}...`
            : event.eventTitle}
        </h3>

        <p className="text-sm bg-[#f9eddd] px-2 py-1 rounded-lg">
          {formatTime(event.eventTimings.from)}
        </p>
      </div>
    </div>
  </Link>
)}

                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </main>
          </Parallax>
        </ParallaxProvider>
      </div>

      <DesktopFooter />
    </div>
  );
};

export default Schedule;
