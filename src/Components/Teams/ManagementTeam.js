// Purpose: Renders ManagementTeam component. This component is a child component of Teams.js and is a grandchild component of About.js
import team from "../../constants/team"
import MemberCard from "../MemberCard";


export default function ManagementTeam() {

  const managementTeam = team[0].management

  return (
    <div className="type-1">
      <h4 className="text-center font-bold text-2xl">Management Team</h4>
      <div className="flex justify-center gap-16 py-4 flex-wrap">

        {managementTeam.map(x => {
          return (
            <MemberCard img={x[0]} name={x[1]} position={x[2]} link={x[3]} />
          )
        })}
      </div>
    </div>
  );
}
