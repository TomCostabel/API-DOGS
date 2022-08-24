import axios from "axios";
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_ALL_DOGS_ID = "GET_ALL_DOGS_ID";
export const FILTRO_PESO = "FILTRO_PESO";
export const SET_SORT = "SET_SORT";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_BY_TEMPERAMENT = "FILTER_BY_TEMPERAMENT";

export const getAllDogs = () => async (dispatch) => {
    const res = await axios.get("http://localhost:3001/dogs");

    dispatch({
        type: GET_ALL_DOGS,
        payload: res.data,
    });
};

export function getDogDetail(id) {
    return async function (dispatch) {
        try {
            const res = await axios.get(
                // `https://api.thedogapi.com/v1/breeds/${id}`
                "http://localhost:3001/dogs/" + id
            );
            dispatch({
                type: GET_ALL_DOGS_ID,
                payload: res.data,
            });
        } catch (e) {
            console.log(e);
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
