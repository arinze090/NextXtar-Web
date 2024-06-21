import React, { useState } from "react";
import styled from "styled-components";
import { FaXTwitter, FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FormInput from "../../components/form/FormInput";
import PasswordInput from "../../components/form/PasswordInput";
import FormButton from "../../components/form/FormButton";
import axiosInstance from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";
import { getUser, setUserToken } from "../../redux/features/user/userSlice";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding-top: 70px;
  margin-bottom: 0px;
  align-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 70px;
    margin-bottom: 0px;
    height: 70vh;
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
  background: url(${require("../../assets/1.jpg")}) no-repeat center center;
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
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 5rem;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  // margin-bottom: 1rem;

  input {
    margin-right: 0.5rem;
  }

  label {
    font-size: 0.9rem;
  }
`;

const Link = styled.a`
  color: #05a30b;
  text-align: center;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [formError, setFormError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const login = async () => {
    const loginData = {
      id: email,
      password: password,
      API_KEY: API_KEY,
    };
    console.log("loginData", loginData);
    if (!password) {
      setFormError("Invalid Login details, please try again");
    } else {
      setLoading(true);
      try {
        await axiosInstance({
          url: "login.php",
          method: "POST",
          data: loginData,
        })
          .then((res) => {
            console.log("res", res);
            setLoading(false);

            if (res?.data?.status == 200) {
              console.log("Login data", res?.data);
              dispatch(getUser(res?.data?.member_data));
              dispatch(setUserToken(res?.data?.member_data?.Token));
              toast.success("Login Successful. Welcome Back! 😇");

              // navigate("HomeScreen", { screen: "HomeScreen" });
            } else {
              console.log("message", res?.data?.message);
              setFormError("Invalid Details, please try again later");
              toast.error("Login Failed, Please try again later");
            }
          })
          .catch((err) => {
            console.log("Login err", err?.response?.data);
            setLoading(false);
            toast.error("Login Failed, Please try again later");
            // setFormError(err?.response?.data?.message);
          });
      } catch (error) {
        console.log("Login error", error);
        toast.error("Login Failed, Please try again later");
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
          <Title>Welcome !!!</Title>

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

          <PasswordInput
            formTitle={"Password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setFormError("");
              setPasswordError("");
            }}
            errorMessage={passwordError}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <CheckboxGroup>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Remember me</label>
            </CheckboxGroup>

            <p
              onClick={() => {
                console.log("clicked");
                navigate("/forget-password");
              }}
              style={{ color: "grey", cursor: "pointer" }}
            >
              Forget Password ?
            </p>
          </div>

          <FormButton
            title={"Login"}
            width={"100%"}
            onClick={login}
            marginLeft={"0px"}
            loading={loading}
            errorMessage={formError}
          />
          <p style={{ justifyContent: "center", textAlign: "center" }}>
            Or continue with
          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaFacebook style={{ padding: 10, fontSize: 30 }} />
            <FaXTwitter style={{ padding: 10, fontSize: 30 }} />
            <FcGoogle style={{ padding: 10, fontSize: 30 }} />
          </div>
          <p
            style={{
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Don't have an account?{" "}
            <Link rel="stylesheet" href="/register">
              Sign Up
            </Link>
          </p>
        </FormSection>
      </FormContainer>
    </Container>
  );
}

export default Login;
