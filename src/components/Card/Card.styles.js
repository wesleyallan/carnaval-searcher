import styled from 'styled-components';

export const Card = styled.article`
  width: 38.4rem;
  height: 32.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: 0.5rem;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.black700};
  transition: all 0.2s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.purple300};
    transform: scale(1.05);
  }
  p {
    padding: 1.2rem;
  }
  img {
    transform: scale(1);
    transition: all 1s ease;
  }
  &:hover img {
    transform: scale(1.2);
  }
`;

export const ContainerImg = styled.div`
  overflow: hidden;
`;

export const Title = styled.h3`
  padding: 1.2rem;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black700};
`;

export const ContainerLocation = styled.div`
  padding: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
