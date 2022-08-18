import { applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../redux/reducer/index.js'

const store = createStore(
    rootReducer,

    composeWithDevTools(applyMiddleware(thunk))
);

export default store;


// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from './reducer/index.js';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(thunk))
// );

// export default store;