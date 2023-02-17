import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';
import {RecipesProvider} from './context/recipes_context';
import {FilterProvider} from './context/filter_context';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <RecipesProvider>
    <FilterProvider>  {/* very important for this to be inside of recipes provider */}
      <App />
    </FilterProvider>
  </RecipesProvider>
);
