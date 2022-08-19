import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/actions";
import DogCard from "../DogCard/DogCard";
import "../Dogs/Dogs.css";
import Pagination from "../Pagination/Pagination";
import NavBar from "../NavBar/NavBar";

const Dogs = () => {
    ///////////////////////////////////////////////--MIS STATES--//////////////////////////////////////////////////////////////////////////////////////////////////////

    const perris = useSelector((state) => state.dogs);
    const [datosFromApi, setDatosFromApi] = useState([]);

    const [actualDogs, setActualDogs] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);

    const [loading, setLoading] = useState(true);

    const ITEMS_X_PAGE = 8;

    ///////////////////////////////////////////////--LLAMADOS--////////////////////////////////////////////////////////////////////////////////////////////////////////

    const dispatch = useDispatch();
    useEffect(() => {
        if (perris.length && !datosFromApi.length) setDatosFromApi(perris);
        if (!datosFromApi.length) dispatch(getAllDogs());
        setActualDogs(
            [...datosFromApi].slice(
                currentPage * ITEMS_X_PAGE,
                currentPage * ITEMS_X_PAGE + ITEMS_X_PAGE
            )
        );
    }, [dispatch, datosFromApi, perris]);

    ///////////////////////////////////////////////--NEXT HANDLER--////////////////////////////////////////////////////////////////////////////////////////////////////

    const nextHandler = () => {
        const totalElementos = datosFromApi.length;

        const nextPage = currentPage + 1;

        const firstIndex = nextPage * ITEMS_X_PAGE;

        if (firstIndex === totalElementos) return;
        // if (nextPage > 22) return;

        setActualDogs(
            [...datosFromApi].slice(firstIndex, firstIndex + ITEMS_X_PAGE)
        );
        setCurrentPage(nextPage);
    };

    ///////////////////////////////////////////////--PREV HANDLER--////////////////////////////////////////////////////////////////////////////////////////////////////

    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        const firstIndex = prevPage * ITEMS_X_PAGE;

        setActualDogs(
            [...datosFromApi].slice(firstIndex, firstIndex + ITEMS_X_PAGE)
        );
        setCurrentPage(prevPage);
    };

    ///////////////////////////////////////////////--MAPEO ITEMS X PAGE --//////////////////////////////////////////////////////////////////////////////////////////////

    const perritos = actualDogs.map((e) => {
        return (
            <DogCard
                key={e.id}
                id={e.id}
                image={e.image.url}
                name={e.name}
                temperament={e.temperament}
                peso={e.weight.metric}
            />
        );
    });
    // console.log("array de perros", perritos);

    ////////////////////////////////////////////////////////--BUSCADOR--/////////////////////////////////////////////////////////////////////////////////////////////////

    const [buscador, setBuscador] = useState("");

    const handleChange = (e) => {
        setBuscador(e.target.value);
        // console.log(buscador);
    };

    useEffect(() => {
        buscador.length === 0
            ? setDatosFromApi(perris)
            : setDatosFromApi(
                  perris.filter((el) => {
                      if (
                          el.name.toLowerCase().includes(buscador.toLowerCase())
                      )
                          return el;
                  })
              );
    }, [buscador]);

    setTimeout(() => {
        setLoading(false);
    }, 1300);
    ////////////////////////////////////////////////////////--RETURN--/////////////////////////////////////////////////////////////////////////////////////////////////

    if (loading === true)
        return (
            <div>
                <NavBar />
                <h1>Loading...</h1>
            </div>
        );
    return (
        <div>
            <NavBar />

            <div>
                <input
                    className="buscador"
                    value={buscador}
                    placeholder="Breed..."
                    onChange={(e) => handleChange(e)}
                />

                <Pagination
                    nextHandler={nextHandler}
                    items={perritos}
                    prevHandler={prevHandler}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};

export default Dogs;
