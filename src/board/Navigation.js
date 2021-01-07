import React, { useState } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "./dash.css";
import Widggie from "./img/widggie.png";
import LoginLogo from "./img/loginLogo.png";
import IMDB from "../imdb/IMDB";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function Navigation() {
  const [showWidget, setShowWidget] = useState(false);

  let widget;

  if (showWidget) {
    widget = <IMDB />;
  }

  return (
    <div>
      <div className="navigation">
        <Navbar className='nav'>
          <Navbar.Brand>
            <img src={Widggie} alt="logo" className="logo" width="100%" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>

            <Router>
              <Nav>
                <NavLink to="/login">
                  {/* <Link to="/signup" component={Signup}> */}
                  <img
                    src={LoginLogo}
                    alt="loginLogo"
                    className="loginLogo"
                    width="100%"
                  />
                  {/* </Link> */}
                </NavLink>
              </Nav>
            </Router>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <section className="dash-board">{widget}</section>
    </div>
  );
}

export default Navigation;
