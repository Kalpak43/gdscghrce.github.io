import { FaLinkedin } from "react-icons/fa6";
import HarshImg from "../../Images/members/HarshChaudhari.png"
import RutujaImg from "../../Images/members/RutujaBalpande.webp"
import LaabhanshImg from "../../Images/members/LaabhanshJaiswal.png"
import ShreyashImg from "../../Images/members/ShreyashBhisekar.png"
import AadityaImg from "../../Images/members/AadityaKaranjekar.png"

export default function DesignTeam() {
  return (
    <div className="type-2">
      <h4 className="text-center font-bold text-2xl">Design Team</h4>
      <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img
                src={HarshImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Harsh Chaudhari
            </h2>
            <p class="text-center mt-1">Design Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/harshschaudhari/"
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
                src={RutujaImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Rutuja Balpande
            </h2>
            <p class="text-center mt-1">Design Co-Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/rutuja-balpande-381110250/"
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
                src={LaabhanshImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Laabhansh Jaiswal
            </h2>
            <p class="text-center mt-1">Volunteer</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/laabhansh-jaiswal-721506285/"
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
                src={ShreyashImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Shreyash Bhisekar
            </h2>
            <p class="text-center mt-1">Volunteer</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/shreyash-bhisekar-617b5926b/"
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
                src={AadityaImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Aaditya Karanjekar
            </h2>
            <p class="text-center mt-1">Volunteer</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/aaditya-karanjekar-38bb2520b/"
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
