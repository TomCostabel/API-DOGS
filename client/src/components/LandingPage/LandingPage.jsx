import React from "react";
import { Link } from "react-router-dom";

import "../LandingPage/LandingPage.css";

const LandingPage = () => {
    return (
        <div className="coco">
            {/* <h1 className="text-landing">Welcome to the dog API !</h1> */}
            <Link to="/Home">
                <button className="boton-landing">Click Here! </button>
            </Link>
        </div>
    );
};

export default LandingPage;
