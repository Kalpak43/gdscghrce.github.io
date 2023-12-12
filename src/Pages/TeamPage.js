import { useState } from "react";

import ManagementTeam from "../Components/Teams/ManagementTeam";
import WebTeam from "../Components/Teams/WebTeam";
import AimlTeam from "../Components/Teams/AimlTeam";
import TechnicalTeam from "../Components/Teams/TechnicalTeam";
import FlutterTeam from "../Components/Teams/FlutterTeam";
import DesignTeam from "../Components/Teams/DesignTeam";
import DsaTeam from "../Components/Teams/DsaTeam";

import leadImg from "../Images/members/AmanTiwari.png";
import MemberCard from "../Components/MemberCard";

const TeamPage = () => {
  const teamsArr = [
    <ManagementTeam />,
    <WebTeam />,
    <AimlTeam />,
    <TechnicalTeam />,
    <FlutterTeam />,
    <DesignTeam />,
    <DsaTeam />,
  ];
  const [team, setTeam] = useState(0);

  return (
    <div className="TeamPage min-h-screen">
      <div className="sticky top-0 left-0 z-[-1]">
        <div className="team-header pt-40 text-center relative">
          <div className="overlay"></div>
          <h1 className="font-bold text-4xl relative z-10">Team 2023</h1>
        </div>
      </div>

      <div className="relative Background">
        <h4 className="text-center font-bold text-2xl py-4">Lead</h4>
        <div className=" flex justify-center py-4">
          {/* <div className="mcard">
            <div className="relative z-20">
              <div className="member-img rounded-full mx-auto border-2">
                <img src={leadImg} className="rounded-full" />
              </div>
              <h2 className="text-center text-2xl font-semibold mt-3">
                Aman Brijbhushan Tiwari
              </h2>
              <p className="text-center mt-1">Lead</p>
              <div class="flex justify-center mt-2 mx-auto">
                <a
                  href="https://www.linkedin.com/in/amantiwari2091/"
                  class="text-blue-600 hover:text-blue-500 mx-3"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div> */}
          <MemberCard img={leadImg} name={"Aman Tiwari"} position="Lead" link={"https://www.linkedin.com/in/amantiwari2091/"} />
        </div>

        <div className="flex justify-center flex-wrap gap-4 text-lg py-4">
          <small
            className="badges badges-1"
            data-key="0"
            onClick={() => setTeam(0)}
          >
            Management Team
          </small>
          <small
            className="badges badges-2"
            data-key="1"
            onClick={() => setTeam(1)}
          >
            Web Dev Team
          </small>
          <small
            className="badges badges-3"
            data-key="2"
            onClick={() => setTeam(2)}
          >
            AI/ML Team
          </small>
          <small
            className="badges badges-4"
            data-key="3"
            onClick={() => setTeam(3)}
          >
            Technical Team
          </small>
          <small
            className="badges badges-1"
            data-key="4"
            onClick={() => setTeam(4)}
          >
            Flutter Team
          </small>
          <small
            className="badges badges-2"
            data-key="5"
            onClick={() => setTeam(5)}
          >
            Design Team
          </small>
          <small
            className="badges badges-3"
            data-key="6"
            onClick={() => setTeam(6)}
          >
            DSA Team
          </small>
        </div>

        {teamsArr[team]}
      </div>
    </div>
  );
};

export default TeamPage;
