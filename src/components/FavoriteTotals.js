import styled from 'styled-components';
//import { Link } from 'react-router-dom';
//import { useFavoriteContext } from '../context/favorite_context';

function FavoriteTotals() {
  //const { total_amount, restaurant_amount } = useFavoriteContext()
  //const {myUser, loginWithRedirect} = useUserContext();

  return (
    <Wrapper>
      {/* <div>            future release where user can see approx. how much money they would save with cooking these recipes
        <article>
          <h5>
            recipe total :<span> span </span>
          </h5>
          <p>
            restaurant total :<span>span</span>
          </p>
          <hr />
          <h4>
            money saved :<span>span</span>
          </h4>
        </article>
        
      </div> */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,

  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }

  p {
    text-transform: capitalize;
  }

  h4 {
    margin-top: 2rem;
  }

  @media (min-width: 776px) {
    justify-content: flex-end;
  }

  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default FavoriteTotals;
