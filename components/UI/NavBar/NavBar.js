import React, {Component} from 'react';

import LanguageSelector from '../../LanguageSelector/LanguageSelector'

import {
    Navbar,
    Nav
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
                                <Nav.Link className="NavItem custom-underline" href="Rafhael_Marques_Resume.pdf">Resume</Nav.Link>
                                <Nav.Link className="NavItem custom-underline" href="#projects">Projects</Nav.Link>
                                <Nav.Link className="NavItem custom-underline" href="#contact">Contact</Nav.Link>
                            </Nav>
                            <div className="DropDownMobile" >
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

