import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import dummmy from "../../Images/dummy.jpg";
import img1 from "../../Images/figma-lifestyle/img-2.jpeg";
import img2 from "../../Images/figma-lifestyle/img-9.jpeg";
import img3 from "../../Images/event/event2.jpg";
import img4 from "../../Images/event/WhatsApp Image 2023-08-27 at 6.11.51 PM.jpeg";

const UpEvent = () => {

  return (
    <section className="Events">
      <h2 data-aos="zoom-in">Events</h2>
      <div className="sec-grid">
        <div className="grid-l">
          <p>
            From workshops on cutting-edge technologies like machine learning,
            cloud computing, and mobile app development to hackathons that
            challenge your problem-solving abilities, we have something for
            everyone.
          </p>
          <Link to="/events" className="btn">
            More
          </Link>
        </div>
        <div
          className="grid-r grid-img"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={4000}
          >
            <img src={img1} alt="figma lifestyle-1" />
            <img src={img2} alt="figma lifestyle-2" />
            <img src={img3} alt="coreconfluence-1" />
            <img src={img4} alt="coreconfluence-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UpEvent;
