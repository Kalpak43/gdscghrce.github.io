import { useEffect, useState } from "react";
import event_img from "../Images/Upcoming_evens.jpg";
import img1 from "../Images/event/event1.jpeg";
import img2 from "../Images/event/WhatsApp Image 2023-08-27 at 6.11.51 PM (1).jpeg";
import img3 from "../Images/event/event2.jpg";
import img4 from "../Images/event/event3.jpeg";

const UpEvent = () => {
  const imgArr = [img1, img2, img3, img4];

  return (
    <div className="Events z-10 min-h-[80vh] py-4">
      <div className="md:px-52 px-5 py-4 text-center">
        <h1
          className="text-4xl text-center font-bold mb-9"
          data-aos="fade-down"
        >
          Events
        </h1>
        <div className="flex md:flex-row flex-col justify-center items-center w-full gap-16">
          <div className="md:order-2 border-2 md:w-[160%] w-full h-[300px] rounded-sm">
            <div className="carousel w-full h-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full object-center" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="/#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="/#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="/#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="/#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="/#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="/#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="/#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="/#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ul className="md:order-1" data-aos="fade-in">
            <li>
              From workshops on cutting-edge technologies like machine learning,
              cloud computing, and mobile app development to hackathons that
              challenge your problem-solving abilities, we have something for
              everyone.
            </li>
            <br />
            <a className="about-btn" href="/events">
              Past Events
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UpEvent;
