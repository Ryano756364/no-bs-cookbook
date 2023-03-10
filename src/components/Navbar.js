import styled from 'styled-components';
import logo from '../assets/spoon-knife.svg';
import {FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {links} from '../utils/constants';
import FavoriteButtons from './FavoriteButtons';
import { useRecipesContext } from '../context/recipes_context';
import { useUserContext } from '../context/user_context';

function Navbar() {
  const {openSidebar} = useRecipesContext(); //need to invoke here
  const {myUser} = useUserContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
            <img src={logo} alt="No BS Cookbook brand logo" />
          </Link>

          <button type="button" className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {links.map((link) => {
            const {id, text, url} = link;
            return (
              <li key={id}>
                <Link to={url}>
                  {text}
                </Link>
              </li>
            )
          })}
          {
            myUser && <li>
              <Link to="/favorite">Favorites</Link>
            </li>
          }
        </ul>

        <FavoriteButtons />
      </div>
    </NavContainer>
  )
}

export default Navbar

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 44px;
      margin-left: -12px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .favorite-btn-wrapper {
    display: none;
  }

  @media (min-width: 990px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .favorite-btn-wrapper {
      display: grid;
    }
  }
`
