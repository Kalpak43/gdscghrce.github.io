import { Helmet } from "react-helmet";
import Footer from "../../Components/Footer";
import "./SolutionChallenge.css";
import { useState } from "react";
import unGoals from "../../Images/un-goals.webp";
import top100 from "../../Images/top100.png";
import final10 from "../../Images/final10.png";
import top3 from "../../Images/top3.png";
import winners from "../../Images/winners-hero.webp";
import TimeCard from "../../Components/figmaEvent/TimeCard";

import { PiArrowFatLinesDown } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import axios from "axios";

export default function SolutionChallenge() {
  const [expanded, setExpanded] = useState(false);

  const setNavBtn = () => {
    const checkBox = document.getElementById("check");
    checkBox.checked = !expanded;
  };

  const [teamName, setTeamName] = useState("");
  const [teamData, setTeamData] = useState([]);

  const handleTeamName = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://script.google.com/macros/s/AKfycbxYep1MW0GBaMSk6rsl6tnwji5xdSsi3yhIfmb7CyWjqxDMMFIKdJXQGJdJsepNWgeM3g/exec?TeamName=${teamName}`
    );
    setTeamData([...data]);
    console.log(teamData);
  };

  return (
    <>
      <Helmet>
        <title>Google Solution Challenge 2024</title>
        <meta
          name="description"
          content="Figma Lifestyle with GDSC is a dynamic event that celebrates the fusion of design and technology. It's an opportunity for participants to explore the world of design, learn from industry experts, and collaborate with fellow enthusiasts. This event promises to be a day filled with creativity, innovation, and networking. Join us in making this event a memorable and enriching experience for all participants."
        />
      </Helmet>
      <div className="solution">
        <header className="nav sticky top-0">
          <span className="logo w-fit z-50 flex flex-col justify-center items-center">
            <a href="/">
              <svg
                className="h-16"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 192"
                width="150"
                height="150"
              >
                <defs></defs>
                <title>dsc_icon</title>
                <path
                  className="Logo_logoRedPart__QJGXu"
                  fill="currentColor"
                  d="M46.36,96.68,77,79A15.06,15.06,0,1,0,61.91,52.91L9,83.45Z"
                ></path>
                <path
                  className="Logo_logoBluePart__Gg0LP"
                  d="M69.43,142.11A15.07,15.07,0,0,0,77,114L24.07,83.45A15.06,15.06,0,0,0,9,109.54l52.9,30.54A15,15,0,0,0,69.43,142.11Z"
                ></path>
                <path
                  className="Logo_logoGreenPart__LnIju"
                  d="M122.05,142.11a15,15,0,0,0,7.52-2l52.9-30.54L145.59,96.05,114.5,114a15.07,15.07,0,0,0,7.55,28.12Z"
                ></path>
                <path
                  className="Logo_logoYellowPart__AVkWI"
                  d="M174.92,111.56a15.06,15.06,0,0,0,7.55-28.11l-52.9-30.54A15.06,15.06,0,0,0,114.5,79l52.9,30.54A15,15,0,0,0,174.92,111.56Z"
                ></path>
              </svg>
            </a>
            <small className="font-bold">GHRCE</small>
          </span>
          <nav className="navigation">
            <div className="pos navB" id="navB">
              <label htmlFor="check">
                <input
                  type="checkbox"
                  id="check"
                  onClick={() => {
                    setExpanded(!expanded);
                    setNavBtn();
                  }}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div
              className={
                expanded ? "navigation-menu expanded" : "navigation-menu"
              }
            >
              <ul>
                <li
                  onClick={() => {
                    setExpanded(!expanded);
                    setNavBtn();
                  }}
                >
                  <a href="#home">Home</a>
                </li>
                <li
                  onClick={() => {
                    setExpanded(!expanded);
                    setNavBtn();
                  }}
                >
                  <a href="#about">About</a>
                </li>
                <li
                  onClick={() => {
                    setExpanded(!expanded);
                    setNavBtn();
                  }}
                >
                  <a href="#timeline">Timeline</a>
                </li>
                <li
                  onClick={() => {
                    setExpanded(!expanded);
                    setNavBtn();
                  }}
                >
                  <a href="#how-to-participate">How to Participate?</a>
                </li>
              </ul>
              {/* <li
                onClick={() => {
                  setExpanded(!expanded);
                  setNavBtn();
                }}
              >
                <a href="#home">Home</a>
              </li>
              <li
                onClick={() => {
                  setExpanded(!expanded);
                  setNavBtn();
                }}
              >
                <a href="#about">About</a>
              </li>
              <li
                onClick={() => {
                  setExpanded(!expanded);
                  setNavBtn();
                }}
              >
                <a href="#speakers">Speakers</a>
              </li>
              <li
                onClick={() => {
                  setExpanded(!expanded);
                  setNavBtn();
                }}
              >
                <a href="#organizers">Organizers</a>
              </li>
              <li
                onClick={() => {
                  setExpanded(!expanded);
                  setNavBtn();
                }}
              >
                <a href="#schedule">Schedule</a>
              </li> */}
            </div>
          </nav>
        </header>
        <main className="">
          <section
            className="SC_home min-h-[80vh] grid grid-cols-2 place-content-center"
            id="home"
          >
            <div className="home-l flex flex-col justify-center">
              <h2 className="text-left">Google Solution Challenge 2024</h2>
              {/* <p>Google Solution Challenge is an open invitation for university students around the world to develop solutions for the pressing problems facing our world today.</p> */}
              <a className="btn w-fit">Register Now</a>
            </div>
            <div className="home-r flex flex-col justify-center">
              <img src={winners} className="w-full" />
            </div>
          </section>
          <section className="SC_about" id="about">
            <h3>About</h3>
            <br />
            <div className="grid grid-cols-2 place-content-center">
              <ul className="abt-l list-disc place-self-center">
                <li>
                  The mission of the Solution Challenge is to solve for one or
                  more of the United Nations' 17 Sustainable Development Goals
                  using Google technology. Since 2020, Google Developer Student
                  Clubs (GDSC) members from around the world come together to
                  create innovative solutions to tackle some of the world's most
                  pressing challenges.
                </li>
                <li>
                  In 2015, the United Nations created 17 Sustainable Development
                  Goals and aimed to achieve them by 2030. All 193 United
                  Nations Member States agreed on these 17 goals to end poverty,
                  ensure prosperity, and protect the planet.
                </li>
                <li>
                  The Solution Challenge is an open invitation for university
                  students around the world to develop solutions for the
                  pressing problems facing our world today.
                </li>
                <li>
                  You can check out the 17 Sustainable Development Goals from
                  the link below:
                  <br />
                  <a
                    className="btn"
                    href="https://developers.google.com/community/gdsc-solution-challenge/UN-goals"
                  >
                    17 SDG's
                  </a>
                </li>
              </ul>
              <div className="abt-r flex flex-col justify-center">
                <img src={unGoals} className="w-full" />
                <br />
              </div>
            </div>
          </section>
          <section className="SC_timeline" id="timeline">
            <h3>Timeline</h3>
            <div className="timeline">
              <TimeCard
                time={"1st Dec, 2023"}
                info={"Registration Starts"}
                key={"00"}
              />
              <TimeCard
                time={"28th Dec, 2023"}
                info={
                  "Info Session: Green Flag to Google Solution Challenge 2024 (Virtual Event)"
                }
                key={"01"}
              />
              <TimeCard
                time={"3rd-5th Jan, 2024"}
                info={"Flutter Flourish"}
                key={"02"}
              />
              <TimeCard
                time={"6th-8th Jan, 2024"}
                info={"Android Says Hi!"}
                key={"03"}
              />
              <TimeCard
                time={"11th-13th Jan, 2024"}
                info={"Web Dev Wonders"}
                key={"04"}
              />
              <TimeCard
                time={"15th-17th Jan, 2024"}
                info={"AI/ML Mastery"}
                key={"05"}
              />
              <TimeCard time={"18th Jan, 2024"} info={"Hackathon"} key={"06"} />
              <TimeCard
                time={"20th Jan, 2024"}
                info={"Registration Ends"}
                key={"07"}
              />
            </div>
          </section>
          <section className="SC_guide" id="how-to-participate">
            <h3>How to Participate?</h3>
            <br />
            <ol className="text-center">
              <li>
                To participate in Solutions Challenge, you should be a part of a
                part of a Google Developer Student Clubs community at your
                college/university. You can join GDSC GHRCE by following the
                link below- <br />
                <a
                  className="btn"
                  href="https://gdsc.community.dev/gh-raisoni-college-of-engineering-nagpur/"
                >
                  Join Us
                </a>
                <PiArrowFatLinesDown className="text-6xl mx-auto text-[var(--google-red)]" />
              </li>
              <li>
                Form a 1 to 4 person team, with at least one student who is a
                member of a Google Developer Student Club at the associated
                university, and ideally with a varied set of technical and soft
                skills. Also, all you need is to be interested, you do not have
                to have a team formed yet to register.
                <PiArrowFatLinesDown className="text-6xl mx-auto text-[var(--google-yellow)]" />
              </li>
              <li>
                Select a goal that aligns with personal interests and/or needs
                in your community that you would like to solve with technology.
                You can learn more about the SDG's from the link given below.
                <br />
                <a
                  className="btn"
                  href="https://developers.google.com/community/gdsc-solution-challenge/UN-goals"
                >
                  17 SDG's
                </a>
                <PiArrowFatLinesDown className="text-6xl mx-auto text-[var(--google-green)]" />
              </li>
              <li>
                Then, register for the Solution Challenge by completing the
                registration form linked below. Each individual from the team
                should complete a separate Registration Form. Also, all you need
                is to be interested, you do not have to have a team formed yet
                to register.
                <br />
                <a className="btn" href="https://rebrand.ly/noydh3d">
                  Register Here
                </a>
                <PiArrowFatLinesDown className="text-6xl mx-auto text-[var(--google-blue)]" />
              </li>
              <li>
                Regitration ends on 20th January, 2024. So, hurry up and
                register now!
                <PiArrowFatLinesDown className="text-6xl mx-auto text-[var(--google-red)]" />
              </li>
              <li>
                After Filling out the form, make sure to join our WhatsApp group
                for more updates on Solution Challenge.
                <br />
                <a className="btn WA" href="https://bitly.ws/34783">
                  <FaWhatsapp className="text-2xl" />
                </a>
              </li>
            </ol>
          </section>
          <section className="SC_more flex flex-col">
            <h3>Prizes</h3>
            <div className="prizes text-center my-12 flex justify-center gap-4 flex-wrap">
              <div className="prize-container border-2 w-[300px] p-4 py-10 rounded-lg relative border-[var(--google-green)]">
                <div className="absolute top-[-15%] left-[37%] mx-auto bg-[#d3e3fd] rounded-full p-2 border-2 border-[var(--google-green)]">
                  <img src={top100} />
                </div>
                <h4 className="text-xl font-bold my-4">Top 100</h4>
                <p>
                  Receive customized mentorship from Googlers and experts to
                  take solutions to the next level, a branded T-shirt, and a
                  Certificate.
                </p>
              </div>
              <div className="prize-container border-2 w-[300px] p-4 py-10 rounded-lg relative border-[var(--google-red)]">
                <div className="absolute top-[-15%] left-[37%] mx-auto bg-[#d3e3fd] rounded-full p-2 border-2 border-[var(--google-red)]">
                  <img src={final10} />
                </div>
                <h4 className="text-xl font-bold my-4">Final 10</h4>
                <p>
                  Receive additional mentorship, a swag box, and the opportunity
                  to show case solutions to Googlers and developers all around
                  the worlds at Demo Day live on Youtube.
                </p>
              </div>
              <div className="prize-container border-2 w-[300px] p-4 py-10 rounded-lg relative border-[var(--google-yellow)]">
                <div className="absolute top-[-15%] left-[37%] mx-auto bg-[#d3e3fd] rounded-full p-2 border-2 border-[var(--google-yellow)]">
                  <img src={top3} />
                </div>
                <h4 className="text-xl font-bold my-4">Top 3</h4>
                <p>
                  In addition to the swag boc, each individual from the Winning
                  3 teams receive a cash prize and a feature on the Google
                  Developers Blog.
                </p>
              </div>
            </div>
            <h4 className="text-xl font-bold text-center">
              Also, Check out some of the Frequently asked Questions:{" "}
            </h4>
            <a
              className="btn mx-auto"
              href="https://developers.google.com/community/gdsc-solution-challenge/faq"
            >
              FAQ's
            </a>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
