import styled from 'styled-components';
import {Link} from 'react-router-dom';

function ErrorPage() {

  //page 100 and btn in global css setup to avoid redundancy in css styling
  return (
    <Wrapper className='page-100'>
      <section>
        <h1>
          404
        </h1>
        <h3>Sorry, page doesn't exist.</h3>
        <Link to="/" className='btn'>
          Head back home
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 10rem;
  }

  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
