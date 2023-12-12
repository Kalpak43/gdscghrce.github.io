import Hero from "../../Components/figmaEvent/Hero";
import Navbar from "../../Components/figmaEvent/Navbar";
import About from "../../Components/figmaEvent/About";
import "./figmaEvent.css";
import Speakers from "../../Components/figmaEvent/Speakers";
import Schedule from "../../Components/figmaEvent/Schedule";
import Sponsors from "../../Components/figmaEvent/Sponsors";
import Organizers from "../../Components/figmaEvent/Organizers";
import Footer from "../../Components/figmaEvent/Footer";
import ShapesBG from "../../Components/figmaEvent/ShapesBG";
import Perks from "../../Components/figmaEvent/Perks";
import { useEffect, useState } from "react";
import Loader from "../../Components/figmaEvent/Loader";
import { Helmet } from "react-helmet";
import Glimpse from "../../Components/figmaEvent/Glimpse";

export default function FigmaEvent() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Figma Lifestyle</title>
        <meta
          name="description"
          content="Figma Lifestyle with GDSC is a dynamic event that celebrates the fusion of design and technology. It's an opportunity for participants to explore the world of design, learn from industry experts, and collaborate with fellow enthusiasts. This event promises to be a day filled with creativity, innovation, and networking. Join us in making this event a memorable and enriching experience for all participants."
        />
        {/* <meta name="theme-color" content="#008f68" /> */}
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="figmaEvent">
          <ShapesBG />
          <Navbar />
          <Hero />
          <Sponsors />
          <About />
          <Speakers />
          <Organizers />
          <Schedule />
          <Perks />
          <Glimpse />
          <Footer />
        </div>
      )}
    </div>
  );
}
