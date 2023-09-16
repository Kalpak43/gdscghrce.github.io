import { FaLinkedin } from "react-icons/fa6";
import leadImg from "../Images/AmanTiwari.png";
import members from "../members";
import { Tabs, Tab } from "../Components/Tabs";
import { useState } from "react";
import Nabg from "../Components/NAbg";

const TeamPage = () => {

  const teamsArr = [
    <div className="type-1">
        <h4 className="text-center font-bold text-2xl">Management Team</h4>
        <div className="flex justify-center gap-16 py-4 flex-wrap">
          <div className="mcard">
            <div className="relative z-20">
              <div className="member-img rounded-full mx-auto border-2">
                <img
                  src="https://drive.google.com/uc?export=view&id=1gheIRImpEPSEJ92qrBg4gLs5-G-B4_hc"
                  className="rounded-full"
                />
              </div>
              <h2 class="text-center text-2xl font-semibold mt-3">
                Payal Pande
              </h2>
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
                  src="https://drive.google.com/uc?export=view&id=1_xOSSJogEsaXUtph_OMqsen9B-5tEaBX"
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
                  src="https://drive.google.com/uc?export=view&id=13o0QCU5jMfNB4bHVJNs0Cdr3u06-HoRI"
                  className="rounded-full"
                />
              </div>
              <h2 class="text-center text-2xl font-semibold mt-3">
                Aryan Kulat
              </h2>
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
                  src="https://drive.google.com/uc?export=view&id=1nlRA46WixRyiG2Ek_opvLA_jSsFN9Xg-"
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
                  src="https://drive.google.com/uc?export=view&id=11TY9Uf0yp1TxbL6wkwVidFEJd826XEyh"
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
    </div>,
    <div className="type-2">
              <h4 className="text-center font-bold text-2xl">Web Dev Team</h4>
        <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
          <div className="mcard">
            <div className="">
              <div className="member-img rounded-full mx-auto border-2">
                <img
                  src="https://drive.google.com/uc?export=view&id=1dp2usG726eS_lE4qjgU29ffAHMKKjKIN"
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
                  src="https://drive.google.com/uc?export=view&id=11UhAfZacD8GmxXTuEN9SEIeR3y1BsiNC"
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
                  src="https://drive.google.com/uc?export=view&id=11e1CQ3pi0Bx6ZQeXGslxCWKowm2nn5Uv"
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
    </div>,
    <div className="type-3">
              <h4 className="text-center font-bold text-2xl">AI/ML Team</h4>
        <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
          <div className="mcard">
            <div className="">
              <div className="member-img rounded-full mx-auto border-2">
                <img
                  src="https://drive.google.com/uc?export=view&id=17LHiuiz8ROkgxvsf4ozAkqgVnN9CmK91"
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
                  src="https://drive.google.com/uc?export=view&id=11hUOUm7gOOqyQwuw8doRRd7F-QffupxS"
                  className="rounded-full"
                />
              </div>
              <h2 class="text-center text-2xl font-semibold mt-3">
                Aman Khapre
              </h2>
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
                  src="https://drive.google.com/uc?export=view&id=11i1xpFAIhrHxM994pHiWTMl1GAARehP9"
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
                  src="https://drive.google.com/uc?export=view&id=11iQMHcOAAVOodcqA5MscbW0fZrK2uN5X"
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
    </div>,
    <div className="type-4">
              <h4 className="text-center font-bold text-2xl">Technical Team</h4>
        <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
          <div className="mcard">
            <div className="">
              <div className="member-img rounded-full mx-auto border-2">
                <img
                  src="https://drive.google.com/uc?export=view&id=1XDLYFK_EGTZpg2KRemg0OyJ0SdWcmhfj"
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
                  src="https://drive.google.com/uc?export=view&id=1nlPwZI7jLhA4RlIa8m194G6Dg8NGAPNH"
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
                  src="https://drive.google.com/uc?export=view&id=1JEzBNIj88e5DhMa7TBMI-1Mslli46DBu"
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
    </div>,
    <div className="type-1">
              <h4 className="text-center font-bold text-2xl">Flutter Team</h4>
        <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
          <div className="mcard">
            <div className="">
              <div className="member-img rounded-full mx-auto border-2">
                <img
                  src="https://drive.google.com/uc?export=view&id=1VwsrGoNRH-NB0jXvGXIjgmpSJq3LqKwH"
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
                  src="https://drive.google.com/uc?export=view&id=1bE7tjqt5b1BrGndwF9HF62WPUMDM68NZ"
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
    </div>,
    <div className="type-2">
              <h4 className="text-center font-bold text-2xl">Design Team</h4>
        <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
          <div className="mcard">
            <div className="">
              <div className="member-img rounded-full mx-auto border-2">
                <img
                  src="https://drive.google.com/uc?export=view&id=1FQq2QpTihxEAI8HlYKeDbnTdSDP8FTw_"
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
                  src="https://drive.google.com/uc?export=view&id=1EW9h6hdh1Aah5B6ucNfxdEUq9tNREPfK"
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
                  src="https://drive.google.com/uc?export=view&id=11n4aR7rtj7eW6pWUnvYMNLu3MQffamlv"
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
                  src="https://drive.google.com/uc?export=view&id=11oC9wfNaaz86cqA9c8avU2ETvIk6u2aB"
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
                  src="https://drive.google.com/uc?export=view&id=11qucXtwqA2p4f1cB7K2sUkTMwG3tvKfb"
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
    </div>,
    <div className="type-3">
              <h4 className="text-center font-bold text-2xl">DSA Team</h4>
        <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
          <div className="mcard">
            <div className="">
              <div className="member-img rounded-full mx-auto border-2">
                <img
                  src="https://drive.google.com/uc?export=view&id=1y8j7kTAfSsB2Bw5U94YzSL0Lm-C7M86j"
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
                  src="https://drive.google.com/uc?export=view&id=124rSkjB9g-c-xaoNa4AWWSC7cwYCBB3k"
                  className="rounded-full"
                />
              </div>
              <h2 class="text-center text-2xl font-semibold mt-3">
                Kartik Gile
              </h2>
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
  ]
  const [team, setTeam] = useState(0)

  return (
    <div className="Team min-h-screen">
      <div className="sticky top-0 left-0 z-[-1]">
      <div className="team-header pt-40 text-center relative">
        <div className="overlay"></div>
        <h1 className="font-bold text-4xl relative z-10">Team 2023</h1>
      </div>
      </div>

      <div className="relative bg-white" >
        <h4 className="text-center font-bold text-2xl py-4">Lead</h4>
        <div className=" flex justify-center py-4">
          <div className="mcard">
            <div className="relative z-20">
              <div className="member-img rounded-full mx-auto border-2">
                <img src={leadImg} className="rounded-full" />
              </div>
              <h2 className="text-center text-2xl font-semibold mt-3">
                Aman Brijbhushan Tiwari
              </h2>
              <p className="text-center mt-1">Lead</p>
              <div className="flex justify-center mt-2">
                <a
                  href="https://www.linkedin.com/in/amantiwari2091/"
                  className="text-blue-600 hover:text-blue-500 mx-3"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-4 text-lg py-4">
          <small className="badges badges-1" data-key="0" onClick={() => setTeam(0)}>Management Team</small>
          <small className="badges badges-2" data-key="1" onClick={() => setTeam(1)}>Web Dev Team</small>
          <small className="badges badges-3" data-key="2" onClick={() => setTeam(2)}>AI/ML Team</small>
          <small className="badges badges-4" data-key="3" onClick={() => setTeam(3)}>Technical Team</small>
          <small className="badges badges-1" data-key="4" onClick={() => setTeam(4)}>Flutter Team</small>
          <small className="badges badges-2" data-key="5" onClick={() => setTeam(5)}>Design Team</small>
          <small className="badges badges-3" data-key="6" onClick={() => setTeam(6)}>DSA Team</small>
        </div>

        {teamsArr[team]}

      </div>
    </div>
  );
};

export default TeamPage;
