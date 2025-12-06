import React from 'react'
import Comingsoon from './Comingsoon'
import Navbarr from './Navbar'
import DesktopFooter from './DesktopFooter'
import { Helmet } from 'react-helmet'
import { motion } from "framer-motion";
import Coordinator from './Coordinator'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const Teampravah = () => {
    return (
        <div>

            <Helmet>
                <title>Team Pravah - Meet the Minds Behind the Fest | SKIT</title>
                <meta
                    name="description"
                    content="Meet the dedicated team behind Pravah at SKIT. Discover the passionate individuals who bring creativity, organization, and energy to one of the largest cultural fests."
                />
                <meta
                    name="keywords"
                    content="Team Pravah, Pravah organizers, SKIT team, event coordinators, cultural fest team, youth fest leadership, SKIT Pravah committee"
                />
                <meta
                    property="og:title"
                    content="Team Pravah - Meet the Minds Behind the Fest | SKIT"
                />
                <meta
                    property="og:description"
                    content="Get to know the dynamic team behind Pravah at SKIT. These creative minds and organizers are the driving force behind this incredible cultural fest."
                />
                <meta property="og:url" content="https://pravah.skit.ac.in/the-team-behind-skit-pravah-2025" />
                <meta
                    name="author"
                    content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
                />
                <meta
                    name="organization"
                    content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
                />
            </Helmet>

            <Navbarr eventName={"Team Pravah"} />

            <ParallaxProvider>

                {/* <Comingsoon /> */}
                <Parallax speed={-15}>
                    <main className="min-h-screen flex-col items-center justify-center mt-60 relative mb-40 md:p-16 p-4">


                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10 mt-10 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Fest head



                            </motion.span>
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">
                            <Coordinator
                                name={"Dipesh Kaushik"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1738151658/tyeiz6wkpn2ypnfy1fqh.jpg"}
                            />
                            <Coordinator
                                name={"Uday Singh Sisodia"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737817030/IMG_5002-1_1_lrh7vo.jpg"}
                            />
                        </div>



                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16 mt-6 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Mentors


                            </motion.span>
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">






                            <Coordinator
                                name={"Saarthak Chopra"}

                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737908020/IMG_20250114_223756_364_o9esoh.jpg"}

                            />







                        </div>



                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16 mt-6 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Sponsorship Team



                            </motion.span>
                        </h2>


                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">


                            <Coordinator
                                name={"Daksh Meena"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737822676/20250125_211459_dvhl1g.jpg"}


                            />



                            <Coordinator
                                name={"Sachin Meena"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737817103/WhatsApp_Image_2025-01-25_at_18.33.51_chsvck.jpg"}


                            />

                            <Coordinator
                                name={"Sneha Swarnkar"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737908770/WhatsApp_Image_2025-01-26_at_21.54.53_dup6ja.jpg"}

                            />



                            <Coordinator
                                name={"Kaynat Ansari"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737732494/IMG_20250107_175244_radirq.jpg"}

                            />








                        </div>



                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16 mt-6 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Event Queries



                            </motion.span>
                        </h2>


                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">


                            <Coordinator
                                name={"Yashvardhan Sharma"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737732321/IMG-20250114-WA0029_lr6z5g.jpg"}
                                number={9587483461}

                            />

                            <Coordinator
                                name={"Vaibhav Upadhyay"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737737193/IMG-20241001-WA0035_mgmt11.jpg"}
                                number={9105939291}
                            />


                        </div>













                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16 mt-6 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Technical Team



                            </motion.span>
                        </h2>


                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">


                            <Coordinator
                                name={"Amartya Sharma"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737732644/IMG-20241205-WA0031_kqrsto.jpg"}

                            />

                            <Coordinator
                                name={"Ansh Kasat"}
                                photo={"https://res.cloudinary.com/dcw8a8qlb/image/upload/v1739508306/kgcr0ikcocsl9grdga9j.jpg"}

                            />

                            <Coordinator
                                name={"Mitesh Jangid"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737908277/WhatsApp_Image_2025-01-26_at_17.57.44_qbshul.jpg"}

                            />

                        </div>





                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16 mt-6 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Non-Technical Team



                            </motion.span>
                        </h2>


                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">


                            <Coordinator
                                name={"Dakshesh Sura"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737736342/IMG_20250124_214157_cybx52.jpg"}

                            />

                            <Coordinator
                                name={"Sadaf Khan"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737732712/WhatsApp_Image_2025-01-24_at_20.32.18_bhnogx.jpg"}

                            />

                        </div>






                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16 mt-6 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Cultural Team



                            </motion.span>
                        </h2>





                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">




                            <Coordinator
                                name={"Snehal Gajraj"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737817145/WhatsApp_Image_2025-01-25_at_20.02.27_wc7r0t.jpg"}

                            />

                            <Coordinator
                                name={"Kunal Vishnoi"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737733011/IMG_20250116_230219_863_ndo6et.jpg"}

                            />

                            <Coordinator
                                name={"Aditya Sharma"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737732805/WhatsApp_Image_2025-01-24_at_20.30.34_kcfesj.jpg"}

                            />

                        </div>


                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16 mt-6 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Decoration Team

                            </motion.span>
                        </h2>


                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">


                            <Coordinator
                                name={"Aditi"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737908138/WhatsApp_Image_2025-01-26_at_11.12.36_p0uks8.jpg"}

                            />

                        </div>



                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16 mt-6 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Designing Team



                            </motion.span>
                        </h2>


                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">


                            <Coordinator
                                name={"Harsh Garu"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737816935/WhatsApp_Image_2025-01-25_at_18.10.30_ugadq4.jpg"}

                            />

                            <Coordinator
                                name={"Aditya Sharma"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737734240/WhatsApp_Image_2025-01-24_at_21.18.33_vbsf7g.jpg"}

                            />



                        </div>









                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16 mt-6 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Social Team



                            </motion.span>
                        </h2>


                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">


                            <Coordinator
                                name={"Juned Khan"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737824828/IMG-20250125-WA0019_hkgobg.jpg"}

                            />



                        </div>







                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16 mt-6 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Publicity & Invitation Team



                            </motion.span>
                        </h2>


                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">



                            <Coordinator
                                name={"Kaushal Meena"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737733697/IMG_20250122_224642_xdtwrt.jpg"}

                            />


                            <Coordinator
                                name={"Shahaan Khan"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737817285/IMG_0256_2_xwdsgb.jpg"}

                            />




                        </div>



                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16 mt-6 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Website Team



                            </motion.span>
                        </h2>


                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">


                            <Coordinator
                                name={"Kavya Gupta"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737733294/kavya_p7gdzw.png"}

                            />



                        </div>



                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16 mt-6 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Photography / Social Team

                            </motion.span>
                        </h2>


                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">


                            <Coordinator
                                name={"Aniket Raj"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737733176/WhatsApp_Image_2025-01-24_at_21.07.18_udlrse.jpg"}

                            />

                            <Coordinator
                                name={"Kanishk Khandal"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737733237/IMG_0183_gribgi.jpg"}

                            />

                        </div>








                        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16 mt-6 relative font-sans  tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                                className="relative inline-block"
                            >

                                Literary Team

                            </motion.span>
                        </h2>


                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 mt-8">


                            <Coordinator
                                name={"Yashvardhan Sharma"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737732321/IMG-20250114-WA0029_lr6z5g.jpg"}

                            />

                            <Coordinator
                                name={"Parineeta Sharma"}
                                photo={"https://res.cloudinary.com/dktkdi3sm/image/upload/v1737908218/IMG-20250126-WA0024_acgcde.jpg"}

                            />

                        </div>


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
                        alt="Pravah 2025 - Incredible India | SKIT"
                        className="w-full h-auto object-cover transform translate-y-[0px] sm:translate-y-[200px] translate-x-0 opacity-30"
                    />
                </motion.div>

                <div className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-20">
                    <img
                        src="/rb_2149158780.png"
                        alt="Pravah 2025 - Incredible India | SKIT"
                        className="w-full h-auto object-cover transform translate-y-[0px] sm:translate-y-[300px] translate-x-0 opacity-10"
                    />
                </div>
            </ParallaxProvider>
            <DesktopFooter />
        </div>
    )
}

export default Teampravah