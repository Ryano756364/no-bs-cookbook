import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useFavoriteContext} from '../context/favorite_context';
import FavoriteContent from '../components/FavoriteContent';

function FavoritesPage() {
  const {favorite} = useFavoriteContext();

  if(favorite.length < 1){
    return (
      <Wrapper className='page-100'>  {/* page-100 is global styling */}
        <div className="empty">
          <h2>
            No favorite recipes added yet!
          </h2>
          <Link to='/recipes' className='btn'>
            Add Recipes Here
          </Link>
        </div>
      </Wrapper>
    )
  }

  return (
    <main>
      <Wrapper className='page-100'>
        <FavoriteContent />
      </Wrapper>
    </main>
  )
  
}

const Wrapper = styled.div`
  .empty {
    text-align: center;
    h2{
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default FavoritesPage
