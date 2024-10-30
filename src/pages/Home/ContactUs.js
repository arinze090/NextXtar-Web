import React, { useState } from "react";
import styled from "styled-components";

import FormInput from "../../components/form/FormInput";
import FormTextArea from "../../components/form/FormTextArea";
import FormButton from "../../components/form/FormButton";

const Container = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-top: 80px;
  margin-bottom: 60px;
  align-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding-top: 20px;
    margin-bottom: 60px;
    height: auto;
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
  margin-top: 30px;
`;

const ImageSection = styled.div`
  flex: 1;
  background: url(${require("../../assets/contactUs.png")}) no-repeat center
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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    setLoading(true);
    console.log("reddd");
    setFullName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setLoading(false);
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Subtitle>
        To find out more about us, or have a chat about how we can possibly work
        together. Send us a message today!
      </Subtitle>
      <FormContainer>
        <ImageSection />
        <FormSection>
          <FormInput
            type={"text"}
            inputId={"full-name"}
            inputPlaceholder={"Full Name"}
            formTitle={"Full Name"}
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <FormInput
            type={"email"}
            inputId={"email"}
            inputPlaceholder={"Email Address"}
            formTitle={"Email Address"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <FormInput
            type={"text"}
            inputId={"subject"}
            inputPlaceholder={"Subject"}
            formTitle={"Subject"}
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />

          <FormTextArea
            formTitle={"Message"}
            placeholder={"Message"}
            row={5}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
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
              onClick={sendMessage}
              marginLeft={"0px"}
              marginTop={20}
              loading={loading}
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
  );
}

export default ContactUs;
