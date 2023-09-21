import Hero from "../Components/Hero"
import About from "../Components/About"
import Team from "../Components/Team"
import UpEvent from "../Components/UpEvent"
import Contact from "../Components/Contact"

const HomePage = () => {

    return(
        <div className="HomePage">
            <Hero />
            <About />
            <Team />   
            <UpEvent />
            <Contact /> 
        </div>
    )
}

export default HomePage