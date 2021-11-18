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
        <Container style={{ width: "80%" }}>
          <Row>
            <Col md={2} lg={4}>
              <Card style={{ width: "13rem", margin: "10px" }}>
                <Card.Img variant="top" src={minImg} />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Minhang Xie
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2} lg={4}>
              <Card style={{ width: "13rem", margin: "10px" }}>
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

            <Col md={2} lg={4}>
              <Card style={{ width: "13rem", margin: "10px" }}>
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

            <Col md={2} lg={4}>
              <Card style={{ width: "13rem", margin: "10px" }}>
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

            <Col md={2} lg={4}>
              <Card style={{ width: "13rem", margin: "10px" }}>
                <Card.Img variant="top" src={scottImg} />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Scott Lease
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    Moving from the niche world of X-ray service to the more
                    exciting evolving world of programming, and ready to design
                    program that will find the ghost’s who steal everyone’s left
                    sock from the dryer.
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
