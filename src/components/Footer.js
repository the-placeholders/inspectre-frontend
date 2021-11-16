import React from "react";
import Navbar from "react-bootstrap/Navbar";

class Footer extends React.Component {
  render() {
    return (
      <Navbar
        fixed="bottom"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <p style={{ color: "grey", margin: "auto" }}>
          {" "}
          &copy; The Placeholders 2021{" "}
        </p>
      </Navbar>
    );
  }
}

export default Footer;
