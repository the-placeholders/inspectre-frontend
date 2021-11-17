import React from "react";
import "../css/warning.css";
import Container from "react-bootstrap/Container";

class Warning extends React.Component {
  render() {
    return (
      <div style={{ position: "relative", width: "1000px" }}>
        <p id="warning">
          <str style={{ color: "red" }}>WARNING: </str>the locations described
          beyond this page may be in any manner of disrepair, public or private,
          and are presumably <em>haunted</em>. Do not trespass. Ghost hunters
          and paranormal investigators assume their own risk.{" "}
        </p>
      </div>
    );
  }
}

export default Warning;
