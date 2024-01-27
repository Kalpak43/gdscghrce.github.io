import { Link } from "react-router-dom";
import teamImg from "../../Images/Career-Hero001.svg";

const Team = () => {
  return (
    <section className="team" id="team">
      <h2 data-aos="zoom-in">Our Team</h2>
      <div className="sec-grid">
        <div className="grid-l grid-img" data-aos="fade-in" data-aos-delay="200">
          <img src={teamImg} alt="team-sketch-svg" />
        </div>

        <div className="grid-r">
          <p>
            We are thrilled to introduce you to the incredible individuals who
            make up our vibrant community. Get to know the talented individuals.
            Discover their expertise, passion, and dedication that make our team
            truly exceptional.
          </p>
          <Link to="/team" className="btn">Meet the team</Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
