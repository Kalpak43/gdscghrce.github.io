import About from "../Components/About"
import Contact from "../Components/Contact"
import Hero from "../Components/Hero"
import Lead from "../Components/Lead"
import Team from "../Components/Team"
import UpEvent from "../Components/UpEvent"

const HomePage = () => {

    return(
        <div>
            <Hero />
            <About />
            <Team />   
            <UpEvent />
            <Contact /> 
        </div>
    )
}

export default HomePage