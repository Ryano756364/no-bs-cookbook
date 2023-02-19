import {
  ADD_TO_FAVORITES,
  REMOVE_FAVORITES_ITEM,
  CLEAR_FAVORITES,
  COUNT_FAVORITES_TOTALS,
} from '../actions';

function favorite_reducer(state, action) {
  if (action.type === ADD_TO_FAVORITES){
    const {id, servings, image, aggregateLikes, title} = action.payload;
    //console.log(id);
    const tempItem = state.favorite.find((i) => i.id === id)
    if (tempItem){
      //Future releases build some kind of functionality to alert user
      console.log("Item already in favorites!")
      return{...state}
    } else {
      const newItem = {
        id,
        servings,
        image,
        aggregateLikes,
        title};
      return {...state, favorite:[...state.favorite,newItem]}
    }
  }

  if(action.type === REMOVE_FAVORITES_ITEM){
    //if item matches, remove from favorites, otherwise, move along
    const tempFavorite = state.favorite.filter((favotite) => favotite.id !== action.payload);
    return {...state, favorite:tempFavorite};
  }

  if(action.type === CLEAR_FAVORITES){
    return {...state, favorite: []};
  }

  if(action.type === COUNT_FAVORITES_TOTALS){
    const {total_items} = state.favorite.reduce((total) => {
      total.total_items += 1;
      return total;
    },{total_items:0})

    return {...state, total_items}
  }

  return state
  throw new Error(`No Matching "${action.type}" - action type`); 
}

export default favorite_reducer;
