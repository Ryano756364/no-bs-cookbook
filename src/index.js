import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';
import {RecipesProvider} from './context/recipes_context';
import {FilterProvider} from './context/filter_context';
import {FavoriteProvider} from './context/favorite_context';
//import {Auth0Provider} from '@auth0/auth0-react';
//import {DOMAIN} from './env';
//import {CLIENT_ID} from './env';
import { UserProvider } from './context/user_context';
//require('dotenv').config();
//const DOMAIN = require(process.env.DOMAIN);
//const CLIENT_ID = require(process.env.CLIENT_ID);

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  // <Auth0Provider
  //   domain={DOMAIN}
  //   clientId={CLIENT_ID}
  //   redirectUri={window.location.origin}
  //   cacheLocation='localstorage'
  //   >
    <UserProvider>
      <RecipesProvider>
        <FilterProvider>  {/* very important for this to be inside of recipes provider */}
          <FavoriteProvider>
            <App />
          </FavoriteProvider>
        </FilterProvider>
      </RecipesProvider>
    </UserProvider>
  // </Auth0Provider>
);
