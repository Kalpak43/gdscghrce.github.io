import Hero from "../../Components/figmaEvent/Hero"
import Navbar from "../../Components/figmaEvent/Navbar"
import About from "../../Components/figmaEvent/About"
import StaryBg from "../../Components/figmaEvent/StaryBg"
import "./figmaEvent.css"
import Speakers from "../../Components/figmaEvent/Speakers"
import Contact from "../../Components/figmaEvent/Contact"
import SmokeBG from "../../Components/figmaEvent/SmokeBG"
import Schedule from "../../Components/figmaEvent/Schedule"
import Sponsors from "../../Components/figmaEvent/Sponsors"

export default function FigmaEvent () {

    document.title = "Figma Lifestyle"

    return (
        <div className="figmaEvent">
            {/* <SmokeBG /> */}
            <StaryBg />
            <Navbar />
            <Hero />
            <Sponsors />
            <About />
            <Speakers />
            <Schedule />
            <Contact />
        </div>
    )
}