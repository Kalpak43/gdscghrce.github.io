import { FaLinkedin } from "react-icons/fa6";

export default function MemberCard (props) {

    return (
        <div className="mcard">
        <div className="relative z-20">
          <div className="member-img rounded-full mx-auto border-2">
            <img src={props.img} className="rounded-full" alt={props.name + " " + props.position} />
          </div>
          <h2 className="text-center text-2xl font-semibold mt-3">
            {props.name}
          </h2>
          <p className="text-center mt-1">{props.position}</p>
          <div class="flex justify-center mt-2 mx-auto">
            <a
              href={props.link}
              class="text-blue-600 hover:text-blue-500 mx-3"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    )
}