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

function WisePayment() {
  return (
    <Container>
      <HeaderTitle
        title={"Wise Payment"}
        imgSrc={require("../../assets/1.jpg")}
        imgAlt={"Wise Image"}
      />

      <FormInput
        formTitle={"Wise Email Address"}
        inputId={"wise-email"}
        inputPlaceholder={"Wise Email Address"}
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

export default WisePayment;
