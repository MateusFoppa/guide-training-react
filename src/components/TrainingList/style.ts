import styled from "styled-components";


export const Container = styled.div`display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
gap: 1.75rem;

justify-content: center;

@media (max-width: 500px) {
  grid-template-columns: 1fr;
}

.box {
  position: relative;
  background: ${({ theme }) => theme.colors.black};
  padding: 1.75rem 1.5rem;
  border-radius: 4px;
  margin: 2rem;

  .exercise{
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: ${({ theme }) => theme.colors.gray900};
    gap: 2rem;
    padding: 2rem;
  }
  .ul{
    display: flex;
    flex-direction: row;
  }

  span {
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;

    background: ${({ theme }) => theme.colors.red};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;
    font-size: 1.125rem;
  }

  h2 {
    margin-bottom: 0.75rem;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    height: 50px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 11.25rem;
    border-radius: 4px;
    margin-bottom: 0.375rem;
  }

  p {
    font-size: 0.875rem;
  }

  div {
    margin-top: 0.875rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 2rem;
      font-weight: 500;
    }


  }
}
`
