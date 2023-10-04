import teamImg from "../../Images/Career-Hero001.svg";

const Team = () => {

  return (
    <section className="team" id="team">
        <h1 className="text-4xl text-center font-bold mb-9" data-aos="zoom-in">
          Our Team
        </h1>
        <div className="flex md:flex-row flex-col justify-center items-center w-full gap-16">
          <img src={teamImg} className="md:w-1/2" data-aos="zoom-in"/>
          <ul className=""  data-aos="fade-in">
            <li>
              We are thrilled to introduce you to the incredible individuals who
              make up our vibrant community. Get to know the talented
              individuals. Discover their expertise, passion, and dedication
              that make our team truly exceptional.
            </li>
            <br />
            <a className="about-btn" href="/team">
              See the team
            </a>  
          </ul>
        </div>
    </section>
  );
};

export default Team;
