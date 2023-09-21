import { FaLinkedin } from "react-icons/fa6";
import PayalImg from "../../Images/members/PayalPande.webp"
import DivyamImg from "../../Images/members/DivyamTembhare.jpg"
import AryanImg from "../../Images/members/AryanKulat.webp"
import SumedhaImg from "../../Images/members/SumedhaTambulkar.png"
import KrutikaImg from "../../Images/members/KrutikaNavghare.png"

export default function ManagementTeam() {
  return (
    <div className="type-1">
      <h4 className="text-center font-bold text-2xl">Management Team</h4>
      <div className="flex justify-center gap-16 py-4 flex-wrap">
        <div className="mcard">
          <div className="relative z-20">
            <div className="member-img rounded-full mx-auto border-2">
              <img
                src={PayalImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">Payal Pande</h2>
            <p class="text-center mt-1">Management Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/payal-pande-29109a250/"
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
                src={DivyamImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Divyam Tembhare
            </h2>
            <p class="text-center mt-1">Management Co-Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/divyam-tembhare-993124252/"
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
                src={AryanImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">Aryan Kulat</h2>
            <p class="text-center mt-1">Public Relations Head</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/aryan-kulat-a3961b234/"
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
                src={SumedhaImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Sumedha Tambulkar
            </h2>
            <p class="text-center mt-1">Management Volunteer</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/sumedha-tambulkar-22562a229/"
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
                src={KrutikaImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Krutika Navghare
            </h2>
            <p class="text-center mt-1">Management Volunteer</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/sumedha-tambulkar-22562a229/"
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
