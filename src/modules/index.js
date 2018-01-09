import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import chats from './chats'

export default combineReducers({
    routing: routerReducer,
    chats
});
