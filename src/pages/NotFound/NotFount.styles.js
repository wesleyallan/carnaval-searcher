import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  place-content: center;
  background-color: ${({ theme }) => theme.colors.white500};
`;

export const Content = styled.main`
  width: fit-content;
  display: grid;
  justify-items: center;
  gap: 3rem;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.gray500};
  text-shadow: 0 0.4rem 0.1rem rgba(0, 0, 0, 0.05);
  font-size: 7rem;
  img {
    width: 10rem;
  }
`;

export const Button = styled(Link)`
  width: 20rem;
  height: 5.5rem;
  border-radius: 0.5rem;
  display: grid;
  place-content: center;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white500};
  background-color: ${({ theme }) => theme.colors.gray500};
  transition: all 0.2s ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple300};
  }
`;
