import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import chats from './chats'
import users from "./users"
export default combineReducers({
    routing: routerReducer,
    users ,
    chats
});
