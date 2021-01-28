import React from 'react';


const NavBar = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Resume </li>
                    <li>Projects </li>
                    <li>Contact </li>
                </ul>
                <select id="cars" name="cars">
                  <option value="volvo">Portugues</option>
                  <option value="saab">English</option>
                  <option value="saab">Espanol</option>
                </select>
            </nav>
        </header>
    )
}

export default NavBar