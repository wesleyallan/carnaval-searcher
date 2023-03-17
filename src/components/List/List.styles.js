import styled from 'styled-components';

export const Content = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
  justify-content: space-between;
  gap: 3.2rem;
  @media (max-width: 948px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
