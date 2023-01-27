import { combineReducers } from 'redux';
import langReducer from "../reducer/langReducer";

export default combineReducers({
    language                : langReducer,
});