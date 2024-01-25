import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import TeamPage from "./Pages/TeamPage";
import EventsPage from "./Pages/EventsPage";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import FigmaEvent from "./Pages/figma-lifestyle/FIgmaEvent";
import MainLayout from "./Layouts/MainLayout";

import { FaSun, FaMoon } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import EventCertificate from "./Pages/figma-lifestyle/EventCertificate";
import CloudStudyJam from "./Pages/EventCertificates/CloudStudyJam";
import CloudStudyJamVolunteer from "./Pages/EventCertificates/CloudStudyJamVolunteer";
import HacktoberfestVolunteer from "./Pages/EventCertificates/HacktoberfestVolunteer";
import CoreConfluenceVolunteer from "./Pages/EventCertificates/CoreConfluenceVolunteer";
import SolutionChallenge from "./Pages/solution-challenge/SolutionChallenge";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout page={HomePage} />,
      errorElement: <MainLayout page={ErrorPage} />,
    },
    {
      path: "/about",
      element: <MainLayout page={AboutPage} />,
    },
    {
      path: "/team",
      element: <MainLayout page={TeamPage} />,
    },
    {
      path: "/events",
      element: <MainLayout page={EventsPage} />,
    },
    {
      path: "/contactus",
      element: <MainLayout page={ContactPage} />,
    },
    {
      path: "/events/figma-lifestyle",
      element: <FigmaEvent />
    },
    {
      path: "/events/solution-challenge",
      element: <SolutionChallenge />
    },
    {
      path: "/events/figma-lifestyle/certificate/:refID",
      element: <MainLayout page={EventCertificate} />
    },
    {
      path: "/events/cloud-study-jams/certificate/:refID",
      element: <MainLayout page={CloudStudyJam} />
    },
    {
      path: "/events/cloud-study-jams/volunteer-certificate/:refID",
      element: <MainLayout page={CloudStudyJamVolunteer} />
    },
    {
      path: "/events/hacktoberfest/volunteer-certificate/:refID",
      element: <MainLayout page={HacktoberfestVolunteer} />
    },
    {
      path: "/events/core-confluence/volunteer-certificate/:refID",
      element: <MainLayout page={CoreConfluenceVolunteer} />
    },
  ]);
  
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'true');

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  

  return (
    <div className={`App relative ${darkMode ? "dark-theme" : "light-theme"}`}>
      <Helmet>
        <title>GDSC GHRCE</title>
        <meta name="description" content="GDSC GHRCE is a community of students passionate about technology and development. It is a student-led initiative supported by Google Developers, aimed at providing a platform for students to learn, collaborate, and build projects using various Google technologies." data-react-helmet={true}/>
        {/* <meta name="theme-color" content="#008f68" /> */}
      </Helmet>
      <RouterProvider router={router} />
      <button className="switch border-2 h-12 aspect-square rounded-full fixed bottom-0 right-0 flex justify-center items-center m-4 mx-8" onClick={() => setDarkMode(!darkMode)}>{darkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}</button>
    </div>
  );
}

export default App;
