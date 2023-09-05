import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import leadImg from "../Images/AmanTiwari.png";
import { FaLinkedin } from "react-icons/fa6";

const Team = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["36%", "-133%"]);

  return (
    <div className="team" id="team">
      <span className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="about-wave h-20"
            fill="#a8190c"
            fillOpacity="1"
            d="M0,192L34.3,208C68.6,224,137,256,206,234.7C274.3,213,343,139,411,101.3C480,64,549,64,617,101.3C685.7,139,754,213,823,224C891.4,235,960,181,1029,144C1097.1,107,1166,85,1234,112C1302.9,139,1371,213,1406,250.7L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </span>
      <div className="relative h-[1000vh]">
        <h1
          className="text-9xl text-center my-9"
          data-aos="fade-down"
        >
          Our Team
        </h1>
        <div className="sticky top-[10%] h-[90vh] flex items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-4 h-full items-center text-center"
          >
            <div className="lead flex gap-4 h-full min-w-[100vw] justify-center items-center relative mx-16">
              <div className="card">
                <div className="member-img rounded-full mx-auto border-2">
                  <img src={leadImg} className="rounded-full" />
                </div>
                <h2 class="text-center text-2xl font-semibold mt-3">
                  Aman Brijbhushan Tiwari
                </h2>
                <p class="text-center mt-1">Lead</p>
                <div class="flex justify-center mt-2">
                  <a
                    href="https://www.linkedin.com/in/amantiwari2091/"
                    class="text-blue-600 hover:text-blue-500 mx-3"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
              <div className="team-bg">LEAD</div>
            </div>

            <div className="management-team flex gap-32 justify-center h-full min-w-[100vw] w-fit items-center relative mx-32">
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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
              <div className="team-bg">Management Team</div>
            </div>

            <div className="web-team flex gap-32 justify-center h-full min-w-[100vw] w-fit items-center relative mx-32">
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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

              <div className="team-bg">Web Dev Team</div>
            </div>

            <div className="aiml-team flex gap-32 justify-center h-full min-w-[100vw] w-fit items-center relative mx-32">
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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
              <div className="team-bg">AI/Ml Team</div>
            </div>

            <div className="technical-team flex gap-32 justify-center h-full min-w-[100vw] w-fit items-center relative mx-32">
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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
              <div className="team-bg">technical Team</div>
            </div>

            <div className="flutter-team flex gap-32 justify-center h-full min-w-[100vw] w-fit items-center relative mx-32">
              <div className="card">
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
              <div className="card">
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
              <div className="team-bg">Flutter Team</div>
            </div>

            <div className="design-team flex gap-32 justify-center h-full min-w-[100vw] w-fit items-center relative mx-32">
              <div className="card">
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
              <div className="card">
                <div className="member-img rounded-full mx-auto border-2">
                  <img
                    src="https://drive.google.com/uc?export=view&id=1EW9h6hdh1Aah5B6ucNfxdEUq9tNREPfK"
                    className="rounded-full"
                  />
                </div>
                <h2 class="text-center text-2xl font-semibold mt-3">
                  Rutuja Balpande
                </h2>
                <p class="text-center mt-1">Design Lead</p>
                <div class="flex justify-center mt-2">
                  <a
                    href="https://www.linkedin.com/in/rutuja-balpande-381110250/"
                    class="text-blue-600 hover:text-blue-500 mx-3"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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
              <div className="team-bg">design Team</div>
            </div>

            <div className="dsa-team flex gap-32 justify-center h-full min-w-[100vw] w-fit items-center relative mx-32">
              <div className="card">
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
              <div className="card">
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
              <div className="team-bg">DSA Team</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
