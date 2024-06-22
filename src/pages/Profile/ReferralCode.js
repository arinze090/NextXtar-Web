import React, { useState } from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormInput from "../../components/form/FormInput";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

function ReferralCode() {
  const [referralCode, setReferralCode] = useState("");
  const [referralLink, setRreferralLink] = useState("");

  return (
    <Container>
      <HeaderTitle
        title={"Referral Earnings"}
        imgSrc={require("../../assets/1.jpg")}
        imgAlt={"Referral Image"}
      />
      <h4>Referral Earnings: $0.00</h4>
      <p>You earn $1.00 per person you refer to NextXtar.</p>

      <FormInput
        type={"text"}
        formTitle={"Your Referral Code"}
        inputPlaceholder={""}
        inputId={"projectTitle"}
        value={referralCode}
      />

      <FormInput
        type={"text"}
        formTitle={"Your Referral Link"}
        inputPlaceholder={""}
        inputId={"projectTitle"}
        value={referralLink}
      />
    </Container>
  );
}

export default ReferralCode;
