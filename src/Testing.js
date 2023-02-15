import styled from "styled-components"

const Wrapper = styled.section`
  h3{
    background-color: orangered;
    color: white;
  }
  p{
    color: blue;
  }
  button{
    background-color: black;
    color: white;
  }
`

function Testing() {
  return (
    <Wrapper>
      <h3> Test test </h3>
      <p> Test paragraph </p>
      <button>Test button </button>
    </Wrapper>
  )
}

export default Testing
