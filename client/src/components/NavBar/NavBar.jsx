import React from "react";
import "../NavBar/NavBar.css";
// import Search from "../Search/Search";
import logo from "../../imagenes/logo1.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <Link to="/Home">
                <img className="logo-nav" src={logo} alt="foto-navbar" />
            </Link>
            {/* <div className="buscador">
                <Search />
            </div> */}

            <Link to="/Home/CreateDog">
                <button className="boton-createDog">Create Dog!</button>
            </Link>
        </div>
    );
};

export default NavBar;
