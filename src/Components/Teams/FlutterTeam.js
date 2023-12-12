// Purpose: Renders Flutter Team section of the About page. This component is a child component of Teams.js and a grandchild component of About.js
import team from "../../constants/team";
import MemberCard from "../MemberCard";

export default function FlutterTeam() {

  const flutterTeam = team[0].flutter

  return (
    <div className="type-1">
      <h4 className="text-center font-bold text-2xl">Flutter Team</h4>
      <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
        {
          flutterTeam.map(x => {
            return (
              <MemberCard img={x[0]} name={x[1]} position={x[2]} link={x[3]} />
            )
          })
        }
      </div>
    </div>
  );
}
