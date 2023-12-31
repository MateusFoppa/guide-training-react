import styled from "styled-components";


export const Container = styled.div`
  display: flex-box;
  flex-direction: column;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 400px)); */
  gap: 1.75rem;
  margin: 0px;
  align-items: center;
  justify-content: center;


   /* @media (max-width: 500px) {
     grid-template-columns: 1fr;
  } */

  . {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;
    margin: 0px;

   }
  .box {
    position: center;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.green};
    padding: 0px 2rem;
    padding-bottom: 2rem;
    border-radius: 4px;
    margin-top: 0px;
    width: 50rem;
    margin: auto;
    text-align: center;


    .item {
      margin-top: 0px;
    }
    form, ::placeholder{
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: auto;
      text-align: center;
      gap: 1rem;
      font-size: large;
      margin-top: 1rem;

    }
    input{
      border-radius: 4px;
    }


    span {
      /* position: absolute;
      top: -0.5rem;
      left: -0.5rem; */

      //background: ${({ theme }) => theme.colors.green};
      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      //display: block;
      /* align-items: center;
      justify-content: center; */

      font-weight: 500;
      font-size: 1.125rem;
    }

    h2 {
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
    }

    img {
      //object-fit: cover;
      width: 20rem;
      height: 11.25rem;
      border-radius: 4px;
      margin-bottom: 0.375rem;
    }

    p {
      font-size: 0.875rem;
    }

    div {
      margin-top: 0.875rem;
      align-items: center;


      strong {
        font-size: 2rem;
        font-weight: 500;
      }

      //  button {
      //   background: ${({ theme }) => theme.colors.gray700};
      //   width: 10rem;
      //   height: 3rem;
      //   border: none;
      //   border-radius: 8px;



        display: flex;
        align-items: center;
        justify-content: center;


        svg {
          stroke: ${({ theme }) => theme.colors.white};
          width: 1.5rem;
          height: 1.5rem;
        }

      }
    }
  }
`
