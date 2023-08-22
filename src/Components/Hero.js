import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {

    useEffect(() => {
        AOS.init({duration : 1000})
    }, [])

    return (
        <div className="Hero md:grid md:grid-cols-2 flex items-center justify-evenly content-center flex-wrap">
            <span className="logo-img flex flex-col justify-center items-center text-center" data-aos="zoom-in">
                <svg id="Layer_1" className="h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="150" height="150"><defs></defs><title>dsc_icon</title><path class="Logo_logoRedPart__QJGXu" fill="currentColor" d="M46.36,96.68,77,79A15.06,15.06,0,1,0,61.91,52.91L9,83.45Z"></path><path class="Logo_logoBluePart__Gg0LP" d="M69.43,142.11A15.07,15.07,0,0,0,77,114L24.07,83.45A15.06,15.06,0,0,0,9,109.54l52.9,30.54A15,15,0,0,0,69.43,142.11Z"></path><path class="Logo_logoGreenPart__LnIju" d="M122.05,142.11a15,15,0,0,0,7.52-2l52.9-30.54L145.59,96.05,114.5,114a15.07,15.07,0,0,0,7.55,28.12Z"></path><path class="Logo_logoYellowPart__AVkWI" d="M174.92,111.56a15.06,15.06,0,0,0,7.55-28.11l-52.9-30.54A15.06,15.06,0,0,0,114.5,79l52.9,30.54A15,15,0,0,0,174.92,111.56Z"></path></svg>
                <p className="logo-text"><span>Google Developer Student Clubs</span><br/><span>GHRCE</span></p>
            </span>
            <div className="hero-text text-justify m-10" data-aos="fade-down">
                <p>
                Unfortunately, as an AI language model, I do not have access to specific code or links related to GDSC GHRCE's About section. However, you can visit the official website or social media pages of GDSC GHRCE to find the relevant information and links. Additionally, you can try searching for GDSC GHRCE on platforms like GitHub, where they might have public repositories with code related to their activities.
                </p>
            </div>
        </div>
    )
}

export default Hero