
export default function About() {
  return (
    <section className="event-about" id="about">
      <div className="abt-l" data-aos="fade-right">
        <h2>What is Figma Lifestyle?</h2>
      </div>
      <div className="abt-r" data-aos="zoom-in">
        <ul className="list-disc pl-2">
          <li>
            Figma Lifestyle with GDSC is a dynamic event that celebrates the
            fusion of design and technology. It's an opportunity for
            participants to explore the world of design, learn from industry
            experts, and collaborate with fellow enthusiasts. This event
            promises to be a day filled with creativity, innovation, and
            networking. Join us in making this event a memorable and enriching
            experience for all participants.
          </li>
          <li>
            This event promises to be a day filled with creativity, innovation,
            and networking. Join us in making this event a memorable and
            enriching experience for all participants.
          </li>
          <li className="list-none">
            🛍️ Attendees receive swags and goodies
          </li>
          <li className="list-none">
            🍳 Enjoy delicious breakfast and lunch
          </li>
          <li className="list-none">
            🌟 Explore networking opportunities
          </li>
          <li className="list-none">
            💡 Advance your design skills
          </li>
          <li className="list-none">
            🎨 Join an exceptional design event
          </li>
          <li>
            Entry Fees: ₹<strike>799</strike>
          </li>
          <li>
            Early bird offer: <span className="text-[var(--figma-pink)]">₹499</span> only.
          </li>
          <li>
          Get ready for an incredible trip into the design and technology worlds! Come hang out with GDSC at Figma Lifestyle and let your imagination run wild! Be a part of something remarkable by reserving your spot right away. See you all there.
          </li>
        </ul>
        <br />
        <div className="about-venue">
          <h3>Venue: </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1706.4405658046637!2d79.04775179614921!3d21.12160686990272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c075d6bd4685%3A0xe4e9d4ac53bcd26e!2sPersistent%20Systems%20Limited!5e0!3m2!1sen!2sin!4v1696436269085!5m2!1sen!2sin"
            width="300"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>
          {/* <p>Revealing Soon...</p> */}
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
