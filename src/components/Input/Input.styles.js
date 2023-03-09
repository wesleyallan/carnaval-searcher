import styled, { css } from 'styled-components';

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 1.6rem 4.6rem;
  border-radius: 0.5rem;
  outline: none;
  background-color: ${({ theme }) => theme.colors.white500};
  background: url(${({ icon }) => icon}) no-repeat 1.4rem center,
    ${({ theme }) => theme.colors.white500};
  ${({ chevron }) => {
    if (chevron) {
      return css`
        background: url(${({ icon }) => icon}) no-repeat 1.4rem center,
          url(${chevron}) no-repeat calc(100% - 1.4rem) center,
          ${({ theme }) => theme.colors.white500};
      `;
    }
  }}
`;
