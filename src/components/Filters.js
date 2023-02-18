import styled from 'styled-components';
import {useFilterContext} from '../context/filter_context';
import {FaCheck} from 'react-icons/fa';
import {getUniqueValues} from '../utils/helpers';

const Filters = () => {
  const {
    filters: {
      text,
      diets,
      dishTypes,
      min_likes,
      max_likes,
      likes,
    },
    updateFilters,
    all_recipes,
    clearFilters
  } = useFilterContext()

  /*Main logic to sort and filter object data*/
  const categories = getUniqueValues(all_recipes, 'diets')  //passing in data then string of what we are looking for
  const mealTimeFiltered = getUniqueValues(all_recipes, 'dishTypes')

  //console.log(categories);
  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>  {/* everything else is controlled in state so prevent reset */}

          {/* search input */}
          <div className='form-control'>
            <input
              type='text'
              name='text'  
              placeholder='search'
              className='search-input'
              onChange={updateFilters}
              value={text}
            />
          </div>
          {/* end of search input */}

          {/* category */}
          <div className='form-control'>
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='diets'
                    className={`${diets === c.toLowerCase() ? 'active' : null}`} //give a grey underline upon click
                  >
                  {c}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of category */}

          {/* dishTypes */}
          <div className='form-control'>
            <h5>dish type</h5>
            <select
              name='dishTypes'  //very import in Filter Reducer to have 'name'
              value={dishTypes}
              onChange={updateFilters}
              className='dishTypes'
            >
              {mealTimeFiltered.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c.toLowerCase().split(' ').map(word => //ES6 option to capitalize first letter of each word
                      word.charAt(0).toUpperCase() + 
                      word.substring(1)).join(' ')}
                  </option>
                )
              })}
            </select>
          </div>
          {/* end of dishTypes */}

          {/* likes */}
          <div className='form-control'>
            <h5>likes</h5>
            <p className='likes'>{(likes)}</p>
            <input
              type='range'
              name='likes'
              onChange={updateFilters}
              min={min_likes}
              max={max_likes}
              value={likes}
            />
          </div>
          {/* end of likes */}
        </form>

        <button type='button' className='clear-btn' onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }

  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }

  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }

  .active {
    border-color: var(--clr-grey-5);
  }

  .dishTypes {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }

  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }

  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }

  .active {
    opacity: 1;
  }

  .all-btn .active {
    text-decoration: underline;
  }

  .likes {
    margin-bottom: 0.25rem;
  }

  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters;
