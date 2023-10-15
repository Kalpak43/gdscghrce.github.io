import PSL from "../../Images/sponsors/persistent_systems_logo_full.png"
import FN from "../../Images/sponsors/FlutterNagpur_logo.png"

export default function Sponsors () {


    return (
        <>
        <section className="sponsors flex items-center justify-center flex-col" data-aos="fade-in"> 
            <h3>Venue Partner</h3>
            <div className="sponsor-box m-2">
                <img src={PSL} className="h-28 mx-auto"/>
                {/* <p className="font-bold">Persistent Systems Limited</p> */}
            </div>
        </section>
        <div className="sponsors flex items-center justify-center flex-col" data-aos="fade-in"> 
            <h3>Community Partner</h3>
            <div className="sponsor-box sponsor-box1 m-2">
                <img src={FN} className="h-28 mx-auto"/>
                {/* <p className="font-bold">Persistent Systems Limited</p> */}
            </div>
        </div>
        </>
    )
}