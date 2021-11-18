import { Component } from "react"
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "./CarouselItem";

export default class HauntedCarousel extends Component {

    render() {
        return (
            <Container>
            <Carousel>
                  {this.props.savedPlaces.map(place => <Carousel.Item><CarouselItem place={place}/></Carousel.Item>)}
            </Carousel>
            </Container>
        )
    }

}