import styled from 'styled-components';
import React from 'react';
import { FcStatistics, FcLike, FcGlobe } from 'react-icons/fc';

function Services() {
  const services = [
    {
      id: 1,
      icon: <FcStatistics />,
      title: 'mission',
      text:
        'To provide quick, easy access to affordable recipes to make at home without being spammed on our site with hundreds of advertisements.',
    },
    {
      id: 2,
      icon: <FcLike />,
      title: 'vision',
      text:
        'To watch you as the client use this site for free to save money and live healthier.',
    },
    {
      id: 3,
      icon: <FcGlobe />,
      title: 'history',
      text:
        'Inspired by my own story of finding greath health through cooking at home as a full time software developer. ',
    },
  ]

  return (
    <Wrapper>
      <div className='section-center'>
        <article className="header">
          <h3>Recipe search<br />
          built for ease</h3>
          <p>Plase take the time to explore recipes on this site to not only eat healthier, but also save money at the same time.</p>
        </article>
        <div className="services-center">
          {services.map((services) => {
            const{id,icon,title,text} = services;
            return <article key={id} className='service'>
              <span className='icon'>
                {icon}
              </span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section `
  h3,

  h4 {
    color: var(--clr-primary-1);
  }

  padding: 5rem 0;
  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }

  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }

  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);

    p {
      color: var(--clr-primary-2);
    }
  }

  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);

    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }

  @media (min-width: 1280px) {
    padding: 0;

    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services
