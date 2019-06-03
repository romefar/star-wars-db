import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return(
        <header className="header d-flex ">
            <h3>
                <Link className = "header__link" to="/">
                    Star Wars DB
                </Link>
            </h3>

            <ul className = "d-flex header__menu">
                <li className="header__menu-item ">
                    <Link to="/people/">People</Link>
                </li>
                <li className="header__menu-item ">
                    <Link to="/planets/">Planets</Link>
                </li>
                <li className="header__menu-item ">
                    <Link to="/starships/">Starships</Link>
                </li>

                <li className="header__menu-item ">
                    <Link to="/login">Login</Link>
                </li>
                <li className="header__menu-item ">
                    <Link to="/secret">Secret</Link>
                </li>
            </ul>
        </header>
    );
}


export default Header;