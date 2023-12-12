// Purpose: Renders Technical Team section of the About Us page. This component is a child component of Teams.js and a grandchild component of About.js
import team from "../../constants/team";
import MemberCard from "../MemberCard";

export default function TechnicalTeam() {

  const technicalTeam = team[0].technical

  return (
    <div className="type-4">
      <h4 className="text-center font-bold text-2xl">Technical Team</h4>
      <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
        {
          technicalTeam.map(x => {
            return (
              <MemberCard img={x[0]} name={x[1]} position={x[2]} link={x[3]} />
            )
          })
        }
      </div>
    </div>
  );
}
