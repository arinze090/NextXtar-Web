import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormInput from "../../components/form/FormInput";
import FormSelect from "../../components/form/FormSelect";
import FormButton from "../../components/form/FormButton";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";
import { listOfCountries, currencyList } from "../../data/dummyData";
import FormTextArea from "../../components/form/FormTextArea";
import UploadSection from "../../components/upload/UploadSection";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 2rem;
  flex-wrap: wrap;
  background: black;
  padding-top: 80px;

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

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function UserVerification() {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const user = state.user.user;

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // IDCard document section
  const [selectedDocFile, setSelectedDocFile] = useState("");
  const [uploadedDocumentUrl, setUploadedDocumentUrl] = useState(null);

  // Signature document section
  const [selectedSignatureDocFile, setSelectedSignatureDocFile] = useState("");
  const [selectedSignatureUrl, setSelectedSignatureUrl] = useState(null);
  const [uploadedSignatureDocumentUrl, setUploadedSignatureDocumentUrl] =
    useState(null);

  const [fullName, setFullName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState(
    user?.EmailAddress ? user?.EmailAddress : ""
  );
  const [address, setAddress] = useState("");
  const [bankDetails, setBankDetails] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [socials, setSocials] = useState("");

  // Error states
  const [formError, setFormError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [artistNameError, setArtistNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [paypalEmailError, setPaypalEmailError] = useState("");
  const [bankDetailsError, setBankDetailsError] = useState("");
  const [socialsError, setSocialsError] = useState("");

  const onUserVerification = async () => {
    const form = new FormData();
    form.append("token", user?.Token);
    form.append("name", fullName);
    form.append("artist_name", artistName);
    form.append("email_address", email);
    form.append("phone", phoneNumber);
    form.append("homeaddress", address);
    form.append("bank_details", bankDetails);
    form.append("paypal_email", paypalEmail);
    form.append("social_media_accounts", socials);
    form.append("doc", uploadedDocumentUrl?.link);
    form.append("signature", uploadedSignatureDocumentUrl?.link);

    if (!fullName) {
      setFullNameError("Please provide this information");
    } else if (!email) {
      setEmailError("Please provide this information");
    } else if (!artistName) {
      setArtistNameError("Please provide this information");
    } else if (!phoneNumber) {
      setPhoneNumberError("Please provide this information");
    } else if (!address) {
      setAddressError("Please provide this information");
    } else if (!bankDetails) {
      setBankDetailsError("Please provide this information");
    } else if (!socials) {
      setSocialsError("Please provide this information");
    } else {
      try {
        setLoading(true);

        await axios
          .post(`${baseURL}submit-verification.php?API_KEY=${API_KEY}`, form)
          .then((res) => {
            setLoading(false);
            console.log("onUserVerification", res);

            if (parseInt(res?.data?.status) == 200) {
              toast.success(
                "Your Verification details has been saved successful and is under review by the team."
              );
              navigate("/profile");
            } else {
              setFormError("Something went wrong, please try again later");
              toast.error("Something went wrong, please try again later");
            }
          })
          .catch((err) => {
            setLoading(false);
            toast.error("Failed to add Payment Method");
          });
      } catch (error) {
        toast.error("Failed to add Payment Method");
      }
    }
  };

  // this function calls the upload lyrics/document api to store the documnet in the db
  const uploadDocument = async (file) => {
    setLoading(true);
    const form = new FormData();
    form.append("file", file);

    try {
      await axios
        .post(`${baseURL}upload-document.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("uploadDocument data", res?.data);

            setUploadedDocumentUrl(res?.data);
            toast.success("Your document uploaded successfully 😇");
          } else {
            console.log("message", res?.data?.status);
            setFormError("Something went wrong, please try again later");

            toast.error(
              "Document Upload Failed",
              "Something went wrong while uploading your document, please try again later"
            );
          }
        })
        .catch((err) => {
          console.log("uploadDocument err", err);
          setLoading(false);
          toast.error(
            "Document Upload Failed",
            "Something went wrong while uploading your document, please try again later"
          );
        });
    } catch (error) {
      setLoading(false);
      console.log("uploadDocument error", error);
      toast.error(
        "Document Upload Failed",
        "Something went wrong while uploading your document, please try again later"
      );
    }
  };

  const uploadSignatureDocument = async (file) => {
    setLoading(true);
    const form = new FormData();
    form.append("file", file);

    try {
      await axios
        .post(`${baseURL}upload-document.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("uploadSignatureDocument data", res?.data);

            setUploadedSignatureDocumentUrl(res?.data);
            toast.success("Your document uploaded successfully 😇");
          } else {
            console.log("message", res?.data?.status);
            setFormError("Something went wrong, please try again later");

            toast.error(
              "Document Upload Failed",
              "Something went wrong while uploading your document, please try again later"
            );
          }
        })
        .catch((err) => {
          console.log("uploadSignatureDocument err", err);
          setLoading(false);
          toast.error(
            "Document Upload Failed",
            "Something went wrong while uploading your document, please try again later"
          );
        });
    } catch (error) {
      setLoading(false);
      console.log("uploadSignatureDocument error", error);
      toast.error(
        "Document Upload Failed",
        "Something went wrong while uploading your document, please try again later"
      );
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("file", file);

    if (file?.type != "application/pdf") {
      setSelectedSignatureDocFile(file);

      const fileUrl = URL.createObjectURL(file);
      setSelectedSignatureUrl(fileUrl);
      console.log("fileUrl", fileUrl);

      //   const reader = new FileReader();
      //   reader.onloadend = () => {
      //     setBase64Picture(reader?.result);
      //   };
      //   reader.readAsDataURL(file);
    } else {
      setSelectedDocFile(file);
    }
  };

  return (
    <Container>
      <HeaderTitle
        title={"User Verification"}
        imgSrc={user?.Picture}
        imgAlt={"Verification Image"}
      />

      <RowContent>
        <FormInput
          formTitle={"Full Name"}
          inputId={"full-name"}
          inputPlaceholder={"Full Name"}
          type={"text"}
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            setFormError("");
            setFullNameError("");
          }}
          width={"48%"}
          errorMessage={fullNameError}
        />

        <FormInput
          type={"email"}
          formTitle={"Email Address"}
          inputPlaceholder={"Email address"}
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
        <FormInput
          formTitle={"Artist Name"}
          inputId={"artist-name"}
          inputPlaceholder={"Artist Name"}
          type={"text"}
          value={artistName}
          onChange={(e) => {
            setArtistName(e.target.value);
            setFormError("");
            setArtistNameError("");
          }}
          errorMessage={artistNameError}
          width={"48%"}
        />

        <FormInput
          formTitle={"Phone Number"}
          inputId={"phone-number"}
          inputPlaceholder={"Phone Number"}
          type={"number"}
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
        formTitle={"Address"}
        row={3}
        placeholder={""}
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
          setFormError("");
          setAddressError("");
        }}
        width={"100%"}
        errorMessage={addressError}
      />

      <FormTextArea
        formTitle={"Bank Account Details"}
        row={5}
        placeholder={""}
        value={bankDetails}
        onChange={(e) => {
          setBankDetails(e.target.value);
          setFormError("");
          setBankDetailsError("");
        }}
        width={"100%"}
        errorMessage={bankDetailsError}
      />

      <FormInput
        formTitle={"PayPal Email Address (Optional)"}
        inputId={"paypal-email"}
        inputPlaceholder={"PayPal Email Address"}
        type={"email"}
        value={paypalEmail}
        onChange={(e) => {
          setPaypalEmail(e.target.value);
          setFormError("");
          setPaypalEmailError("");
        }}
        width={"100%"}
        errorMessage={paypalEmailError}
      />

      <FormTextArea
        formTitle={"Enter at least 3 of your Social Media Account URLs"}
        row={5}
        placeholder={""}
        value={socials}
        onChange={(e) => {
          setSocials(e.target.value);
          setFormError("");
          setSocialsError("");
        }}
        width={"100%"}
        errorMessage={socialsError}
      />

      <UploadContainer>
        <UploadSection
          title="Government Recognized ID"
          uploadTitle="Upload your government recognized ID (e.g Drivers License, National ID, Passport)"
          uploadDescription="Drag & drop files or Browse. Supported formats: PDF"
          uploadBtnTitle={"Upload"}
          fileType={"application/pdf"}
          handleFileChange={handleFileChange}
          loading={loading}
          selectedFile={selectedDocFile}
          onFileUpload={() => {
            uploadDocument(selectedDocFile);
          }}
          previewUrl={selectedDocFile}
          handleCancel={() => {
            setSelectedDocFile(null);
          }}
          UploadedText={"Your government recognized ID has been uploaded"}
          isFileUploaded={uploadedDocumentUrl?.link}
          uploadPercentage={progress}
          // fileUploadErrorMessage={coverArtErrorMessage}
        />
        <UploadSection
          title="Signature Image"
          uploadTitle="Upload an Image of your Signature (Endeavour to have your signature in a white background)"
          uploadDescription="Drag & drop files or Browse. Supported formats: PNG, JPG"
          uploadBtnTitle={"Upload"}
          fileType={"image/*"}
          handleFileChange={handleFileChange}
          loading={loading}
          selectedFile={selectedSignatureDocFile}
          onFileUpload={() => {
            uploadSignatureDocument(selectedSignatureDocFile);
          }}
          previewUrl={selectedSignatureUrl}
          handleCancel={() => {
            setSelectedSignatureDocFile(null);
          }}
          UploadedText={"Your Signature picture has been uploaded"}
          isFileUploaded={uploadedSignatureDocumentUrl?.link}
          uploadPercentage={progress}
          // fileUploadErrorMessage={coverArtErrorMessage}
        />
      </UploadContainer>

      <FormButton
        title={"Submit"}
        marginTop={40}
        width={"100%"}
        marginLeft={"0px"}
        onClick={onUserVerification}
        errorMessage={formError}
        loading={loading}
      />
    </Container>
  );
}

export default UserVerification;
