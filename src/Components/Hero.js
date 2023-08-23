const Hero = () => {
  return (
    <div className="Hero md:grid md:grid-cols-2 flex items-center justify-evenly content-center flex-wrap z-30">
      <span
        className="logo-img flex flex-col justify-center items-center text-center"
        data-aos="zoom-in"
      >
        <svg
          id="Layer_1"
          className="h-24"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192 192"
          width="150"
          height="150"
        >
          <defs></defs>
          <title>dsc_icon</title>
          <path
            class="Logo_logoRedPart__QJGXu"
            fill="currentColor"
            d="M46.36,96.68,77,79A15.06,15.06,0,1,0,61.91,52.91L9,83.45Z"
          ></path>
          <path
            class="Logo_logoBluePart__Gg0LP"
            d="M69.43,142.11A15.07,15.07,0,0,0,77,114L24.07,83.45A15.06,15.06,0,0,0,9,109.54l52.9,30.54A15,15,0,0,0,69.43,142.11Z"
          ></path>
          <path
            class="Logo_logoGreenPart__LnIju"
            d="M122.05,142.11a15,15,0,0,0,7.52-2l52.9-30.54L145.59,96.05,114.5,114a15.07,15.07,0,0,0,7.55,28.12Z"
          ></path>
          <path
            class="Logo_logoYellowPart__AVkWI"
            d="M174.92,111.56a15.06,15.06,0,0,0,7.55-28.11l-52.9-30.54A15.06,15.06,0,0,0,114.5,79l52.9,30.54A15,15,0,0,0,174.92,111.56Z"
          ></path>
        </svg>
        <p className="logo-text">
          <span>Google Developer Student Clubs</span>
          <br />
          <span>GHRCE</span>
        </p>
      </span>
      <div className="hero-text text-justify m-10" data-aos="fade-down">
        <p>
          GDSC GHRCE is a community of students passionate about technology and
          development. It is a student-led initiative supported by Google
          Developers, aimed at providing a platform for students to learn,
          collaborate, and build projects using various Google technologies.
          From workshops on cutting-edge technologies like machine learning,
          cloud computing, and mobile app development to hackathons that
          challenge your problem-solving abilities, we have something for
          everyone. We believe in hands-on learning and strive to provide a
          platform where you can turn your ideas into reality.
        </p>
        <p className="mt-8 md:text-left text-center">
          <a
            href="https://gdsc.community.dev/gh-raisoni-college-of-engineering-nagpur/"
            className="py-1 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 border-2 border-blue-500 bg-blue-500 sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Become a Member
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
