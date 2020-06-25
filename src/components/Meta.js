import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Meta = (props) => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ostaco - Coming Soon</title>
        <link rel="canonical" href="http://ostaco.com" />
        <meta
          name="description"
          content="Ostaco windows are custom made-to-order and designed to make a statement in your home. Contact us today to order the perfect windows and doors for your home."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ostaco | Quality Windows &amp; Doors in Ontario"
        />
        <meta
          property="og:description"
          content="Ostaco windows are custom made-to-order and designed to make a statement in your home. Contact us today to order the perfect windows and doors for your home."
        />
        <meta property="og:url" content="http://ostaco.com/" />
        <meta property="og:site_name" content="Ostaco" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Ostaco windows are custom made-to-order and designed to make a statement in your home. Contact us today to order the perfect windows and doors for your home."
        />
        <meta
          name="twitter:title"
          content="Ostaco | Quality Windows &amp; Doors in Ontario"
        />
        <meta
          name="twitter:image"
          content="http://ostaco.com/wp-content/uploads/2018/03/app-store.png.png"
        />
        <meta
          name="google-site-verification"
          content="C-AALCLWttkjaNEk2fJx2bn1hy4ksPtGZ4YWW22m3n4"
        />
      </Helmet>
    </Container>
  );
};

const Container = styled.div``;

export default Meta;
