import PhoneUI from "../../Images/PhoneUI.svg";
import TabUI from "../../Images/TabUI.png";
import PCUI from "../../Images/PCUI.svg";
import logo from "../../Images/gdsc_ghrce_logo_full.png";
import { FaCalendarCheck } from "react-icons/fa6";
import eventLogo from "../../Images/figmaLifestyleLogo.png";

export default function Hero() {
  return (
    <section className="event-hero" id="home">
      <div className="hero-l" data-aos="fade-up">
        <div className="hero-title flex flex-col items-center">
          <div className="gdsc">
            <span className="">
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
            </span>
            <h1 className="md:text-xl text-xl text-center">
              Google Developer Student Clubs
              <br />
              GHRCE
            </h1>
            <p>Presents</p>
          </div>
          <img src={eventLogo} className="md:h-32 h-28 m-1" />
          <p>on</p>
          <p className="flex items-center justify-center gap-2 font-bold">
            <FaCalendarCheck />
            21st October, 2023
          </p>
        </div>
        <a className="reg-btn font-bold" href="https://lu.ma/Figma_Lifestyle_with_GDSC_GHRCE">
          Register Now
        </a>
      </div>
      <div className="hero-img flex justify-center items-center">
        <div className="phone">
          <img src={PhoneUI} />
        </div>
        <div className="sub-img">
          <div className="pc">
            <img src={PCUI} />
          </div>
          <div className="pc">
            <img src={TabUI} />
          </div>
        </div>
      </div>
    </section>
  );
}
