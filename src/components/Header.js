import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton.js";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>{`In\{spectre\}`}</Navbar.Brand>
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
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
          </>
        )}
        {/*DONE TODO: if the user is logged in, render the `LogoutButton` */}
        {this.props.user && <LogoutButton />}
      </Navbar>
    );
  }
}

export default Header;
