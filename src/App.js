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
import axios from "axios";
// import Profile from "./Profile.js";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hauntedPlaces: [],
    };
  }

  //   this is for library of death
  //   getUserLibrary = async()=>{
  //     if (this.props.auth0.isAuthenticated) {
  //       const res = await this.props.auth0.getIdTokenClaims();
  //       const jwt = res.__raw;
  //         console.log(jwt)
  //       const config = {
  //         headers: { "Authorization": `Bearer ${jwt}` },
  //         method: 'get',
  //         baseURL: process.env.REACT_APP_SERVER_URL,
  //         url: 'library'
  //       }
  //       const userLibrary = await axios(config);
  //       this.setState({ userLibrary: userLibrary.data });
  //   }
  // }

  // componentDidMount(){
  //   this.getUserLibrary();
  //   }

  getHauntedPlaces = async (cityName, stateName) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/location?city=${cityName}&state=${stateName}`;
    console.log(process.env.REACT_APP_SERVER_URL);
    console.log(url);
    try {
      console.log("HELLO");
      let response = await axios.get(url);
      console.log(response.data);
      this.setState({ hauntedPlaces: response.data });
    } catch (err) {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <>
        <Header>
          <LoginButton />
        </Header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </Router>
        {/* {this.props.auth0.isAuthenticated && (
          <> */}
        <Router>
          <Switch>
            <Route exact path="/libraryofdeath">
              <LibraryOfDeath /*user={this.props.auth0.user}*/ />
            </Route>
            <Route exact path="/searchpage">
              <SearchPage
                hauntedPlaces={this.state.hauntedPlaces}
                getHauntedPlaces={this.getHauntedPlaces}
              />
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
