import { FaLinkedin } from "react-icons/fa6";
import AayushImg from "../../Images/members/AayushPaigwar.webp"
import ShreerangImg from "../../Images/members/ShreerangKolhe.webp"

export default function FlutterTeam() {
  return (
    <div className="type-1">
      <h4 className="text-center font-bold text-2xl">Flutter Team</h4>
      <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img
                src={AayushImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Aayush Paigwar
            </h2>
            <p class="text-center mt-1">Flutter Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/aayush-paigwar-457946225/"
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
                src={ShreerangImg}
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Shreerang Kolhe
            </h2>
            <p class="text-center mt-1">Flutter Co-Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/iamshreerang/"
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
