import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { noOfClicks: 0, noOfConfirms: 0, noOfDenys: 0 };
  }

  updateTotal = () => {
    this.setState({
      noOfClicks: this.state.noOfConfirms + this.state.noOfDenys + 1,
    });
  };

  handleConfirm = () => {
    this.setState({ noOfConfirms: this.state.noOfConfirms + 1 });
    this.updateTotal();
  };

  handleDeny = () => {
    this.setState({ noOfDenys: this.state.noOfDenys + 1 });
    this.updateTotal();
  };

  handleAdd = () => {
    this.props.addLibraryPlaces(this.props.place);
  };
  render() {
    return (
      <Card style={{ background: "#111", width: "26rem" }}>
        <Card.Img
          variant="top"
          src={
            this.props.place.images.length > 0
              ? this.props.place.images[0]
              : "https://images.unsplash.com/photo-1610144591825-d5e31490f7c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
          }
          alt={this.props.place.city}
        />
        <Card.Body style={{ backgroundColor: "grey" }}>
          <Card.Title>{this.props.place.location}</Card.Title>
          <Card.Text>
            {this.props.place.description}
            <br />
            Latitude : {this.props.place.latitude} Longitude :{" "}
            {this.props.place.longitude}
          </Card.Text>
          <Button variant="secondary" onClick={this.handleConfirm}>
            👻{`: ${this.state.noOfConfirms}`}
          </Button>
          <Button variant="secondary" onClick={this.handleDeny}>
            🚫{`: ${this.state.noOfDenys}`}
          </Button>
          <p>Visits: {this.state.noOfClicks}</p>
          <Button variant="secondary" onClick={this.handleAdd}>
            Add to my library
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ResultsPage;
