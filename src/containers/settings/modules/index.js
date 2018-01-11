import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import refactor from './refactor'

export default combineReducers({
  routing: routerReducer, refactor
})