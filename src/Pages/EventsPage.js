import event_img from "../Images/Upcoming_evens.jpg";
import gdsj from "../Images/GCSJ_logo.webp";
import webDSC from "../Images/WebwithDSC.webp";
import { FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

const EventsPage = () => {

  const eventsArr = [
    <div className="">
      <h1 className="text-4xl text-center font-bold">Upcoming / Ongoing Events</h1>
      <div className="my-8 flex justify-center gap-16 py-4 flex-wrap">
          <div className="mcard">
            <div class="">
              <div className="member-img rounded-full mx-auto border-2">
                <img src={gdsj} className="" />
              </div>
              <h2 class="text-center text-lg font-semibold mt-3">
                Google Cloud Study Jam
              </h2>
              <p class="text-center mt-1">Ongoing</p>
              <p class="text-center">
                <FaLocationDot className="inline text-lg mb-1" /> G.H. Raisoni
                College of Engineering - Nagpur
              </p>
            </div>
          </div>

        </div>
    </div>,
    <div className="past-events">
      <h1 className="text-4xl text-center font-bold">Past Events</h1>
      <div className="my-8 flex justify-center gap-16 py-4 flex-wrap">
          <div className="mcard">
            <div class="">
              <div className="member-img rounded-full mx-auto border-2">
                <img src={gdsj} className="" />
              </div>
              <h2 class="text-center text-lg font-semibold mt-3">
                Info Session- "Google Cloud Study Jam"
              </h2>
              <p class="text-center mt-1">Aug 31, 2023</p>
              <p class="text-center">
                <FaLocationDot className="inline text-lg mb-1" /> G.H. Raisoni
                College of Engineering - Nagpur
              </p>
            </div>
          </div>
          <div className="mcard">
            <div class="">
              <div className="member-img rounded-full mx-auto border-2">
                <img src={event_img} className="" />
              </div>
              <h2 class="text-center text-lg font-semibold mt-3">
                Info Session- "Coreconfluence"
              </h2>
              <p class="text-center mt-1">Aug 24, 2023</p>
              <p class="text-center">
                <FaLocationDot className="inline text-lg mb-1" /> G.H. Raisoni
                College of Engineering - Nagpur
              </p>
            </div>
          </div>
          <div className="mcard">
            <div class="">
              <div className="member-img rounded-full mx-auto border-2">
                <img src={webDSC} className="" />
              </div>
              <h2 class="text-center text-lg font-semibold mt-3">
                Web with GDSC
              </h2>
              <p class="text-center mt-1">Jan 14, 2023</p>
              <p class="text-center">
                <FaLocationDot className="inline text-lg mb-1" /> G.H. Raisoni
                College of Engineering - Nagpur
              </p>
            </div>
          </div>
        </div>
    </div>
  ]
  const [event, setEvent] = useState(0)

  return (
    <div className="EventsPage min-h-screen">
      <div className="sticky top-0 left-0 z-[-1]">
        <div className="team-header pt-40 text-center relative">
          <div className="overlay"></div>
          <h1 className="font-bold text-4xl relative z-10">Events</h1>
        </div>
      </div>
      <div className="bg-white" id="past">
        <div className="flex justify-center flex-wrap gap-4 text-lg py-4">
          <small
            className="badges badges-1"
            data-key="0"
            onClick={() => setEvent(0)}
          >
            Upcoming/ Ongoing Events
          </small>
          <small
            className="badges badges-2"
            data-key="1"
            onClick={() => setEvent(1)}
          >
            Past Events
          </small>

        </div>
        
        {/* <div className="my-8 flex justify-center gap-16 py-4 flex-wrap">
          <div class="">
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
          <div class="">
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
          <div class="">
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
        </div> */}

        {eventsArr[event]}

        <div className="text-center p-3">
          <a
            href="https://gdsc.community.dev/gh-raisoni-college-of-engineering-nagpur/"
            className="about-btn"
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
