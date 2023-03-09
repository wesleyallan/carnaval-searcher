import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-synthesis: none;
    font-size: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  body::-webkit-scrollbar {
  width: 1.1rem;
  }

  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray100};
  }

  body::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.purple300};
    border-radius: 0.3rem;
  }
`;
