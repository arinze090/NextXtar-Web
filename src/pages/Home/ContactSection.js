import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import contactImage from "../../assets/contactImage.png";
import TransparentBtn from "../../components/form/TransparentBtn";
import { COLORS } from "../../theme/theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10rem;
  background: ${COLORS.black};
  padding-top: 120px;

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
  margin-left: 80px;

  @media (max-width: 768px) {
    text-align: center;
    margin-left: 0px;
  }
`;

const Heading = styled.h2`
  font-size: 42px;
  margin-bottom: 0px;
  color: ${COLORS.white};
  font-weight: bold;
  text-align: left;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 28px;
  }
`;

const Paragraph = styled.p`
  font-size: 24px;
  color: ${COLORS.white};
  margin-bottom: 30px;
  text-align: left;
  margin-top: 5px;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 18px;
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
