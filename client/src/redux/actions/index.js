import axios from 'axios'
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_ALL_DOGS_ID  =  'GET_ALL_DOGS_ID'


// const API_KEY = '0f2efe03-3eee-449e-9d0d-4524a73230e6' 

export const getAllDogs = ()  => async(dispatch) => {
    const res = await axios.get('https://api.thedogapi.com/v1/breeds');
    
    dispatch({
        type: GET_ALL_DOGS,
        payload:res.data,
    })


}


// export const getDogDetail = () => async ( dispatch) => {
//         const res = await axios.get('https://api.thedogapi.com/v1/breeds')
//         dispatch({
//             type: GET_ALL_DOGS_ID,
//             payload: res.data,

//         })
//     }
    export function getDogDetail(id) {
        return async function (dispatch) {
            try{
                const res = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`);
                dispatch({
                    type: GET_ALL_DOGS_ID,
                    payload: res.data
                })
            }
            catch(e){
                console.log(e)
            }
        }
    };

