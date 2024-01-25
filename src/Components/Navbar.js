export default function Navbar() {
  const handleNav = () => {
    const checkBox = document.getElementById("check");
    const opt1 = document.getElementById("opt1");
    const ul = document.getElementById("ul");

    if (checkBox.checked) {
      ul.style.opacity = "1";
      ul.style.transform = "translateX(0)";
      opt1.style.width = "100vw";
    } else {
      ul.style.opacity = "0";
      ul.style.transform = "translateX(50px)";
      opt1.style.width = "0";
    }
  };

  const hideOnClick = () => {
    const checkBox = document.getElementById("check");
    const opt1 = document.getElementById("opt1");
    const ul = document.getElementById("ul");

    checkBox.checked = false
    ul.style.opacity = "0";
    ul.style.transform = "translateX(50px)";
    opt1.style.width = "0";
  }


  return (
    <header className="fixed top-0 w-full" data-aos="fade-in">
      {/* <div className="flex justify-between items-center md:mx-4">
        

        <span className="logo w-fit z-50 flex flex-col justify-center items-center">
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
          <small>GHRCE</small>
        </span>

        <div className="pos navB" id="navB">
          <label htmlFor="check">
            <input type="checkbox" id="check" onClick={handleNav} />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div> */}

      <div className="flex justify-between items-center md:mx-4">
        <span className="logo w-fit z-50 flex flex-col justify-center items-center">
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
          <small className="font-bold">GHRCE</small>
        </span>
        <div className="pos navB" id="navB">
          <label htmlFor="check">
            <input type="checkbox" id="check" onClick={handleNav} />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
      <div
        className="opt fixed top-0 left-0 h-full w-full flex justify-center items-center bg-transparent"
        id="opt"
      >
        <div
          className="h-screen absolute top-0 right-0 flex justify-center items-center"
          id="opt1"
        >
          <ul id="ul" className="text-center" onClick={hideOnClick}>
            <li className="text-4xl m-4">
              <a href="/">Home</a>
            </li>
            <li className="text-4xl m-4">
              <a href="/about">About</a>
            </li>
            <li className="text-4xl m-4">
              <a href="/team">Team</a>
            </li>
            <li className="text-4xl m-4">
              <a href="/events">Events</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
