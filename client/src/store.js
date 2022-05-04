import { applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import { EventReducers } from "./reducers/EventReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(EventReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
