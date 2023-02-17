import React from 'react';
import {useFilterContext} from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView'

function RecipeList() {
  const {filtered_recipes:recipes, grid_view} = useFilterContext(); //wanted filtered recipes, not all

  if (recipes.length < 1){
    return (
      <h5 style={{ textTransform: 'none'}}>
        Sorry, no recipe matches your search...
      </h5>
    )
  }

  if (grid_view === false) {
    return (
      <ListView recipes={recipes} />
    )
  }

  return (
    <GridView recipes={recipes}>
      Recipe List
    </GridView>
  )
}

export default RecipeList;
