import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: #3077c6;
    color: #fff;
  }

  body, input, button {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  img {
    background: #fff;
    padding: 40px;
    width: 100%;
    border-radius: 4px;
  }
`;
