import styled from 'styled-components';
import aboutImg from '../assets/spoon-knife.svg';

function AboutPage() {
  // wrapper classes are in global
  return (
    <Wrapper className='page-100 section section-center'>
      <img src={aboutImg} alt="about" />
      <article>
        <div className="title">
          <h2>About No BS Cookbook</h2>
          <div className="underline"></div>
        </div>
        <p>To watch YOU, the client, live and fulfill a healthier you through eating great food at home. </p>
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
