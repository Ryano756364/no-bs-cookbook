import { useRecipesContext } from '../context/recipes_context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Error from './Error'
import Loading from './Loading'
import Recipe from './Recipe'

function FeaturedRecipes() {
  const {recipes_loading: loading, 
    recipes_error: error, 
    featured_recipes: featured
  } = useRecipesContext();

  if(loading){
    return <Loading />
  }
  if(error){
    return <Error />
  }

  return (
    <Wrapper className='section'>
      <div className="title">
        <h2>
          Popular Recipes
        </h2>
        <div className="underline"></div>
      </div>

      <div className="section-center featured">
        {featured.slice(0,6).map((recipe) => {
          return <Recipe key={recipe.id} {...recipe}/>
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section `
  background: var(--clr-grey-10);

  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    
    img {
      height: 225px;
    }
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedRecipes
