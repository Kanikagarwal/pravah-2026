import React from "react";
import Navbarr from "./Navbar";
import DesktopFooter from "./DesktopFooter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaBehance } from "react-icons/fa";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Helmet } from "react-helmet";

const Webteampravah = () => {
  const profiles = [
    {
      name: "Kavya Gupta",
      designation: "Full Stack",
      description: "Passionate about crafting beautiful and efficient web experiences.",
      image: "/webteam/kavya.png",
      phno: 9057277613,
      links: [
        { icon: FaGithub, url: "https://github.com/Gupta-Kavya" },
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/kavya-gupta-721294290/" },
      ],
    },
    {
      name: "Gaurav Khandelwal",
      designation: "Frontend",
      description: "Specialized in modern web design and interactive interfaces.",
      image: "/webteam/gaurav.png",
      phno: 7062878958,
      links: [
        { icon: FaGithub, url: "https://github.com/Gaurav515" },
        { icon: FaLinkedin, url: "#" },
      ],
    },
    {
      name: "Kunal Gupta",
      designation: "UI/UX",
      description: "Enthusiastic about web performance and accessibility.",
      image: "/webteam/kunal.png",
      phno: 9256635521,
      links: [
        { icon: FaGithub, url: "https://github.com/KunalGupta77" },
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/kunal-gupta-002b2b293/" },
      ],
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Pravah Web Team 2025 - Meet the Creators | SKIT</title>
        <meta
          name="description"
          content="Meet the talented Pravah Web Team 2025 at SKIT, the creative minds behind the Pravah website. Learn about their journey and contributions."
        />
        <meta
          name="keywords"
          content="Pravah Web Team 2025, SKIT, Swami Keshvanand Institute of Technology, website team, developers, designers, Pravah 2025"
        />
        <meta
          property="og:title"
          content="Pravah Web Team 2025 - Meet the Creators | SKIT"
        />
        <meta
          property="og:description"
          content="Discover the team of passionate developers and designers who brought the Pravah 2025 website to life at SKIT."
        />
        <meta property="og:url" content="https://pravah.skit.ac.in/skit-pravah-2025-web-team" />
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
          <main className="min-h-screen px-6 md:px-12 mt-16 relative mb-20">
            <motion.section
              className="text-center space-y-8"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 130 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black sm:tracking-tight ">
                Pravah Web Team
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-[4px] bg-gradient-to-r from-[#632a6e] to-[#941694] mt-1 rounded-full hidden sm:block"></span>
              </motion.h1>
            </motion.section>

            {/* Profile Cards Section */}
            <section className="mt-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className="bg-white shadow-sm rounded-3xl p-8 text-center border border-gray-400"
                >
                  <div className="relative">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-200"
                      draggable="false"
                    />
                    {/* <span className="absolute top-1 right-1 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  PRO
                </span> */}
                  </div>
                  <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                    {profile.name}
                  </h2>
                  <p className="text-sm text-gray-500">{profile.designation}</p>
                  <div className="flex justify-center space-x-4 mt-6">
                    {profile.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <link.icon size={20} />
                      </a>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4 mt-6">
                    <button
                      className="px-4 py-2 border border-gray-400 rounded-lg text-gray-600 hover:bg-gray-100"
                      onClick={() => window.open(`https://wa.me/${profile.phno}`, '_blank')}
                    >
                      Message
                    </button>
                    <button
                      className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                      onClick={() => window.location.href = `tel:${profile.phno}`}
                    >
                      Connect
                    </button>
                  </div>

                </div>
              ))}
            </section>
          </main>
        </Parallax>
        <motion.div
          className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/rb_2149151140.png"
            alt="Himalayas"
            className="w-full h-auto object-cover transform translate-y-[0px] sm:translate-y-[200px] translate-x-0 opacity-30"
          />
        </motion.div>

        <div className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-20 ">
          <img
            src="/rb_2149158780.png"
            alt="Himalayas"
            className="w-full h-auto object-cover transform translate-y-[0px] sm:translate-y-[300px] translate-x-0 opacity-10 "
          />
        </div>

      </ParallaxProvider>

      <DesktopFooter />
    </div>
  );
};

export default Webteampravah;
