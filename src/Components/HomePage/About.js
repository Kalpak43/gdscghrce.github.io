import { Link } from "react-router-dom";
import dummmy from "../../Images/dummy.jpg";

const About = () => {
  return (
    <section className="About" id="about">
      <h2 data-aos="zoom-in">About Us</h2>
      <div className="sec-grid">
        <div className="grid-l">
          <p>
            GDSC GHRCE is a community of students passionate about technology
            and development. It is a student-led initiative supported by Google
            Developers, aimed at providing a platform for students to learn,
            collaborate, and build projects using various Google technologies.
            From workshops on cutting-edge technologies like machine learning,
            cloud computing, and mobile app development to hackathons that
            challenge your problem-solving abilities, we have something for
            everyone.
          </p>
          <Link to="/about" className="btn">More</Link>
        </div>
        <div className="grid-r grid-img" data-aos="fade-in" data-aos-delay="200">
          <img src={dummmy} alt="community" />
        </div>
      </div>
    </section>
  );
};

export default About;
