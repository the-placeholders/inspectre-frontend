import React from "react";
import Row from "react-bootstrap/Row";
import "../css/title.css";

class Title extends React.Component {
  render() {
    return (
      <Row>
        <section>
          <div class="hero-container">
            <div class="environment"></div>
            <h2 class="hero glitch layers" data-text="In{spectre}">
              <span>{`In\{spectre\}`}</span>
            </h2>
          </div>
        </section>
      </Row>
    );
  }
}

export default Title;
