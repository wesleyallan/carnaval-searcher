import styled from 'styled-components';

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 1.6rem 4.6rem;
  border-radius: 0.5rem;
  outline: none;
  background: url(${({ icon }) => icon}) no-repeat 1.4rem center,
    url(${({ chevron }) => chevron}) no-repeat calc(100% - 1.4rem) center,
    ${({ theme }) => theme.colors.white500};
`;
