import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogDetail } from "../../redux/actions";
import "../DogDetail/DogDetail.css";
import NavBar from "../NavBar/NavBar";

const DogDetail = () => {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const dispatch = useDispatch();
    const detallePerritos = useSelector((state) => state.dogDetail);

    useEffect(() => {
        dispatch(getDogDetail(id));
        console.log("Soy los detalles", detallePerritos);
    }, [dispatch, id]);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    if (loading)
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
                        src={detallePerritos[0]?.image.url}
                        alt="pic-dog"
                    />
                </div>
                <div className="container-detail">
                    <h1>{detallePerritos[0]?.name}</h1>
                    <p> {detallePerritos[0]?.temperament} </p>
                    <h4> WEIGHT: {detallePerritos[0]?.weight.metric} KG. </h4>
                    <h4> HEIGHT: {detallePerritos[0]?.height.metric} </h4>
                    <h4> LIFE SPAN: {detallePerritos[0]?.life_span} </h4>
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
