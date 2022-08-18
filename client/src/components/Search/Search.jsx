import React from "react";
import "../Search/Search.css";

export default function Search() {
    return (
        <div>
            <input placeholder="Breed..." />
            <button className="boton">Search</button>
        </div>
    );
}
