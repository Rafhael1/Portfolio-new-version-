import React, {Component} from 'react';

import LanguageSelector from '../../LanguageSelector/LanguageSelector'

import {
    Navbar,
    Nav
} from "react-bootstrap";

export default class NavBarPT extends Component {

    render() {
        return (
            <header>
                <nav>
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link className="NavItem custom-underline" href="Rafhael_Marques.pdf">Currículo</Nav.Link>
                                <Nav.Link className="NavItem custom-underline" href="#projects">Projetos</Nav.Link>
                                <Nav.Link className="NavItem custom-underline" href="#contact">Contato</Nav.Link>
                            </Nav>
                            <div className="DropDownMobile">
                                <LanguageSelector/>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </nav>
                <div className="mainTitle">
                    <h1>Rafhael Marques</h1>
                    <h2>Desenvolvedor Web</h2>
                </div>
            </header>
        )
    }
}

