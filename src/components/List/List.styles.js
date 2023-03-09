import styled from 'styled-components';

export const Content = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
  justify-content: space-between;
  gap: 3.2rem;
  @media (max-width: 948px) {
    justify-content: center;
  }
`;
