import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import "./about.css";
import destertImg from "../assets/destert.jpg";
import espressoImg from "../assets/espresso.jpg";
import kruassanImg from "../assets/kruassan.jpg";
import kruassan2Img from "../assets/kruassan2.jpg";
import LatteImg from "../assets/Latte.jpg";
function  Products() {
    return (
        <div>
            <Row className="m-lg-5 text-center border">
                <Col className="border bg-warning text-light">Product</Col>
                <Col className="border bg-warning text-light">Cost</Col>
                <Col className="border bg-warning text-light">Remove</Col>
            </Row>
            <Row className="m-lg-5 text-center">
                <Col><Button variant="warning"> <img className="image" src={destertImg}/></Button></Col>
                <Col><h3 className="cost text-dark">3$</h3></Col>
                <Col><Button className="button text-light" variant="warning">Remove</Button></Col>
            </Row>
            <Row className="m-lg-5 text-center">
                <Col><Button variant="warning"> <img className="image" src={espressoImg}/></Button></Col>
                <Col><h3 className="cost text-dark">2.5$</h3></Col>
                <Col><Button className="button text-light" variant="warning">Remove</Button></Col>
            </Row>
            <Row className="m-lg-5 text-center">
                <Col><Button variant="warning"> <img className="image" src={kruassanImg}/></Button></Col>
                <Col><h3 className="cost text-dark">1$</h3></Col>
                <Col><Button className="button text-light" variant="warning">Remove</Button></Col>
            </Row>
            <Row className="m-lg-5 text-center">
                <Col><Button variant="warning"> <img className="image" src={kruassan2Img}/></Button></Col>
                <Col><h3 className="cost text-dark">2.5$</h3></Col>
                <Col><Button className="button text-light" variant="warning">Remove</Button></Col>
            </Row>
            <Row className="m-lg-5 text-center">
                <Col><Button variant="warning"> <img className="image" src={LatteImg}/></Button></Col>
                <Col><h3 className="cost text-dark">1.5$</h3></Col>
                <Col><Button className="button text-light" variant="warning">Remove</Button></Col>
            </Row>
        </div>

    );
}

export default Products;