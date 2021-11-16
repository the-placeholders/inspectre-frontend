import React from "react";
import Container from "react-bootstrap/Container";
import "../css/title.css";

class Title extends React.Component {
  render() {
    return (
      <Container>
        <h1>{`In\{spectre\}`}</h1>
      </Container>
    );
  }
}

export default Title;
