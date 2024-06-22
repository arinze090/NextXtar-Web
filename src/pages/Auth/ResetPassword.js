import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PasswordInput from "../../components/form/PasswordInput";
import FormButton from "../../components/form/FormButton";
import TransparentBtn from "../../components/form/TransparentBtn";
import axiosInstance from "../../utils/api-client";

import { API_KEY } from "../../utils/devKeys";
import {
  checkPasswordMatch,
  passwordValidator,
} from "../../Library/Validation";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding-top: 130px;
  // margin-bottom: 130px;
  align-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 70px;
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
  margin-bottom: 6rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 2.5rem;
    padding: 1rem;
    justify-content: center;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    margin-bottom: 2.5rem;
  }
`;

function ResetPassword() {
  const navigate = useNavigate();

  const state = useSelector((state) => state);
  const token = state?.user?.forgetPassword;
  console.log("token", token);
  const [loading, setLoading] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [formError, setFormError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

  const checkPasswords = checkPasswordMatch(newPassword, confirmPassword);
  console.log("checkPasswords", checkPasswords);

  const resetPassword = async () => {
    navigate("/login");

    const resetPasswordData = {
      token: token,
      password: newPassword,
      API_KEY: API_KEY,
    };
    console.log("resetPasswordData", resetPasswordData);

    if (!passwordValidator(newPassword)) {
      setFormError("Please provide the verification code sent to your email");
    } else {
      setLoading(true);
      try {
        await axiosInstance({
          url: "reset-password.php",
          method: "POST",
          data: resetPasswordData,
        })
          .then((res) => {
            console.log("res", res);
            setLoading(false);

            if (res?.data?.status == 200) {
              console.log("resetPassword data", res?.data);
              navigate("/login");

              toast.success(
                "Your password has been reset successfully, please login to enjoy our service"
              );
              toast.success("Sensational! Please login to enjoy our services");
            } else {
              console.log("resetPassword message", res?.data?.message);
              setFormError(res?.data?.message);
            }
          })
          .catch((err) => {
            console.log("resetPassword err", err);
            setLoading(false);
            setFormError("Something went wrong, please try again later");
            toast.error("Something went wrong, please try again later");
          });
      } catch (error) {
        console.log("resetPassword error", error);
        setFormError("Something went wrong, please try again later");
        toast.error("Something went wrong, please try again later");
      }
    }
  };

  return (
    <Container>
      <FormContainer>
        <ImageSection>
          <Logo
            src={require("../../assets/nextstarLogo.png")}
            alt="NextXtar Logo"
          />
        </ImageSection>
        <FormSection>
          <Title>Reset Password</Title>
          <Subtitle>Choose a new password for your account</Subtitle>

          <PasswordInput
            formTitle={"Password"}
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setPasswordError("");
              setFormError("");
            }}
            errorMessage={passwordError}
          />
          <PasswordInput
            formTitle={"Confirm Password"}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setPasswordCheckError("");
              setFormError("");
            }}
            errorMessage={passwordCheckError}
          />

          <FormButton
            title={"Reset Password"}
            width={"100%"}
            onClick={resetPassword}
            marginLeft={"0px"}
            marginTop={20}
            errorMessage={formError}
            loading={loading}
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

export default ResetPassword;
