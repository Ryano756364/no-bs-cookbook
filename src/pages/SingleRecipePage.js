import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useRecipesContext } from '../context/recipes_context';
import { single_recipe_url as url } from '../utils/constants';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
//import {SPOONACULAR_KEY} from '../env.js';
//import {SPOONACULAR_VALUE} from '../env.js';
import Loading from '../components/Loading';
import Error from '../components/Error';
import RecipeImages from '../components/RecipeImages';
import AddToFavorites from '../components/AddToFavorites';
import Stars from '../components/Stars';
import PageBanner from '../components/PageBanner';
import userEvent from '@testing-library/user-event';
import DairyFree from '../assets/dairy_free.png';
import GlutenFree from '../assets/gluten_free.png';
import Vegan from '../assets/vegan.png';
import Vegetarian from '../assets/vegetarian.png';
import {GiCheckMark} from 'react-icons/gi';
import {FaTimes} from 'react-icons/fa';
//require('dotenv').config()
//const SPOONACULAR_KEY = require(process.env.SPOONACULAR_KEY);
//const SPOONACULAR_VALUE = require(process.env.SPOONACULAR_VALUE);

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
    fetchSingleRecipe(`${url}${id}/information?apiKey=d723ce4224b14fa1935e710fdaa5cdcf`)
  },[id])  //as ID changes we fetch new recipe

  //console.log(recipe);

  if(loading){
    return <Loading />
  }
  if (error){
    return <Error />
  }

  //pullling data from api object
  const {title, readyInMinutes, summary, servings, 
    aggregateLikes, id:apiId, sourceUrl, image,
    vegetarian, vegan, glutenFree, dairyFree
  } = recipe;

  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to='/recipes' className='btn'>
          Back To Recipes
        </Link>

        <div className="recipe-center">
          <RecipeImages image={image}/> {/* in the future set up an array to send more photos here */}
          <section className="content">
            <h2>{title}</h2>
            <Stars aggregateLikes={aggregateLikes}/>
            <h5 className='cookTime'>{readyInMinutes} Min Prep/Cook Time</h5>
            {/* <p className="desc">{summary}</p> */}
            <p className="info">
              <span>Servings: {servings}</span>
            </p>
            <p className="info">
              <span><a href={sourceUrl}>See Full Recipe!</a></span>
            </p>

            <p className="info diet-column">
              <div className='diet-row'>
                <span> Dairy Free : </span>
                  {dairyFree ? 
                    <div className='diet-info-container'>
                      <img src={DairyFree} alt="Dairy Free" className='diet-icon'/> 
                      <GiCheckMark className='diet-mark'/>
                    </div>
                    : <FaTimes className='diet-mark'/>}
              </div>
            </p>
            
            <p className="info diet-column">
              <div className='diet-row'>
                <span> Gluten Free : </span>
                  {glutenFree ? 
                    <div className='diet-info-container'>
                      <img src={GlutenFree} alt="Gluten Free" className='diet-icon'/> 
                      <GiCheckMark className='diet-mark'/>
                    </div>
                    : <FaTimes className='diet-mark'/>}
              </div>
            </p>

            <p className="info diet-column">
              <div className='diet-row'>
                <span> Vegetarian : </span>
                  {vegetarian ? 
                    <div className='diet-info-container'>
                      <img src={Vegetarian} alt="Vegetarian" className='diet-icon'/> 
                      <GiCheckMark className='diet-mark'/>
                    </div>
                    : <FaTimes className='diet-mark'/>}
              </div>
            </p>

            <p className="info diet-column">
              <div className='diet-row'>
                <span> Vegan : </span>
                  {vegan ? 
                    <div className='diet-info-container'>
                      <img src={Vegan} alt="Vegan" className='diet-icon'/> 
                      <GiCheckMark className='diet-mark'/>
                    </div>
                    : <FaTimes className='diet-mark'/>}
              </div>
            </p>  
            <hr />
            <AddToFavorites recipe={recipe}/> {/* passing in entire recipe and not grabbing object by object */}
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .recipe-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  .cookTime {
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

  .diet-column{
    display: flex;
    flex-direction: column;
  }
  .diet-row{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  .diet-info-container{
    display: flex;
    align-content: center;
  }

  .diet-icon{
    width: 3rem;
    margin: 0 3rem;
  }

  .diet-mark{
    font-size: 2rem;
    align-self: center;
  }

  @media (min-width: 992px) {
    .recipe-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .cookTime {
      font-size: 1.25rem;
    }
  }
`

export default SingleRecipePage

