import { useState } from "react";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const setNavBtn = () => {
    const checkBox = document.getElementById("check")
    checkBox.checked = !expanded
  }

  return (
    <header className="nav sticky top-0">
      <nav className="navigation">
        <div className="pos navB" id="navB">
          <label htmlFor="check">
            <input
              type="checkbox"
              id="check"
              onClick={() => {
                setExpanded(!expanded);
                setNavBtn()
              }}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div
          className={expanded ? "navigation-menu expanded" : "navigation-menu"}
        >
          <ul>
            <li
              onClick={() => {
                setExpanded(!expanded);
                setNavBtn()
              }}
            >
              <a href="#home">Home</a>
            </li>
            <li
              onClick={() => {
                setExpanded(!expanded);
                setNavBtn()
              }}
            >
              <a href="#about">About</a>
            </li>
            <li
              onClick={() => {
                setExpanded(!expanded);
                setNavBtn()
              }}
            >
              <a href="#speakers">Speakers</a>
            </li>
            <li
              onClick={() => {
                setExpanded(!expanded);
                setNavBtn()
              }}
            >
              <a href="#organizers">Organizers</a>
            </li>
            <li
              onClick={() => {
                setExpanded(!expanded);
                setNavBtn()
              }}
            >
              <a href="#schedule">Schedule</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
