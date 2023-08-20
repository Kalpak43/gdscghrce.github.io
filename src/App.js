import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';
import TeamPage from './Pages/TeamPage';
import EventsPage from './Pages/EventsPage';

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
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
