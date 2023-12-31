import Hero from "../Components/HomePage/Hero"
import About from "../Components/HomePage/About"
import Team from "../Components/HomePage/Team"
import UpEvent from "../Components/HomePage/UpEvent"
import Contact from "../Components/HomePage/Contact"

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