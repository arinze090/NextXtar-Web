import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import FormButton from "../../components/form/FormButton";
import TransparentBtn from "../../components/form/TransparentBtn";

const Container = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding-top: 130px;
  padding-bottom: 60px;
  align-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 70px;
    margin-bottom: 60px;
    height: auto;
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
  background: url(${require("../../assets/register.png")}) no-repeat center
    center;
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
  text-align: center;
  margin-bottom: 70px;
  color: white;
`;

const RegisterScreen = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <FormContainer>
        <ImageSection />
        <FormSection>
          <Title>Welcome to SupaTunes Music Distribution Company</Title>
          <p style={{ textAlign: "center", color: "white" }}>Register as</p>

          <FormButton
            title={"Music Lover"}
            width={"100%"}
            onClick={() => {
              navigate("/register-as-a-music-lover");
            }}
            marginLeft={"0px"}
            marginTop={20}
          />

          <p style={{ textAlign: "center", color: "white" }}>Or an</p>

          <TransparentBtn
            title={"Artist"}
            width={"100%"}
            onClick={() => {
              navigate("/register-as-an-artist");
            }}
            marginLeft={"0px"}
            color="black"
            marginTop={20}
          />
        </FormSection>
      </FormContainer>
    </Container>
  );
};

export default RegisterScreen;
