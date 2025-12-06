import React, { useState, useEffect } from 'react';
import Navbarr from './Navbar';
import DesktopFooter from './DesktopFooter';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Comingsoon from './Comingsoon';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Events = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]); // State for filtered categories
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [loading, setLoading] = useState(true); // Track loading state
  const navigate = useNavigate();

  // Fetch categories data from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}api/categories`);
        const data = await response.json();
        setCategories(data); // Store the fetched categories
        setFilteredCategories(data); // Initialize filtered categories with all categories
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error('Error fetching categories data:', error);
        setLoading(false); // Handle error and stop loading
      }
    };

    fetchCategories();
  }, []);

  // Handle search functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = categories.filter((category) =>
      category.categoryName.toLowerCase().includes(query)
    );
    setFilteredCategories(filtered);
  };

  // Handle navigation to category-specific page
  const handleCategoryClick = (categoryName) => {
    navigate(`/skit-pravah-2025-events/${categoryName}`);
  };

  return (
    <div>

      <Helmet>
        <title>Events & Registrations - Pravah 2025 | SKIT</title>
        <meta
          name="description"
          content="Explore the exciting events at Pravah 2025 and register to be a part of the grand celebration of Incredible India at SKIT."
        />
        <meta
          name="keywords"
          content="Pravah 2025 events, Incredible India, event registrations, SKIT, Swami Keshvanand Institute of Technology, Indian culture, celebrations"
        />
        <meta
          property="og:title"
          content="Events & Registrations - Pravah 2025 | SKIT"
        />
        <meta
          property="og:description"
          content="Join us at Pravah 2025, hosted by SKIT, to participate in vibrant events showcasing the cultural heritage and unity of Incredible India."
        />
        <meta property="og:url" content="https://pravah.skit.ac.in/skit-pravah-2025-events" />
        <meta
          name="author"
          content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
        />
        <meta
          name="organization"
          content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
        />
      </Helmet>



      <Navbarr eventName={" The Event Collection"}/>


      {/* <div className="absolute bottom-0 left-0 w-full hidden sm:block z-0 ">
                  <motion.img
                    src="/file (14).png"
                    alt="Pravah 2025 - Incredible India | SKIT"
                    className="w-full object-cover transform"
                    initial={{ translateY: 600 }}
                    whileInView={{ translateY: 450 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  />
                  
                </div> */}
      <ParallaxProvider>
        <Parallax speed={-15}>

        
          <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 mt-20 relative mb-60">
            {/* Heading Section */}
           
    

            {/* Render categories dynamically */}
            <motion.div className="mt-20 flex flex-wrap justify-center items-center gap-8 w-full max-w-6xl mb-20">
              {loading ? (
                // Skeleton loading for categories
                <div className="flex flex-wrap gap-8 w-full justify-center">
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      className="w-80 flex flex-row items-center bg-gray-50 rounded-lg overflow-hidden border border-gray-200 justify-center"
                    >
                      <div className="w-full h-44 md:h-48 relative p-3">
                        <Skeleton height={192} width="100%" />
                      </div>
                      <div className="flex flex-col justify-between p-6 leading-normal space-y-4 w-full">
                        <Skeleton height={30} width="80%" />
                        <Skeleton height={40} width="100%" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredCategories.length > 0 ? (
                filteredCategories.map((category, index) => (
                  <motion.div
                    key={category._id}
                    className="flex flex-col items-center bg-gray-50 rounded-xl overflow-hidden border border-black cursor-pointer"
                    initial={{ opacity: 0, y: 160 }} // Start animation state
                    whileInView={{ opacity: 1, y: 120 }} // Trigger when in view
                    viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% of the card is visible
                    transition={{
                      delay: index * 0.2, // Stagger based on index
                      duration: 0.8,
                      ease: 'easeOut',
                    }}
                    onClick={() => handleCategoryClick(category.categoryName)}
                  >
                    {/* Image container */}
                    <div className="relative w-full h-44 md:h-48 p-3 group">
                      <img
                        className="object-cover w-80 h-48 rounded-xl border-2 border-gray-100"
                        src={category.categoryImage}
                        alt={category.categoryName}
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-black bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out sm:flex items-center justify-center group rounded-xl w-80 h-48 m-3 hidden">
                        <p className="text-white text-md p-3 text-center font-sans">{category.categoryDescription}</p>
                      </div>

                    </div>

                    {/* Category name */}
                    <div className="flex flex-col justify-between p-6 leading-normal space-y-4 w-full">
                      <h5
                        className="text-lg font-bold text-gray-900 tracking-tight cookie-regular text-center mt-5"
                        style={{ fontSize: '35px' }}
                      >
                        {category.categoryName} Events
                      </h5>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-600 relative"></p>
              )}
            </motion.div>




            <motion.div
              className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img
                src="/rb_2149151140.png"
                alt="Pravah 2025 - Incredible India | SKIT"
                className="w-full h-auto object-cover transform translate-y-[180px] translate-x-0 opacity-20"
              />
            </motion.div>

            <div className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-20 ">
              <img
                src="/rb_2149158780.png"
                alt="Pravah 2025 - Incredible India | SKIT"
                className="w-full h-auto object-cover transform translate-y-[150px] translate-x-0 opacity-10 "
              />
            </div>


          </main>

        </Parallax>
      </ParallaxProvider>



      <DesktopFooter />
    </div>
  );
};

export default Events;
