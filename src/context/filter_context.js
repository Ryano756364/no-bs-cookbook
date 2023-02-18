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
  grid_view: true,
  sort:'popularity-highest',  //changes default behavior of what is displayed upon page loading
  filters:{
    text:'',
    diets:'all',
    dishTypes:'all',
    min_likes:0,
    max_likes:0,
    likes:0,
  }
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const {recipes} = useRecipesContext();  //cannot pass recipes directly into state below
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: LOAD_RECIPES, payload: recipes}) //when this mounts, we want to dispatch load recipes
  },[recipes])

  useEffect(() => {
    dispatch({type:FILTER_RECIPES})  //makes more sense to put this prior to sort
    dispatch({type:SORT_RECIPES})
  },[recipes, state.sort, state.filters]) //every time value changes we run the UseEffect

  const setGridView = () => {
    dispatch({type:SET_GRIDVIEW})
  }
  const setListView = () => {
    dispatch({type:SET_LISTVIEW})
  }

  const updateSort = (e) => {
    //console.log(e);
    //const name = e.target.name;
    const value = e.target.value;
    //console.log(value);
    dispatch({type:UPDATE_SORT, payload:value});
  }

  const updateFilters = (e) => {  //function needs called every time we change something
    let name = e.target.name
    let value = e.target.value
    if (name === 'diets') {
      value = e.target.textContent  //using vanilla JS
    }
    if (name === 'likes') {
      value = Number(value) //need this JS because sliding bar adjusts number to String
    } 
    //console.log(name, value);
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }

  const clearFilters = () => {
    dispatch({type: CLEAR_FILTERS})
  }

  return (
    <FilterContext.Provider value={{...state, setGridView, setListView, updateSort, updateFilters, clearFilters}}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
