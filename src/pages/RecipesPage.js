import styled from 'styled-components';
import RecipeList from '../components/RecipeList';
import Filters from '../components/Filters';
import Sort from '../components/Sort';

function RecipesPage() {
  return (
    <main>
      <Wrapper className='page-100'>
        <div className="section-center recipes">
          <Filters /> 
          <div>
            <Sort />
            <RecipeList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .recipes {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

  @media (min-width: 768px) {
    .recipes {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default RecipesPage;
