import { FaLinkedin, FaTwitter, FaYoutube, FaDiscord, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="Footer p-4 border-t-2 border-blue-300">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl fonat-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 class="text-lg mt-0 mb-2">
              Find us on any of these platforms.
            </h5>
            <div class="mt-6 lg:mb-0 mb-6 flex">
              <a
                href="https://twitter.com/gdscghrce/"
                class="bg-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaTwitter className="text-xl text-blue-400"/>
              </a>
              <a
                href="https://www.linkedin.com/company/gdsc-ghrce/"
                class="bg-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaLinkedin className="text-xl text-blue-600" />
              </a>
              <a
                href="https://www.youtube.com/@gdscghrce5152"
                class="bg-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaYoutube className="text-xl text-red-600" />
              </a>
              <a
                href="https://www.instagram.com/gdscghrce/"
                class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaInstagram className="text-xl text-pink-500" />
              </a>
              <a
                href="/"
                class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaDiscord className="text-xl text-purple-500" />
              </a>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul class="list-unstyled text-blue-400">
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/about"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/team"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/events"
                    >
                      Events
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-blue-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <span className="flex w-full justify-center">
              <a href="/">
                <svg
                  className="h-16"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192 192"
                  width="150"
                  height="150"
                >
                  <defs></defs>
                  <title>dsc_icon</title>
                  <path
                    className="Logo_logoRedPart__QJGXu"
                    fill="currentColor"
                    d="M46.36,96.68,77,79A15.06,15.06,0,1,0,61.91,52.91L9,83.45Z"
                  ></path>
                  <path
                    className="Logo_logoBluePart__Gg0LP"
                    d="M69.43,142.11A15.07,15.07,0,0,0,77,114L24.07,83.45A15.06,15.06,0,0,0,9,109.54l52.9,30.54A15,15,0,0,0,69.43,142.11Z"
                  ></path>
                  <path
                    className="Logo_logoGreenPart__LnIju"
                    d="M122.05,142.11a15,15,0,0,0,7.52-2l52.9-30.54L145.59,96.05,114.5,114a15.07,15.07,0,0,0,7.55,28.12Z"
                  ></path>
                  <path
                    className="Logo_logoYellowPart__AVkWI"
                    d="M174.92,111.56a15.06,15.06,0,0,0,7.55-28.11l-52.9-30.54A15.06,15.06,0,0,0,114.5,79l52.9,30.54A15,15,0,0,0,174.92,111.56Z"
                  ></path>
                </svg>
              </a>
            </span>
            <div class="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023 </span>
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                class="text-blueGray-500 hover:text-blueGray-800"
              >
                GDSC GHRCE
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;