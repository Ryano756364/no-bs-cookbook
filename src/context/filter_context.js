//need two instances (1) how big is the state array and (2) a default arr with all recipes
import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
  LOAD_RECIPES,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_RECIPES,
  UPDATE_FILTERS,
  FILTER_RECIPES,
  CLEAR_FILTERS,
} from '../actions'
import { useRecipesContext } from './recipes_context';

const initialState = {
  filtered_recipes:[],
  all_recipes:[],
  grid_view: true
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const {recipes} = useRecipesContext();  //cannot pass recipes directly into state below
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: LOAD_RECIPES, payload: recipes}) //when this mounts, we want to dispatch load recipes
  },[recipes])

  return (
    <FilterContext.Provider value={{...state}}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
