import {
  LOAD_RECIPES,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_RECIPES,
  UPDATE_FILTERS,
  FILTER_RECIPES,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  if(action.type === LOAD_RECIPES){
    return {
      ...state,
      all_recipes:[...action.payload],
      filtered_recipes:[...action.payload] //need to set these two up this way otherwise we will reset memory instead of copying it over with ...
    }
  } 

  if(action.type === SET_GRIDVIEW) {
    return {...state, grid_view: true}
  }
  if(action.type === SET_LISTVIEW) {
    return {...state, grid_view: false}
  }

  throw new Error(`No Matching "${action.type}" - action type`); //used mainly for testing
}

export default filter_reducer;
