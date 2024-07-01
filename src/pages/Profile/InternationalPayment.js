import React from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormInput from "../../components/form/FormInput";
import FormSelect from "../../components/form/FormSelect";
import FormButton from "../../components/form/FormButton";

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

const formSelectOptions = [
  {
    id: 1,
    name: "Uploading for Myself",
  },
  {
    id: 2,
    name: "Uploading for Someone",
  },
];

function InternationalPayment() {
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
        value={""}
        onChange={""}
        width={"100%"}
      />

      <RowContent>
        <FormInput
          formTitle={"IBAN Number"}
          inputId={"iban-number"}
          inputPlaceholder={"IBAN Number"}
          type={"number"}
          value={""}
          onChange={""}
          width={"48%"}
        />

        <FormInput
          formTitle={"Account Number"}
          inputId={"account-number"}
          inputPlaceholder={"Account Number"}
          type={"number"}
          value={""}
          onChange={""}
          width={"48%"}
        />
      </RowContent>

      <FormInput
        formTitle={"Beneficiary Bank"}
        inputId={"beneficiary-bank"}
        inputPlaceholder={"Beneficiary Bank"}
        type={"text"}
        value={""}
        onChange={""}
        width={"100%"}
      />

      <RowContent>
        <FormInput
          formTitle={"Swift Code"}
          inputId={"swift-code"}
          inputPlaceholder={"Swift Code"}
          type={"number"}
          value={""}
          onChange={""}
          width={"30%"}
        />

        <FormInput
          formTitle={"Corresponding Bank Account"}
          inputId={"account-number"}
          inputPlaceholder={"Corresponding Number"}
          type={"text"}
          value={""}
          onChange={""}
          width={"30%"}
        />
        <FormInput
          formTitle={"Intermediary Bank Account"}
          inputId={"account-number"}
          inputPlaceholder={"Intermediary Bank"}
          type={"text"}
          value={""}
          onChange={""}
          width={"30%"}
        />
      </RowContent>

      <RowContent>
        <FormSelect
          formTitle={"Currency"}
          options={formSelectOptions}
          selectId={"Currency"}
          selectPlaceholder={"Select Currency"}
          width={"30%"}
        />
        <FormSelect
          formTitle={"Country"}
          options={formSelectOptions}
          selectId={"Country"}
          selectPlaceholder={"Select Country"}
          width={"30%"}
        />
        <FormInput
          formTitle={"City"}
          inputId={"city"}
          inputPlaceholder={"City"}
          type={"text"}
          value={""}
          onChange={""}
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
        />
      </div>
    </Container>
  );
}

export default InternationalPayment;
