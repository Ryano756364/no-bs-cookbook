import axios from 'axios';
import React, {useContext, useEffect, useReducer} from 'react';
import reducer from '../reducers/recipes_reducer';
import { recipes_url as url } from '../utils/constants';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_RECIPES_BEGIN,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_ERROR,
  GET_SINGLE_RECIPE_BEGIN,
  GET_SINGLE_RECIPE_SUCCESS,
  GET_SINGLE_RECIPE_ERROR,
} from '../actions';

const initialState = {
  isSidebarOpen: false,
  recipes_loading:false,
  recipes_error:false,
  recipes:[],
  featured_recipes:[],
  single_recipe_loading:false,
  single_recipe_error:false,
  single_recipe: {},
}

const RecipesContext = React.createContext()

export const RecipesProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({type: SIDEBAR_OPEN})
  }
  const closeSidebar = () => {
    dispatch({type: SIDEBAR_CLOSE})
  }

  //utilize API call with Axios
  /* const fetchRecipes = async(url) => {
    const response = await axios.get(url);
    console.log(response);
  } */
  const fetchRecipes = (arr) => {
    dispatch({type:GET_RECIPES_BEGIN}) //sets up loading
    try {
      const response = arr;
      const recipes = response.results;
      dispatch({type:GET_RECIPES_SUCCESS, payload: recipes})
    } catch (error) {
      dispatch({type:GET_RECIPES_ERROR})
    }
  }

  const fetchSingleRecipe = async(url) => {
    dispatch({type: GET_SINGLE_RECIPE_BEGIN});
    try {
      const response = await axios.get(url);
      const singleRecipe = response.results;
      console.log(singleRecipe);
      dispatch({type: GET_SINGLE_RECIPE_SUCCESS, payload: singleRecipe});
    } catch (error) {
      dispatch({type:GET_SINGLE_RECIPE_ERROR})
    }
  }

  //doing this to fetch once then distribute
  useEffect(() => {
    fetchRecipes(url);
  }, [])  //run just once so insert empty dependency

  
  //passing state ontop of the sidebar actions because there is going to be other state here as well stored
  return (
    <RecipesContext.Provider value={{...state, openSidebar, closeSidebar}}>
      {children}
    </RecipesContext.Provider>
  )
}

export const useRecipesContext = () => {
  return (
    useContext(RecipesContext)
  )
}