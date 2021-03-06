import React from "react";
import navbarBranding from "../assets/dev1.png";
import devConZmLogoPlus19 from "../assets/dev2.png";

function Header() {
  return (
    <header id="header">
      <nav
        className="navbar fixed  navbar-expand-lg navbar-light top-navbar"
        data-toggle="sticky-onscroll"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="d-flex flex-row my-flex-container">
            {/* Navbar Brand */}
            <div className="my-flex-item">
              <a className="navbar-brand" href="#header">
                <img src={navbarBranding} alt="DevConZM19" title="DevConZM19" />
              </a>
            </div>
            {/* Navbar Brand */}

            {/* Navbar Info */}
            <div className="d-flex flex-column my-flex-container">
              <div className="pr-4 pt-2 my-flex-item ml-auto">
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav pull-right smooth-scroll" data-testid="head-list">
                    <li className="nav-item">
                      <a className="nav-link active" href="#venue">
                        Venue
                </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#partners">
                        Partners
                </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#agenda">
                        Agenda
                </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#speakers">
                        Speakers
                </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#tickets">
                        Tickets
                </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                        About
                </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact_us">
                        Contact Us
                </a>
                    </li>
                    <li className="nav-item">
                      <a className="btn btn-outline-primary devcon" href="#devcon">
                        DevCon19
                </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pl-4 pt-5 my-flex-item"><img src={devConZmLogoPlus19} alt="DevConZM19" title="DevConZM19" /></div>
              <div className="pl-4 pt-5 event-date my-flex-item">17th<br />November<br />2019<br /></div>
              <div className="pl-5 pt-5 my-flex-item">
                <button type="button" className="btn btn-outline-light text-white">
                  Register Now
              </button>
              </div>
            </div>
            {/* Navbar Info */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
