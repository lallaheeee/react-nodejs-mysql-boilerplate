import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }
  
  * {
    font-family: 'Source Sans Pro', sans-serif;
    text-decoration: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    background: none;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 16px;
  }

  header {
    position: sticky;
    top: 0;
    left: 0;
    height: 20vh;
    min-height: 5rem;
  }

  main {
    height: 80vh;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a,
  a:visited,
  a:active {
    cursor: pointer;
  }

  a:hover {
    opacity: 1;
  }

  img {
    -webkit-user-drag: none;
  }

  div,
  span {
    user-select: none;
  }
`;

export default GlobalStyle;
