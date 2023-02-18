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
  return state
  throw new Error(`No Matching "${action.type}" - action type`); 
}

export default favorite_reducer;
