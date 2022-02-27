import React, {Component} from 'react';
import {Container, Form,Button} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <Container style={{width:"500px"}}>
                <h1 className="text-center text-dark">Contact us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                          <Form.Label><p className="text-dark">Email address</p></Form.Label>
                        <Form.Control type="email" placeholder="Enter Email"/>
                        <Form.Text className="text-dark">
                            We will never share your Email with other users
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="text-light">Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" className="text-dark" label="Check me out"/>
                        <Button variant="warning" type="submit" className="text-dark">Submit</Button>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default Contacts;