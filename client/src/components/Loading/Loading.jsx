import React from "react";
import "../Loading/Loading.css";
import NavBar from "../NavBar/NavBar";

export default function Loading() {
    return (
        <div>
            <div>
                {" "}
                <NavBar />
            </div>
            <div className="spinner"> </div>
        </div>
    );
}
