import React, {Component} from 'react';
import {Button, Container, Form} from "react-bootstrap";

class Registration extends Component {
    render() {
        return (
            <Container style={{width:"500px"}}>
                <h1 className="text-center text-dark" >Registration</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="text-dark">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email"/>
                        <Form.Text className="text-dark">
                            We will never share your Email with other users
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword">
                        <Form.Label></Form.Label>
                        <Form.Control placeholder="Enter password"  rows="1"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check className="text-dark" type="checkbox" label="Check me out"/>
                        <Button variant="warning" type="submit" className="text-dark">Submit</Button>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default Registration;