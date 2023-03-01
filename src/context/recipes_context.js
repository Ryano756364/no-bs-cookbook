//Please see reducing file regarding state change

import axios from 'axios';
import React, {useContext, useEffect, useReducer} from 'react';
import reducer from '../reducers/recipes_reducer';
//live api
import { updated_recipes_url as url } from '../utils/constants';
//testing arr
import { testing_updated_recipes_url as testing_url} from '../utils/constants';

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



  // LIVE CALL TO API CHANGE (1 OF 3)
  //utilize API call with Axios
  const fetchRecipes = async(url) => {
    dispatch({type:GET_RECIPES_BEGIN}) //sets up loading spinner
    try {
      const response = await axios.get(url);
      const recipes = response.data;
      const arr = recipes.recipes;
      //console.log(arr);  //contains recipe array
      dispatch({type:GET_RECIPES_SUCCESS, payload: arr})
    } catch (error) {
      dispatch({type:GET_RECIPES_ERROR})
    }
  }
  

  // TESTING API ARR  CHANGE (2 OF 3)
  /*const fetchRecipes = (testing_url) => {
    dispatch({type:GET_RECIPES_BEGIN}) //sets up loading spinner
    try {
      const response = testing_url;
      //console.log(response)
      const recipes = response.recipes;
      console.log(recipes);  //contains recipe array
      dispatch({type:GET_RECIPES_SUCCESS, payload: recipes})
    } catch (error) {
      dispatch({type:GET_RECIPES_ERROR})
    }
  }*/
  

  //passing this down to further pull apart recipe object
  const fetchSingleRecipe = async(url) => {
    dispatch({type: GET_SINGLE_RECIPE_BEGIN});
    try {
      const response = await axios.get(url);
      const singleRecipe = response.data;
      dispatch({type: GET_SINGLE_RECIPE_SUCCESS, payload: singleRecipe});
    } catch (error) {
      dispatch({type:GET_SINGLE_RECIPE_ERROR})
    }
  }



  //doing this to fetch once then distribute
  useEffect(() => {
    fetchRecipes(url);  //SWAP THIS OUT WITH ONLY 'url'  CHANGE (3 OF 3)
  }, [])  //run just once so insert empty dependency

  


  //passing state ontop of the sidebar actions because there is going to be other state here as well stored
  return (
    <RecipesContext.Provider value={{...state, openSidebar, closeSidebar, fetchSingleRecipe}}>
      {children}
    </RecipesContext.Provider>
  )
}

export const useRecipesContext = () => {
  return (
    useContext(RecipesContext)
  )
}