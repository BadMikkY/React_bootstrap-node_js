import React, {Component} from 'react';
import {Container, Form, FormControl, Nav, NavbarBrand,Navbar} from "react-bootstrap";
import logo from'./brand.jpg'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Link} from 'react';
class Header extends Component {
    render() {
        return (
            <div>
                <>

                <Navbar collapseOnSelect expand="md"   bg="warning" variant="light">
                    <Container>
                        <NavbarBrand  href="/">
                            Coffee-Night
                               <img
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                               />
                        </NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navbar-nav"/>
                        <NavbarCollapse id="responsive-navbar-nav">
                             <Nav className="mr-auto">
                                 <Nav.Link href="/">Home</Nav.Link>
                                 <Nav.Link href="/about">About us</Nav.Link>
                                 <Nav.Link href="/Contacts">Contacts</Nav.Link>
                                 <Nav.Link href="/Products">Products</Nav.Link>
                                 <Nav.Link href="/Registration">Registration</Nav.Link>
                             </Nav>
                        </NavbarCollapse>
                    </Container>
                </Navbar>




                    </>
            </div>

        );
    }
}

export default Header;