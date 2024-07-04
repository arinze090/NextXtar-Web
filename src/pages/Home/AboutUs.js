import React from "react";
import styled from "styled-components";

import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import about4 from "../../assets/about4.png";
import ContactSection from "./ContactSection";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5rem;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};

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

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Heading = styled.h2`
  font-size: 90px;
  margin-bottom: 1rem;
  color: #000;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 42px;
  }
`;

const Paragraph = styled.p`
  font-size: 24px;
  color: #000;
  margin-bottom: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 18px;
  }
`;

function AboutUs() {
  return (
    <>
      <Container>
        <TextWrapper>
          <Heading>Welcome to Singnify</Heading>
          <Paragraph>
            Singnify is changing the way music is distributed, licensed, and
            published worldwide through its established partner collaborations
            with Sony Music, Amazon, Orchard, 51 Lex Records, iTunes, Spotify,
            Tidal, and Pandora..
          </Paragraph>
        </TextWrapper>
        <ImageWrapper>
          <img src={about1} alt="about1" />
        </ImageWrapper>
      </Container>
      <img
        src={require("../../assets/partners.png")}
        alt="partners"
        style={{ width: "100%" }}
      />
      <Container bgColor={"#F2F2F2"}>
        <TextWrapper>
          <Paragraph>
            At Singnify, we're all about music. We absolutely love it! We've
            partnered up with the big players like Apple Music, iTunes, Spotify,
            Tidal, Pandora, Facebook, TikTok, Instagram, YouTube, and more to
            help musicians get their music out there for free, all around the
            world.{" "}
          </Paragraph>
        </TextWrapper>
        <ImageWrapper>
          <img src={about2} alt="about2" />
        </ImageWrapper>
      </Container>
      <Container>
        <ImageWrapper>
          <img src={about3} alt="about3" />
        </ImageWrapper>
        <TextWrapper>
          <Paragraph>
            At Singnify, we're all about music. We absolutely love it! We've
            partnered up with the big players like Apple Music, iTunes, Spotify,
            Tidal, Pandora, Facebook, TikTok, Instagram, YouTube, and more to
            help musicians get their music out there for free, all around the
            world.{" "}
          </Paragraph>
        </TextWrapper>
      </Container>
      <Container bgColor={"#F2F2F2"}>
        <TextWrapper>
          <Paragraph>
            The music world has gone from old-school records to today's digital
            beats, and we're right there in the mix. If you're a new-age artist
            looking to share, license, or publish your music, we've got a super
            easy platform for you. We're open to all kinds of creative folks,
            whether you're a singer, producer, or part of a brand.
          </Paragraph>
        </TextWrapper>
        <ImageWrapper>
          <img src={about4} alt="about4" />
        </ImageWrapper>
      </Container>
      <ContactSection />
    </>
  );
}

export default AboutUs;
