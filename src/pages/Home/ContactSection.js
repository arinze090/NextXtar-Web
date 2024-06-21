import React from "react";
import styled from "styled-components";
import contactImage from "../../assets/contactImage.png";
import TransparentBtn from "../../components/form/TransparentBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem;
  background-color: #f9f9f9;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
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

  @media (min-width: 768px) {
    text-align: left;
    padding-left: 2rem;
  }
`;

const Heading = styled.h2`
  font-size: 42px;
  margin-bottom: 1rem;
  color: #000;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 24px;
  color: #434343;
  margin-bottom: 1rem;
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
        <Button href="/contact">Visit Our Contact Page</Button>
        <TransparentBtn title={"Visit Our Contact Page"} />
      </TextWrapper>
    </Container>
  );
};

export default ContactSection;
