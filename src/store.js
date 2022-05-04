import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
// import {Data}  from "./reducers/EventReducers";
import { UserInfo } from "./reducers/EventReducers";
const initialState = {
    
 

};
const reducer = combineReducers({
UserInfo

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;