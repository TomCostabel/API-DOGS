import axios from "axios";
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_ALL_DOGS_ID = "GET_ALL_DOGS_ID";
export const FILTRO_PESO = "FILTRO_PESO";
export const SET_SORT = "SET_SORT";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_BY_TEMPERAMENT = "FILTER_BY_TEMPERAMENT";
export const GET_DOGS_BD = "GET_DOGS_BD";
export const GET_DOGS_API = "GET_DOGS_API";
export const CREATE_DOG = "CREATE_DOG";
export const getAllDogs = () => async (dispatch) => {
    const res = await axios.get("http://localhost:3001/dogs");

    dispatch({
        type: GET_ALL_DOGS,
        payload: res.data,
    });
};
export function getDogsDB() {
    return async function (dispatch) {
        try {
            const res = await axios.get("http://localhost:3001/dogs/dogsDB");
            dispatch({
                type: GET_DOGS_BD,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
}
export function getDogsApi() {
    return async function (dispatch) {
        try {
            const res = await axios.get("http://localhost:3001/dogs/dogsApi");
            dispatch({
                type: GET_DOGS_API,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
}
export function createDog(data) {
    return async function (dispatch) {
        try {
            const results = await axios.post(
                "http://localhost:3001/dogs",
                data
            );
            dispatch({
                type: CREATE_DOG,
                payload: results.data,
            });
        } catch (e) {
            console.log(e);
        }
    };
}

export function getDogDetail(id) {
    return async function (dispatch) {
        try {
            const res = await axios.get("http://localhost:3001/dogs/" + id);
            dispatch({
                type: GET_ALL_DOGS_ID,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
}

export function sortBy(sortType) {
    return {
        type: SET_SORT,
        payload: sortType,
    };
}
export function filterByTemp(payload) {
    return {
        type: FILTER_BY_TEMPERAMENT,
        payload,
    };
}

export const getTemperaments = () => async (dispatch) => {
    const res = await axios.get("http://localhost:3001/temperaments");
    dispatch({
        type: GET_TEMPERAMENTS,
        payload: res.data,
    });
};

// export const filterTemps = () => async (dispatch) => {
//     const res = await axios.get("http://localhost:3001/temperaments");
//     dispatch({
//         type: GET_TEMPERAMENTS,
//         payload: res.data,
//     });
// };
