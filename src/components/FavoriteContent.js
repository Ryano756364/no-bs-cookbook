import styled from 'styled-components';
import {useFavoriteContext} from '../context/favorite_context';
import {Link} from 'react-router-dom';
import FavoriteColumns from './FavoriteColumns';
import FavoriteItem from './FavoriteItem';
import FavoriteTotals from './FavoriteTotals';


function FavoriteItems() {
  const { favorite, clearFavorite } = useFavoriteContext()

  return (
    <Wrapper className='section section-center'>
      <FavoriteColumns />

      {favorite.map((item) => {
        return <FavoriteItem key={item.id} {...item} />
      })}

      <hr />

      <div className='link-container'>
        <Link to='/recipes' className='link-btn'>
          add more recipes!
        </Link>

        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearFavorite}
        >
          clear favorites
        </button>
      </div>

      <FavoriteTotals />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }

  .clear-btn {
    background: var(--clr-black);
  }
`
export default FavoriteItems;
