import Backgroound from "../Components/Background";
import LokeshImg from "../Images/faculty-advisors/nekita-chavhan.webp";
import KartikImg from "../Images/faculty-advisors/pranay-saraf.webp";
import { FaLinkedin } from "react-icons/fa6";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="flex py-12 flex-col justify-center items-center md:px-60 px-4 text-center">
        GDSC GHRCE is a community of students passionate about technology and
        development. It is a student-led initiative supported by Google
        Developers, aimed at providing a platform for students to learn,
        collaborate, and build projects using various Google technologies. From
        workshops on cutting-edge technologies like machine learning, cloud
        computing, and mobile app development to hackathons that challenge your
        problem-solving abilities, we have something for everyone.
      </div>
      <h2 className="text-4xl text-center font-bold mb-9">
        Our Faculty Advisors
      </h2>
      <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img src={LokeshImg} className="rounded-full" />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Mrs. Nekita Chavan Morris
            </h2>
            <p class="text-center mt-1">HOD CSE-DIC</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/mrs-nekita-chavan-morris-aa618386/"
                class="text-blue-600 hover:text-blue-500 mx-3"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img src={KartikImg} className="rounded-full" />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Dr. Pranay Saraf
            </h2>
            <p class="text-center mt-1">Assitant Professor</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/dr-pranay-deepak-saraf-7238386a/"
                class="text-blue-600 hover:text-blue-500 mx-3"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-12 flex-col justify-center items-center px-2">
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Who We Are?</div>
          <div className="collapse-content text-justify">
            <p>
              GDSC GHRCE is a community of students passionate about technology
              and development. It is a student-led initiative supported by
              Google Developers, aimed at providing a platform for students to
              learn, collaborate, and build projects using various Google
              technologies. From workshops on cutting-edge technologies like
              machine learning, cloud computing, and mobile app development to
              hackathons that challenge your problem-solving abilities, we have
              something for everyone. We believe in hands-on learning and strive
              to provide a platform where you can turn your ideas into reality.
            </p>
          </div>
        </div>
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">What We Do?</div>
          <div className="collapse-content text-justify">
            <p>
              At GDSC, we organize a diverse range of events and activities to
              cater to the interests of our members. From workshops on
              cutting-edge technologies like machine learning, cloud computing,
              and mobile app development to hackathons that challenge your
              problem-solving abilities, we have something for everyone. We
              believe in hands-on learning and strive to provide a platform
              where you can turn your ideas into reality.
            </p>
          </div>
        </div>
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Our Mission</div>
          <div className="collapse-content text-justify">
            <p>
              Our mission is to bridge the gap between theory and practice by
              providing students with real-world experiences in the world of
              technology. We aim to create an environment where you can enhance
              your skills, gain insights from industry experts, and work on
              projects that have a positive impact on society. Through our
              events, we encourage collaboration, innovation, and a lifelong
              passion for learning.
            </p>
          </div>
        </div>
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Why Join Us?</div>
          <div className="collapse-content text-justify">
            <p>
              Joining GDSC means becoming a part of a vibrant community of tech
              enthusiasts. Whether you're a beginner looking to dip your toes
              into coding or an experienced developer aiming to refine your
              skills, we offer a welcoming space where you can grow both
              personally and professionally. You'll have the opportunity to
              connect with like-minded peers, learn from experts, and build a
              strong foundation for your future career.
            </p>
          </div>
        </div>
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Get Involved</div>
          <div className="collapse-content text-justify">
            <p>
              We welcome students from all disciplines and backgrounds to join
              GDSC. Regardless of your skill level, there's always something new
              to learn and explore. Keep an eye on our events calendar and
              social media channels to stay updated on upcoming workshops,
              seminars, and networking opportunities. We can't wait to have you
              on board!
            </p>
          </div>
        </div>
      </div>
      <Backgroound />
    </div>
  );
};

export default AboutPage;
