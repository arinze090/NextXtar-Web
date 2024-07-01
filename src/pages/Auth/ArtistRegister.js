import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FormInput from "../../components/form/FormInput";
import FormTextArea from "../../components/form/FormTextArea";
import PasswordInput from "../../components/form/PasswordInput";
import FormSelect from "../../components/form/FormSelect";
import FormButton from "../../components/form/FormButton";
import axiosInstance from "../../utils/api-client";
import { getUser, setUserToken } from "../../redux/features/user/userSlice";
import { API_KEY } from "../../utils/devKeys";
import {
  phoneValidator,
  nameValidator,
  emailValidator,
  checkPassword,
} from "../../Library/Validation";
import { listOfCountries } from "../../data/dummyData";

const Container = styled.div`
  display: flex;
  height: 170vh;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding-top: 130px;
  margin-bottom: 90px;
  align-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 70px;
    margin-bottom: 30px;
    height: auto;
  }
`;

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin: 20px;
    width: 100%;
  }
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

  @media screen and (max-width: 768px) {
    padding: 1rem;
    width: 100px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  margin-bottom: 2rem;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

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

const RowContent = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

function ArtistRegister() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [stageName, setStageName] = useState("");
  const [recordLabel, setRecordLabel] = useState("");
  const [aboutYourself, setAboutYourself] = useState("");
  const [password, setPassword] = useState("");
  const [refCode, setRefCode] = useState("");

  // Error states
  const [formError, setFormError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [stageNameError, setStageNameError] = useState("");
  const [recordLabelError, setRecordLabelError] = useState("");
  const [aboutYourselfError, setAboutYourselfError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const validatedPassword = checkPassword(password);

  const countryOptions = listOfCountries;

  const genderOptions = [
    {
      id: 1,
      name: "Male",
    },
    {
      id: 1,
      name: "Female",
    },
  ];

  const registerArtist = async () => {
    const registerData = {
      is_artist: 1,
      uname: username,
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      phone: phoneNumber,
      country: country,
      ref_code: refCode,
      about: aboutYourself,
      stage_name: stageName,
      record_label: recordLabel,
      API_KEY: API_KEY,
    };
    console.log("registerData", registerData);
    if (
      !gender &&
      !nameValidator(firstName) &&
      !nameValidator(lastName) &&
      !email &&
      !phoneNumber &&
      !username &&
      !aboutYourself &&
      !stageName &&
      !recordLabel
    ) {
      setGenderError("Please select a gender");
      setFirstNameError("Please enter a valid name");
      setLastNameError("Please enter a valid name");
      setPhoneNumberError("Please enter a valid phone number");
      setEmailError("Please enter a valid email");
      setUsernameError("Please enter a valid username");
      setPasswordError(validatedPassword.cause);
      setAboutYourselfError("Please tell us more");
      setStageNameError("Please provide your stage name");
      setRecordLabelError("Please provide your record label");
    } else if (!gender) {
      setGenderError("Please select a gender");
    } else if (!firstName) {
      setFirstNameError("Please provide your firstname");
    } else if (!lastName) {
      setLastNameError("Please provide your lastname");
    } else if (!email) {
      setEmailError("Invalid email address");
    } else if (!country) {
      setCountryError("Please selct a country from the options");
    } else if (!phoneNumber) {
      setPhoneNumberError("Invalid phone number");
    } else if (!aboutYourself) {
      setAboutYourselfError("Please tell us more");
    } else if (!stageName) {
      setStageNameError("Please provide your stage name");
    } else if (!recordLabel) {
      setRecordLabelError("Please provide your record label");
    } else {
      setLoading(true);
      try {
        await axiosInstance({
          url: "register.php",
          method: "POST",
          data: registerData,
        })
          .then((res) => {
            console.log("res", res);
            setLoading(false);

            if (res?.data?.status == 200) {
              console.log("register data", res?.data);
              dispatch(getUser(res?.data?.member));
              dispatch(setUserToken(res?.data?.member?.Token));
              toast.success(
                "Registration Successful. Please login to enjoy our services! 😇"
              );
              navigate("/login");
            } else {
              console.log("message", res?.data?.status);
              setFormError("Something went wrong, please try again later");

              toast.error(
                "Signup Failed, It seems the credentials are not registered with us, please register to enjoy our services"
              );
            }
          })
          .catch((err) => {
            console.log("Login err", err);
            setLoading(false);
            setFormError(err?.response?.data?.message);

            toast.error(
              "Signup Failed, Something went wrong, please try again later to enjoy our services"
            );
          });
      } catch (error) {
        console.log("Login error", error);
        toast.error(
          "Signup Failed, Something went wrong, please try again later to enjoy our services"
        );
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
          <Subtitle>Please fill all the information to register</Subtitle>
          <RowContent>
            <FormSelect
              formTitle={"Gender"}
              selectId={"gender"}
              selectPlaceholder={"Select Gender"}
              options={genderOptions}
              onChange={(e) => {
                setGender(e.target.value);
                setFormError("");
                setGenderError("");
              }}
              errorMessage={genderError}
              width={"15%"}
            />
            <FormInput
              type={"text"}
              formTitle={"First Name"}
              width={"40%"}
              inputPlaceholder={"First Name"}
              multiple={false}
              inputId={"first-name"}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setFormError("");
                setFirstNameError("");
              }}
              errorMessage={firstNameError}
            />
            <FormInput
              type={"text"}
              formTitle={"Last Name"}
              width={"40%"}
              inputPlaceholder={"Last Name"}
              multiple={false}
              inputId={"last-name"}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setFormError("");
                setLastNameError("");
              }}
              errorMessage={lastNameError}
            />
          </RowContent>

          <RowContent>
            <FormInput
              type={"text"}
              formTitle={"Username"}
              width={"48%"}
              inputPlaceholder={"Username"}
              multiple={false}
              inputId={"username"}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setFormError("");
                setUsernameError("");
              }}
              errorMessage={usernameError}
            />
            <FormInput
              type={"text"}
              formTitle={"Stage Name"}
              width={"48%"}
              inputPlaceholder={"Stage Name"}
              multiple={false}
              inputId={"stage-name"}
              value={stageName}
              onChange={(e) => {
                setStageName(e.target.value);
                setFormError("");
                setStageNameError("");
              }}
              errorMessage={stageNameError}
            />
          </RowContent>

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

          <FormTextArea
            formTitle="About"
            row={5}
            placeholder={"Write about yourself"}
            value={aboutYourself}
            onChange={(e) => {
              setAboutYourself(e.target.value);
              setFormError("");
              setAboutYourselfError("");
            }}
            errorMessage={aboutYourselfError}
            width={"100%"}
          />

          <FormSelect
            formTitle={"Country"}
            selectId={"country"}
            selectPlaceholder={"Select Country"}
            options={countryOptions}
            onChange={(e) => {
              setCountry(e.target.value);
              setFormError("");
              setCountryError("");
            }}
            errorMessage={countryError}
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

          <FormInput
            type={"number"}
            formTitle={"Phone Number"}
            inputPlaceholder={"Phone Number"}
            multiple={false}
            inputId={"number"}
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setFormError("");
              setPhoneNumberError("");
            }}
            errorMessage={phoneNumberError}
          />

          <FormInput
            type={"text"}
            formTitle={"Record Label"}
            inputPlaceholder={"Record Label"}
            multiple={false}
            inputId={"record-label"}
            value={recordLabel}
            onChange={(e) => {
              setRecordLabel(e.target.value);
              setRecordLabelError("");
              setFormError("");
            }}
            errorMessage={recordLabelError}
          />

          <FormInput
            type={"text"}
            formTitle={"Referral Code"}
            inputPlaceholder={"Referral Code"}
            multiple={false}
            inputId={"referral"}
            value={refCode}
            onChange={(e) => {
              setRefCode(e.target.value);
            }}
          />

          <CheckboxGroup>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By clicking Sign Up, I agree to the{" "}
              <Link rel="stylesheet" href="/terms-of-service">
                Terms of Service
              </Link>
            </label>
          </CheckboxGroup>

          <FormButton
            title={"Sign Up"}
            width={"100%"}
            onClick={registerArtist}
            marginLeft={"0px"}
            loading={loading}
            errorMessage={formError}
          />
          <p style={{ justifyContent: "center", textAlign: "center" }}>
            Already have an account?{" "}
            <Link rel="stylesheet" href="/login">
              Sign In
            </Link>
          </p>
        </FormSection>
      </FormContainer>
    </Container>
  );
}

export default ArtistRegister;
