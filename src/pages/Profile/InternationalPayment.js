import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
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

function InternationalPayment() {
  const state = useSelector((state) => state);
  const user = state.user.user;

  const countryOptions = listOfCountries;
  const currencyOptions = currencyList;

  const [loading, setLoading] = useState(false);

  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ibanNumber, setIbanNumber] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [currency, setCurrency] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // Error states
  const [formError, setFormError] = useState("");
  const [bankNameError, setBankNameError] = useState("");
  const [accountNameError, setAccountNameError] = useState("");
  const [accountNumberError, setAccountNumberError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [cityError, setCityError] = useState("");
  const [currencyError, setCurrencyError] = useState("");
  const [swiftCodeError, setSwiftCodeError] = useState("");
  const [ibanNumberError, setIbanNumberError] = useState("");

  const addPaymentMethod = async () => {
    const form = new FormData();
    form.append("token", user?.Token);
    form.append("ben_name", accountName);
    form.append("account_number", accountNumber);
    form.append("ben_bank", bankName);
    form.append("country", country);
    form.append("bank_type", "swift");
    form.append("iban_number", ibanNumber);
    form.append("swift_code", swiftCode);
    form.append("currency", currency);
    form.append("city", city);

    if (!bankName) {
      setBankNameError("Please add a bank");
    } else if (!accountName) {
      setAccountNameError("Please add an account name");
    } else if (!accountNumber) {
      setAccountNumberError("Please provide an account number");
    } else if (!country) {
      setCountryError("please select a county from the options");
    } else {
      try {
        setLoading(true);

        await axios
          .post(`${baseURL}bank-info.php?API_KEY=${API_KEY}`, form)
          .then((res) => {
            setLoading(false);

            if (parseInt(res?.data?.status) == 200) {
              toast.success("Your bank Account has been saved successful. ");
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

  return (
    <Container>
      <HeaderTitle
        title={"(Swift) International Payment"}
        imgSrc={require("../../assets/2.jpg")}
        imgAlt={"Payment Image"}
      />

      <FormInput
        formTitle={"Beneficiary Name"}
        inputId={"beneficiary-name"}
        inputPlaceholder={"Beneficiary Name"}
        type={"text"}
        value={accountName}
        onChange={(e) => {
          setAccountName(e.target.value);
          setFormError("");
          setAccountNameError("");
        }}
        width={"100%"}
        errorMessage={accountNameError}
      />

      <RowContent>
        <FormInput
          formTitle={"IBAN Number"}
          inputId={"iban-number"}
          inputPlaceholder={"IBAN Number"}
          type={"number"}
          value={ibanNumber}
          onChange={(e) => {
            setIbanNumber(e.target.value);
            setFormError("");
            setIbanNumberError("");
          }}
          errorMessage={ibanNumberError}
          width={"48%"}
        />

        <FormInput
          formTitle={"Account Number"}
          inputId={"account-number"}
          inputPlaceholder={"Account Number"}
          type={"number"}
          value={accountNumber}
          onChange={(e) => {
            setAccountNumber(e.target.value);
            setFormError("");
            setAccountNumberError("");
          }}
          errorMessage={accountNumberError}
          width={"48%"}
        />
      </RowContent>

      <FormInput
        formTitle={"Beneficiary Bank"}
        inputId={"beneficiary-bank"}
        inputPlaceholder={"Beneficiary Bank"}
        type={"text"}
        value={bankName}
        onChange={(e) => {
          setBankName(e.target.value);
          setFormError("");
          setBankNameError("");
        }}
        errorMessage={bankNameError}
        width={"100%"}
      />

      <RowContent>
        <FormInput
          formTitle={"Swift Code"}
          inputId={"swift-code"}
          inputPlaceholder={"Swift Code"}
          type={"number"}
          value={swiftCode}
          onChange={(e) => {
            setSwiftCode(e.target.value);
            setFormError("");
            setSwiftCodeError("");
          }}
          errorMessage={swiftCodeError}
          width={"30%"}
        />

        <FormInput
          formTitle={"Corresponding Bank Account"}
          inputId={"account-number"}
          inputPlaceholder={"Corresponding Number"}
          type={"text"}
          value={""}
          onChange={(e) => {
            console.log(e.target.value);
          }}
          width={"30%"}
        />
        <FormInput
          formTitle={"Intermediary Bank Account"}
          inputId={"account-number"}
          inputPlaceholder={"Intermediary Bank"}
          type={"text"}
          value={""}
          onChange={(e) => {
            console.log(e.target.value);
          }}
          width={"30%"}
        />
      </RowContent>

      <RowContent>
        <FormSelect
          formTitle={"Currency"}
          options={currencyOptions}
          selectId={"Currency"}
          selectPlaceholder={"Select Currency"}
          width={"30%"}
          onChange={(e) => {
            setCurrency(e.target.value);
            setFormError("");
            setCurrencyError("");
          }}
          errorMessage={currencyError}
        />
        <FormSelect
          formTitle={"Country"}
          options={countryOptions}
          selectId={"Country"}
          selectPlaceholder={"Select Country"}
          width={"30%"}
          onChange={(e) => {
            setCountry(e.target.value);
            setFormError("");
            setCountryError("");
          }}
          errorMessage={countryError}
        />
        <FormInput
          formTitle={"City"}
          inputId={"city"}
          inputPlaceholder={"City"}
          type={"text"}
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setFormError("");
            setCityError("");
          }}
          errorMessage={cityError}
          width={"30%"}
        />
      </RowContent>

      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <FormButton
          title={"Submit"}
          marginTop={40}
          // width={"323px"}
          marginLeft={"0px"}
          onClick={addPaymentMethod}
          errorMessage={formError}
          loading={loading}
        />
      </div>
    </Container>
  );
}

export default InternationalPayment;
