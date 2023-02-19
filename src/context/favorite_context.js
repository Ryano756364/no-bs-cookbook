import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/favorite_reducer';
import {
  ADD_TO_FAVORITES,
  REMOVE_FAVORITES_ITEM,
  CLEAR_FAVORITES,
  COUNT_FAVORITES_TOTALS,
} from '../actions'

const getLocalStorage = () => {
  let favorite = localStorage.getItem('favorite')
  if (favorite) {
    return JSON.parse(localStorage.getItem('favorite'))
  } else {
    return []
  }
}

const initialState = {
  favorite: getLocalStorage(),
  total_items: 0
}

const FavoriteContext = React.createContext()

export const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // add to favorites
  const addToFavorite = (id, servings, image, aggregateLikes, title) => {
    dispatch({ 
      type: ADD_TO_FAVORITES, 
      payload: { id, servings, image, aggregateLikes, title} })
  }

  // remove favorite
  const removeFavorite = (id) => {
    dispatch({ type: REMOVE_FAVORITES_ITEM, payload: id })
  }

  // clear favorite
  const clearFavorite = () => {
    dispatch({ type: CLEAR_FAVORITES })
  }

  useEffect(() => {
    dispatch({type: COUNT_FAVORITES_TOTALS})
    localStorage.setItem('favorite', JSON.stringify(state.favorite)) //can only use strings to store
    dispatch({ type: COUNT_FAVORITES_TOTALS })
  }, [state.favorite])

  return (
    <FavoriteContext.Provider
      value={{ ...state, addToFavorite, removeFavorite, clearFavorite}}>
        {children}
    </FavoriteContext.Provider>
  )
}
// make sure use
export const useFavoriteContext = () => {
  return useContext(FavoriteContext)
}
