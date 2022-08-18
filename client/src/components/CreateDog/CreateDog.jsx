import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import "../CreateDog/CreateDog.css";
import Imagen from "../../imagenes/fondoForm.png";

export default function CreateDog() {
    return (
        <div>
            <NavBar />
            <br />
            <br />
            <div className="container-form">
                {/* <div className="fondo"></div> */}
                <img className="fondazo" src={Imagen} />
                <form className="container-input">
                    <h1 className="titulo-form">CREATE DOG!</h1>

                    <h3>Hola</h3>
                    <input type="text" placeholder="..." />
                    <h3>Hola</h3>
                    <input type="text" placeholder="..." />
                    <h3>Hola</h3>
                    <input type="text" placeholder="..." />
                    <h3>Hola</h3>
                    <input type="text" placeholder="..." />
                    <h3>Hola</h3>
                    <input type="text" placeholder="..." />
                    <h3>Hola</h3>
                    <input type="text" placeholder="..." />
                    {/* <img src={Imagen} /> */}
                    <br />
                    <br />

                    <button className="button-form">Submit</button>
                </form>
            </div>
        </div>
    );
}
