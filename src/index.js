import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AnimatedCursor from "react-animated-cursor";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Navbarr from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Events from './components/Events';
import Aaveg from './components/Aaveg';
import Sponsors from './components/Sponsors';
import Teampravah from './components/Teampravah';
import Eventlist from './components/Eventlist';
import Eventdetails from './components/Eventdetails';
import Loader from './components/Loader';
import { HelmetProvider } from "react-helmet-async";
import Thirakgallery from './components/Thirakgallery';
import Rawazgallery from './components/Rawazgallery';
import Djnightgallery from './components/djnightgallery';
import Surgallery from './components/Surgallery';
import Celebritygallery from './components/Celebritygallery';
import AnnualDaygallery from './components/AnnualDaygallery';
import { Button, Drawer } from "flowbite-react";
import Schedule from './components/Schedule';
import Clashofbandsgallery from './components/Clashofbandsgallery';
import NotFound from './components/NotFound';
import OneSignal from 'react-onesignal';
import Webteampravah from './components/Webteampravah';



console.log = () => { };
console.warn = () => { };
console.error = () => { };
console.info = () => { };
console.debug = () => { };


const router = createBrowserRouter([
  {
    path: "/skit-pravah-2025",
    element: <Home />,
  },
  {
    path: "/about-skit-pravah-2025",
    element: <About />,
  },
  {
    path: "/skit-pravah-2025-events",
    element: <Events />,
  },
  {
    path: "/skit-pravah-2025-AAVEG",
    element: <Aaveg />,
  },
  {
    path: "/skit-pravah-2025-sponsors",
    element: <Sponsors />,
  },
  {
    path: "/the-team-behind-skit-pravah-2025",
    element: <Teampravah />,
  },
  {
    path: "/skit-pravah-2025-events/:eventcat",
    element: <Eventlist />,
  },
  {
    path: "/skit-pravah-2025-events/:eventcat/:eventid",
    element: <Eventdetails />,
  },
  {
    path: "/skit-pravah-2025-events-thirak-gallery",
    element: <Thirakgallery />,
  },
  {
    path: "/skit-pravah-2025-events-rawaz-gallery",
    element: <Rawazgallery />,
  },
  {
    path: "/skit-pravah-2025-events-djnight-gallery",
    element: <Djnightgallery />,
  },
  {
    path: "/skit-pravah-2025-events-Sur-gallery",
    element: <Surgallery />,
  },
  {
    path: "/skit-pravah-2025-events-Celebrity-gallery",
    element: <Celebritygallery />,
  },
  {
    path: "/skit-pravah-2025-events-AnnualDay-gallery",
    element: <AnnualDaygallery />,
  },
  {
    path: "/skit-pravah-2025-events-cob-gallery",
    element: <Clashofbandsgallery />,
  },
  {
    path: "/skit-pravah-2025-events-schedule",
    element: <Schedule />,
  },
  {
    path: "*", // This is the catch-all route for undefined paths
    element: <NotFound />, // Show the NotFound component
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/skit-pravah-2025-web-team",
    element: <Webteampravah />,
  },
]);

function Root() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== 'undefined') {
      OneSignal.init({
        appId: 'ef6afa02-fb5a-4e92-b6d8-5d894232cbab',
        notifyButton: {
          enable: false,
        },
        allowLocalhostAsSecureOrigin: false,
        autoRegister: true,
        autoResubscribe: true,
        requiresUserPrivacyConsent: true,
        persistNotification: true,
        promptOptions: {
          slidedown: {
            enabled: true,
            actionMessage: "Stay updated with the latest events and announcements from Pravah!",
            acceptButtonText: "Allow",
            cancelButtonText: "No thanks",
          },
        },
      });
    }

    OneSignal.Slidedown.promptPush();
  }, []);

  return (
    <HelmetProvider>
      <Loader />
      <div className="hide-scrollbar">
        {/* <AnimatedCursor innerStyle={{ zIndex: 10000 }} innerSize={8}
          outerSize={9}
          color='193, 11, 111'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5} /> */}
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  );
}

// Render root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

reportWebVitals();
