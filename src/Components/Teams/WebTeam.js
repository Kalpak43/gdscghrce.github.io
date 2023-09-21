import { FaLinkedin } from "react-icons/fa6";
import KalpakImg from "../../Images/members/KalpakGoshikwar.webp"
import RohitImg from "../../Images/members/RohitPandilwar.png"
import SwarnimImg from "../../Images/members/SwarnimChandve.png"


export default function WebTeam() {
  return (
    <div className="type-2">
      <h4 className="text-center font-bold text-2xl">Web Dev Team</h4>
      <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img
                src={KalpakImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Kalpak Goshikwar
            </h2>
            <p class="text-center mt-1">Web Dev Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/kalpakgoshikwar/"
                class="text-blue-600 hover:text-blue-500 mx-3"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img
                src={RohitImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Rohit Pandilwar
            </h2>
            <p class="text-center mt-1">Web Dev Co-Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/rohit2605/"
                class="text-blue-600 hover:text-blue-500 mx-3"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img
                src={SwarnimImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Swarnim Chandve
            </h2>
            <p class="text-center mt-1">Web Dev Volunteer</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/rohit2605/"
                class="text-blue-600 hover:text-blue-500 mx-3"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
