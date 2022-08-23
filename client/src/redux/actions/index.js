import axios from "axios";
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_ALL_DOGS_ID = "GET_ALL_DOGS_ID";
export const FILTRO_PESO = "FILTRO_PESO";
export const SET_SORT = "SET_SORT";

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

// export function filtradoPeso(payload) {
//     return {
//         type: FILTRO_PESO,
//         payload,
//     };
// }
export function sortBy(sortType) {
    return {
        type: SET_SORT,
        payload: sortType,
    };
}
