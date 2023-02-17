import {
  LOAD_RECIPES,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_RECIPES,
  //UPDATE_FILTERS,
  //FILTER_RECIPES,
  //CLEAR_FILTERS,
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

  if(action.type === UPDATE_SORT) {
    return {...state, sort: action.payload};
  }
  if (action.type === SORT_RECIPES) {
    const {sort, filtered_recipes} = state;
    let tempRecipes = [...filtered_recipes];
    if (sort === 'popularity-highest'){
      tempRecipes = tempRecipes.sort((a, b) => b.aggregateLikes - a.aggregateLikes)
    }
    if (sort === 'popularity-lowest'){
      tempRecipes = tempRecipes.sort((a, b) => a.aggregateLikes - b.aggregateLikes)
    }
    if (sort === 'name-a'){
      tempRecipes = tempRecipes.sort((a, b) => {
        return a.title.localeCompare(b.title);
      })
    }
    if (sort === 'name-z'){
      tempRecipes = tempRecipes.sort((a, b) => {
        return b.title.localeCompare(a.title);
      })
    }
    return {...state, filtered_recipes:tempRecipes};
  }

  throw new Error(`No Matching "${action.type}" - action type`); //used mainly for testing
}

export default filter_reducer;
