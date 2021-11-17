import React from "react";
import Title from "./Title.js";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Warning from "./Warning.js";
import Container from "react-bootstrap/Container";
import LoginButton from "./LoginButton.js";
import { withAuth0 } from "@auth0/auth0-react";

class Main extends React.Component {
  render() {
    return (
      <>
        <Title
          style={{
            margin: "auto",
            // position: "absolute",
            // left: "50%",
            // top: "50%",
            // transform: "translate(-50%, -50%)",
          }}
        />
        {/* <Row> */}

        <Container
          style={{
            width: "50em",
          }}
        >
          <Row>
            <Warning />
          </Row>
          <Row>
            <LoginButton />
            {/* <Button style={{ margin: "auto", width: "100px" }} variant="dark">
              Enter
            </Button> */}
          </Row>
        </Container>
        {/* </Row> */}
        {/* <LoginForm></LoginForm> */}
      </>
    );
  }
}

export default withAuth0(Main);
