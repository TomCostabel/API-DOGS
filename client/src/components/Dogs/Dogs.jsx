import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterByTemp,
    getAllDogs,
    getDogsApi,
    getDogsDB,
    getTemperaments,
    sortBy,
} from "../../redux/actions";
import DogCard from "../DogCard/DogCard";
import "../Dogs/Dogs.css";
import Pagination from "../Pagination/Pagination";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";

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
                image={e.image.url ? e.image.url : e.image}
                name={e.name}
                temperament={e.temperament}
                peso={
                    e.weightMin && e.weightMax
                        ? `${e.weightMin} - ${e.weightMax}`
                        : e.weight.metric
                }
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

    const handleFilter = (e) => {
        if (e.target.value === "DogsDByAPI") {
            dispatch(getAllDogs());
        }

        if (e.target.value === "dogsDB") {
            dispatch(getDogsDB());
        }
        if (e.target.value === "dogsAPI") {
            dispatch(getDogsApi());
        }
    };
    ////////////////////////////////////////////////////////--RETURN--/////////////////////////////////////////////////////////////////////////////////////////////////

    if (loading === true) return <Loading />;
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
                        className="selector"
                        onChange={(e) => {
                            dispatch(sortBy(e.target.value));
                        }}
                    >
                        <option>Order abc...</option>
                        <option value="DESC">A-Z</option>
                        <option value="ASC">Z-A</option>
                    </select>
                    <select
                        className="selector"
                        onChange={(e) => {
                            dispatch(sortBy(e.target.value));
                        }}
                    >
                        <option>Order by weight</option>
                        <option value="mayorPeso">kg +</option>
                        <option value="menorPeso">kg -</option>
                    </select>

                    <select
                        className="selector"
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
                    <select onChange={handleFilter} className="selector">
                        <option value="DogsDByAPI">Order DB/API</option>
                        <option value="dogsDB">DB</option>
                        <option value="dogsAPI">API </option>
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
