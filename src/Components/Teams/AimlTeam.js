import { FaLinkedin } from "react-icons/fa6";
import aditiImg from "../../Images/members/AditiFadnavis.jpg"
import amanImg from "../../Images/members/AmanKhapre.png"
import prathamImg from "../../Images/members/PrathamChaudhary.png"
import lavishImg from "../../Images/members/LavishHarinkhede.png"

export default function AimlTeam() {
  return (
    <div className="type-3">
      <h4 className="text-center font-bold text-2xl">AI/ML Team</h4>
      <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img
                src={aditiImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Aditi Fadanvis
            </h2>
            <p class="text-center mt-1">AI ML Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/aditifadnavis16/"
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
                src={amanImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">Aman Khapre</h2>
            <p class="text-center mt-1">AI ML Co-Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/aman-khapre-8b34a1256/"
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
                src={prathamImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Pratham Choudhary
            </h2>
            <p class="text-center mt-1">Data Preprocessing</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/pratham-choudhary/"
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
                src={lavishImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Lavish Harinkhede
            </h2>
            <p class="text-center mt-1">Image Processing</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/lavish-harinkhede/"
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
