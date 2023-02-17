import styled from 'styled-components';
import { FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useRecipesContext } from '../context/recipes_context'

//import { useCartContext } from '../context/cart_context'
//import { useUserContext } from '../context/user_context'

function FavoriteButtons() {
  const {closeSidebar} = useRecipesContext(); //uses state from useRecipesContext, don't need isSidebarOpen value

  return (
    <Wrapper className='favorite-btn-wrapper'>
      <Link to='/favorites' className='favorites-btn' onClick={closeSidebar}>
        Favorites
        <span className="favorites-container">
          <MdFavorite />
          <span className="favorites-value">12</span>
        </span>
      </Link>
      <button type='button' className='auth-btn'>
        Login <FaUserPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 265px;

  .favorites-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .favorites-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .favorites-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    margin-left: 20px;
    svg {
      margin-left: 5px;
    }
  }
`
export default FavoriteButtons;
