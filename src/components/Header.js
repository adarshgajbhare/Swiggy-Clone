import logo from "../utils/1.png";

import React from "react";

const Header = () => {
  return (
    <header className="menu__wrapper">
      <div className="menu__bar">
        <a href="#" title="Home" aria-label="home" className="logo">
          <img src={logo} alt="" srcset="" />
          {/* <svg
            aria-label="Vercel logotype"
            height="22"
            role="img"
            viewBox="0 0 283 64"
          >
            <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path>
          </svg> */}
        </a>
        <nav>
          <ul className="navigation hide">
            <li>
              <button>
                Select Location
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
                        <p>Pune</p>
                      </div>
                    </li>
                    <li>
                      <div className="item-title">
                        <p>Mumbai</p>
                      </div>
                    </li>
                    <li>
                      <div className="item-title">
                        <p>Bangalore</p>
                      </div>
                    </li>
                    <li>
                      <div className="item-title">
                        <p>Nanded</p>
                      </div>
                    </li>
                    <li>
                      <div className="item-title">
                        <p>Delhi</p>
                      </div>
                    </li>
                    <li>
                      <div className="item-title">
                        <p>Kolkata</p>
                      </div>
                    </li>
                    {/* Add more list items as needed */}
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
      
      <div className="toggleWrapper">
        <input type="checkbox" className="dn" id="dn" />
        <label htmlFor="dn" className="toggle">
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
