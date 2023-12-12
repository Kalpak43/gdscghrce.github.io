import PSL from "../../Images/sponsors/persistent_systems_logo_full.png";
import FN from "../../Images/sponsors/FlutterNagpur_logo.png";
import CN from "../../Images/sponsors/codon_logo.png";
import IEEE from "../../Images/sponsors/IEEE_CIS_GHRCElogo.png";
import MLSA from "../../Images/sponsors/MLSA_logo.png";
import CB from "../../Images/sponsors/Cinderbay_logo.png";


export default function Sponsors() {
  return (
    <section>
      <div
        className="sponsors flex items-center justify-center flex-col"
        data-aos="fade-in"
        id="sponsors"
      >
        <h3>Our Sponsor</h3>
        <div className="flex w-full justify-center flex-wrap gap-8">
        <div className="sponsor-box sponsor-box1 m-2 flex items-center">
          <img src={CN} className="mx-auto" />
          {/* <p className="font-bold">Persistent Systems Limited</p> */}
        </div>
        <div className="sponsor-box sponsor-box1 m-2 flex items-center">
          <img src={CB} className="mx-auto" />
          {/* <p className="font-bold">Persistent Systems Limited</p> */}
        </div>
        </div>
      </div>
      {/* <section
        className="sponsors flex items-center justify-center flex-col"
        data-aos="fade-in"
      >
        <h3>Venue Partner</h3>
        <div className="sponsor-box sponsor-box2 m-2">
          <p className="text-2xl">Persistent Systems, Nagpur</p>
          <p className="font-bold">Persistent Systems Limited</p>
        </div>
      </section> */}
      <section
        className="sponsors flex items-center justify-center flex-col"
        data-aos="fade-in"
      >
        <h3>Community Partner</h3>
        <div className="flex w-full justify-center flex-wrap gap-8">
          <div className="sponsor-box sponsor-box3 m-2 flex items-center  ">
            <img src={FN} className=" mx-auto" />
            {/* <p className="font-bold">Persistent Systems Limited</p> */}
          </div>
          {/* <div className="sponsor-box sponsor-box3 m-2 flex items-center  ">
            <img src={IEEE} className=" mx-auto" />
            <p className="font-bold">Persistent Systems Limited</p>
          </div> */}
          <div className="sponsor-box sponsor-box3 m-2 flex items-center  ">
            <img src={MLSA} className=" mx-auto" />
            {/* <p className="font-bold">Persistent Systems Limited</p> */}
          </div>
        </div>
      </section>
    </section>
  );
}
