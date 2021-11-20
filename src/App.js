import React from "react";
import LoginButton from "./components/LoginButton";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import LibraryOfDeath from "./components/LibraryOfDeath.js";
import SearchPage from "./components/SearchPage.js";
// import ResultsPage from "./components/ResultsPage.js";
import About from "./components/About.js";
import HeaderUser from "./components/HeaderUser.js"
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
      savedPlaces: []
    };
  }

  getUserLibrary = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "get",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: "/library",
      };
      const userLibrary = await axios(config);
      console.log(userLibrary.data);

      this.setState({
        savedPlaces: userLibrary.data[0].locations,
      });

      console.log(this.state.savedPlaces)
    } else {
      console.log("NOT IN LIB");
    }
  };

  handleDel = async (toRemove) => {
    console.log(`savedPlaces: ${this.state.savedPlaces}`);
    let remainingPlaces = this.state.savedPlaces.filter(place => place !== toRemove)
    this.setState({ savedPlaces: remainingPlaces })
    console.log(`remianing places : ${remainingPlaces}`)
    this.putUserLibrary();
  }



  getHauntedPlaces = async (cityName, stateName) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/location?city=${cityName}&state=${stateName}`;
    console.log(process.env.REACT_APP_SERVER_URL);
    console.log(url);
    try {
      let response = await axios.get(url);
      console.log(response.data);
      this.setState({ hauntedPlaces: response.data });
    } catch (err) {
      this.setState({ error: true });
    }
  };


  addLibraryPlaces = (addedPlace) => {
    this.setState({ savedPlaces: [...this.state.savedPlaces, addedPlace] })
    console.log(this.state.savedPlaces)
    this.putUserLibrary()
  }

  putUserLibrary = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      //console.log(jwt);
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "put",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: "/library",
        data: {
          locations: this.state.savedPlaces,
          email: this.props.auth0.user.email,
          reviews: []
        }
      };
      const userLibrary = await axios(config);
      //console.log(userLibrary.data);
      this.getUserLibrary()

    } else {
      console.log("not put");
    }
  };

  render() {
    return (
      <>
        {!this.props.auth0.isAuthenticated ?
          <>
              <Header />
              <Main />
          </>
          :
           
     
          <>

            <Router>
              <HeaderUser user={this.props.auth0.user.email} />
              <Switch>
                <Route exact path="/libraryofdeath">
                  <LibraryOfDeath
                    getUserLibrary={this.getUserLibrary}
                    user={this.props.auth0.user}
                    savedPlaces={this.state.savedPlaces}
                    handleDel={this.handleDel}
                  />
                </Route>
                <Route exact path="/searchpage">
                  <SearchPage
                    hauntedPlaces={this.state.hauntedPlaces}
                    getHauntedPlaces={this.getHauntedPlaces}
                    user={this.props.auth0.user}
                    addLibraryPlaces={this.addLibraryPlaces}
                  />
                </Route>
                <Route exact path="/about">
                  <About user={this.props.auth0.user} />
                </Route>
              </Switch>
            </Router>
          </>
        }
        <Footer />
      </>
    );
  }
}

export default withAuth0(App);
