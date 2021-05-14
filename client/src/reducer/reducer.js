import { RANDOM_RECIPE } from '../actions/actions'
import { SEARCH_BY_NAME } from '../actions/actions'
import { GET_DETAILS } from '../actions/actions'
import { GET_DIETS } from '../actions/actions'
const initialState={
    random:[],
    searched:[],
    detail:[],
    diets:[]
  }
  function rootReducer(state=initialState , action) {
    if (action.type === RANDOM_RECIPE) {
        return {...state,random: action.payload}
      }
      if (action.type === SEARCH_BY_NAME) {
        return {...state,searched: action.payload}
      }
      if (action.type === GET_DETAILS) {
        return {...state,detail: action.payload}
      }
      if (action.type === GET_DIETS) {
        return {...state,diets: action.payload}
      }
      return state
}
    export default rootReducer;