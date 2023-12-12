// Desc: This is the AimlTeam page. It is a child component of Teams.js and a grandchild component of About.js
import team from "../../constants/team";
import MemberCard from "../MemberCard";

export default function AimlTeam() {

  const aimlTeam = team[0].aiml

  return (
    <div className="type-3">
      <h4 className="text-center font-bold text-2xl">AI/ML Team</h4>
      <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
        {
          aimlTeam.map(x => {
            return (
              <MemberCard img={x[0]} name={x[1]} position={x[2]} link={x[3]} />
            )
          })
        }
      </div>
    </div>
  );
}
