import React, { useEffect, useState } from 'react';
import Navbarr from './Navbar';
import DesktopFooter from './DesktopFooter';
import { motion } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Helmet } from 'react-helmet';
import Comingsoon from './Comingsoon';

const Schedule = () => {
    const [events, setEvents] = useState([]);
    const [currentDayEvents, setCurrentDayEvents] = useState([]);

    // Fetch events data
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}api/events`);
                const data = await response.json();

                // Filter out events where schedule === false
                const filteredEvents = data.filter(event => event.schedule !== false);

                setEvents(filteredEvents);

                // Determine the events for the current day
                const today = new Date().toISOString().split('T')[0];
                const todayEvents = filteredEvents.filter((event) => {
                    const eventDate = event.eventDate.split('T')[0];
                    return eventDate === today;
                });

                setCurrentDayEvents(todayEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    // Group events by days
    const groupedEvents = events.reduce((acc, event) => {
        // Extract the date portion (YYYY-MM-DD) from the ISO string
        const eventDate = event.eventDate.split('T')[0];
        if (!acc[eventDate]) {
            acc[eventDate] = [];
        }
        acc[eventDate].push(event);
        return acc;
    }, {});

    // Sort events by date and within each date, sort by event start time
    const sortedGroupedEvents = Object.entries(groupedEvents)
        .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB)) // Sort by date
        .reduce((acc, [date, events]) => {
            acc[date] = events.sort((a, b) => {
                const [aHour, aMinute] = a.eventTimings.from.split(':').map(Number);
                const [bHour, bMinute] = b.eventTimings.from.split(':').map(Number);
                return aHour * 60 + aMinute - (bHour * 60 + bMinute); // Convert time to minutes and compare
            });
            return acc;
        }, {});


    // Check if the current time is within event timings
    const isLiveEvent = (timings) => {
        const { from, to } = timings;
        const currentTime = new Date();
        const fromTime = new Date();
        const toTime = new Date();

        const [fromHour, fromMinute] = from.split(':').map(Number);
        const [toHour, toMinute] = to.split(':').map(Number);

        fromTime.setHours(fromHour, fromMinute, 0, 0);
        toTime.setHours(toHour, toMinute, 0, 0);

        return currentTime >= fromTime && currentTime <= toTime;
    };

    const formatTime = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    };

    const formatDayWithSuffix = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
    
        let suffix = "th";
        if (day % 10 === 1 && day !== 11) suffix = "st";
        else if (day % 10 === 2 && day !== 12) suffix = "nd";
        else if (day % 10 === 3 && day !== 13) suffix = "rd";
    
        return `${day}${suffix}`;
    };
    

    return (
        <div>

            <Helmet>
                <title>Event Schedule - Pravah 2025 | SKIT</title>
                <meta
                    name="description"
                    content="Explore the event schedule for Pravah 2025 at SKIT. Get all the details on upcoming events, workshops, seminars, and cultural programs."
                />
                <meta
                    name="keywords"
                    content="Pravah 2025, event schedule, SKIT, Swami Keshvanand Institute of Technology, workshops, seminars, cultural events, youth fest"
                />
                <meta
                    property="og:title"
                    content="Event Schedule - Pravah 2025 | SKIT"
                />
                <meta
                    property="og:description"
                    content="Discover the complete event schedule for Pravah 2025 at SKIT. Find out about all the exciting workshops, seminars, and cultural events happening throughout the festival."
                />
                <meta
                    property="og:url"
                    content="https://pravah.skit.ac.in/skit-pravah-2025-events-schedule   "
                />
                <meta
                    name="author"
                    content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
                />
                <meta
                    name="organization"
                    content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
                />
            </Helmet>


            <Navbarr eventName={"Event's Schedule"} />
            <ParallaxProvider>
                <Parallax speed={-10}>
                    {/* <Comingsoon /> */}
                    <main className="min-h-screen px-6 md:px-12 mt-16 relative mb-72">
                        {/* <motion.section
                            className="text-center space-y-8"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 130 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <motion.h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black tracking-tight">
                                Event's Schedule
                                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-[4px] bg-gradient-to-r from-[#632a6e] to-[#941694] mt-1 rounded-full"></span>
                            </motion.h1>
                        </motion.section> */}

                        <div className="flex flex-col space-y-10 mb-20 mt-36">
                            {Object.entries(sortedGroupedEvents).map(([day, eventsForDay], index) => (
                                <motion.div
                                    key={day}
                                    className="flex flex-col space-y-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1, y: 130 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                >
                                    {/* Day Header */}
                                    <motion.div
                                        className="flex justify-between items-center py-4"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <div className="flex items-center">
                                            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black audiowide-regular">
                                                {`DAY ${index + 1} - ${formatDayWithSuffix(day)}`} Feb
                                            </h2>

                                        </div>

                                        {/* Live Icon */}
                                        {day === new Date().toISOString().split('T')[0] && (
                                            <motion.div
                                                className="flex items-center space-x-2"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                            >
                                                <FaCircle className="text-red-700 animate-pulse" />
                                                <span className="text-sm text-red-900 font-bold">Live</span>
                                            </motion.div>
                                        )}
                                    </motion.div>

                                    {/* Events for this Day */}
                                    <div className="sm:flex sm:flex-wrap grid grid-cols-2 gap-4 sm:gap-8 p-0 rounded-lg sm:justify-start z-20">
                                        {eventsForDay.map((event, i) => (
                                            <motion.div
                                                key={event._id}
                                                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false }}
                                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                            >
                                                <Link to={`/skit-pravah-2025-events/${event.eventCategory}/${event._id}`}>
                                                    <div className="relative bg-gradient-to-r from-gray-50 via-gray-50 to-gray-50 rounded-xl p-2 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-black cursor-pointer">
                                                        {/* Event Image */}
                                                        <div
                                                            className="relative w-full h-20 sm:h-32 bg-cover bg-center rounded-xl"
                                                            style={{ backgroundImage: `url(${event.eventImage})` }}
                                                        >
                                                            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
                                                        </div>

                                                        {/* Event Name and Timing */}
                                                        <div className="flex justify-between items-center mt-3 py-2">
                                                            <h3 className="text-lg font-bold text-black z-10 font-sans text-wrap hidden sm:block">
                                                                {event.eventTitle.length > 10 ? `${event.eventTitle.substring(0, 10)}...` : event.eventTitle}
                                                            </h3>

                                                            <h3 className="text-sm font-bold text-black z-10 font-sans text-wrap sm:hidden">
                                                                {event.eventTitle.length > 6 ? `${event.eventTitle.substring(0, 6)}...` : event.eventTitle}
                                                            </h3>

                                                            <p className="text-sm text-gray-600 font-medium bg-gray-200 px-2 py-1 rounded-lg">
                                                                {formatTime(event.eventTimings.from)}
                                                            </p>
                                                        </div>

                                                        {/* Live Indicator for Specific Events */}
                                                        {day === new Date().toISOString().split('T')[0] &&
                                                            isLiveEvent(event.eventTimings) && (
                                                                <div className="flex items-center space-x-2 mt-2 absolute top-2 right-4 p-1 bg-red-200 rounded-full justify-center">
                                                                    <FaCircle className="text-red-600 animate-pulse" />
                                                                    <span className="text-sm text-red-900 font-bold">Live</span>
                                                                </div>
                                                            )}
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}




                        </div>





                    </main>







                </Parallax>


                <motion.div
                    className="fixed -bottom-0 left-0 w-full hidden sm:block pointer-events-none -z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="/rb_2149151140.png"
                        alt="Himalayas"
                        className="w-full h-auto object-cover transform translate-y-[200px] translate-x-0 opacity-30"
                    />
                </motion.div>

                <div className="fixed -bottom-0 left-0 w-full hidden sm:block pointer-events-none -z-20 ">
                    <img
                        src="/rb_2149158780.png"
                        alt="Himalayas"
                        className="w-full h-auto object-cover transform translate-y-[300px] translate-x-0 opacity-10 "
                    />
                </div>

            </ParallaxProvider>


            {/* Background Image */}

            <DesktopFooter />
        </div>
    );
};

export default Schedule;
