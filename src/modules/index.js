import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import refactor from './refactor'

import users from "./users"
export default combineReducers({
    routing: routerReducer,
    users ,
    refactor
});
