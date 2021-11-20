import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="./#">
              SEARCH MAPS
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://supunvindula.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
