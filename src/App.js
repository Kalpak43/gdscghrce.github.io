import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import { FaSun, FaMoon } from "react-icons/fa6";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
]);

function App() {

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
      <Navbar darkMode={darkMode} />
      <RouterProvider router={router} />
      <button className="switch border-2 h-12 aspect-square rounded-full fixed bottom-0 right-0 flex justify-center items-center m-4 mx-8" onClick={() => setDarkMode(!darkMode)}>{darkMode ? <FaMoon className="text-2xl" /> : <FaSun className="text-2xl" />}</button>
      <Footer />
    </div>
  );
}

export default App;
