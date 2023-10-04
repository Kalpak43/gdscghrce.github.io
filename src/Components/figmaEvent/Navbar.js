import { useState } from "react";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  console.log(expanded)


  return (
    <header className="nav sticky top-0">
      <nav className="navigation">
        <div className="pos navB" id="navB">
          <label htmlFor="check">
            <input type="checkbox" id="check" onClick={() => {
            setExpanded(!expanded);
          }}/>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        {/* <button
          className="hamburger"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
        <div
          className={expanded ? "navigation-menu expanded" : "navigation-menu"}
        >
          <ul>
            <li>
              <a href="/figma-lifestyle#home">Home</a>
            </li>
            <li>
              <a href="/figma-lifestyle#about">About</a>
            </li>
            <li>
              <a href="/figma-lifestyle#speakers">Speakers</a>
            </li>
            <li>
              <a href="/contact">Schedule</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
