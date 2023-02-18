import styled from 'styled-components';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useFavoriteContext } from '../context/favorite_context';

function AddToFavorites({recipe}) {
  const {addToFavorite} = useFavoriteContext();
  const {id, servings, image, aggregateLikes, title} = recipe;

  return (
    <Wrapper>
      <div className="btn-container">
        <Link to='/favorites' className='btn' onClick={ ()=> 
          addToFavorite(id, servings, image, aggregateLikes, title)}>  {/* //pulls from destructured recipe object and passes to favorite_context file */}
          Cook This Soon! <br />
          (Add to favorites...)
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
    width: 300px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.25rem;
  }
`
export default AddToFavorites