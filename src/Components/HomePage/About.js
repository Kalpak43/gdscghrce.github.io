const About = () => {
  return (
    <section className="About" id="about">
      <h1 className="text-4xl text-center font-bold mb-9" data-aos="zoom-in">
        About Us
      </h1>
      <ul>
        <li data-aos="fade-in">
          GDSC GHRCE is a community of students passionate about technology and
          development. It is a student-led initiative supported by Google
          Developers, aimed at providing a platform for students to learn,
          collaborate, and build projects using various Google technologies.
          From workshops on cutting-edge technologies like machine learning,
          cloud computing, and mobile app development to hackathons that
          challenge your problem-solving abilities, we have something for
          everyone.
        </li>
      </ul>
      <br/>
      <a className="about-btn w-fit" href="/about" data-aos="fade-in">
        More 
      </a>
    </section>
  );
};

export default About;
