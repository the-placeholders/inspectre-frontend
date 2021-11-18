import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <Button
        style={{ filter: "drop-shadow(0 1px 3px)" }}
        variant="outline-info"
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        Log Out
      </Button>
    )
  );
}

export default LogoutButton;
