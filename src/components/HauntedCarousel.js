import { Component } from "react"
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "./CarouselItem";

export default class HauntedCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselIndex: 0
        }
    }
    handleDel = (toRemove) => {
        this.props.handleDel(toRemove);
        if (this.state.carouselIndex > 0) {
            this.setState({carouselIndex: this.state.carouselIndex - 1});
        }
    }
    render() {
        return (
            <Container>
            <Carousel activeIndex={this.state.carouselIndex} onSelect={(e) => {this.setState({carouselIndex: e})}}>
                  {this.props.savedPlaces.map(place => <Carousel.Item><CarouselItem place={place} handleDel={this.handleDel}/></Carousel.Item>)}
            </Carousel>
            </Container>
        )
    }

}