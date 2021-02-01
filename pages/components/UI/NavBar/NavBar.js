import React, { Component } from 'react'

export default class NavBar extends Component {

    render() {
        return (
            <header>
            <nav>
                <ul>
                    <li className="custom-underline" >Home</li>
                    <li className="custom-underline" >Resume </li>
                    <li className="custom-underline" >Projects </li>
                    <li className="custom-underline" >Contact </li>
                </ul>
                <select id="languages" name="languages">
                  <option value="Portugues">Portugues</option>
                  <option value="English">English</option>
                  <option value="Espanol">Espanol</option>
                </select>
            </nav>
        </header>
        )
    }
}
