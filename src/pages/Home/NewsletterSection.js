import React from "react";
import styled from "styled-components";

import appImage from "../../assets/headphones.png";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  background-color: #000;
  justify-content: center;

  /* Ensure content is above the overlay */
  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 30px;
  }
`;

const InsideContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5rem;
  border-radius: 32px;
  background-color: #000;
  background: linear-gradient(
    180deg,
    rgba(35, 35, 35, 35) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 100%;
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
  margin-left: 80px;

  @media (max-width: 768px) {
    text-align: center;
    margin-left: 30px;
    padding: 20px;
  }
`;

const Heading = styled.h2`
  font-size: 48px;
  margin-bottom: 1rem;
  color: #fff;
  font-weight: bold;
  text-align: left;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 28px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 1rem;
  text-align: left;
  width: 90%;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 14px;
  }
`;

const DownloadIconSection = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  display: flex;
  // background-color: red;
  margin-top: 40px;
  width: auto;
  align-content: center;
  align-items: center;

  img {
    width: 90%;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    flex-direction: column;
  }
`;

function NewsletterSection() {
  return (
    <Container>
      <InsideContainer>
        <ImageWrapper>
          <img src={appImage} alt="appImage" />
        </ImageWrapper>
        <TextWrapper>
          <Heading>Don't Miss a Beat!</Heading>
          <Paragraph>
            Stay updated on the latest music news, exclusive offers, promotions
            and news releases by signing up for our news letter. stay in the
            loop with the freshest music and be the first to know about our
            upcoming events, artist spotlights and more. Sign up today!
          </Paragraph>

          <DownloadIconSection>
            <FormInput
              inputPlaceholder={"Enter your email address"}
              type={"email"}
              width={"50%"}
            />
            <FormButton title={"Subscribe"} marginTop={-20} />
          </DownloadIconSection>
        </TextWrapper>
      </InsideContainer>
    </Container>
  );
}

export default NewsletterSection;
