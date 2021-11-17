import React from "react";
import Title from "./Title.js";

class Main extends React.Component {
  render() {
    return (
      <>
        <Title
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* <LoginForm></LoginForm> */}
      </>
    );
  }
}

export default Main;
