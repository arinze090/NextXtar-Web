import React from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

function StreamingPlatforms() {
  return (
    <Container>
      <HeaderTitle
        title={"Streaming Platforms"}
        imgSrc={require("../../assets/1.jpg")}
        imgAlt={"Streaming Image"}
      />
    </Container>
  );
}

export default StreamingPlatforms;
