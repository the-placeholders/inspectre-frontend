import React from "react";
import Card from 'react-bootstrap/Card'

class ResultsPage extends React.Component {
  constructor(props){
    super(props);
      this.state= {noOfClicks : 0}
    }
    
handleClick =() =>{
  this.setState({noOfClicks : this.state.noOfClicks+1});
}
  render() {
    return (
      
     
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.place.images } alt={this.props.place.city} />
      <Card.Body>
      <Card.Title>{this.props.place.location}</Card.Title>
      <Card.Text>
        {this.props.place.description}
        Latitude : {this.props.place.latitude}
        Longitude :{this.props.place.longitude}
      </Card.Text>
      <Button variant="primary" onClick={this.handleClick}>Favourite</Button>
      <p>No of favourites &#xf6e2;: {this.state.noOfClicks}</p>
      </Card.Body>
    </Card>
    
    );
  }
}

export default ResultsPage;
