import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { listOfCountries } from "../../data/dummyData";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";
import HeaderTitle from "../../components/common/HeaderTitle";
import FormInput from "../../components/form/FormInput";
import FormSelect from "../../components/form/FormSelect";
import FormTextArea from "../../components/form/FormTextArea";
import FormButton from "../../components/form/FormButton";

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

const partnershipTypes = [
  {
    id: 1,
    name: "Value Partnership",
    value: "Value Partnership",
  },
  {
    id: 2,
    name: "Social Media Advocate",
    value: "Social Media Advocate",
  },
  {
    id: 3,
    name: "Investment Contribution",
    value: "Investment Contribution",
  },
  {
    id: 4,
    name: "Music and Video Contribution",
    value: "Music and Video Contribution",
  },
  {
    id: 5,
    name: "Blogger",
    value: "Blogger",
  },
];

function PartnershipProcedure() {
  const navigate = useNavigate();

  const countryOptions = listOfCountries;

  const state = useSelector((state) => state);
  const user = state.user.user;

  const [loading, setLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [country, setCountry] = useState("");

  const [partnershipType, setPartnershipType] = useState("");
  const [organziationDesc, setOrganziationDesc] = useState("");
  const [proposedAct, setProposedAct] = useState("");
  const [keyGoals, setKeyGoals] = useState("");
  const [keyOps, setKeyOps] = useState("");
  const [believe, setBelieve] = useState("");
  const [level, setLevel] = useState("");
  const [benefits, setBenefits] = useState("");
  const [proposedTerm, setProposedTerm] = useState("");
  const [otherOptions, setOtherOptions] = useState("");
  const [mediaPartnerDetails, setMediaPartnerDetails] = useState("");
  const [activitySuccesss, setActivitySuccesss] = useState("");
  const [otherDetails, setOtherDetails] = useState("");

  // Error states
  const [formError, setFormError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [positionError, setPositionError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");
  const [partnershipTypeError, setPartnershipTypeError] = useState("");
  const [countryError, setCountryError] = useState("");

  const [organziationDescError, setOrganziationDescError] = useState("");
  const [proposedActError, setProposedActError] = useState("");
  const [keyGoalsError, setKeyGoalsError] = useState("");
  const [keyOpsError, setKeyOpsError] = useState("");
  const [believeError, setBelieveError] = useState("");
  const [levelError, setLevelError] = useState("");
  const [benefitsError, setBenefitsError] = useState("");
  const [proposedTermError, setProposedTermError] = useState("");
  const [otherOptionsError, setOtherOptionsError] = useState("");
  const [mediaPartnerDetailsError, setMediaPartnerDetailsError] = useState("");
  const [activitySuccesssError, setActivitySuccesssError] = useState("");
  const [otherDetailsError, setOtherDetailsError] = useState("");

  const submitPartnershipProcedure = async () => {
    setLoading(true);

    const form = new FormData();
    form.append("token", user?.Token);
    form.append("names", fullName);
    form.append("company_name", companyName);
    form.append("position", position);
    form.append("address", address);
    form.append("nationality", country);
    form.append("phone_number", phoneNumber);
    form.append("email_address", emailAddress);
    form.append("website", "");
    form.append(
      "value_partnership",
      partnershipType == "Value Partnership" ? 1 : 0
    );
    form.append(
      "social_media_advocate",
      partnershipType == "Social Media Advocate" ? 1 : 0
    );
    form.append(
      "investment_contribution",
      partnershipType == "Investment Contribution" ? 1 : 0
    );
    form.append(
      "music_video_contribution",
      partnershipType == "Music and Video Contribution" ? 1 : 0
    );
    form.append("blogger", partnershipType == "Blogger" ? 1 : 0);
    form.append("organization_desc", organziationDesc);
    form.append("activity_desc", proposedAct);
    form.append("key_goals", keyGoals);
    form.append("key_milestones", keyOps);
    form.append("partner_activity", believe);
    form.append("level_partnership", level);
    form.append("list_benefits", benefits);
    form.append("proposed_term", proposedTerm);
    form.append("level_partner", otherOptions);
    form.append("details_media", mediaPartnerDetails);
    form.append("determine_success", activitySuccesss);
    form.append("more_details", otherDetails);

    if (!fullName) {
      setFullNameError("Please provide us with your name");
    } else if (!companyName) {
      setCompanyNameError("Please provide your company name");
    } else if (!position) {
      setPositionError("please provide your position in your company");
    } else if (!address) {
      setAddressError("Please peovide your address");
    } else if (!country) {
      setCountryError("Please select a country from the options");
    } else if (!phoneNumber) {
      setPhoneNumberError("Please provide your phone number");
    } else if (!emailAddress) {
      setEmailAddressError("Please provide your email address");
    } else if (!partnershipType) {
      setPartnershipTypeError("Please select from the options");
    } else {
      try {
        await axios
          .post(`${baseURL}submit-partnership.php?API_KEY=${API_KEY}`, form)
          .then((res) => {
            console.log("res", res);
            setLoading(false);

            if (res?.data?.status == 200) {
              console.log("submitPartnershipProcedure data", res?.data);
              toast.success("Great! Your Partnership has been submitted");
              navigate(-1);
            } else {
              console.log("message", res?.data?.status);
              toast.error("Something went wrong, please try again later");
              setFormError("Something went wrong, please try again later");
            }
          })
          .catch((err) => {
            console.log("submitPartnershipProcedure err", err);
            setLoading(false);
            toast.error("Something went wrong, please try again later");
          });
      } catch (error) {
        console.log("submitPartnershipProcedure error", error);
      }
    }
  };

  return (
    <Container>
      <HeaderTitle
        title={"Partnership Procedure"}
        imgSrc={require("../../assets/gif12.gif")}
        imgAlt={"Payment Image"}
      />

      <RowContent>
        <FormInput
          formTitle={"Name"}
          inputId={"name"}
          inputPlaceholder={"Name"}
          type={"text"}
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            setFormError("");
            setFullNameError("");
          }}
          errorMessage={fullNameError}
          width={"48%"}
        />

        <FormInput
          formTitle={"Company Name"}
          inputId={"company-name"}
          inputPlaceholder={"Company Name"}
          type={"text"}
          value={companyName}
          onChange={(e) => {
            setCompanyName(e.target.value);
            setFormError("");
            setCompanyNameError("");
          }}
          errorMessage={companyNameError}
          width={"48%"}
        />
      </RowContent>

      <RowContent>
        <FormInput
          formTitle={"Position"}
          inputId={"position"}
          inputPlaceholder={"Position"}
          type={"text"}
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
            setFormError("");
            setPositionError("");
          }}
          errorMessage={positionError}
          width={"30%"}
        />

        <FormInput
          formTitle={"Address"}
          inputId={"address"}
          inputPlaceholder={"Address"}
          type={"text"}
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            setFormError("");
            setAddressError("");
          }}
          width={"30%"}
          errorMessage={addressError}
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
          width={"30%"}
          errorMessage={phoneNumberError}
        />
      </RowContent>

      <RowContent>
        <FormInput
          formTitle={"Email Address"}
          inputId={"email"}
          inputPlaceholder={"Email Address"}
          type={"email"}
          value={emailAddress}
          onChange={(e) => {
            setEmailAddress(e.target.value);
            setFormError("");
            setEmailAddressError("");
          }}
          width={"48%"}
          errorMessage={emailAddressError}
        />
        <FormSelect
          formTitle={"Country"}
          options={countryOptions}
          selectId={"Country"}
          selectPlaceholder={"Select Country"}
          width={"48%"}
          onChange={(e) => {
            setCountry(e.target.value);
            setFormError("");
            setCountryError("");
          }}
          errorMessage={countryError}
        />
      </RowContent>

      <FormSelect
        formTitle={"Partnerships"}
        options={partnershipTypes}
        selectId={"Country"}
        selectPlaceholder={"Select a Partnership"}
        width={"100%"}
        onChange={(e) => {
          setPartnershipType(e.target.value);
          setFormError("");
          setPartnershipTypeError("");
        }}
        errorMessage={partnershipTypeError}
      />

      <FormTextArea
        formTitle="Provide a general description of your organization:"
        row={5}
        placeholder={""}
        value={organziationDesc}
        onChange={(e) => {
          setOrganziationDesc(e.target.value);
          setFormError("");
          setOrganziationDescError("");
        }}
        errorMessage={organziationDescError}
        width={"100%"}
      />

      <FormTextArea
        formTitle="Provide a general description and overview of the proposed activity:"
        row={5}
        placeholder={""}
        value={proposedAct}
        onChange={(e) => {
          setProposedAct(e.target.value);
          setFormError("");
          setProposedActError("");
        }}
        errorMessage={proposedActError}
        width={"100%"}
      />

      <FormTextArea
        formTitle="What are the key goals you hope to achieve by conducting this activity?"
        row={5}
        placeholder={""}
        value={keyGoals}
        onChange={(e) => {
          setKeyGoals(e.target.value);
          setFormError("");
          setKeyGoalsError("");
        }}
        errorMessage={keyGoalsError}
        width={"100%"}
      />

      <FormTextArea
        formTitle="What are the operational or promotional milestones leading up to the activity"
        row={5}
        placeholder={""}
        value={keyOps}
        onChange={(e) => {
          setKeyOps(e.target.value);
          setFormError("");
          setKeyOpsError("");
        }}
        errorMessage={keyOpsError}
        width={"100%"}
      />

      <FormTextArea
        formTitle="Why do you believe NextXtar should partner this activity?"
        row={5}
        placeholder={""}
        value={believe}
        onChange={(e) => {
          setBelieve(e.target.value);
          setFormError("");
          setBelieveError("");
        }}
        errorMessage={believeError}
        width={"100%"}
      />
      <FormTextArea
        formTitle="What level of partnership are you proposing for NextXtar?"
        row={5}
        placeholder={""}
        value={level}
        onChange={(e) => {
          setLevel(e.target.value);
          setFormError("");
          setLevelError("");
        }}
        errorMessage={levelError}
        width={"100%"}
      />
      <FormTextArea
        formTitle="Please list the benefits NextXtar will receive:"
        row={5}
        placeholder={""}
        value={benefits}
        onChange={(e) => {
          setBenefits(e.target.value);
          setFormError("");
          setBenefitsError("");
        }}
        errorMessage={benefitsError}
        width={"100%"}
      />
      <FormTextArea
        formTitle="What is the proposed term of the partnership (e.g. one off, one year)?"
        row={5}
        placeholder={""}
        value={proposedTerm}
        onChange={(e) => {
          setProposedTerm(e.target.value);
          setFormError("");
          setProposedTermError("");
        }}
        errorMessage={proposedTermError}
        width={"100%"}
      />
      <FormTextArea
        formTitle="What other levels or options for partnership may be available to NextXtar should we not be able to provide the requested level?"
        row={5}
        placeholder={""}
        value={otherOptions}
        onChange={(e) => {
          setOtherOptions(e.target.value);
          setFormError("");
          setOtherOptionsError("");
        }}
        errorMessage={otherOptionsError}
        width={"100%"}
      />
      <FormTextArea
        formTitle="Outline the details of your confirmed or proposed media partner/s and the depth and breadth of promotional coverage this partnership specifically offers to NextXtar."
        row={5}
        placeholder={""}
        value={mediaPartnerDetails}
        onChange={(e) => {
          setMediaPartnerDetails(e.target.value);
          setFormError("");
          setMediaPartnerDetailsError("");
        }}
        errorMessage={mediaPartnerDetailsError}
        width={"100%"}
      />
      <FormTextArea
        formTitle="How do you plan to determine the success of this activity?"
        row={5}
        placeholder={""}
        value={activitySuccesss}
        onChange={(e) => {
          setActivitySuccesss(e.target.value);
          setFormError("");
          setActivitySuccesssError("");
        }}
        errorMessage={activitySuccesssError}
        width={"100%"}
      />
      <FormTextArea
        formTitle="Outline more details here:"
        row={5}
        placeholder={""}
        value={otherDetails}
        onChange={(e) => {
          setOtherDetails(e.target.value);
          setFormError("");
          setOtherDetailsError("");
        }}
        errorMessage={otherDetailsError}
        width={"100%"}
      />

      <FormButton
        title={"Submit"}
        marginTop={40}
        marginLeft={"0px"}
        width={"100%"}
        onClick={submitPartnershipProcedure}
        errorMessage={formError}
        loading={loading}
      />
    </Container>
  );
}

export default PartnershipProcedure;
