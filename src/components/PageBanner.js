import styled from 'styled-components';
import {Link} from 'react-router-dom';

function PageBanner() {

  //Designed to be used accross multiple pages in future releases
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>Restore your health <br />
        through food</h1>
      <p>
        My companies website was created to allow the average person to quickly head to this site, find great food, save them, all without the hassle of being bombarded by hundreds of advertisemts along the way!
      </p>
      <Link to='/recipes' className='btn hero-btn'>
        Search now
      </Link>
      </article>
      
      <article className='img-container'>
        <img src="https://webknox.com/recipeImages/1747701-556x370.jpg" alt="food prep" className='main-img' />  
        <img src="https://webknox.com/recipeImages/1747683-556x370.jpg" alt="food prep" className='accent-img' />  
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section `
  min-height: 60vh;
  display: grid;
  place-items: center;

  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    h1 {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.25rem;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    .img-container {
      display: block;
      position: relative;
    }

    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }

    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }

    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default PageBanner;
