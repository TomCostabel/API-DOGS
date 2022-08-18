import React from "react";
import { Link } from "react-router-dom";

import "../LandingPage/LandingPage.css";

const LandingPage = () => {
    return (
        <div className="coco">
            <div className="text-landing">
                <h1>Hello, </h1>
                <h1>welcome to</h1>
                <h1>the doggie API!</h1>
            </div>
            <Link to="/Home">
                <button className="boton-landing">Click Here! </button>
            </Link>
        </div>
    );
};

export default LandingPage;
