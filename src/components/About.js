import React from "react";
import Card from "react-bootstrap/Card";
import minImg from "../images/Min.jpeg";
import brannonImg from "../images/Brannon.jpg";
import andrewImg from "../images/andrew.jpg";
import scottImg from "../images/scott.jpg";
import raajImg from "../images/raaj.jpg";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import { width } from "dom-helpers";

class About extends React.Component {
  render() {
    return (
      <>
        <Container style={{ width: "100vw", margin: "auto", padding: "30px" }}>
          <Row>
            <Col md={2}>
              <Card style={{ width: "11rem", margin: "10px" }}>
                <Card.Img variant="top" src={minImg} />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Minhang Xie
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    Former clinical psychology and neuroscience researcher on
                    his way to becoming a software developer. Amateur paranormal
                    enthusiast.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card style={{ width: "11rem", margin: "10px" }}>
                <Card.Img variant="top" src={brannonImg} />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Brannon Starnes
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    Deep Sea Diver to Software Developer. Ready to find
                    innovative and creative solutions to any problem. Knows a
                    ghost hides his keys.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card style={{ width: "11rem", margin: "10px" }}>
                <Card.Img variant="top" src={andrewImg} />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>Andrew Kim</Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    Rez raised techie with a background in seafood: likes to
                    collect scary stories.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card style={{ width: "11rem", margin: "10px" }}>
                <Card.Img variant="top" src={raajImg} />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Raajvardhan Chaukulkar
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    Non-traditional background , from a career in aviation,
                    finally took the leap to pursue my passion in Tech!!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card style={{ width: "11rem", margin: "10px" }}>
                <Card.Img variant="top" src={scottImg} />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Scott Lease
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    Moving from the niche world of X-ray service to the more
                    exciting evolving world of programming.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default About;
