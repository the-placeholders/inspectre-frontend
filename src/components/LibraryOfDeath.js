import React from "react";

class LibraryOfDeath extends React.Component {
  //app.get

  componentDidMount() {
    this.props.getUserLibrary();
  }
  
  render() {
    return (
      <>
        <h1></h1>
      </>
    );
  }
}

export default LibraryOfDeath;
