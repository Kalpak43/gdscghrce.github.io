import Speaker1 from "../../Images/speaker/AbhilashTelrandhe.png";
import organizer1 from "../../Images/organizers/AmanTiwari.png"
import organizer2 from "../../Images/organizers/AnmolDeep.jpg";
import organizer3 from "../../Images/members/PayalPande.webp";
import organizer4 from "../../Images/members/LokeshVazirani.webp";

export default function Organizers() {
  return (
    <section className="event-organizers" id="organizers">
      <div className="organizers">
        <h2 data-aos="fade-in">Organizers</h2>
        <div className="card-container flex justify-evenly items-center gap-8 flex-wrap">
          <div className="parent"  data-aos="fade-in" data-aos-delay="200">
            <div className="ecard">
              <div className="glass"></div>
              <div className="content">
                <span>
                  <img className="round h-32" src={organizer1} alt="user" />
                </span>
                <span className="title">Aman Tiwari</span>
                <span className="text">Lead @GDSC GHRCE</span>
              </div>
              <div className="bottom">
                <div className="social-buttons-container">
                  <a className="social-button .social-button3" href="https://www.linkedin.com/in/amantiwari2091/" target="__blank">
                    <img
                      src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3ELinkedin%3C/title%3E%3Cdesc%3EA color styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer1' fill='%230077b7' d='M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z'%3E%3C/path%3E%3C/svg%3E"
                      alt="Linkedin"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="organizers" data-aos="fade-in">
        <h3>Co-Organizers</h3>
        <div className="card-container flex justify-evenly items-center gap-8 flex-wrap">
          <div className="parent">
            <div className="ecard">
              <div className="glass"></div>
              <div className="content">
                <span>
                  <img className="round h-32" src={organizer3} alt="user" />
                </span>
                <span className="title">Payal Pande</span>
                <span className="text">Co-lead @GDSC GHRCE</span>
              </div>
              <div className="bottom">
                <div className="social-buttons-container">
                  <a href="https://www.linkedin.com/in/payal-pande-29109a250/" className="social-button .social-button3" target="__blank">
                    <img
                      src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3ELinkedin%3C/title%3E%3Cdesc%3EA color styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer1' fill='%230077b7' d='M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z'%3E%3C/path%3E%3C/svg%3E"
                      alt="Linkedin"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="parent">
            <div className="ecard">
              <div className="glass"></div>
              <div className="content">
                <span>
                  <img className="round h-32" src={organizer4} alt="user" />
                </span>
                <span className="title">Lokesh Vazirani</span>
                <span className="text">DSA Lead @GDSC GHRCE</span>
              </div>
              <div className="bottom">
                <div className="social-buttons-container">
                  <a href="https://www.linkedin.com/in/lokesh-vazirani/" className="social-button .social-button3" target="__blank">
                    <img
                      src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3ELinkedin%3C/title%3E%3Cdesc%3EA color styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer1' fill='%230077b7' d='M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z'%3E%3C/path%3E%3C/svg%3E"
                      alt="Linkedin"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
