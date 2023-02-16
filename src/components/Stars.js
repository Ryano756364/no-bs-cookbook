import styled from 'styled-components';
import {IoThumbsUp} from 'react-icons/io5';

function Stars({aggregateLikes}) {
  
  return (
    <Wrapper>
      <div className="stars">
        <IoThumbsUp />
      </div>
      <p className='reviews'>{aggregateLikes} People Liked This Meal</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }

  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars;
