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
  if(action.type === GET_RECIPES_BEGIN){
    return {...state, recipes_loading:true}
  }
  if(action.type === GET_RECIPES_SUCCESS){
    /* const featured_recipes = action.payload.filter(
      (recipe) => recipe.featured === true
    ) */
    return {
      ...state,
      recipes_loading: false,
      recipes: action.payload,
      featured_recipes: action.payload,
      /* featured_recipes */
    }
  }
  if(action.type === GET_RECIPES_ERROR){
    return {...state, recipes_loading: false, recipes_error: true}
  }
  if(action.type === GET_SINGLE_RECIPE_BEGIN){
    return {...state, single_recipe_loading: true, single_recipe_error: false}
  }
  if(action.type === GET_SINGLE_RECIPE_SUCCESS){
    return {...state, single_recipe_loading: false, single_recipe:action.payload}
  }
  if(action.type === GET_SINGLE_RECIPE_ERROR){
    return {...state, single_recipe_loading: false, single_recipe_error: true}
  }
  
  
  throw new Error(`No Matching "${action.type}" - action type`)  /* added for testing incase string errors popup, but actions.js should mitigate this */
}

export default recipes_reducer
