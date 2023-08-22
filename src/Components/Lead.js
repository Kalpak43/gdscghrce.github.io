import { FaLinkedin } from "react-icons/fa6";

const Lead = () => {
  return (
    <div className="Lead" data-aos="fade-down">
      <span className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="hero-wave h-20"
            fill="#a8190c"
            fill-opacity="1"
            d="M0,192L34.3,208C68.6,224,137,256,206,234.7C274.3,213,343,139,411,101.3C480,64,549,64,617,101.3C685.7,139,754,213,823,224C891.4,235,960,181,1029,144C1097.1,107,1166,85,1234,112C1302.9,139,1371,213,1406,250.7L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </span>
      <h1 className="text-3xl text-center font-bold mb-9">Our Chapter Lead</h1>
      <div className="md:grid md:grid-cols-2 justify-items-center flex items-center justify-evenly flex-wrap">
        <div className="lead-img">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
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
            <a href="/team" className="border-2 border-green-700 w-fit px-2 rounded-sm text-xl hover:bg-green-700 md:m-0 m-auto">Our Team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lead;
