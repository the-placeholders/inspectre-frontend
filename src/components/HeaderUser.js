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
        {/*DONE TODO: if the user is logged in, render the `LogoutButton` */}
        {this.props.user && <LogoutButton />}
      </Navbar>
    );
  }
}

export default HeaderUser;