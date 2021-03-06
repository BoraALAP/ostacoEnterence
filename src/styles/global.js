import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&display=swap');

  body{
    font-family: ${({ theme }) => theme.font.family.main};
    font-weight: 400;
    margin: 0;
    color: ${({ theme }) => theme.color.grey};
  }

  h1,h2,h3,h4,h5,h6{
    margin: 0;
  }

  h1{
    @media (max-width: 375px) {
      font-size: 18px;
  }
    font-size: 26px;
    font-weight: 600;
  }

  h4{
    @media (max-width: 375px) {
      font-size: 16px;
  }
    font-size: 20px;
    line-height: 27px;
    font-weight: 400;
  }

  a{
    @media (max-width: 375px) {
      font-size: 14px;
  }
    font-size: 15px;
    font-weight: 500;
    &:visited, &:active {
      color: ${({ theme }) => theme.color.grey};
    }
  }
  
`;

export default GlobalStyle;
