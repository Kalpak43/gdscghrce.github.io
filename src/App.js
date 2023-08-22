import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';
import TeamPage from './Pages/TeamPage';
import EventsPage from './Pages/EventsPage';
import Navbar from './Components/Navbar';
import { useState, useEffect } from 'react';

const router = createBrowserRouter([
  {
    path : "/",
    element : <HomePage />,
    errorElement : <ErrorPage />
  },
  {
    path : '/team',
    element : <TeamPage />
  },
  {
    path : '/events',
    element : <EventsPage />
  }
])


function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "dark-theme" : "light-theme"}`}>
      <Navbar darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)}/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
