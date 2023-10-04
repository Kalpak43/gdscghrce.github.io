import { FaLinkedin } from "react-icons/fa6";
import leadImg from "../../Images/members/AmanTiwari.png";
import Speaker1 from "../../Images/speaker/AbhilashTelrandhe.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Speakers() {
  return (
    <section className="speakers" id="speakers">
      <div className="spkrs-l w-full h-full flex justify-center items-center" data-aos="fade-right">
          <div className="card">
            <img src={Speaker1} />
            <div className="card-info">
              <h4>Abhilash Telrandhe</h4>
              <p>Designer @Atcreations</p>
              <a href="/">Linkedin</a>
            </div>
          </div>
      </div>
      <div className="spkrs-r" data-aos="fade-left">
        <h2>Our Speaker</h2>
      </div>
    </section>
  );
}
