import { FaLinkedin } from "react-icons/fa6";
import leadImg from "../Images/AmanTiwari.png";

const TeamPage = () => {
  return (
    <div className="Team min-h-screen">
      <h1 className="text-4xl text-center font-bold">Our Team</h1>
      <div className="md:grid grid-cols-3 place-items-center flex justify-center md:px-20 w-full">
        <div class="member-card col-start-2 w-5/6 mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <div className="member-img rounded-full mx-auto border-2">
            <img src={leadImg} className="rounded-full"/>
        </div>
          <h2 class="text-center text-2xl font-semibold mt-3">Aman Brijbhushan Tiwari</h2>
          <p class="text-center mt-1">Lead</p>
          <div class="flex justify-center mt-2">
            <a href="https://www.linkedin.com/in/amantiwari2091/" class="text-blue-600 hover:text-blue-500 mx-3">
              <FaLinkedin className="text-xl"/>
            </a>
          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-3 place-items-center flex justify-center md:px-20 w-full">
        <div class="member-card col-start-2 w-5/6 mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <div className="member-img rounded-full mx-auto border-2">
            <img src={leadImg} className="rounded-full"/>
        </div>
          <h2 class="text-center text-2xl font-semibold mt-3">Aman Brijbhushan Tiwari</h2>
          <p class="text-center mt-1">Lead</p>
          <div class="flex justify-center mt-2">
            <a href="https://www.linkedin.com/in/amantiwari2091/" class="text-blue-600 hover:text-blue-500 mx-3">
              <FaLinkedin className="text-xl"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
