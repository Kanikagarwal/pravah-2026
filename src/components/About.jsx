import React from 'react'
import Navbarr from './Navbar'
import Comingsoon from './Comingsoon'
import { motion } from 'framer-motion';
import DesktopFooter from './DesktopFooter';
import { Helmet } from 'react-helmet';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


const About = () => {
  return (

    <div>
      <Helmet>
        <title>About Pravah 2025 - Celebrating Innovation and Culture | SKIT</title>
        <meta
          name="description"
          content="Learn about Pravah 2025, an exciting celebration of innovation, creativity, and cultural excellence at SKIT. Join us for a journey filled with engaging events and memorable experiences."
        />
        <meta
          name="keywords"
          content="Pravah 2025, SKIT, Swami Keshvanand Institute of Technology, innovation, creativity, cultural events, workshops, seminars, youth fest"
        />
        <meta
          property="og:title"
          content="About Pravah 2025 - Celebrating Innovation and Culture | SKIT"
        />
        <meta
          property="og:description"
          content="Dive into Pravah 2025 at SKIT, where innovation meets culture. Join us in celebrating excellence through a series of inspiring events and activities."
        />
        <meta
          property="og:url"
          content="https://pravah.skit.ac.in/about-skit-pravah-2025"
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


      <Navbarr />

      <ParallaxProvider>
        <Parallax speed={-10}>

          <main className="min-h-screen px-6 md:px-12 sm:mt-16 mt-32 relative mb-40 flex flex-col items-center justify-center">





            <h1 className='bungee-shade-regular mt-10 text-7xl hidden sm:block'>
              <motion.span
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Pravah'25
              </motion.span>
            </h1>

            {/* Animated Section */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-xl mt-10 border-4 border-black">

              {/* Left Image */}
              <motion.div
                className="w-96 md:w-96 h-64 bg-contain bg-center relative md:left-0 -left-5 rounded-xl"
                style={{ backgroundImage: 'url("/pravah_poster.jpg")' }}
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
              </motion.div>

              {/* Text on the right */}
              <motion.div
                className="w-full md:w-2/3 px-8 py-6 text-white"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-semibold mb-4 cookie-regular">Welcome to Pravah'25</h2>
                <p className="text-lg leading-relaxed abeezee-regular">
                  Pravah is the annual college fest that brings together a celebration of culture, technology, sports, and more. A platform for innovation and creativity, attracting students nationwide.
                </p>
              </motion.div>

            </div>








          </main>

        </Parallax>

        <motion.div
          className="fixed -bottom-0 left-0 w-full hidden sm:block pointer-events-none -z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/rb_2149151140.png"
            alt="Pravah 2025 - Incredible India | SKIT"
            className="w-full h-auto object-cover transform translate-y-[200px] translate-x-0 opacity-30"
          />
        </motion.div>

        <div className="fixed -bottom-0 left-0 w-full hidden sm:block pointer-events-none -z-20">
          <img
            src="/rb_2149158780.png"
            alt="Pravah 2025 - Incredible India | SKIT"
            className="w-full h-auto object-cover transform translate-y-[300px] translate-x-0 opacity-10"
          />
        </div>

      </ParallaxProvider>

      <DesktopFooter />

    </div>
  )
}

export default About