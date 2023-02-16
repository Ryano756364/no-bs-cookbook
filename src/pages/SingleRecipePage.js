import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useRecipesContext } from '../context/recipes_context';
import { single_recipe_url as url } from '../utils/constants';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {SPOONACULAR_KEY} from '../env.js';
import {SPOONACULAR_VALUE} from '../env.js';

import Loading from '../components/Loading';
import Error from '../components/Error';
import RecipeImages from '../components/RecipeImages';
import AddToFavorites from '../components/AddToFavorites';
import Stars from '../components/Stars';
import PageBanner from '../components/PageBanner';

function SingleRecipePage() {
  //console.log(useParams()) should display object and ID

  const {id} = useParams();
  const {
    single_recipe_loading:loading, 
    single_recipe_error: error, 
    single_recipe: recipe, 
    fetchSingleRecipe
  } = useRecipesContext();

  useEffect(() => {
    fetchSingleRecipe(`${url}${id}/information?${SPOONACULAR_KEY}=${SPOONACULAR_VALUE}`)
  },[id])  //as ID changes we fetch new recipe

  console.log(recipe);

  return (
    <Wrapper>
      <h4>
        SingleRecipePage
      </h4>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  .price {
    color: var(--clr-primary-5);
  }

  .desc {
    line-height: 2;
    max-width: 45em;
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleRecipePage

