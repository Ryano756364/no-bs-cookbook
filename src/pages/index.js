//Only imports files from pages directory and exports in this file to help reduce App.js bloating

import AboutPage from './AboutPage';
import ErrorPage from './ErrorPage';
import HomePage from './HomePage';
import FavoritesPage from './FavoritesPage';
import Private from './Private';
import Recipes from './RecipesPage';
import SingleRecipePage from './SingleRecipePage';

export {
  AboutPage,
  ErrorPage,
  FavoritesPage,
  HomePage,
  Private,
  Recipes,
  SingleRecipePage
}
