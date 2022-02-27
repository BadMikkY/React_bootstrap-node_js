import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import reception1Img from "../assets/reception1.jpg";
import Waiters1Img from "../assets/Waiters1.jpg";

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={reception1Img}
                        alt="Receprion"
                    />
                    <Carousel.Caption>
                        <h3>Reception</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={Waiters1Img}
                        alt="Waiters"
                    />
                    <Carousel.Caption>
                        <h3>Waiters</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;