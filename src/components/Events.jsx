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
  const SHOW_COMING_SOON = false;

  const eventImageObj = {
    "Cultural": "cultural.png",
    "Technical": "tech.png",
    "Social": "social.png",
    "Literary": "art.png",
  }

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
    navigate(`/skit-pravah-2026-events/${categoryName}`);
  };

  return (
    <div>
{SHOW_COMING_SOON ? (
  <>
  <div
      className="section relative overflow-hidden"
      style={{
        overflowX: "hidden",
        backgroundImage: "url('navras/bg3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
        <Navbarr eventName={"The Event Collection"} />
        <div className="w-full flex justify-center mt-24 mb-32">
    <Comingsoon />
  </div>
        </div>
        <DesktopFooter />
      </>
      ) : (
      <>
      <Helmet>
        <title>Events & Registrations - Pravah 2026 | SKIT</title>
        <meta
          name="description"
          content="Explore the exciting events at Pravah 2026 and register to be a part of the grand celebration of Incredible India at SKIT."
        />
        <meta
          name="keywords"
          content="Pravah 2026 events, Incredible India, event registrations, SKIT, Swami Keshvanand Institute of Technology, Indian culture, celebrations"
        />
        <meta
          property="og:title"
          content="Events & Registrations - Pravah 2026 | SKIT"
        />
        <meta
          property="og:description"
          content="Join us at Pravah 2026, hosted by SKIT, to participate in vibrant events showcasing the cultural heritage and unity of Incredible India."
        />
        <meta property="og:url" content="https://pravah.skit.ac.in/skit-pravah-2026-events" />
        <meta
          name="author"
          content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
        />
        <meta
          name="organization"
          content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
        />
      </Helmet>


      <div
                className="section relative overflow-hidden bg-slate-100"
                style={{
                  overflowX: "hidden",
                  backgroundImage: "url('navras/bg3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                }}
              >

              
      <Navbarr eventName={" The Event Collection"}/>
      <ParallaxProvider>
        <Parallax speed={-15}>

        
          <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 mt-20 relative mb-60">
            
           
    

            
            <motion.div className="mt-44 flex flex-wrap justify-center items-center gap-8 w-full max-w-4xl mb-20">
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
                filteredCategories.filter(category => category.categoryName.toLowerCase() !== "non-technical")
                .map((category, index) => (
                  <motion.div
  key={category._id}
  className="w-[340px] md:w-[380px] bg-[#5a3e36]
             border border-[#fff1b8] rounded-lg
             overflow-hidden cursor-pointer
             shadow-lg hover:shadow-2xl
             transition-all duration-300 ease-out
             transform hover:scale-105"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
  onClick={() => handleCategoryClick(category.categoryName)}
>
   
  <div className="w-full h-56 md:h-64 overflow-hidden bg-white">
    <img
      src={eventImageObj[category.categoryName]}
      alt={category.categoryName}
      className="w-full h-full object-contain"
      loading="lazy"
    />
  </div>

  
  <div className="px-6 py-5 text-center space-y-2 bg-[#5a3e36]">
    <h5 className="text-2xl font-semibold text-[#f9eddd]">
      {category.categoryName} Events
    </h5>

     {/* <p className="text-sm text-[#f3e6cf] line-clamp-2 hidden sm:block">
      {category.categoryDescription}
    </p>  */}
  </div>
</motion.div>

                ))
              ) : (
                <p className="text-gray-600 relative"></p>
              )}
            </motion.div>
          </main>

        </Parallax>
      </ParallaxProvider>
      </div>
      {/* <div
                className="section relative overflow-hidden bg-slate-100"
                style={{
                  overflowX: "hidden",
                  backgroundImage: "url('navras/bg3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                }}
              >
               <Navbarr eventName={" The Event Collection"}/> 
              </div>
<Comingsoon /> */}

      <DesktopFooter />
            </>
            )}
    </div>
      
  );
};

export default Events;
