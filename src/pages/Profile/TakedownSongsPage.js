import React from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  padding-top: 120px;
`;

function TakedownSongsPage() {
  return (
    <Container>
      <HeaderTitle
        title={"Takedown Songs"}
        imgSrc={require("../../assets/supatunezLogo.jpeg")}
        imgAlt={"Takedown Image"}
      />
    </Container>
  );
}

export default TakedownSongsPage;
