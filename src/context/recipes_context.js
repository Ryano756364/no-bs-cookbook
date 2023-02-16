import axios from 'axios';
import React, {useContext, useEffect, useReducer} from 'react';
import reducer from '../reducers/recipes_reducer';
//import { products_url as url } from '../utils/constants';
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