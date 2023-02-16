import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_RECIPES_BEGIN,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_ERROR,
  GET_SINGLE_RECIPE_BEGIN,
  GET_SINGLE_RECIPE_SUCCESS,
  GET_SINGLE_RECIPE_ERROR,
} from '../actions'

const recipes_reducer = (state, action) => {
  if(action.type === SIDEBAR_OPEN){
    return {...state, isSidebarOpen:true};
  }
  if(action.type === SIDEBAR_CLOSE){
    return {...state, isSidebarOpen:false};
  }
  
  return state
  throw new Error(`No Matching "${action.type}" - action type`)  /* added for testing incase string errors popup, but actions.js should mitigate this */
}

export default recipes_reducer
