import logo from "../../Images/gdsc_ghrce_logo_full.png";
import persitent from "../../Images/persistent_systems_logo_full.png";

export default function About() {
  return (
    <section className="event-about" id="about">
      <div className="abt-l" data-aos="fade-right">
        <h2>What is Figma Lifestyle?</h2>
      </div>
      <div className="abt-r" data-aos="zoom-in">
        <p>
          Welcome to our exciting one-day Figma event! Join us for a day of
          creativity, collaboration, and learning as we dive deep into the world
          of Figma, the ultimate design and prototyping tool. Our passionate
          speaker will guide you through the ins and outs of Figma, sharing
          valuable insights, tips, and tricks that will empower you to create
          stunning designs and streamline your workflow. But it's not just about
          learning – we've got you covered with delicious lunches and awesome
          goodies to make your day even more enjoyable. Get ready to unlock your
          design potential, connect with fellow enthusiasts, and leave with the
          skills and inspiration to take your projects to the next level. Don't
          miss this opportunity to elevate your Figma game and be part of an
          incredible community of designers. Join us on 21st October for an
          informative and fun!
        </p>
        <br />
        <div className="about-venue">
          <h3>Venue: </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1706.4405658046637!2d79.04775179614921!3d21.12160686990272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c075d6bd4685%3A0xe4e9d4ac53bcd26e!2sPersistent%20Systems%20Limited!5e0!3m2!1sen!2sin!4v1696436269085!5m2!1sen!2sin"
            width="200"
            height="200"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <br />
        {/* <div className="flex flex-col items-center">
          <h3>Organized By</h3>
          <img src={logo} className="h-20 m-1" />
        </div>
        <div className="flex flex-col items-center">
          <h3>Venue Partner</h3>
          <img src={persitent} className="h-20 m-1" />
        </div> */}
      </div>
      <div className="abt-r"></div>
    </section>
  );
}
