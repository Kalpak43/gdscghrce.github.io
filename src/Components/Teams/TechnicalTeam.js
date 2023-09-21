import { FaLinkedin } from "react-icons/fa6";
import KaustubhImg from "../../Images/members/KaustubhSaraf.webp"
import AyushImg from "../../Images/members/AyushChaware.webp"
import ShaileshImg from "../../Images/members/ShaileshThakur.webp"

export default function TechnicalTeam() {
  return (
    <div className="type-4">
      <h4 className="text-center font-bold text-2xl">Technical Team</h4>
      <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img
                src={KaustubhImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Kaustubh Saraf
            </h2>
            <p class="text-center mt-1">Technical Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/kaustubhsaraf/"
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
                src={AyushImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Ayush Chaware
            </h2>
            <p class="text-center mt-1">Technical Co-Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/ayush-sanjay-chaware-50888a222/"
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
                src={ShaileshImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Shailesh Thakur
            </h2>
            <p class="text-center mt-1">Technical Member</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/shailesh-kumar-thakur-991316205/"
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
