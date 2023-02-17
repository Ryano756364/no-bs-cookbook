import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
//import { useCartContext } from '../context/cart_context';

function AddToFavorites({recipe}) {
  const {apiId, servings, image, aggregateLikes} = recipe;

  return (
    <Wrapper>
      <div className="btn-container">
        <Link to='/favorites' className='btn'>
          Add To Favorites
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;

  .active {
    opacity: 1;
  }

  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 250px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.25rem;
  }
`
export default AddToFavorites