import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import FormButton from "../../components/form/FormButton";
import TransparentBtn from "../../components/form/TransparentBtn";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #000;
  padding-top: 30px;
  // margin-bottom: 130px;
  align-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 50px;
    margin-bottom: 0px;
    height: 70vh;
  }
`;

const FormContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #000;
  border-radius: 10px;
  overflow: hidden;
`;

const ImageSection = styled.div`
  flex: 1;
  background: url(${require("../../assets/userVerification.png")}) no-repeat
    center center;
  background-size: cover;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
  width: 90%;
  height: 20%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const FormSection = styled.div`
  flex: 1;
  padding: 2rem;
  margin-bottom: 6rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
`;

const Subtitle = styled.p`
  margin-bottom: 5rem;
  color: white;
`;

function ResendVerification() {
  const navigate = useNavigate();

  const login = () => {
    console.log("reddd");
  };

  return (
    <Container>
      <FormContainer>
        <ImageSection />
        <FormSection>
          <Title>Check your Email</Title>
          <Subtitle>
            We have sent a password reset link to anan@gmail.com
          </Subtitle>

          <p style={{ color: "white" }}>
            Didn’t receive the email? Check spam or promotion folder or
          </p>

          <FormButton
            title={"Resend Link"}
            width={"100%"}
            onClick={login}
            marginLeft={"0px"}
            marginTop={20}
          />
          <TransparentBtn
            title={"Back to Login"}
            width={"100%"}
            onClick={() => {
              navigate("/login");
            }}
            marginLeft={"0px"}
            color="black"
            marginTop={20}
          />
        </FormSection>
      </FormContainer>
    </Container>
  );
}

export default ResendVerification;
