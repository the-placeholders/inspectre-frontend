import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ResultsPage from "./ResultsPage";
import "../css/searchpage.css";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: null,
      stateName: null,
    };
  }

  handleChangeCityName = (e) => {
    this.setState({ cityName: e.target.value });
    console.log(this.state.cityName);
  };

  handleChangeStateName = (e) => {
    this.setState({ stateName: e.target.value });
    console.log(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getHauntedPlaces(this.state.cityName, this.state.stateName);
    console.log("buttonclicked");
  };
  render() {
    return (
      <>
        <Row className="g-2">
          <Col md={3}>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Enter A City Name"
            >
              <Form.Control
                onChange={this.handleChangeCityName}
                type="text"
                placeholder="City Name"
                value={this.state.value}
              />
            </FloatingLabel>
          </Col>
          <Col md={2}>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Please Select A State"
            >
              <Form.Select
                onChange={this.handleChangeStateName}
                aria-label="Floating label select example"
              >
                <option>Choose A State</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md={1}>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Col>
        </Row>
        {this.props.hauntedPlaces.length > 0 &&
          this.props.hauntedPlaces.map((place) => (
            <ResultsPage place={place} />
          ))}
      </>
    );
  }
}

export default SearchPage;
