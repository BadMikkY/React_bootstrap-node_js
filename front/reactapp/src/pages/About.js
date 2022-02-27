import React from 'react';
import {Col, Nav, Row, Tab} from "react-bootstrap";
import adminImg from "./admin.jpg";
import "./about.css";
import waiterImg from "./waiter.jpg";
import chiefImg from "./chief.jpg";

function About() {
    return (
        <Tab.Container id="left-tabs" defaultActiveKey="first">
            <Row className="mt-5 m-lg-5">
                <Col sm={3}>
                    <Nav variant="pills"   className="flex-column">
                        <Nav.Item   >
                            <Nav.Link eventKey="first">Confident administration</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Hard working chiefs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Friendly waiters</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <img className="aboutimg" src={adminImg}/>
                            <p class="lead">The profession of a cafe administrator is also known as a hall manager, maitre d' or
                                manager.
                                This is the person who manages the activities of the institution as a whole. The main
                                thing that
                                the cafe administrator does is to organize the work
                                of the staff (cooks, waiters, cloakroom attendants, cleaners, security guards, etc.),
                                controls the quality of service, solves possible conflict situations and creates a good
                                mood for visitors.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <img className="aboutimg" src={chiefImg}/>
                            <p class="lead">A chef is a person who heads and controls all the processes taking place in the kitchen.
                                Both a man and a woman can work in this position. The tasks of the chef include the
                                creation and development of menus, submitting applications for products, monitoring
                                the sanitary conditions of the kitchen and many others.
                            </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <img className="aboutimg" src={waiterImg}/>
                            <p class="lead">
                                The profession of a waiter is not as simple as it seems at first glance.
                                This person is the "face" and "soul"
                                of any bar, cafe or restaurant. The mood of the client
                                depends on it, and hence the profit of the institution</p>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default About;