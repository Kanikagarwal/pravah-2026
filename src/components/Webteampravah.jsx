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
        <title>Pravah Web Team 2026 - Meet the Creators | SKIT</title>
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
      <div
        className="section relative overflow-hidden bg-[#f9eddd]"
        style={{
          overflowX: "hidden",
          backgroundImage: "url('/navras/bg3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
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
              <motion.h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-[#5a3e36] ">
                Pravah Web Team
                {/* <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-[4px] bg-gradient-to-r from-[#632a6e] to-[#941694] mt-1 rounded-full hidden sm:block"></span> */}
              </motion.h1>
            </motion.section>

            {/* Profile Cards Section */}
            <section className="mt-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className="bg-[#2d201c] shadow-sm rounded-3xl p-8 text-center border border-[#2d201c]"
                >
                  <div className="relative">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#fff1b8]"
                      draggable="false"
                    />
                    {/* <span className="absolute top-1 right-1 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  PRO
                </span> */}
                  </div>
                  <h2 className="text-2xl font-semibold mt-4 text-[#f9eddd]">
                    {profile.name}
                  </h2>
                  <p className="text-sm text-[#f9eddddb]">{profile.designation}</p>
                  <div className="flex justify-center space-x-4 mt-6">
                    {profile.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#f9eddd]/90 hover:text-[#f9eddd]"
                      >
                        <link.icon size={20} />
                      </a>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4 mt-6">
                    <button
                      className="px-4 py-2 border border-gray-400 rounded-lg text-[#f9eddd] hover:text-[#2d201c] hover:bg-[#f9eddd]"
                      onClick={() => window.open(`https://wa.me/${profile.phno}`, '_blank')}
                    >
                      Message
                    </button>
                    <button
                      className="px-4 py-2 bg-[#5a3e36] text-[#f9eddd] rounded-lg hover:bg-[#5a3e36]/90"
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
      </ParallaxProvider>
      </div>

      <DesktopFooter />
    </div>
  );
};

export default Webteampravah;
