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
    let maxLikes = action.payload.map((r) => r.aggregateLikes);
    maxLikes = Math.max(...maxLikes); //spread operator needed to pass into math
    //console.log(maxLikes);
    return {
      ...state,
      all_recipes:[...action.payload],
      filtered_recipes:[...action.payload], //need to set these two up this way otherwise we will reset memory instead of copying it over with ...
      filters:{...state.filters, max_likes:maxLikes, likes:maxLikes}
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

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }  //similar here to update_sort
  }

  if (action.type === FILTER_RECIPES) {
    const {all_recipes} = state;

    const {text, diets, dishTypes, likes} = state.filters

    let tempRecipes = [...all_recipes]  //before anything is filtered, start with fresh copy of recipes
    
    //console.log(tempRecipes);

    if (text) {  //false if empty string
      tempRecipes = tempRecipes.filter((recipe) => {
        return recipe.title.toLowerCase().startsWith(text)
      })
    }

    if (diets !== 'all') {
      tempRecipes = tempRecipes.filter(
        (recipe) => recipe.diets.includes(diets)
      )
    }

    if (dishTypes !== 'all') {
      tempRecipes = tempRecipes.filter(
        (recipe) => recipe.dishTypes.includes(dishTypes)
      )
    } 

    
    tempRecipes = tempRecipes.filter((recipe) => 
      recipe.aggregateLikes <= likes)
    

    return { ...state, filtered_recipes: tempRecipes }
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters:{
        ...state.filters, //copying over old state data but not adjustming min and max likes
        text:'',
        diets:'all',
        dishTypes:'all',
        likes:state.filters.max_likes  //overrides user-selected like count back to max set on state
      }
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`); //used mainly for testing
}

export default filter_reducer;
