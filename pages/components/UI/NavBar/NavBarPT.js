import React, { Component } from 'react';

import LanguageSelector from '../../LanguageSelector/LanguageSelector'

export default class NavBar extends Component {

    render() {
        return (
            <header>
            <nav>
                <ul>
                    <li className="custom-underline" >Inicio</li>
                    <li className="custom-underline" >Resume </li>
                    <li className="custom-underline" >Projects </li>
                    <li className="custom-underline" >Contact </li>
                </ul>
               <div>
               <LanguageSelector />
               </div>
            </nav>
        </header>
        )
    }
}
