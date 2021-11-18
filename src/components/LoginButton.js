import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <Button
        style={{ filter: "drop-shadow(0 1px 3px)" }}
        variant="outline-info"
        onClick={loginWithRedirect}
      >
        Log In
      </Button>
    )
  );
}

export default LoginButton;
