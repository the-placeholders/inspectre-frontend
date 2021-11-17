import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton.js";
import "../css/header.css";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand id="logo">{`In\{spectre\}`}</Navbar.Brand>
        </Navbar>
    );
  }
}

export default Header;
