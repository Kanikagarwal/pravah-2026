import React from 'react';
import { FaLink, FaHeadset, FaPhoneVolume, FaGlobe, FaUsers } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Comingsoon from './Comingsoon';

const DesktopFooter = () => {
  return (
    <footer
      className="bg-[#5a3e36] relative bottom-0 font-sans"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1653495482635-18acfead7ba8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 bg-[#372621] opacity-100"
        aria-hidden="true"
      ></div>

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 relative z-10">
        <div className="md:flex md:justify-between">


          <div className="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-extrabold uppercase text-white flex items-center">
                <FaLink className='mr-2' />
                Quick Links
              </h2>
              <ul className="text-white font-medium text-sm">
                <li className="mb-2">
                  <a href="/the-team-behind-skit-pravah-2026" target='_blank'>Team Pravah</a>
                  {/* <a href={``} target="_blank">Team Pravah</a> */}
                </li>
                <li className="mb-2">
                  <a href="/skit-pravah-2026-AAVEG">AAVEG</a>
                </li>
                <li className="mb-2">
                  <a href="/skit-pravah-2026-events">Events</a>
                </li>
              
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-extrabold uppercase text-white flex items-center">
                <FaHeadset className='mr-2' />
                Help Desk
              </h2>
              <ul className="text-white font-medium text-sm">
                <li className="mb-2">
                  <a href="https://forms.gle/144TVY3D2bMTGUPh8">Website</a>
                </li>
                <li className="mb-2">
                  <a href="https://forms.gle/ntPVd8NgToLwsJ7M9">Events</a>
                </li>
           
                <li className="mb-2">
                  <a href="https://forms.gle/byd1D7Suq24a5LR2A">Bug Report</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-extrabold uppercase text-white flex items-center">
                <FaGlobe className='mr-2' />
                Social Handles
              </h2>
              <ul className="text-white font-medium text-sm">
                <li className="mb-2">
                  <a href="https://www.instagram.com/skitpravah/">Instagram</a>
                </li>
                <li className="mb-2">
                  <a href="https://www.facebook.com/pravah.skit">Facebook</a>
                </li>
                <li className="mb-2">
                  <a href="https://twitter.com/@pravah_skit">Twitter</a>
                </li>
                <li className="mb-2">
                  <a href="https://www.youtube.com/@skitpravah4946">Youtube</a>
                </li>
              </ul>
            </div>

            <div className="text-white">
              <h2 className="mb-6 text-sm font-extrabold uppercase text-white flex items-center">
                <FaUsers className="mr-2" />
                Event Leadership
              </h2>
              <ul className="space-y-4">
                <li className="mb-2">
                  <p className="text-sm">
                    <span className="font-bold">Chief Coordinator, Pravah'26</span>
                    <br />
                    Prof.(Dr).B.L. Sharma -{" "}
                    <a href="tel:9414968681" className="underline hover:text-gray-400 transition">
                      9414968681
                    </a>
                  </p>

                </li>

                {/* <li className="mb-2">
                  <p className="text-sm">
                    <span className="font-bold">Chief Co-Coordinator, Pravah'25</span>
                    <br />
                    Dr. Amber Srivastava -{" "}
                    <a href="tel:9828298243" className="underline hover:text-gray-400 transition">
                      9828298243
                    </a>
                  </p>

                </li> */}

              </ul>
            </div>






          </div>




          <div className="text-white space-x-1">
            <h2 className="mb-6 text-sm font-extrabold uppercase text-white flex items-center">
              <FaPhoneVolume className="mr-2" />
              For Queries
            </h2>
            <ul className="space-y-4">
              <li className="mb-2">
                <p className="text-xs">
                  <span className="font-bold text-sm">For Events</span>
                  <br />
                  Vaibhav Upadhyay - {" "}
                  <a href="tel:9105939291" className="underline hover:text-gray-400 transition">
                    9105939291
                  </a>
                  <br />
                  Sanskar Chaturvedi - {" "}
                  <a href="tel:6377829943" className="underline hover:text-gray-400 transition">
                    6377829943
                  </a>
                </p>


              </li>

              <li className="mb-2">
                <p className="text-xs">
                  <span className="font-bold text-sm">For Website</span>
                  <br />
                  Kanika Agarwal -{" "}
                  <a href="tel:9660046683" className="underline hover:text-gray-400 transition">
                    9660046683
                  </a>
                  <br />
                  Sahil Kumar -{" "}
                  <a href="tel:9608428137" className="underline hover:text-gray-400 transition">
                    9608428137
                  </a>
                </p>

              </li>

            </ul>
          </div>


        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-5" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center mb-0">
            © 2026{" "}
            <a href="https://www.skit.ac.in/" className="hover:underline">
              SKIT, Jaipur
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex sm:justify-center sm:mt-0 space-x-4">
            <span className="text-sm text-white mb-0">
              Designed and Developed by{" "}
              <Link
                to={"/skit-pravah-2026-web-team"}
                className="text-gray-400 hover:underline"
                rel="noopener noreferrer"
              >
                Pravah Web Team
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;
