import { FaLinkedin } from "react-icons/fa6";
import leadImg from "../../Images/members/AmanTiwari.png";
import Speaker1 from "../../Images/speaker/AbhilashTelrandhe.png";
import organizer2 from "../../Images/organizers/AnmolDeep.jpg";
import speaker2 from "../../Images/speaker/ShivamJoshi.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Speakers() {
  return (
    <section className="speakers" id="speakers">
      <div className="spkrs-l spkrs-l-pc w-full h-full flex flex-wrap gap-8 justify-center items-center">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={4000}
        >
          <div className="parent">
            <div className="ecard">
              <div className="glass"></div>
              <div className="content">
                <span>
                  <img className="round h-32" src={organizer2} alt="user" />
                </span>
                <span className="title">Anmoldeep Singh Arora</span>
                <span className="text">Speaker</span>
              </div>
              <div className="bottom">
                <div className="social-buttons-container">

                  <a
                    className="social-button .social-button3"
                    href="https://www.linkedin.com/in/eduanmoldeep/"
                    target="__blank"
                  >
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
                  <img className="round h-32" src={Speaker1} alt="user" />
                </span>
                <span className="title">Abhilash Telrandhe</span>
                <span className="text">Founder of atcreations Graphic Design School</span>
              </div>
              <div className="bottom">
                <div className="social-buttons-container">
                  <a
                    className="social-button .social-button1"
                    href="https://www.instagram.com/at_creations10/?hl=en"
                    target="__blank"
                  >
                    <img
                      src="data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EInstagram%3C/title%3E%3Cdesc%3EA color styled icon from Orion Icon Library.%3C/desc%3E%3Cdefs%3E%3CradialGradient gradientUnits='userSpaceOnUse' gradientTransform='matrix(.5 0 0 -.5 -16 -1395.5)' r='163.552' cy='-2919.444' cx='51.111' id='E3MwYEst4'%3E%3Cstop data-name='layer1' stop-color='%23ffb140' offset='0'%3E%3C/stop%3E%3Cstop data-name='layer2' stop-color='%23ff5445' offset='.256'%3E%3C/stop%3E%3Cstop data-name='layer3' stop-color='%23fc2b82' offset='.599'%3E%3C/stop%3E%3Cstop data-name='layer4' stop-color='%238e40b7' offset='1'%3E%3C/stop%3E%3C/radialGradient%3E%3C/defs%3E%3Cpath fill='url(%23E3MwYEst4)' d='M52.922 14.918a3.84 3.84 0 1 1-3.84-3.84 3.84 3.84 0 0 1 3.84 3.84zM32 42.668A10.667 10.667 0 1 1 42.667 32 10.666 10.666 0 0 1 32 42.667zm0-27.1A16.433 16.433 0 1 0 48.433 32 16.432 16.432 0 0 0 32 15.568zm0-9.8c8.545 0 9.556.03 12.93.186a17.7 17.7 0 0 1 5.943 1.1 9.916 9.916 0 0 1 3.68 2.394 9.908 9.908 0 0 1 2.394 3.68 17.714 17.714 0 0 1 1.1 5.942c.154 3.375.187 4.386.187 12.93s-.033 9.557-.187 12.932a17.7 17.7 0 0 1-1.1 5.942 10.6 10.6 0 0 1-6.074 6.074 17.714 17.714 0 0 1-5.942 1.1c-3.37.154-4.382.187-12.93.187s-9.554-.033-12.93-.187a17.7 17.7 0 0 1-5.94-1.1 9.916 9.916 0 0 1-3.68-2.394 9.914 9.914 0 0 1-2.394-3.68 17.714 17.714 0 0 1-1.1-5.942c-.154-3.375-.19-4.387-.19-12.932s.033-9.556.188-12.93a17.7 17.7 0 0 1 1.1-5.943 9.916 9.916 0 0 1 2.394-3.68 9.908 9.908 0 0 1 3.68-2.394 17.714 17.714 0 0 1 5.942-1.1c3.374-.153 4.385-.187 12.93-.187zM32 0c-8.69 0-9.78.037-13.194.192A23.487 23.487 0 0 0 11.04 1.68a15.68 15.68 0 0 0-5.67 3.69 15.68 15.68 0 0 0-3.69 5.67 23.49 23.49 0 0 0-1.488 7.766C.037 22.22 0 23.31 0 32s.037 9.78.192 13.194A23.49 23.49 0 0 0 1.68 52.96a15.68 15.68 0 0 0 3.69 5.67 15.687 15.687 0 0 0 5.67 3.69 23.49 23.49 0 0 0 7.766 1.487c3.413.156 4.5.193 13.194.193s9.78-.037 13.194-.193a23.49 23.49 0 0 0 7.767-1.487 16.363 16.363 0 0 0 9.36-9.36 23.49 23.49 0 0 0 1.49-7.767C63.963 41.78 64 40.69 64 32s-.037-9.78-.193-13.194a23.49 23.49 0 0 0-1.487-7.767 15.687 15.687 0 0 0-3.69-5.67 15.687 15.687 0 0 0-5.67-3.69A23.49 23.49 0 0 0 45.194.19C41.78.037 40.69 0 32 0z'%3E%3C/path%3E%3C/svg%3E"
                      alt="Instagram"
                    />
                  </a>
                  <a
                    className="social-button .social-button3"
                    href="https://www.linkedin.com/in/abhilash-telrandhe-207445164/?originalSubdomain=in"
                    target="__blank"
                  >
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
                  <img className="round h-32" src={speaker2} alt="user" />
                </span>
                <span className="title">Shivam Joshi</span>
                <span className="text">Executive Director @Codon's Ltd.</span>
              </div>
              <div className="bottom">
                <div className="social-buttons-container">
                  <a
                    className="social-button .social-button3"
                    href="https://www.linkedin.com/in/shivam-joshi-b36384183/"
                    target="__blank"
                  >
                    <img
                      src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3ELinkedin%3C/title%3E%3Cdesc%3EA color styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer1' fill='%230077b7' d='M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z'%3E%3C/path%3E%3C/svg%3E"
                      alt="Linkedin"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="spkrs-l spkrs-l-mobile w-full h-full flex flex-wrap gap-8 justify-center items-center">
      <div className="parent">
            <div className="ecard">
              <div className="glass"></div>
              <div className="content">
                <span>
                  <img className="round h-32" src={organizer2} alt="user" />
                </span>
                <span className="title">Anmoldeep Singh Arora</span>
                <span className="text">Speaker</span>
              </div>
              <div className="bottom">
                <div className="social-buttons-container">

                  <a
                    className="social-button .social-button3"
                    href="https://www.linkedin.com/in/eduanmoldeep/"
                    target="__blank"
                  >
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
                  <img className="round h-32" src={Speaker1} alt="user" />
                </span>
                <span className="title">Abhilash Telrandhe</span>
                <span className="text">Founder of atcreations Graphic Design School</span>
              </div>
              <div className="bottom">
                <div className="social-buttons-container">
                  <a
                    className="social-button .social-button1"
                    href="https://www.instagram.com/at_creations10/?hl=en"
                    target="__blank"
                  >
                    <img
                      src="data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EInstagram%3C/title%3E%3Cdesc%3EA color styled icon from Orion Icon Library.%3C/desc%3E%3Cdefs%3E%3CradialGradient gradientUnits='userSpaceOnUse' gradientTransform='matrix(.5 0 0 -.5 -16 -1395.5)' r='163.552' cy='-2919.444' cx='51.111' id='E3MwYEst4'%3E%3Cstop data-name='layer1' stop-color='%23ffb140' offset='0'%3E%3C/stop%3E%3Cstop data-name='layer2' stop-color='%23ff5445' offset='.256'%3E%3C/stop%3E%3Cstop data-name='layer3' stop-color='%23fc2b82' offset='.599'%3E%3C/stop%3E%3Cstop data-name='layer4' stop-color='%238e40b7' offset='1'%3E%3C/stop%3E%3C/radialGradient%3E%3C/defs%3E%3Cpath fill='url(%23E3MwYEst4)' d='M52.922 14.918a3.84 3.84 0 1 1-3.84-3.84 3.84 3.84 0 0 1 3.84 3.84zM32 42.668A10.667 10.667 0 1 1 42.667 32 10.666 10.666 0 0 1 32 42.667zm0-27.1A16.433 16.433 0 1 0 48.433 32 16.432 16.432 0 0 0 32 15.568zm0-9.8c8.545 0 9.556.03 12.93.186a17.7 17.7 0 0 1 5.943 1.1 9.916 9.916 0 0 1 3.68 2.394 9.908 9.908 0 0 1 2.394 3.68 17.714 17.714 0 0 1 1.1 5.942c.154 3.375.187 4.386.187 12.93s-.033 9.557-.187 12.932a17.7 17.7 0 0 1-1.1 5.942 10.6 10.6 0 0 1-6.074 6.074 17.714 17.714 0 0 1-5.942 1.1c-3.37.154-4.382.187-12.93.187s-9.554-.033-12.93-.187a17.7 17.7 0 0 1-5.94-1.1 9.916 9.916 0 0 1-3.68-2.394 9.914 9.914 0 0 1-2.394-3.68 17.714 17.714 0 0 1-1.1-5.942c-.154-3.375-.19-4.387-.19-12.932s.033-9.556.188-12.93a17.7 17.7 0 0 1 1.1-5.943 9.916 9.916 0 0 1 2.394-3.68 9.908 9.908 0 0 1 3.68-2.394 17.714 17.714 0 0 1 5.942-1.1c3.374-.153 4.385-.187 12.93-.187zM32 0c-8.69 0-9.78.037-13.194.192A23.487 23.487 0 0 0 11.04 1.68a15.68 15.68 0 0 0-5.67 3.69 15.68 15.68 0 0 0-3.69 5.67 23.49 23.49 0 0 0-1.488 7.766C.037 22.22 0 23.31 0 32s.037 9.78.192 13.194A23.49 23.49 0 0 0 1.68 52.96a15.68 15.68 0 0 0 3.69 5.67 15.687 15.687 0 0 0 5.67 3.69 23.49 23.49 0 0 0 7.766 1.487c3.413.156 4.5.193 13.194.193s9.78-.037 13.194-.193a23.49 23.49 0 0 0 7.767-1.487 16.363 16.363 0 0 0 9.36-9.36 23.49 23.49 0 0 0 1.49-7.767C63.963 41.78 64 40.69 64 32s-.037-9.78-.193-13.194a23.49 23.49 0 0 0-1.487-7.767 15.687 15.687 0 0 0-3.69-5.67 15.687 15.687 0 0 0-5.67-3.69A23.49 23.49 0 0 0 45.194.19C41.78.037 40.69 0 32 0z'%3E%3C/path%3E%3C/svg%3E"
                      alt="Instagram"
                    />
                  </a>
                  <a
                    className="social-button .social-button3"
                    href="https://www.linkedin.com/in/abhilash-telrandhe-207445164/?originalSubdomain=in"
                    target="__blank"
                  >
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
                  <img className="round h-32" src={speaker2} alt="user" />
                </span>
                <span className="title">Shivam Joshi</span>
                <span className="text">Executive Director @Codon's Ltd.</span>
              </div>
              <div className="bottom">
                <div className="social-buttons-container">
                  <a
                    className="social-button .social-button3"
                    href="https://www.linkedin.com/in/shivam-joshi-b36384183/"
                    target="__blank"
                  >
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
      {/* <div className="spkrs-l spkrs-l w-full h-full flex flex-wrap gap-8 justify-center items-center" data-aos="fade-right" data-aos-delay="200">
      <div className="parent">
            <div className="ecard">
              <div className="glass"></div>
              <div className="content">
                <span>
                  <img className="round h-32" src={Speaker1} alt="user" />
                </span>
                <span className="title">Abhilash Telrandhe</span>
                <span className="text">Founder of atcreations Graphic Design School</span>
              </div>
              <div className="bottom">
                <div className="social-buttons-container">
                  <a
                    className="social-button .social-button1"
                    href="https://www.instagram.com/at_creations10/?hl=en"
                    target="__blank"
                  >
                    <img
                      src="data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EInstagram%3C/title%3E%3Cdesc%3EA color styled icon from Orion Icon Library.%3C/desc%3E%3Cdefs%3E%3CradialGradient gradientUnits='userSpaceOnUse' gradientTransform='matrix(.5 0 0 -.5 -16 -1395.5)' r='163.552' cy='-2919.444' cx='51.111' id='E3MwYEst4'%3E%3Cstop data-name='layer1' stop-color='%23ffb140' offset='0'%3E%3C/stop%3E%3Cstop data-name='layer2' stop-color='%23ff5445' offset='.256'%3E%3C/stop%3E%3Cstop data-name='layer3' stop-color='%23fc2b82' offset='.599'%3E%3C/stop%3E%3Cstop data-name='layer4' stop-color='%238e40b7' offset='1'%3E%3C/stop%3E%3C/radialGradient%3E%3C/defs%3E%3Cpath fill='url(%23E3MwYEst4)' d='M52.922 14.918a3.84 3.84 0 1 1-3.84-3.84 3.84 3.84 0 0 1 3.84 3.84zM32 42.668A10.667 10.667 0 1 1 42.667 32 10.666 10.666 0 0 1 32 42.667zm0-27.1A16.433 16.433 0 1 0 48.433 32 16.432 16.432 0 0 0 32 15.568zm0-9.8c8.545 0 9.556.03 12.93.186a17.7 17.7 0 0 1 5.943 1.1 9.916 9.916 0 0 1 3.68 2.394 9.908 9.908 0 0 1 2.394 3.68 17.714 17.714 0 0 1 1.1 5.942c.154 3.375.187 4.386.187 12.93s-.033 9.557-.187 12.932a17.7 17.7 0 0 1-1.1 5.942 10.6 10.6 0 0 1-6.074 6.074 17.714 17.714 0 0 1-5.942 1.1c-3.37.154-4.382.187-12.93.187s-9.554-.033-12.93-.187a17.7 17.7 0 0 1-5.94-1.1 9.916 9.916 0 0 1-3.68-2.394 9.914 9.914 0 0 1-2.394-3.68 17.714 17.714 0 0 1-1.1-5.942c-.154-3.375-.19-4.387-.19-12.932s.033-9.556.188-12.93a17.7 17.7 0 0 1 1.1-5.943 9.916 9.916 0 0 1 2.394-3.68 9.908 9.908 0 0 1 3.68-2.394 17.714 17.714 0 0 1 5.942-1.1c3.374-.153 4.385-.187 12.93-.187zM32 0c-8.69 0-9.78.037-13.194.192A23.487 23.487 0 0 0 11.04 1.68a15.68 15.68 0 0 0-5.67 3.69 15.68 15.68 0 0 0-3.69 5.67 23.49 23.49 0 0 0-1.488 7.766C.037 22.22 0 23.31 0 32s.037 9.78.192 13.194A23.49 23.49 0 0 0 1.68 52.96a15.68 15.68 0 0 0 3.69 5.67 15.687 15.687 0 0 0 5.67 3.69 23.49 23.49 0 0 0 7.766 1.487c3.413.156 4.5.193 13.194.193s9.78-.037 13.194-.193a23.49 23.49 0 0 0 7.767-1.487 16.363 16.363 0 0 0 9.36-9.36 23.49 23.49 0 0 0 1.49-7.767C63.963 41.78 64 40.69 64 32s-.037-9.78-.193-13.194a23.49 23.49 0 0 0-1.487-7.767 15.687 15.687 0 0 0-3.69-5.67 15.687 15.687 0 0 0-5.67-3.69A23.49 23.49 0 0 0 45.194.19C41.78.037 40.69 0 32 0z'%3E%3C/path%3E%3C/svg%3E"
                      alt="Instagram"
                    />
                  </a>
                  <a
                    className="social-button .social-button3"
                    href="https://www.linkedin.com/in/abhilash-telrandhe-207445164/?originalSubdomain=in"
                    target="__blank"
                  >
                    <img
                      src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3ELinkedin%3C/title%3E%3Cdesc%3EA color styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer1' fill='%230077b7' d='M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z'%3E%3C/path%3E%3C/svg%3E"
                      alt="Linkedin"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div> */}
      <div className="spkrs-r" data-aos="fade-left">
        <h2>Our Speakers</h2>
      </div>
    </section>
  );
}
