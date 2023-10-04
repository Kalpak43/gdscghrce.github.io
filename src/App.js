import "./App.css";
import { BrowserRouter, RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import TeamPage from "./Pages/TeamPage";
import EventsPage from "./Pages/EventsPage";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import FigmaEvent from "./Pages/figma-lifestyle/FIgmaEvent";
import MainLayout from "./Layouts/MainLayout";

import { FaSun, FaMoon } from "react-icons/fa6";

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
      path: "/figma-lifestyle",
      element: <FigmaEvent />
    }
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
      <RouterProvider router={router} />
      <button className="switch border-2 h-12 aspect-square rounded-full fixed bottom-0 right-0 flex justify-center items-center m-4 mx-8" onClick={() => setDarkMode(!darkMode)}>{darkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}</button>
    </div>
  );
}

export default App;
