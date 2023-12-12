import gift from "../../Images/Gift.png";
import pizza from "../../Images/Pizza.png";
import handshake from "../../Images/handshake.png";
import figmaIcon from "../../Images/figmaIcon.png";

export default function Perks() {

  const todayDate = new Date();
  const eventDate = new Date("Oct 21, 2023")

  let distance = eventDate - todayDate
  let days = (Math.floor(distance / (1000 * 60 * 60 * 24)));


  return (
    <section className="Perks text-center">
      <div className="flex lg:flex-row flex-col flex-wrap justify-center items-center md:gap-24 gap-16">
        <div className="circle h-fit w-fit py-4 px-8 rounded-lg flex items-center" data-aos="fade-up">
          <h3>Perks for attendees</h3>
        </div>
        <div className="flex lg:flex-row flex-col flex-wrap justify-center items-center gap-8 lg:px-12 px-8">
          <div  data-aos="fade-right" data-aos-delay="100">
            <div className="circle circle1 h-32 aspect-square rounded-full flex items-center p-4">
              <img src={figmaIcon} />
            </div>
            <p className="font-bold">Learn Figma</p>
          </div>
          <div className="text-center" data-aos="fade-right" data-aos-delay="200"> 
            <div className="circle circle2 h-32 aspect-square rounded-full flex items-center p-4">
              <img src={gift} />
            </div>
            <p className="font-bold">Swags and Goodies</p>
          </div>
          <div data-aos="fade-right" data-aos-delay="300">
            <div className="circle circle3 h-32 aspect-square rounded-full flex items-center p-4">
              <img src={pizza} />
            </div>
            <p className="font-bold">Breakfast and Lunch</p>
          </div>
          <div data-aos="fade-right" data-aos-delay="400">
            <div className="circle circle4 h-32 aspect-square rounded-full flex items-center p-4">
              <img src={handshake} />
            </div>
            <p className="font-bold">Networking Opportunities</p>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      {/* <p className="text-xl font-bold">We will be waiting for you.</p> */}
      {/* <a
        className="reg-btn font-bold"
        href="https://forms.gle/nziiMdZQSn1kXgkH7"
      >
        Register Here
      </a> */}
    </section>
  );
}
