import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

import { primaryTheme } from "./styles/theme";
import GlobalStyle from "./styles/global";

const App = (props) => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <Container
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 0.25 }}
      >
        <Top
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.75 }}
        >
          <TopRight>
            <h1>
              New Look in the Making <br />
              Coming Soon.
            </h1>
            <h4>
              Respect Tradition, <br />
              Challenge Convention.
            </h4>
            <a href="http://ostaco.com/website/">Go to Ostaco site</a>
          </TopRight>
        </Top>
        <Bottom>
          <Left />
          <Right
            animate={{ rotate: -20, transformOrigin: "bottom right" }}
            transition={{ ease: "easeOut", duration: 1.25, delay: 1.5 }}
          />
        </Bottom>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
};

const Container = styled(motion.div)`
  display: grid;
  width: 100%;
`;
const Top = styled(motion.div)`
  @media (max-width: 768px) {
    width: 100vw;
    padding: 48px;
    box-sizing: border-box;
  }
  padding-bottom: 48px;
  min-height: 40vh;
  align-content: end;
  width: 50vw;
  justify-self: end;
  justify-content: start;
  display: grid;
`;

const TopRight = styled.div`
  @media (max-width: 768px) {
    grid-gap: 24px;
  }
  display: grid;
  grid-gap: 48px;
`;
const Bottom = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
`;
const Left = styled.div`
  display: grid;
  height: 6.5vw;
  background-color: ${({ theme }) => theme.color.secondary};
`;
const Right = styled(motion.div)`
  display: grid;
  height: 6.5vw;
  background-color: ${({ theme }) => theme.color.secondary};
`;

export default App;
