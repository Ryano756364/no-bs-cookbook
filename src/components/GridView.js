import styled from 'styled-components';
import Recipe from './Recipe';

function GridView({recipes}) {
  return (
    <Wrapper>
      <div className="recipes-container">
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .recipes-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .recipes-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1170px) {
    .recipes-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default GridView;
