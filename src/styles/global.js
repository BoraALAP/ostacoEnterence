import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Muli:wght@200;300;400;500;700;800;900&display=swap');

  body{
    font-family: ${({ theme }) => theme.font.family.main};
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => theme.color.grey};
  }

  h1,h2,h3,h4,h5,h6{
    margin: 0;
  }

  h1{
    @media (max-width: 375px) {
      font-size: 22px;
  }
    font-size: 30px;
    font-weight: 700;
  }

  h4{
    @media (max-width: 375px) {
      font-size: 18px;
  }
    font-size: 22px;
    line-height: 27px;
    font-weight: 500;
  }

  a{
    @media (max-width: 375px) {
      font-size: 14px;
  }
    font-size: 15px;
    font-weight: 500;
    &:visited{
      color: ${({ theme }) => theme.color.grey};
    }
  }
  
`;

export default GlobalStyle;
