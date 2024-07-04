import React from "react";
import styled from "styled-components";

import appImage from "../../assets/AppImage.png";

const Container = styled.div`
  position: relative; /* Needed to position the pseudo-element */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5rem;
  background-color: #f9f9f9;
  background: url(${require("../../assets/homeBg3.jpeg")}) no-repeat center
    center;
  background-size: cover;

  /* Pseudo-element for background image */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      255,
      255,
      255,
      0.9
    ); /* White overlay with 80% opacity */
    z-index: 0; /* Ensure the overlay stays behind the content */
  }

  /* Ensure content is above the overlay */
  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  padding: 1rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Heading = styled.h2`
  font-size: 42px;
  margin-bottom: 1rem;
  color: #000;
  font-weight: bold;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 28px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #434343;
  margin-bottom: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }
`;

function DownloadSection() {
  return (
    <Container>
      <TextWrapper>
        <Heading>
          Download and listen to your favourite songs and artists with Singnify
        </Heading>
        <Paragraph>
          Singnify is available on Web, iOS and Android for download
        </Paragraph>
      </TextWrapper>
      <ImageWrapper>
        <img src={appImage} alt="appImage" />
      </ImageWrapper>
    </Container>
  );
}

export default DownloadSection;
