import event_img from "../Images/Upcoming_evens.jpg";
const UpEvent = () => {
  return (
    <div className="Events z-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className="lead-wave"
          fill="#256de0"
          fillOpacity="1"
          d="M0,96L20,106.7C40,117,80,139,120,170.7C160,203,200,245,240,234.7C280,224,320,160,360,138.7C400,117,440,139,480,133.3C520,128,560,96,600,80C640,64,680,64,720,90.7C760,117,800,171,840,197.3C880,224,920,224,960,208C1000,192,1040,160,1080,133.3C1120,107,1160,85,1200,90.7C1240,96,1280,128,1320,144C1360,160,1400,160,1420,160L1440,160L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
        ></path>
      </svg>
      <h1 className="text-4xl text-center font-extrabold mb-9" data-aos="fade-down">
        Events
      </h1>
      <h5 className="text-lg mt-0 mb-2 px-20 text-center" data-aos="fade-down">At GDSC, we organize a diverse range of events and activities to cater to the interests of our members. From workshops on cutting-edge technologies like machine learning, cloud computing, and mobile app development to hackathons that challenge your problem-solving abilities, we have something for everyone.</h5>
      <h4 className="text-center text-xl underline">Recent Events</h4>
      <div className="flex w-full justify-center items-center p-6" data-aos="fade-down">
        <a href="https://gdsc.community.dev/events/details/developer-student-clubs-gh-raisoni-college-of-engineering-nagpur-presents-coreconfluence-empowering-visions/">
        <img src={event_img} width={400} alt="event" />
        </a>
      </div>
      <p className="p-4 text-center" data-aos="fade-down">
        <a
          href="/events#past"
          className="py-1 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 border-2 border-blue-500 sm:w-fit hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Past Events
        </a>
      </p>
    </div>
  );
};

export default UpEvent;
