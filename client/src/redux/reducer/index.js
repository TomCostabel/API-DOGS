import {
    GET_ALL_DOGS, GET_ALL_DOGS_ID
} from '../actions/index.js'

const initialState = {
    dogs: [],
    dogDetail: [],
    temperaments: [],
}
const rootReducer = (state = initialState, action) => {
switch (action.type) {
    case GET_ALL_DOGS:
        return {
            ...state,
            dogs: action.payload,
            
        }
        case GET_ALL_DOGS_ID:
            return {
                ...state,
                dogDetail: action.payload,
            }
        
        

    default: return state;
}


}
export default rootReducer;