import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import "../CreateDog/CreateDog.css";
import Imagen from "../../imagenes/fondoForm.png";
import { useDispatch, useSelector } from "react-redux";
import { createDog, getTemperaments } from "../../redux/actions/index.js";

export default function CreateDog() {
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);

    const [input, setInput] = useState({
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        lifespan: "",
        image: "",
        temperament: [],
    });
    const [errorazo, setErrorazo] = useState({});

    //------------------------------------------------------------VALIDACIONES----------------------------------------------------
    const validaciones = function (input) {
        const error = {};
        if (!input.name) {
            error.name = "Nombre es requerido";
        }
        if (!input.heightMin) {
            error.heightMin = "heightMin es requerido";
        }
        if (!input.heightMax) {
            error.heightMax = "heightMax es requerido";
        }
        if (!input.weightMin) {
            error.weightMin = "weightMin es requerido";
        }
        if (!input.weightMax) {
            error.weightMax = "weightMax es requerido";
        }
        if (!input.weightMax) {
            error.weightMax = "weightMax es requerido";
        }
        //--------------------heightMin----------------------------
        if (input.heightMin < 1) {
            error.heightMin = "heightMin no puede ser 0";
        }
        if (input.heightMin > input.heightMax) {
            error.heightMin = "heightMin no puede ser mayor que heightMax";
        }
        //--------------------heightMax----------------------------
        if (input.heightMax < 1) {
            error.heightMax = "heightMax no puede ser 0";
        }
        if (input.heightMax < input.heightMin) {
            error.heightMax = "heightMax no puede ser menor que heightMin";
        }
        if (input.heightMax > 105) {
            error.heightMax = "heightMax no puede ser mayor a 105";
        }
        //--------------------weightMin----------------------------
        if (input.weightMin < 1) {
            error.weightMin = "weightMin no puede ser 0";
        }
        if (input.weightMin > input.heightMax) {
            error.weightMin = "weightMin no puede ser mayor que heightMax";
        }
        //--------------------weightMax----------------------------
        if (input.weightMax < 1) {
            error.weightMax = "weightMax no puede ser 0";
        }
        if (input.weightMax > 110) {
            error.weightMax = "weightMax no puede ser mayor a 110";
        }
        if (input.weightMax < input.heightMin) {
            error.weightMax = "weightMax no puede ser menor que heightMin";
        }
    };

    //------------------------------------------------USE_EFFECTS----------------------------------------------------------------

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

    //------------------------------------------------HANDLE----------------------------------------------------------------

    const handleChangeInput = (e) => {
        e.preventDefault();
        setInput((input) => {
            const nuevoInput = {
                ...input,
                [e.target.name]: e.target.value,
            };
            const error = validaciones(nuevoInput);
            setErrorazo(error);
            return nuevoInput;
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (
            input.name &&
            input.heightMin &&
            input.heightMax &&
            input.weightMin &&
            input.weightMax &&
            input.lifespanMin &&
            input.lifespanMax &&
            input.temperament
        ) {
            dispatch(createDog(input));
            alert("Dog created!");
            setInput({
                name: "",
                heightMin: "",
                heightMax: "",
                weightMin: "",
                weightMax: "",
                lifespanMin: "",
                lifespanMax: "",
                image: "",
                temperament: [],
            });
        } else {
            alert("Please, fill in all the required fields");
        }
    }

    return (
        <div>
            <NavBar />
            <br />
            <br />
            <div className="container-form">
                <img className="fondazo" src={Imagen} alt="fondo-patitas" />
                <form
                    className="container-input"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <h1 className="titulo-form">CREATE DOG!</h1>

                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={(e) => handleChangeInput(e)}
                    />
                    <div>
                        <h4>Height (cm) </h4>
                        <label>Min:</label>
                        <input
                            type="text"
                            name="heightMin"
                            value={input.heightMin}
                            onChange={(e) => handleChangeInput(e)}
                        />
                        <label>Max:</label>
                        <input
                            type="text"
                            name="heightMax"
                            value={input.heightMax}
                            onChange={(e) => handleChangeInput(e)}
                        />
                    </div>
                    <div>
                        <h4>Weight (Kg)</h4>
                        <label>Min:</label>
                        <input
                            type="text"
                            name="weightMin"
                            value={input.weightMin}
                            onChange={(e) => handleChangeInput(e)}
                        />
                        <label>Max:</label>
                        <input
                            type="text"
                            name="weightMax"
                            value={input.weightMax}
                            onChange={(e) => handleChangeInput(e)}
                        />
                    </div>
                    <div>
                        <h4>Life span (years)</h4>
                        <label>Min:</label>
                        <input
                            type="text"
                            name="lifespanMin"
                            value={input.lifespanMin}
                            onChange={(e) => handleChangeInput(e)}
                        />
                        <label>Max:</label>
                        <input
                            type="text"
                            name="lifespanMax"
                            value={input.lifespanMax}
                            onChange={(e) => handleChangeInput(e)}
                        />
                    </div>
                    <div>
                        <label>Image url:</label>
                        <input
                            type="text"
                            placeholder="Paste your image link..."
                            name="image"
                            value={input.image}
                            onChange={(e) => handleChangeInput(e)}
                        />
                    </div>
                    <div>
                        <label>Temperaments</label>
                        <select>
                            {temperaments?.map((e) => (
                                <option
                                    // name="temperament"
                                    key={e}
                                    value={input.e}
                                    // onChange={(e) => handleChangeInput(e)}
                                >
                                    {e}
                                </option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <br />

                    <button className="button-form">Create breed</button>
                </form>
            </div>
        </div>
    );
}
