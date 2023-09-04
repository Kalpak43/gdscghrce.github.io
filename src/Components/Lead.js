import { FaLinkedin } from "react-icons/fa6";
import leadImg from "../Images/AmanTiwari.png"

const Lead = () => {
  return (
    <div className="Lead z-20">
      <span className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="about-wave h-20"
            fill="#a8190c"
            fillOpacity="1"
            d="M0,192L34.3,208C68.6,224,137,256,206,234.7C274.3,213,343,139,411,101.3C480,64,549,64,617,101.3C685.7,139,754,213,823,224C891.4,235,960,181,1029,144C1097.1,107,1166,85,1234,112C1302.9,139,1371,213,1406,250.7L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </span>
      <h1 className="text-4xl text-center font-extrabold mb-9" data-aos="fade-down">Our Chapter Lead</h1>
      <div className="md:grid md:grid-cols-2 justify-items-center flex items-center justify-evenly flex-wrap" data-aos="fade-down">
        <div className="lead-img">
          <img
            src={leadImg}
            alt="Aman Brijbhushan Tiwari"
          />
        </div>
        <div className="lead-info text-2xl justify-self-start">
          <p className="font-bold">Aman Brijbhushan Tiwari</p>
          <p>Chapter Lead 2023</p>
          <p>
            <a
              href="https://www.linkedin.com/in/amantiwari2091/"
              className=""
            >
              <FaLinkedin className="md:m-0 m-auto" />
            </a>
          </p>
          <p className="my-2">
            <a href="/team" className="py-1 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 border-2 border-yellow-500 sm:w-fit hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Our Team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lead;
