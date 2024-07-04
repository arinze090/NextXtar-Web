import React from "react";
import styled from "styled-components";

import FormInput from "../../components/form/FormInput";
import FormTextArea from "../../components/form/FormTextArea";
import FormButton from "../../components/form/FormButton";

const Container = styled.div`
  display: flex;
  height: 130vh;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-top: 0px;
  // margin-bottom: 130px;
  align-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 0px;
    margin-bottom: 20px;
    height: 130vh;
  }
`;

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f2f2f2;
  border-radius: 10px;
  overflow: hidden;
`;

const ImageSection = styled.div`
  flex: 1;
  background: url(${require("../../assets/2.jpg")}) no-repeat center center;
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
`;

const FormSection = styled.div`
  flex: 1;
  padding: 2rem;
  //   margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.p`
  margin-bottom: 0rem;
  text-align: center;
  font-size: 24px;
  display: flex;
  // width: 100%;
  // background-color: red;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    width: 70%;
    text-align: center;
    // justify-content: center;
    // align-items: center;
    // align-content: center;
    align-self: center;
    margin: 0 auto; /* Centers the element horizontally */
  }
`;

function ContactUs() {
  const login = () => {
    console.log("reddd");
  };

  return (
    <>
      <Title>Contact Us</Title>
      <Subtitle>
        To find out more about us, or have a chat about how we can possibly work
        together. Send us a message today!
      </Subtitle>
      <Container>
        <FormContainer>
          <ImageSection>
            <Logo
              src={require("../../assets/NoBgSingnifyLogo.png")}
              alt="Singnify Logo"
            />
          </ImageSection>
          <FormSection>
            <FormInput
              type={"text"}
              inputId={"full-name"}
              inputPlaceholder={"Full Name"}
              formTitle={"Full Name"}
              value={""}
              onChange={""}
            />
            <FormInput
              type={"email"}
              inputId={"email"}
              inputPlaceholder={"Email Address"}
              formTitle={"Email Address"}
              value={""}
              onChange={""}
            />

            <FormInput
              type={"text"}
              inputId={"subject"}
              inputPlaceholder={"Subject"}
              formTitle={"Subject"}
              value={""}
              onChange={""}
            />

            <FormTextArea
              formTitle={"Message"}
              placeholder={"Message"}
              row={5}
              onChange={""}
              value={""}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <FormButton
                title={"Submit"}
                width={"100%"}
                onClick={login}
                marginLeft={"0px"}
                marginTop={20}
              />
            </div>

            <div
              style={{
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              <img
                src={require("../../assets/sendLetter.png")}
                alt=""
                style={{ width: "50%", height: "20%" }}
              />
            </div>
          </FormSection>
        </FormContainer>
      </Container>
    </>
  );
}

export default ContactUs;
