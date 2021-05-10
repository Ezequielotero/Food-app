import { RANDOM_RECIPE } from '../actions/actions'
import { SEARCH_BY_NAME } from '../actions/actions'
const initialState={
    random:[],
    searched:[]
  }
  function rootReducer(state=initialState , action) {
    if (action.type === RANDOM_RECIPE) {
        return {...state,random: action.payload}
      }
      if (action.type === SEARCH_BY_NAME) {
        return {...state,searched: action.payload}
      }
      return state
}
    export default rootReducer;