import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import FormTextArea from "../../components/form/FormTextArea";
import { listOfCountries } from "../../data/dummyData";
import ProfilePictureUpload from "../../components/form/ProfilePictureUpload";
import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import { getUser, setUserToken } from "../../redux/features/user/userSlice";
import { emailValidator, nameValidator } from "../../Library/Validation";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 2rem;
  flex-wrap: wrap;
  flex-direction: column;

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
  const dispatch = useDispatch();

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

  const state = useSelector((state) => state);
  const user = state?.user?.user;
  console.log("user", user);

  const [loading, setLoading] = useState(false);

  const [selectedImage, setSelectedImage] = useState();
  const [uploadedImage, setUploadedImage] = useState();

  const [email, setEmail] = useState(
    user?.EmailAddress ? user?.EmailAddress : ""
  );
  const [firstName, setFirstName] = useState(
    user?.FirstName ? user?.FirstName : ""
  );
  const [lastName, setLastName] = useState(
    user?.LastName ? user?.LastName : ""
  );
  const [gender, setGender] = useState(user?.Gender ? user?.Gender : "");
  const [username, setUsername] = useState(
    user?.Username ? user?.Username : ""
  );
  const [stageName, setStageName] = useState(
    user?.StageName ? user?.StageName : ""
  );
  const [recordLabel, setRecordLabel] = useState(
    user?.RecordLabel ? user?.RecordLabel : ""
  );
  const [about, setAbout] = useState(user?.About ? user?.About : "");
  const [country, setCountry] = useState(user?.Country ? user?.Country : "");
  const [profilePicture, setProfilePicture] = useState(
    uploadedImage ? uploadedImage : user?.Picture
  );
  const [instagram, setInstagram] = useState(
    user?.Instagram ? user?.Instagram : ""
  );
  const [twitter, setTwitter] = useState(user?.Twitter ? user?.Twitter : "");
  const [facebook, setFacebook] = useState(
    user?.Facebook ? user?.Facebook : ""
  );
  const [youtube, setYoutube] = useState(user?.Facebook ? user?.Facebook : "");

  const [phoneNumber, setPhoneNumber] = useState(
    user?.Phone ? user?.Phone : ""
  );
  const [aboutYourself, setAboutYourself] = useState("");
  console.log("uploadedImage", uploadedImage);

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

  const handleFileChange = (event) => {
    // console.log("eee", event);
    const file = event.target.files[0];
    console.log("file", file);
    setSelectedImage(file.name);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // setProfileImg(reader.result);
        console.log("reader", reader.result);

        // upload the image to db and store the result
        uploadBase64Image(reader?.result);
      };
      reader.readAsDataURL(file);
      console.log(file); // Log the selected file
    }
  };

  const uploadBase64Image = async (base64Image) => {
    setLoading(true);

    const form = new FormData();
    form.append("image", base64Image);

    try {
      await axios
        .post(`${baseURL}upload-photo.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("upload profile data", res?.data);
            setProfilePicture(res?.data?.imageName);
            // dispatch the result from the api to redux so it can be used to update the profile
            // dispatch(setUploadingImage(res?.data?.imageName));

            setUploadedImage(res?.data?.imageName);
            toast.success("Your profile picture uploaded successfully 😇");
          } else {
            console.log("message", res?.data?.status);
            setFormError("Something went wrong, please try again later");

            toast.error(
              "Profile Picture Upload Failed",
              "Something went wrong while uploading your profile picture, please try again later"
            );
          }
        })
        .catch((err) => {
          console.log("update profile err", err);
          setLoading(false);
          toast.error(
            "Profile Picture Upload Failed",
            "Something went wrong while uploading your profile picture, please try again later"
          );
        });
    } catch (error) {
      console.log("update profile error", error);
      toast.error(
        "Profile Picture Upload Failed",
        "Something went wrong while uploading your profile picture, please try again later"
      );
    }
  };

  const updateProfile = async () => {
    const form = new FormData();

    form.append("token", user?.Token);
    form.append("uname", username);
    form.append("email", email);
    form.append("fname", firstName);
    form.append("lname", lastName);
    form.append("gender", gender);
    form.append("phone", phoneNumber);
    form.append("country", country);
    form.append("image", profilePicture);
    form.append("about", about);
    form.append("stage_name", stageName);
    form.append("instagram", instagram);
    form.append("facebook", facebook);
    form.append("twitter", twitter);
    form.append("youtube", youtube);

    if (
      !gender &&
      !nameValidator(firstName) &&
      !nameValidator(lastName) &&
      !emailValidator(email) &&
      !phoneNumber &&
      !username
    ) {
      setGenderError("Please select a gender");
      setFirstNameError("Please enter a valid name");
      setLastNameError("Please enter a valid name");
      setPhoneNumberError("Please enter a valid phone number");
      setEmailError("Please enter a valid email");
      setUsernameError("Please enter a valid username");
    } else if (!gender) {
      setGenderError("Please select a gender");
      setFormError("Please fill the required fields");
    } else if (!firstName) {
      setFirstNameError("Please provide your firstname");
      setFormError("Please fill the required fields");
    } else if (!lastName) {
      setLastNameError("Please provide your lastname");
      setFormError("Please fill the required fields");
    } else if (!email) {
      setEmailError("Invalid email address");
      setFormError("Please fill the required fields");
    } else if (!country) {
      setCountryError("Please selct a country from the options");
      setFormError("Please fill the required fields");
    } else if (!phoneNumber) {
      setPhoneNumberError("Invalid phone number");
      setFormError("Please fill the required fields");
    } else if (!about) {
      setAboutYourselfError("Please briefly fill this section");
      setFormError("Please fill the required fields");
    } else {
      setLoading(true);
      try {
        await axios
          .post(`${baseURL}update-profile.php?API_KEY=${API_KEY}`, form)
          .then((res) => {
            console.log("res", res);
            setLoading(false);

            if (res?.data?.status == 200) {
              console.log("update profile data", res?.data);
              dispatch(getUser(res?.data?.member));
              dispatch(setUserToken(res?.data?.member?.Token));
              setUploadedImage(null);

              toast.success("Your profile has been updated successful. 😇");
              navigate(-1);
            } else {
              console.log("message", res?.data?.status);
              setFormError("Something went wrong, please try again later");

              toast.error(
                "Something went wrong while updating your profile, please try again later"
              );
            }
          })
          .catch((err) => {
            console.log("update profile err", err);
            setLoading(false);
            toast.error(
              "Something went wrong while updating your profile, please try again later"
            );
          });
      } catch (error) {
        console.log("update profile error", error);
      }
    }
  };

  return (
    <Container>
      <HeaderTitle
        title={user?.FirstName + " " + user?.LastName}
        imgSrc={profilePicture}
        imgAlt={"Projects Image"}
      />

      <RowContent>
        <FormInput
          type={"text"}
          inputPlaceholder={"Gender"}
          inputId={"gender"}
          formTitle={"Gender"}
          value={gender}
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

      {user?.StageName && (
        <RowContent>
          <FormInput
            type={"text"}
            formTitle={"Stage Name"}
            width={"48%"}
            inputPlaceholder={"Stage Name"}
            multiple={false}
            inputId={"username"}
            value={stageName}
            onChange={(e) => {
              setStageName(e.target.value);
              setFormError("");
              setStageNameError("");
            }}
            errorMessage={stageNameError}
          />
          <FormInput
            type={"text"}
            formTitle={"Record Label"}
            inputPlaceholder={"Record Label"}
            multiple={false}
            inputId={"recordLabel"}
            value={recordLabel}
            onChange={(e) => {
              setRecordLabel(e.target.value);
              setFormError("");
            }}
            width={"48%"}
          />
        </RowContent>
      )}

      <RowContent>
        <FormInput
          type={"text"}
          formTitle={"Country"}
          inputPlaceholder={"Country"}
          multiple={false}
          inputId={"Country"}
          value={country}
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

      <ProfilePictureUpload
        profileImg={profilePicture}
        handleFileChange={handleFileChange}
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
          onClick={updateProfile}
        />
      </div>
    </Container>
  );
}

export default EditProfile;
