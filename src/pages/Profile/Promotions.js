import React from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  padding-top: 80px;
`;

function Promotions() {
  return (
    <Container>
      <HeaderTitle
        title={"Promotions"}
        imgSrc={require("../../assets/supatunezLogo.jpeg")}
        imgAlt={"Promotions Image"}
      />
    </Container>
  );
}

export default Promotions;
