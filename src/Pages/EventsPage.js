import event_img from "../Images/Upcoming_evens.jpg";
import gdsj from "../Images/GCSJ_logo.webp"
import webDSC from "../Images/WebwithDSC.webp";
import { FaLocationDot } from "react-icons/fa6";

const EventsPage = () => {
  return (
    <div className="EventsPage min-h-screen">
      <div className="pt-40" id="past">
        <h1 className="text-4xl text-center font-bold">Past Events</h1>
        <div className="md:grid grid-cols-3 place-items-center flex flex-wrap justify-center md:px-20 w-full">
          <div class="member-card w-5/6 mx-auto my-10 bg-white rounded-lg shadow-md p-5">
            <div className="member-img rounded-full mx-auto border-2">
              <img src={gdsj} className="rounded-full" />
            </div>
            <h2 class="text-center text-lg font-semibold mt-3">
              Info Session- "Google Cloud Study Jam"
            </h2>
            <p class="text-center mt-1">Aug 31, 2023</p>
            <p class="text-center">
              <FaLocationDot className="inline text-lg mb-1" /> G.H. Raisoni College
              of Engineering - Nagpur
            </p>
          </div>
          <div class="member-card w-5/6 mx-auto my-10 bg-white rounded-lg shadow-md p-5">
            <div className="member-img rounded-full mx-auto border-2">
              <img src={event_img} className="rounded-full" />
            </div>
            <h2 class="text-center text-lg font-semibold mt-3">
              Info Session- "Coreconfluence"
            </h2>
            <p class="text-center mt-1">Aug 24, 2023</p>
            <p class="text-center">
              <FaLocationDot className="inline text-lg mb-1" /> G.H. Raisoni College
              of Engineering - Nagpur
            </p>
          </div>
          <div class="member-card w-5/6 mx-auto my-10 bg-white rounded-lg shadow-md p-5">
            <div className="member-img rounded-full mx-auto border-2">
              <img src={webDSC} className="rounded-full" />
            </div>
            <h2 class="text-center text-lg font-semibold mt-3">
              Web with GDSC
            </h2>
            <p class="text-center mt-1">Jan 14, 2023</p>
            <p class="text-center">
              <FaLocationDot className="inline text-lg mb-1" /> G.H. Raisoni College
              of Engineering - Nagpur
            </p>
          </div>
        </div>
        <div className="text-center p-3">
          <a
            href="https://gdsc.community.dev/gh-raisoni-college-of-engineering-nagpur/"
            className="py-1 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 border-2 border-blue-500 sm:w-fit hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            More
          </a>
        </div>
      </div>

      <div className="bg"></div>
    </div>
  );
};

export default EventsPage;
