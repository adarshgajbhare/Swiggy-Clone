import logo from "../utils/1.png";
import {
  BANGALORE_API,
  DELHI_API,
  HYDERABAD_API,
  MUMBAI_API,
  NANDED_API,
  PUNE_API,
} from "../utils/constants";
import React, { useState, useEffect , useRef } from "react";
import "../CSS/style.css";

const Header = ({ onAPIKeyChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleClick = () => {
    setIsDarkMode((prevMode) => !prevMode);

    // Update the body background color based on the current mode
    document.body.style.backgroundColor = isDarkMode ? "#d4a373" : "#11151c";
  };

  return (
    <header className="menu__wrapper">
      <div className="menu__bar">
        <a href="#" title="Home" aria-label="home" className="logo">
          <img src={logo} alt="" />
        </a>
        <nav>
          <ul className="navigation hide">
            <li>
              <button>
                <div className="loader"></div>
                Location
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                >
                  <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                </svg>
              </button>
              <div className="dropdown__wrapper">
                <div className="dropdown">
                  <ul className="list-items-with-description">
                    <li>
                      <div className="item-title">
                        <p
                          onClick={() => {
                            onAPIKeyChange(PUNE_API);
                            console.log("api changed to pune");
                          }}
                        >
                          Pune
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item-title">
                        <p
                          onClick={() => {
                            onAPIKeyChange(MUMBAI_API);
                            console.log("api changed to mumbai");
                          }}
                        >
                          Mumbai
                        </p>
                      </div>
                    </li>
                    <li>
                      <div
                        className="item-title"
                        onClick={() => {
                          onAPIKeyChange(BANGALORE_API);
                          console.log("api changed to BANGALORE");
                        }}
                      >
                        <p>Bangalore</p>
                      </div>
                    </li>
                    <li>
                      <div
                        className="item-title"
                        onClick={() => {
                          onAPIKeyChange(NANDED_API);
                          console.log("api changed to Nanded");
                        }}
                      >
                        <p>Nanded</p>
                      </div>
                    </li>
                    <li>
                      <div
                        className="item-title"
                        onClick={() => {
                          onAPIKeyChange(DELHI_API);
                          console.log("api changed to Nanded");
                        }}
                      >
                        <p>Delhi</p>
                      </div>
                    </li>
                    <li>
                      <div
                        className="item-title"
                        onClick={() => {
                          onAPIKeyChange(HYDERABAD_API);
                          console.log("api changed to Nanded");
                        }}
                      >
                        <p>Hyderabad</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="#home" title="home">
                Home
              </a>
            </li>
            <li>
              <a href="#offers" title="offers">
                Offers
              </a>
            </li>
            <li>
              <a href="#help" title="help">
                Help
              </a>
            </li>
            <li>
              <a href="#cart" title="cart">
                Cart
              </a>
            </li>
            <li>
              <a href="#about" title="about">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="toggleWrapper" onClick={handleToggleClick}>
        <input type="checkbox" className="dn" id="dn" />
        <label htmlFor="dn" className="toggle" onClick={handleToggleClick}>
          <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
          </span>
          <span className="star star--1"></span>
          <span className="star star--2"></span>
          <span className="star star--3"></span>
          <span className="star star--4"></span>
          <span className="star star--5"></span>
          <span className="star star--6"></span>
        </label>
      </div>
      <div className="action-buttons hide">
        <a href="#log-in" title="Log in" className="secondary">
          Log In
        </a>
        <a href="#sign-up" title="Sign up" className="primary">
          Sign up
        </a>
      </div>
      <button aria-label="Open menu" className="burger-menu" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 8l16 0" />
          <path d="M4 16l16 0" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
