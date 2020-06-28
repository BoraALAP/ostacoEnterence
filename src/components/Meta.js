import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import favicon from "../components/assets/fav/favicon.ico";
import fav16 from "../components/assets/fav/favicon-16x16.png";
import fav32 from "../components/assets/fav/favicon-32x32.png";
import manifest from "../components/assets/fav/site.webmanifest";
import apple from "../components/assets/fav/apple-touch-icon.png";
import safari from "../components/assets/fav/safari-pinned-tab.svg";

const Meta = (props) => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ostaco - Coming Soon</title>
        <link rel="canonical" href="http://ostaco.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href={apple} />
        <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
        <link rel="icon" type="image/png" sizes="16x16" href={fav16} />
        <link rel="manifest" href={manifest} />
        <link rel="mask-icon" href={safari} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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
