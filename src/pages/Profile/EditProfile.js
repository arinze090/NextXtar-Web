import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import FormSelect from "../../components/form/FormSelect";
import FormTextArea from "../../components/form/FormTextArea";
import { listOfCountries } from "../../data/dummyData";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    // background: red;
    flex-direction: column;
    padding: 1rem;
  }
`;

const RowContent = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function EditProfile() {
  const navigate = useNavigate();

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

  const countryOptions = listOfCountries;

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
  const [aboutYourself, setAboutYourself] = useState("");

  const [stageName, setStageName] = useState("");

  // Error states
  const [formError, setFormError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [stageNameError, setStageNameError] = useState("");
  const [aboutYourselfError, setAboutYourselfError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  return (
    <Container>
      <HeaderTitle
        title={"Arinze Nchor"}
        imgSrc={require("../../assets/1.jpg")}
        imgAlt={"Projects Image"}
      />

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
          width={"48%"}
        />
      </RowContent>

      <RowContent>
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
          width={"48%"}
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
          width={"48%"}
        />
      </RowContent>

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

      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <FormButton
          title={"Update Profile"}
          marginTop={40}
          marginLeft={"0px"}
          loading={loading}
          errorMessage={formError}
          width={"100%"}
        />
      </div>
    </Container>
  );
}

export default EditProfile;
