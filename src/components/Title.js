import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/title.css";

class Title extends React.Component {
  render() {
    return (
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <h1 style={{ margin: "auto" }} class="glitch">
            <span aria-hidden="true">{`In\{spectre\}`}</span>
            {`In\{spectre\}`}
            <span aria-hidden="true">{`In\{spectre\}`}</span>
          </h1>
        </Col>
        <Col md={4}></Col>
      </Row>
    );
  }
}

export default Title;
