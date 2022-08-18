//packages react
import React, { useState } from "react";
import { Link } from "react-router-dom";
//components
import Button from "./Button";
import Menu from './Menu';
//css
import "./styles/navbar.css";

const Navbar = () => {
        const [active, setActive] = useState(false);
        const handleClick = () => {
            setActive(!active);
        };
return (
        <nav className="navbar">
            <h1 className="navbar-logo">
            HelloAsso 
            </h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={active ? "nav-menu active" : "nav-menu"}> 
            {Menu.map((item, index) => {
                    return (
                    <li key={index}>
                        <Link to={item.url} className={item.cName}>
                        {item.title}
                        </Link>
                    </li>
                    );
                })}
                </ul>
            <Button>SIGN UP</Button>
        </nav>
    );
    };

    export default Navbar;
