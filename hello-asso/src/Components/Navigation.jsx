import React, { useState } from "react";
import Button from "./Button";
import Menu from "./Menu";
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
        <div className={active ? "menu-active" : "menu-hidden"}>
        <ul className={active ? "nav-menu active" : "nav-menu"}>
        {Menu.map((item, index) => {
            return (
            <li key={index}>
                <a href={item.url} className={item.cName}>
                {item.title}
                </a>
            </li>
            );
        })}
        </ul>
        </div>
        <Button>SIGN UP</Button>
    </nav>
    );
    };

    export default Navbar;
