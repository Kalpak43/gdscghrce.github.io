// Purpose: Renders DSA Team section of About page. This component is a child component of Teams.js and a grandchild component of About.js
import team from "../../constants/team";
import MemberCard from "../MemberCard";

export default function DsaTeam() {

  const dsaTeam = team[0].dsa

  return (
    <div className="type-3">
      <h4 className="text-center font-bold text-2xl">DSA Team</h4>
      <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
        {
          dsaTeam.map(x => {
            return (
              <MemberCard img={x[0]} name={x[1]} position={x[2]} link={x[3]} />
            )
          })
        }
      </div>
    </div>
  );
}
