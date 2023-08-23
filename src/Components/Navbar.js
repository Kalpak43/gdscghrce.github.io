import { FaMoon, FaSun } from "react-icons/fa6";

const Navbar = (props) => {
  // useEffect(() => {
  //   localStorage.setItem('darkMode', darkMode);
  //   const App = document.getElementById("App");

  //   if (darkMode) {
  //     App.classList.add("dark-theme");
  //   } else {
  //     App.classList.add("light-theme");
  //     App.classList.remove("dark-theme");
  //   }
  // }, [darkMode]);

  return (
    <header className="border-b-2 sticky top-0 w-full">
      <div className="flex justify-between items-center md:mx-4 relative">
        <div className="md:hidden right-full mx-2">
          <input id="menu-toggle" type="checkbox" />
          <label class="menu-button-container" for="menu-toggle">
            <div
              class="menu-button"
              onClick={() => {
                const nav = document.getElementById("nav-opt");
                nav.classList.toggle("right-full");
              }}
            ></div>
          </label>
        </div>
        <span className="text-center">
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
        <nav className="nav-opt w-full right-full right-0" id="nav-opt">
          <ul className="md:flex justify-end">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <button
                className="text-2xl"
                onClick={() => {
                  props.setDarkMode();
                }}
              >
                {props.darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden text-2xl mx-2"
          onClick={() => {
            props.setDarkMode();
          }}
        >
          {props.darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
