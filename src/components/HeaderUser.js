import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogoutButton from "./LogoutButton.js";
import "../css/header.css";

class HeaderUser extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand id="logo">{`In\{spectre\}`}</Navbar.Brand>
        {this.props.user && (
          <>
            <NavItem>
              <Link to="/libraryofdeath" className="nav-link">
                Library of Death
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/searchpage" className="nav-link">
                Find Haunts
              </Link>
            </NavItem>
            <div id="right-nav">
              <NavItem>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </NavItem>
            </div>
          </>
        )}
        {this.props.user && (
          <LogoutButton
            style={{
              margin: "20px",
              filter: "drop-shadow(0 1px 3px rgb(0, 238, 255))",
            }}
          />
        )}
      </Navbar>
    );
  }
}

export default HeaderUser;
