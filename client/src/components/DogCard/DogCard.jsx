import React from "react";
import { Link } from "react-router-dom";
import "../DogCard/DogCard.css";

const DogCard = (props) => {
    // console.log(props);
    return (
        <div className="container-card">
            <Link to={`/home/breedDetail/${props.id}`}>
                <img className="imagen" src={props.image} alt="perro" />
            </Link>
            <h3>{props.name}</h3>

            <h6>{props.temperament}</h6>
            <h4>{props.peso} Kg.</h4>
        </div>
    );
};

export default DogCard;
