import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

import { primaryTheme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

const App = (props) => {
  const [dimensions, setDimensions] = useState(0);
  const [degree, setDegree] = useState(0);
  const [height, setHeight] = useState(0);

  const [direct, setDirect] = useState(false);
  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    setTimeout(() => {
      setDirect(true);
    }, 6000);
  });

  useEffect(() => {
    //375 width = -24deg
    //2560 width = -12deg

    //-24deg -------------  -12deg
    //375w ---------------  2560w
    let widthCalc = ((dimensions - 375) * 100) / (2560 - 375);
    setDegree((-2 * widthCalc) / 100 - 20);
    setHeight((-2 * widthCalc) / 100 + 2);

    console.log(widthCalc, degree, height);
  }, [dimensions, degree, height]);



  return (
    <ThemeProvider theme={primaryTheme}>
      <Router>
        <Route
          path="/ostaco"
          component={() => {
            window.location.href = "http://ostaco.com/website/";
            return null;
          }}
        />
        <Route
          path="/"
          render={() => {
            if (direct) {
              return (
                <Redirect to="/ostaco" />
              );
            }
            return (
              <Container
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
              >
                <Top
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: ["easeOut"], duration: 0.5, delay: 2.75 }}
                >
                  <TopRight>
                    <h1>New Look in the Making.</h1>
                    <h4>
                      Respect Tradition <br />
                      Challenge Convention.
                    </h4>
                    <a href="http://ostaco.com/website/">
                      Go to Ostaco Website
                    </a>
                  </TopRight>
                </Top>
                <Bottom>
                  <Left
                  // height={height}
                  />
                  <Right
                    // height={height}
                    animate={{ rotate: -17, transformOrigin: "bottom right" }}
                    transition={{
                      ease: [0.35, 0, 0.23, 1],
                      duration: 1.25,
                      delay: 1.5,
                    }}
                  />
                </Bottom>
              </Container> )
            }}/>
      </Router>
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
  padding-bottom: 6vw;
  min-height: 30vh;
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

  /* height: ${(props) => `${props.height}vw`}; */
  height: 6.25vw;
  min-height: 23px;
  max-height: 160px;
  background-color: ${({ theme }) => theme.color.secondary};

`;

const Right = styled(motion.div)`

  display: grid;
  /* height:  ${(props) => `${props.height}vw`}; */
  min-height: 23px;
  height: 6.25vw;
  max-height: 160px;
  background-color: ${({ theme }) => theme.color.secondary};
`;

export default App;
