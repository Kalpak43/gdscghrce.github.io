import { FaLinkedin } from "react-icons/fa6";
import LokeshImg from "../../Images/members/LokeshVazirani.webp"
import KartikImg from "../../Images/members/KartikGile.png"

export default function DsaTeam() {
  return (
    <div className="type-3">
      <h4 className="text-center font-bold text-2xl">DSA Team</h4>
      <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img
                src={LokeshImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Lokesh Vazirani
            </h2>
            <p class="text-center mt-1">DSA Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/lokesh-vazirani/"
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
                src={KartikImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">Kartik Gile</h2>
            <p class="text-center mt-1">DSA Co-Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/kartik-gile-05b944253/"
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
