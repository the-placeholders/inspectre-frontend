import React from "react";
import HauntedCarousel from "./HauntedCarousel";
import "../css/library.css";

class LibraryOfDeath extends React.Component {
  //app.get

  componentDidMount() {
    this.props.getUserLibrary();
  }

  render() {
    return (
      <>
      <div id='lib-background'>
        <h1>Library of Death</h1>
        <HauntedCarousel
          savedPlaces={this.props.savedPlaces}
          handleDel={this.props.handleDel}
        />
        </div>
      </>
    );
  }
}

export default LibraryOfDeath;
