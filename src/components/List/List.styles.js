import styled from 'styled-components';

export const Content = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 38.4rem);
  justify-content: space-between;
  gap: 3.2rem;
  @media (max-width: 948px) {
    justify-content: center;
  }
`;
