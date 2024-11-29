import React from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  border-radius: 8px;
  padding-top: 80px;
`;
function PaymentInformation() {
  return (
    <Container>
      <HeaderTitle
        title={"Payment Information"}
        // imgSrc={require("../../assets/supatunezLogo.jpeg")}
        imgAlt={"Payment Image"}
      />
      <p style={{ lineHeight: 2, fontSize: 18, color: "white" }}>
        1. SupaTunes updates all payment accounts quarterly, this means every
        ninety days (90 Days), these are in line with the digital stores we work
        with. <br />
        2. We update accounts four times a year, 24th of February, 24th of May,
        24th of August and 24th of November. <br />
        3. These accounts are not done manually, it is automated, according to
        the details of sales directly from digital stores. <br />
        4. You can withdraw your fund anytime, as long as you have at least $100
        in your account. <br />
        5. Withdraw can only be approved if you are verified, so we urge you to
        verify your account. <br />
        6. Remember to always keep your password and account details safe.
      </p>
    </Container>
  );
}

export default PaymentInformation;
