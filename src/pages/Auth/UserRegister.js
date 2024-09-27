import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import FormInput from "../../components/form/FormInput";
import PasswordInput from "../../components/form/PasswordInput";
import FormSelect from "../../components/form/FormSelect";
import FormButton from "../../components/form/FormButton";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";
import {
  nameValidator,
  checkPassword,
  passwordValidator,
} from "../../Library/Validation";
import { listOfCountries } from "../../data/dummyData";

const Container = styled.div`
  display: flex;
  height: auto;
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
  background: url(${require("../../assets/musiclovers.png")}) no-repeat center
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
  }
`;

function UserRegister() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [loading, setLoading] = useState(false);

  // Music lover registration states
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [refCode, setRefCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");

  // Error states
  const [formError, setFormError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  console.log("coutnry", country);

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

  const registerMusicLover = async () => {
    const form = new FormData();
    form.append("is_artist", 0);
    form.append("uname", username);
    form.append("email", email);
    form.append("password", password);
    form.append("first_name", firstName);
    form.append("last_name", lastName);
    form.append("gender", gender);
    form.append("phone", phoneNumber);
    form.append("country", country);
    form.append("ref_code", refCode);
    form.append("about", "");
    form.append("stage_name", "");
    form.append("record_label", "");

    if (
      !gender &&
      !nameValidator(firstName) &&
      !nameValidator(lastName) &&
      !email &&
      !phoneNumber &&
      !username &&
      !country
    ) {
      setGenderError("Please select a gender");
      setFirstNameError("Please enter a valid name");
      setLastNameError("Please enter a valid name");
      setPhoneNumberError("Please enter a valid phone number");
      setEmailError("Please enter a valid email");
      setUsernameError("Please enter a valid username");
      setPasswordError("Please enter your password");
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
    } else if (!password) {
      setPasswordError("Please enter your password");
    } else {
      setLoading(true);
      try {
        await axios
          .post(`${baseURL}register.php?API_KEY=${API_KEY}`, form)
          .then((res) => {
            console.log("res", res);
            setLoading(false);

            if (parseInt(res?.data?.status) === 200) {
              console.log("register data", res?.data);

              toast.success(
                "Registration Successful. Please login to enjoy our services! 😇"
              );
              navigate("/login");
            } else if (parseInt(res?.data?.status) == 304) {
              setFormError(`The username ${res?.data?.message}`);
            } else if (parseInt(res?.data?.status) == 305) {
              setFormError(`The email ${res?.data?.message}`);
              toast.error(`The email ${res?.data?.message}`);
            } else {
              console.log("message", res?.data?.status);
              setFormError("Something went wrong, please try again later");
              toast.error("Something went wrong, please try again later");
            }
          })
          .catch((err) => {
            console.log("registerMusicLover err", err);
            setLoading(false);
            setFormError(err?.response?.data?.message);
            toast.error("Something went wrong, please try again later");
          });
      } catch (error) {
        console.log("registerMusicLover error", error);
      }
    }
  };

  return (
    <Container>
      <FormContainer>
        <ImageSection />
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
            <FormSelect
              formTitle={"Country"}
              selectId={"country"}
              selectPlaceholder={"Select Country"}
              options={countryOptions}
              width={"48%"}
              onChange={(e) => {
                setCountry(e.target.value);
                setCountryError("");
                setFormError("");
              }}
              errorMessage={countryError}
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
            onClick={registerMusicLover}
            marginLeft={"0px"}
            errorMessage={formError}
            loading={loading}
          />
          <p style={{ justifyContent: "center", textAlign: "center" }}>
            <Link rel="stylesheet" href="/register-as-an-artist">
              Or Signup as an artist
            </Link>
          </p>
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

export default UserRegister;
