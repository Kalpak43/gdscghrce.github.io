import { FaLinkedin } from "react-icons/fa6";
import leadImg from "../../Images/members/AmanTiwari.png";
import Speaker1 from "../../Images/speaker/AbhilashTelrandhe.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Speakers() {
  return (
    <section className="speakers" id="speakers">
      <div
        className="spkrs-l w-full h-full flex justify-center items-center"
        data-aos="fade-right"
      >
        <div className="card">
          {/* <span class="pro">PRO</span> */}
          <img
            className="round h-32"
            src={Speaker1}
            alt="user"
          />
          <h3>Abhilash Telrandhe</h3>
          {/* <h6>New York</h6> */}
          <p>
            Graphic Designer <br /> @Atcreations
          </p>
          <div className="buttons">
            <a href="https://www.instagram.com/at_creations10/?hl=en" className="primary" target="__blank">Instagram</a>
          </div>
          {/* <div class="skills">
            <h6>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="spkrs-r" data-aos="fade-left">
        <h2>Our Speaker</h2>
      </div>
    </section>
  );
}
