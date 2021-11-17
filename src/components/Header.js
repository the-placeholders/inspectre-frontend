import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton.js";
import "../css/header.css";
import Nav from "react-bootstrap/Nav";
class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand id="logo">{`In\{spectre\}`}</Navbar.Brand>
        <Nav className="justify-content-end">
          <LoginButton />
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
