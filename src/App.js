import React from "react";
import LoginButton from "./components/LoginButton";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import LibraryOfDeath from "./components/LibraryOfDeath.js";
import SearchPage from "./components/SearchPage.js";
import ResultsPage from "./components/ResultsPage.js";
import About from "./components/About.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import Profile from "./Profile.js";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Header>
          <LoginButton />
        </Header>
        <Main />

        {/* {this.props.auth0.isAuthenticated && (
          <> */}
        <Router>
          <Switch>
            <Route exact path="/libraryofdeath">
              <LibraryOfDeath /*user={this.props.auth0.user}*/ />
            </Route>
            <Route exact path="/searchpage">
              <SearchPage /*user={this.props.auth0.user}*/ />
            </Route>
            <Route exact path="/resultspage">
              <ResultsPage /*user={this.props.auth0.user}*/ />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
        {/* </>
        )} */}
        <Footer />
      </>
    );
  }
}

// export default withAuth0(App);
export default App;
