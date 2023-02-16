import styled from 'styled-components';
import aboutImg from '../assets/logo.png';

function AboutPage() {

  // wrapper classes are in global
  return (
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="about" />
      <article>
        <div className="title">
          <h2>Type About Title</h2>
          <div className="underline"></div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis harum sint ipsa non voluptatibus dicta facere repudiandae enim maiores ullam architecto sed, totam, similique id esse! Beatae praesentium nihil non.</p>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }

  .title {
    text-align: left;
  }

  .underline {
    margin-left: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
