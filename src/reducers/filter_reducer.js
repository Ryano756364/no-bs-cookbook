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
      filter_recipes:[...action.payload] //need to set these two up this way otherwise we will reset memory instead of copying it over with ...
    }
  } 

  throw new Error(`No Matching "${action.type}" - action type`); //used for testing
}

export default filter_reducer;

