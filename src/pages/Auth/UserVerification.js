import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import FormButton from "../../components/form/FormButton";
import TransparentBtn from "../../components/form/TransparentBtn";
import axiosInstance from "../../utils/api-client";

import { baseURL } from "../../utils/api-client";
import FormInput from "../../components/form/FormInput";
import { obscureEmail } from "../../Library/Common";
import { API_KEY } from "../../utils/devKeys";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding-top: 30px;
  // margin-bottom: 130px;
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
  background-color: #fff;
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
`;

const Subtitle = styled.p`
  margin-bottom: 5rem;
`;

function UserVerification() {
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [verifyCode, setVerifyCode] = useState("");

  const [formError, setFormError] = useState("");
  const [verifyCodeError, setVerifyCodeError] = useState("");

  const [loading, setLoading] = useState("");

  // VerifyResetCode onSubmit
  const onUserVerification = async () => {
    const form = new FormData();
    form.append("id", userEmail);
    form.append("otp", verifyCode);

    if (verifyCode === "" && verifyCode?.length > 6) {
      setVerifyCodeError(
        "Please provide the verification code sent to your email"
      );
    } else {
      try {
        setLoading(true);

        await axios
          .post(
            `${baseURL}verify-otp-forgot-password.php?API_KEY=${API_KEY}`,
            form
          )
          .then((res) => {
            console.log("res", res);
            setLoading(false);

            if (parseInt(res?.data?.status) === 200) {
              console.log("onUserVerification data", res?.data);
              toast.success("Great, Please change your password now");

              // naviaget to the otp screen
              navigate("/reset-password");
            } else {
              console.log("onUserVerification message", res?.data?.message);
              setFormError(res?.data?.message);
            }
          })
          .catch((err) => {
            console.log("onUserVerification err", err);
            setLoading(false);
            setFormError("Invalid OTP, please try again later");
          });
      } catch (error) {
        console.log("onUserVerification error", error);
      }
    }
  };

  const resendVerificationCode = async () => {
    setLoading(true);

    const sendOTPData = {
      id: "item?.email",
      API_KEY: API_KEY,
    };
    console.log("sendOTPData", sendOTPData);

    try {
      await axiosInstance({
        url: "forgot-password.php",
        method: "POST",
        data: sendOTPData,
      })
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("resendVerificationCode data", res?.data);
            toast.success("An OTP was sent to your registered email");
          } else {
            console.log("resendVerificationCode message", res?.data?.message);
            setFormError(res?.data?.message);
          }
        })
        .catch((err) => {
          console.log("resendVerificationCode err", err);
          setLoading(false);
          setFormError("Invalid Email address, please try again later");
        });
    } catch (error) {
      console.log("resendVerificationCode error", error);
    }
  };

  return (
    <Container>
      <FormContainer>
        <ImageSection>
          <Logo
            src={require("../../assets/NoBgSingnifyLogo.png")}
            alt="Singnify Logo"
          />
        </ImageSection>
        <FormSection>
          <Title>Check your Email</Title>
          <Subtitle>
            We have sent a password reset link to {obscureEmail(userEmail)}
          </Subtitle>

          <p>
            Didn’t receive the email? Check spam or promotion folder or{" "}
            <a href="">Resend OTP</a>
          </p>

          <FormInput
            type={"number"}
            formTitle={"OTP"}
            inputPlaceholder={"Enter the OTP"}
            multiple={false}
            inputId={"otp"}
            value={verifyCode}
            onChange={(e) => {
              setVerifyCode(e.target.value);
              setFormError("");
              setVerifyCodeError("");
            }}
            errorMessage={verifyCodeError}
          />

          <FormButton
            title={"Submit"}
            width={"100%"}
            onClick={onUserVerification}
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

export default UserVerification;
