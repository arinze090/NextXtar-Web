import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import contactImage from "../../assets/contactImage.png";
import TransparentBtn from "../../components/form/TransparentBtn";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10rem;
  background-color: #f9f9f9;

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
  margin-left: 48px;

  @media (max-width: 768px) {
    text-align: center;
    margin-left: 0px;
  }
`;

const Heading = styled.h2`
  font-size: 42px;
  margin-bottom: 0px;
  color: #000;
  font-weight: bold;
  font-family: "Arimo", sans-serif;
  text-align: left;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 28px;
  }
`;

const Paragraph = styled.p`
  font-size: 24px;
  color: #434343;
  margin-bottom: 60px;
  font-family: "Arimo", sans-serif;
  text-align: left;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 18px;
  }
`;

const Button = styled.a`
  padding: 0.75rem 1.5rem;
  border: 2px solid #05a30b;
  border-radius: 5px;
  color: #05a30b;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #05a30b;
    color: #fff;
  }
`;

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ImageWrapper>
        <img src={contactImage} alt="Contact" />
      </ImageWrapper>
      <TextWrapper>
        <Heading>Get in Touch with Us</Heading>
        <Paragraph>
          To be always updated with all our activities, you can follow us and
          subscribe on all our social media platforms by visiting our contact
          page.
        </Paragraph>
        <TransparentBtn
          title={"Visit Our Contact Page"}
          color={"black"}
          hoverColor={"black"}
          width={"60%"}
          marginLeft={"0px"}
          onClick={() => {
            navigate("/contact-us");
          }}
        />
      </TextWrapper>
    </Container>
  );
};

export default ContactSection;
