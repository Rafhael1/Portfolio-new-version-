import React, {Component} from 'react';

import LanguageSelector from '../../LanguageSelector/LanguageSelector'

import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    Glyphicon,
    Row,
    Col
} from "react-bootstrap";

export default class NavBar extends Component {

    render() {
        return (
            <header>
                <nav>
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link className="NavItem custom-underline" href="#home">Home</Nav.Link>
                                <Nav.Link className="NavItem custom-underline" href="#home">Resume</Nav.Link>
                                <Nav.Link className="NavItem custom-underline" href="#projects">Projects</Nav.Link>
                                <Nav.Link className="NavItem custom-underline" href="#contact">Contact</Nav.Link>
                            </Nav>
                            <div>
                                <LanguageSelector/>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </nav>
                <div className="mainTitle">
                    <h1>Rafhael Marques</h1>
                    <h2>Web Developer</h2>
                </div>
            </header>
        )
    }
}

/*
    <header>
                <nav>
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" >
                                <Nav.Link className="NavItem custom-underline" href="#home">Home</Nav.Link>
                                <Nav.Link className="NavItem custom-underline" href="#home">Resume</Nav.Link>
                                <Nav.Link className="NavItem custom-underline" href="#projects">Projects</Nav.Link>
                                <Nav.Link className="NavItem custom-underline" href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </nav>
                <div className="title">
                    <h1>Rafhael Marques</h1>
                    <h2>Web Developer</h2>
                </div>
            </header> */