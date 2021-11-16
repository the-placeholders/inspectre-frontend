import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Profile from "./Profile.js";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Header>
          <LoginButton />
        </Header>
        <Main />

        {this.props.auth0.isAuthenticated && (
          <>
            <Router>
              <Switch>
                <Route exact path="/libraryofdeath">
                  <LibraryOfDeath user={this.props.auth0.user} />
                </Route>
                <Route exact path="/searchpage">
                  <SearchPage user={this.props.auth0.user} />
                </Route>
                <Route exact path="/resultspage">
                  <ResultsPage user={this.props.auth0.user} />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
              </Switch>
            </Router>
          </>
        )}
        <Footer />
      </>
    );
  }
}

export default withAuth0(App);
