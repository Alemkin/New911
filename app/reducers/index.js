import { combineReducers } from 'redux'
import directory from './directory'
import userFlow from './userFlow'

const rootReducer = combineReducers({
  directory,
  userFlow
})

export default rootReducer
