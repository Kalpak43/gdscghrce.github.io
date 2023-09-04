import { useParallax } from "react-scroll-parallax";
import firebase from "../Images/firebase_logo.svg"
import flutter from "../Images/flutter_logo.svg"
import angular from "../Images/angular_logo.png"
import gc from "../Images/google-cloud_logo.png"
import android from "../Images/android-studio.svg"
import tensorflow from "../Images/google-tensorflow-icon.svg"

const Hero = () => {
  const parallaxRight = useParallax({
    translateX: [-50, 50],
  });
 
  return (
    <div className="Hero relative overflow-hidden bg-transparent">
      <div
        className="flex flex-col justify-center items-center h-full"
        ref={parallaxRight.ref}
      >
        <span className="">
          <svg
            className="h-20"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192 192"
            width="150"
            height="150"
          >
            <defs></defs>
            <title>dsc_icon</title>
            <path
              className="Logo_logoRedPart__QJGXu"
              fill="currentColor"
              d="M46.36,96.68,77,79A15.06,15.06,0,1,0,61.91,52.91L9,83.45Z"
            ></path>
            <path
              className="Logo_logoBluePart__Gg0LP"
              d="M69.43,142.11A15.07,15.07,0,0,0,77,114L24.07,83.45A15.06,15.06,0,0,0,9,109.54l52.9,30.54A15,15,0,0,0,69.43,142.11Z"
            ></path>
            <path
              className="Logo_logoGreenPart__LnIju"
              d="M122.05,142.11a15,15,0,0,0,7.52-2l52.9-30.54L145.59,96.05,114.5,114a15.07,15.07,0,0,0,7.55,28.12Z"
            ></path>
            <path
              className="Logo_logoYellowPart__AVkWI"
              d="M174.92,111.56a15.06,15.06,0,0,0,7.55-28.11l-52.9-30.54A15.06,15.06,0,0,0,114.5,79l52.9,30.54A15,15,0,0,0,174.92,111.56Z"
            ></path>
          </svg>
        </span>
        <h1 className="md:text-3xl text-2xl text-center">
          Google Developer Student Clubs
          <br />
          GHRCE
        </h1>
      </div>
      <div className="orbit absolute top-1/4 md:w-1/2 w-full md:aspect-video aspect-square rounded-full" data-aos="zoom-in">
        <div className="circle p-2 shadow-lg">
          <img src={firebase} />
        </div>
        <div className="circle p-2 shadow-lg">
          <img src={flutter} />
        </div>
        <div className="circle p-2 shadow-lg">
          <img src={angular} />
        </div>
        <div className="circle p-2 shadow-lg">
          <img src={gc} />
        </div>
        <div className="circle p-2 shadow-lg">
          <img src={android} />
        </div>
        <div className="circle p-2 shadow-lg">
          <img src={tensorflow} />
        </div>
      </div>
      <div className="bg"></div>
    </div>
  );
};

export default Hero;
