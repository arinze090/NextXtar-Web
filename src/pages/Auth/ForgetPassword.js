import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import TransparentBtn from "../../components/form/TransparentBtn";
import { baseURL } from "../../utils/api-client";
import { setForgetPassordUserObject } from "../../redux/features/user/userSlice";
import { API_KEY } from "../../utils/devKeys";

const Container = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: #000;
  padding-top: 130px;
  padding-bottom: 60px;
  align-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 50px;
    margin-bottom: 0px;
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
`;

const FormSection = styled.div`
  flex: 1;
  padding: 2rem;
  margin-bottom: 6rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
`;

const Subtitle = styled.p`
  margin-bottom: 5rem;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    margin-bottom: 2.5rem;
  }
`;

function ForgetPassword() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");

  const sendOTPToEmail = async () => {
    const form = new FormData();
    form.append("id", email);

    if (!email) {
      setEmailError("Please provide your email address");
    } else {
      setLoading(true);

      try {
        axios
          .post(`${baseURL}forgot-password.php?API_KEY=${API_KEY}`, form)
          .then((res) => {
            console.log("res", res);
            setLoading(false);

            if (res?.data?.status == 200) {
              console.log("forgetPassword data", res?.data);
              dispatch(setForgetPassordUserObject(res?.data?.member?.Token));
              toast.success("An OTP was sent to your registered email");
              // navigate("UserVerification", {
              //   email: res?.data?.member?.EmailAddress,
              // });

              // naviaget to the otp screen
              navigate("/user-verififcation");
              localStorage.setItem(
                "userEmail",
                res?.data?.member?.EmailAddress
              );
            } else {
              console.log("forgetPassword message", res?.data?.message);
              setFormError(res?.data?.message);
            }
          })
          .catch((err) => {
            console.log("forgetPassword err", err);
            setLoading(false);
            setFormError("Invalid Email address, please try again later");
            toast.error("Something went wrong, please try again later");
          });
      } catch (error) {
        console.log("sendOTPToEmail error", error);
        toast.error("Something went wrong, please try again later");
      }
    }
  };

  return (
    <Container>
      <FormContainer>
        <ImageSection />
        <FormSection>
          <Title>Forget Password</Title>
          <Subtitle>
            Enter the email you used to create your account so we can send you
            instructions on how to reset your password.
          </Subtitle>

          <FormInput
            type={"email"}
            formTitle={"Email Address"}
            inputPlaceholder={"Email address"}
            multiple={false}
            inputId={"email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setFormError("");
              setEmailError("");
            }}
            errorMessage={emailError}
          />

          <FormButton
            title={"Send"}
            width={"100%"}
            onClick={sendOTPToEmail}
            marginLeft={"0px"}
            marginTop={20}
            loading={loading}
            errorMessage={formError}
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

export default ForgetPassword;
