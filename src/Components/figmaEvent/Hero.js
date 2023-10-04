import PhoneUI from "../../Images/PhoneUI.svg";
import PCUI from "../../Images/PCUI.svg";
import logo from "../../Images/gdsc_ghrce_logo_full.png";
import { FaCalendarCheck } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="event-hero" id="home">
      <div className="hero-l" data-aos="fade-up">
        <div className="hero-title">
          <div className="gdsc">
            <span>
              <img src={logo} className="md:h-24 h-20 m-1" />
            </span>
            <p>Presents</p>
          </div>
          <h1>Figma Lifestyle</h1>
          <p>on</p>
          <p className="flex items-center justify-center gap-2"><FaCalendarCheck />21st October, 2023</p>
        </div>
        <a className="reg-btn" href="/">
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
            <img src={PCUI} />
          </div>
        </div>
      </div>
    </section>
  );
}
