import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import dancarina from '../../assets/dancarina.svg';
import folhagem from '../../assets/folhagem.svg';

export const Header = styled.header`
  display: grid;
  align-content: center;
  justify-items: center;
  padding: 10rem 10%;
  background: url(${folhagem}) top left no-repeat,
    url(${dancarina}) bottom right no-repeat,
    ${({ theme }) => theme.colors.white700};
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: grid;
  gap: 4rem;
`;

export const TitleContainer = styled.div`
  margin: 0 auto;
  max-width: 64.5rem;
  display: grid;
  gap: 1.8rem;
`;

export const Message = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.red300};
  text-align: center;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.black700};
  & > span {
    color: ${({ theme }) => theme.colors.purple300};
  }
`;

export const Form = styled.form`
  display: grid;
  padding: 4rem;
  gap: 2.4rem;
  grid-template-columns: repeat(2, minmax(17rem, 1fr)) 17rem;
  background-color: ${({ theme }) => theme.colors.white900};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: 1rem;
  @media (max-width: 800px) {
    width: fit-content;
    margin: 0 auto;
    grid-template-columns: minmax(17rem, 35rem);
    justify-content: center;
  }
`;

export const Button = styled.button`
  max-width: 17rem;
  justify-self: center;
  font-weight: 700;
  padding: 1.2rem 3.2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.purple300};
  color: ${({ theme }) => theme.colors.white900};
  cursor: pointer;
`;

export const ContentContainer = styled.section`
  margin: 7.8% 7% 0 7.8%;
  display: grid;
  gap: 4rem;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 635px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const ContentTitle = styled.h2`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.black900};
  @media (max-width: 635px) {
    text-align: center;
  }
`;

export const Menu = styled.nav`
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: 0.6rem;
  @media (max-width: 635px) {
    width: fit-content;
    margin: 0 auto;
  }
`;

export const MenuItem = styled(NavLink)`
  padding: 0.4rem 2.4rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.purple300};
  font-weight: 700;
  font-size: 1.4rem;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease;
  &.active,
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple300};
    color: ${({ theme }) => theme.colors.white900};
  }
  & ~ & {
    margin-left: 0.5rem;
  }
`;
