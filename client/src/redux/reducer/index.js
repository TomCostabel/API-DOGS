import {
    GET_ALL_DOGS,
    GET_ALL_DOGS_ID,
    SET_SORT,
    GET_TEMPERAMENTS,
    FILTER_BY_TEMPERAMENT,
} from "../actions/index.js";

const initialState = {
    dogs: [],
    dogDetail: [],
    temperaments: [],
    dogsOrdenamiento: [],
    sortBy: "",
    allDogs: [],
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload,
            };
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload,
            };
        case GET_ALL_DOGS_ID:
            return {
                ...state,
                dogDetail: action.payload,
            };
        case SET_SORT:
            const sortedDogs =
                action.payload === "mayorPeso"
                    ? state.dogs.sort((a, b) => {
                          ///////////////////////////////////PESO SACADO DE INTERNET PARA olde english bulldogge QUE LLEGA COMO NaN /////////////////////////////
                          a.weight.metric === "NaN"
                              ? (a.weight.metric = "25 - 35")
                              : (a.weight.metric = a.weight.metric);
                          /////////////////////// ///////////////////////
                          b.weight.metric === "NaN"
                              ? (b.weight.metric = "25 - 35")
                              : (b.weight.metric = b.weight.metric);

                          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                          if (
                              Number(
                                  a.weight.metric.split("-")[1]
                                      ? a.weight.metric.split("-")[1]
                                      : a.weight.metric.split("-")[0]
                              ) >
                              Number(
                                  b.weight.metric.split("-")[1]
                                      ? b.weight.metric.split("-")[1]
                                      : b.weight.metric.split("-")[0]
                              )
                          )
                              return -1;
                      })
                    : action.payload === "menorPeso"
                    ? state.dogs.sort((a, b) => {
                          /////////////////////// ///////////////////////
                          a.weight.metric === "NaN"
                              ? (a.weight.metric = "25 - 35")
                              : (a.weight.metric = a.weight.metric);
                          /////////////////////// ///////////////////////
                          b.weight.metric === "NaN"
                              ? (b.weight.metric = "25 - 35")
                              : (b.weight.metric = b.weight.metric);
                          /////////////////////// ///////////////////////

                          if (
                              Number(
                                  a.weight.metric.split("-")[1]
                                      ? a.weight.metric.split("-")[1]
                                      : a.weight.metric.split("-")[0]
                              ) <
                              Number(
                                  b.weight.metric.split("-")[1]
                                      ? b.weight.metric.split("-")[1]
                                      : b.weight.metric.split("-")[0]
                              )
                          )
                              return -1;
                      })
                    : action.payload === "ASC"
                    ? state.dogs.sort((a, b) => b.name.localeCompare(a.name))
                    : state.dogs.sort((a, b) => a.name.localeCompare(b.name));

            return {
                ...state,
                sortBy: action.payload,
                dogs: sortedDogs,
            };

        case FILTER_BY_TEMPERAMENT:
            const allTemps = state.allDogs;
            const tempDogFilter =
                action.payload === "All"
                    ? allTemps
                    : allTemps?.filter((e) => {
                          if (e.temperament) {
                              return e.temperament.includes(action.payload);
                          }
                          return null;
                      });
            return {
                ...state,
                dogs: tempDogFilter,
            };

        default:
            return state;
    }
};
export default rootReducer;
