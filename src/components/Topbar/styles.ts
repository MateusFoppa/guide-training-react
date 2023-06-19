import styled from "styled-components"

export const Container = styled.aside`
height: 6rem;

background-color: ${({ theme }) => theme.colors.green};

padding: 1rem 2rem;
overflow: hidden;

display: flex;
justify-content: start;
align-items: center;
margin-bottom: 2rem;

h1{
  padding-right: 10rem;
}

 nav {
  width: 25rem;
  height: 100%;




    ul {
      height: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      padding: 5px;
      margin-left: 10rem;
    }li{
      align-items: center;
      padding: 0px;
      margin: 0px;

    }button{
      padding: 0.6rem;
      position: relative;
    }
  }
`
