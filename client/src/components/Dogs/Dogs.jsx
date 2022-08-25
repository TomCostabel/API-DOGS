import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterByTemp,
    getAllDogs,
    getTemperaments,
    sortBy,
} from "../../redux/actions";
import DogCard from "../DogCard/DogCard";
import "../Dogs/Dogs.css";
import Pagination from "../Pagination/Pagination";
import NavBar from "../NavBar/NavBar";

const Dogs = () => {
    ///////////////////////////////////////////////--MIS STATES--//////////////////////////////////////////////////////////////////////////////////////////////////////
    const sortByState = useSelector((state) => state.sortBy);
    const perris = useSelector((state) => state.dogs);
    const temps = useSelector((state) => state.temperaments);
    const [datosFromApi, setDatosFromApi] = useState([]);

    const [actualDogs, setActualDogs] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);

    const [loading, setLoading] = useState(true);

    const [temperamentos, setTemperamentos] = useState([]);

    // const [orden, setOrden] = useState("");

    const ITEMS_X_PAGE = 8;

    ///////////////////////////////////////////////--LLAMADOS--////////////////////////////////////////////////////////////////////////////////////////////////////////

    const dispatch = useDispatch();

    useEffect(() => {
        if (!temps.length) dispatch(getTemperaments());
        setTemperamentos(temps);
        // console.log("estos son los temperamentos", temperamentos);
    }, [temps, temperamentos]);

    useEffect(() => {
        if (perris.length && !datosFromApi.length) setDatosFromApi(perris);
        if (!datosFromApi.length) dispatch(getAllDogs());
        // if (sortByState.length)
        setActualDogs(
            datosFromApi.slice(
                currentPage * ITEMS_X_PAGE,
                currentPage * ITEMS_X_PAGE + ITEMS_X_PAGE
            )
        );
        console.log("datos", actualDogs);
    }, [dispatch, datosFromApi, perris, sortByState, currentPage]);

    ///////////////////////////////////////////////--NEXT HANDLER--////////////////////////////////////////////////////////////////////////////////////////////////////

    const nextHandler = () => {
        const nextPage = currentPage + 1;

        const firstIndex = nextPage * ITEMS_X_PAGE;

        if (actualDogs.length < 8) return;
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
    }, [buscador, perris]);

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

                {/* <select onChange={(e) => handleSort(e)}> */}

                <div className="select-position">
                    <select
                        onChange={(e) => {
                            dispatch(sortBy(e.target.value));
                        }}
                    >
                        <option>Order abc...</option>
                        <option value="DESC">A-Z</option>
                        <option value="ASC">Z-A</option>
                    </select>
                    <select
                        onChange={(e) => {
                            dispatch(sortBy(e.target.value));
                        }}
                    >
                        <option>Order by weight</option>
                        <option value="mayorPeso">kg +</option>
                        <option value="menorPeso">kg -</option>
                    </select>

                    <select
                        onChange={(e) => {
                            dispatch(filterByTemp(e.target.value));
                        }}
                    >
                        <option value="All">Order by temps</option>
                        {temps?.map((el) => {
                            return (
                                <option value={el} key={el}>
                                    {el}
                                </option>
                            );
                        })}
                        ;
                    </select>
                </div>

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
