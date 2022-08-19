import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogDetail } from "../../redux/actions";
import "../DogDetail/DogDetail.css";
import NavBar from "../NavBar/NavBar";

const DogDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogDetail(id));
    }, [dispatch, id]);
    const detallePerritos = useSelector((state) => state.dogDetail);

    if (!detallePerritos)
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );

    return (
        <>
            <NavBar />

            <div className="container-card-detail">
                <div>
                    <img
                        className="imagen-detail"
                        src={`https://cdn2.thedogapi.com/images/${detallePerritos.reference_image_id}.jpg`}
                        alt="pic-dog"
                    />
                </div>
                <div className="container-detail">
                    <h1> {detallePerritos.name} </h1>
                    <p> {detallePerritos.temperament} </p>
                    <h4> WEIGHT: {detallePerritos.weight?.metric} KG. </h4>
                    <h4> HEIGHT: {detallePerritos.height?.metric} </h4>
                    <h4> LIFE SPAN: {detallePerritos.life_span} </h4>
                </div>
            </div>
        </>
    );
};

export default DogDetail;

// [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
// [ ] Altura
// [ ] Peso
// [ ] Años de vida
