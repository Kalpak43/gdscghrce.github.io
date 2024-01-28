import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(x => !x)
  };

  const hideOnClick = () => {
    setExpanded(false);
    const checkbox = document.getElementById("check");
    checkbox.checked = false;
  };

  return (
    <header className="w-full" data-aos="fade-in">
      <div className="navbar">
        <div className="flex-1">
          <a href="/" className="btn border-none bg-transparent hover:border-none hover:bg-transparent">
            <span className="logo w-fit z-50 flex justify-center items-center">
              <svg
                className="sm:h-10 h-12"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 192"
                width="50"
                height="100"
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
                  className="Logo_logoYellowPart__AVkWI"
                  d="M122.05,142.11a15,15,0,0,0,7.52-2l52.9-30.54L145.59,96.05,114.5,114a15.07,15.07,0,0,0,7.55,28.12Z"
                ></path>
                <path
                  className="Logo_logoGreenPart__LnIju"
                  d="M174.92,111.56a15.06,15.06,0,0,0,7.55-28.11l-52.9-30.54A15.06,15.06,0,0,0,114.5,79l52.9,30.54A15,15,0,0,0,174.92,111.56Z"
                ></path>
              </svg>
              <div className="logo-text flex-col gap-0 relative normal-case font-normal">
                <p className=" text-lg">Gooogle Developer Student Clubs</p>
                <small className="text-[85%] absolute top-[80%]">
                  G.H. Raisoni College of Engineering, Nagpur
                </small>
              </div>
            </span>
          </a>
        </div>
        <div className="pos navB" id="navB">
          <label htmlFor="check">
            <input type="checkbox" id="check" onClick={handleClick} />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className={"options z-0" + (expanded ? " right-0" : " right-full")}>
          <ul className="menu md:menu-horizontal px-0">
            <li onClick={hideOnClick}>
              <NavLink className="nav-links" activeClassName="active-link" to="/">Home</NavLink>
            </li>
            <li onClick={hideOnClick}>
              <NavLink className="nav-links" activeClassName="active-link" to="/about">About us</NavLink>
            </li>
            <li onClick={hideOnClick}>
              <NavLink className="nav-links" activeClassName="active-link" to="/team">Team</NavLink>
            </li>
            <li onClick={hideOnClick}>
              <NavLink className="nav-links" activeClassName="active-link" to="/events">Events</NavLink>
            </li>
            <li onClick={hideOnClick}>
              <NavLink className="nav-links" activeClassName="active-link" to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
