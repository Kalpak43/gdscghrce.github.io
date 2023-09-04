import advisor1 from "../Images/nekita-chavhan.webp"
import advisor2 from "../Images/pranay-saraf.webp"

const About = () => {
  return (
    <div className="About bg-red-500 md:px-52 px-5 py-4 text-justify text-gray-100">
      <h1 className="text-4xl text-center font-extrabold mb-9" data-aos="zoom-in">About Us</h1>
      <ul>
        <li data-aos="fade-in">
          GDSC GHRCE is a community of students passionate about technology and
          development. It is a student-led initiative supported by Google
          Developers, aimed at providing a platform for students to learn,
          collaborate, and build projects using various Google technologies.
          From workshops on cutting-edge technologies like machine learning,
          cloud computing, and mobile app development to hackathons that
          challenge your problem-solving abilities, we have something for
          everyone. We believe in hands-on learning and strive to provide a
          platform where you can turn your ideas into reality.
        </li>
        <br />
        <li data-aos="fade-in">
          At GDSC, we organize a diverse range of events and activities to cater
          to the interests of our members. From workshops on cutting-edge
          technologies like machine learning, cloud computing, and mobile app
          development to hackathons that challenge your problem-solving
          abilities, we have something for everyone. We believe in hands-on
          learning and strive to provide a platform where you can turn your
          ideas into reality.
        </li>
      </ul>
      <br />
      <h1 className="text-3xl text-center font-bold mb-9">Chapter Advisors</h1>
      <div className="flex flex-wrap justify-evenly" >
        <div className="advisor-card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2" data-aos="fade-right">
          <div className="h-full flex flex-col justify-center items-center pb-2">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={advisor1}
              alt="Nekita Chavan Mam"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Prof. Nekita Chavan Morris
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
                Head of Department CSE-DIC
            </span>
          </div>
        </div>
        <div className="advisor-card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2" data-aos="fade-left">
          <div className="h-full flex flex-col justify-center items-center pb-2">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={advisor2}
              alt="Pranay Saraf Sir"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Dr. Pranay Saraf
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
                Assistant Professor
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
