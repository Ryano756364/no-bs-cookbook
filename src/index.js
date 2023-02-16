import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';
import {RecipesProvider} from './context/recipes_context';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <RecipesProvider>
    <App />
  </RecipesProvider>
);
