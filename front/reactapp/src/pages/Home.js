import React, {Component} from 'react';
import CarouselBox from "../components/CarouselBox";
import {Card, Col, Container, Row,Image} from "react-bootstrap";
import admin from "./admin.jpg";
import "./about.css";
import chief from "./chief.jpg";
import waiter from "./waiter.jpg";

class Home extends Component {
    render() {
        return (
            <>
<CarouselBox/>
      <Container className="mt-5">
         <Row>
             <Col>
                 <Card style={{width:"300px"}}>
                     <Image src={admin} className="Admincard"/>
                     <Card.Body>
                         <Card.Title>Admin</Card.Title>
                         <Card.Text><p>The profession of a cafe administrator is also known as a hall manager...</p></Card.Text>
                     </Card.Body>
                 </Card>
             </Col>
             <Col >
                 <Card style={{width:"300px"}}>
                     <Image src={waiter} className="Admincard"/>
                     <Card.Body>
                         <Card.Title>Waiter</Card.Title>
                         <Card.Text><p>The profession of a waiter is not as simple as it seems at first glance. This person is the
                             "face" and "soul"...</p></Card.Text>
                     </Card.Body>
                 </Card>
             </Col>
             <Col>
                 <Card style={{width:"300px"}} >
                     <Image src={chief} className="Admincard"/>
                     <Card.Body>
                         <Card.Title>Chief</Card.Title>
                         <Card.Text><p>A chief is a person who heads and controls all the processes taking place in the kitchen...</p></Card.Text>
                     </Card.Body>
                 </Card>
             </Col>
         </Row>


      </Container>
            </>
        );
    }
}

export default Home;