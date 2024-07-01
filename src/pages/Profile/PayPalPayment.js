import React from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormInput from "../../components/form/FormInput";
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
  }
`;

function PayPalPayment() {
  return (
    <Container>
      <HeaderTitle
        title={"PayPal Payment"}
        imgSrc={require("../../assets/1.jpg")}
        imgAlt={"Payment Image"}
      />

      <FormInput
        formTitle={"PayPal Email Address"}
        inputId={"paypal-email"}
        inputPlaceholder={"PayPal Email Address"}
        type={"email"}
        value={""}
        onChange={""}
        width={"100%"}
      />

      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <FormButton title={"Submit"} marginTop={40} marginLeft={"0px"} />
      </div>
    </Container>
  );
}

export default PayPalPayment;
