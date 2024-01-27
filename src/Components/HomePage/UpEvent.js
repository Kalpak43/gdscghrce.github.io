import { useEffect, useState } from "react";
import img1 from "../../Images/event/event1.jpeg";
import img2 from "../../Images/event/WhatsApp Image 2023-08-27 at 6.11.51 PM (1).jpeg";
import img3 from "../../Images/event/event2.jpg";
import img4 from "../../Images/event/event3.jpeg";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import dummmy from "../../Images/dummy.jpg";

const UpEvent = () => {
  const imgArr = [img1, img2, img3, img4];

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
            <img src={dummmy} alt="" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UpEvent;
