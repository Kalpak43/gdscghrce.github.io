import { FaLinkedin } from "react-icons/fa6";

export default function AimlTeam() {
  return (
    <div className="type-3">
      <h4 className="text-center font-bold text-2xl">AI/ML Team</h4>
      <div className="mt-8 flex justify-center gap-16 py-4 flex-wrap">
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img
                src="https://drive.google.com/uc?export=view&id=17LHiuiz8ROkgxvsf4ozAkqgVnN9CmK91"
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Aditi Fadanvis
            </h2>
            <p class="text-center mt-1">AI ML Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/aditifadnavis16/"
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
              <img
                src="https://drive.google.com/uc?export=view&id=11hUOUm7gOOqyQwuw8doRRd7F-QffupxS"
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">Aman Khapre</h2>
            <p class="text-center mt-1">AI ML Co-Lead</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/aman-khapre-8b34a1256/"
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
              <img
                src="https://drive.google.com/uc?export=view&id=11i1xpFAIhrHxM994pHiWTMl1GAARehP9"
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Pratham Choudhary
            </h2>
            <p class="text-center mt-1">Data Preprocessing</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/pratham-choudhary/"
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
              <img
                src="https://drive.google.com/uc?export=view&id=11iQMHcOAAVOodcqA5MscbW0fZrK2uN5X"
                className="rounded-full"
              />
            </div>
            <h2 class="text-center text-2xl font-semibold mt-3">
              Lavish Harinkhede
            </h2>
            <p class="text-center mt-1">Image Processing</p>
            <div class="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/lavish-harinkhede/"
                class="text-blue-600 hover:text-blue-500 mx-3"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
