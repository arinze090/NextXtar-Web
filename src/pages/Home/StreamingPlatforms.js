import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  border-radius: 8px;
`;

function StreamingPlatforms() {
  const state = useSelector((state) => state);

  const reduxStreamingPlatforms = state?.discover?.streamingPlatforms;

  return (
    <Container>
      <HeaderTitle
        title={"Streaming Platforms"}
        imgSrc={require("../../assets/singnifySplashLogo.png")}
        imgAlt={"Streaming Image"}
      />

      {reduxStreamingPlatforms?.map((cur, i) => (
        <p key={i} style={{ color: "white" }}>
          {cur?.Stream}
        </p>
      ))}
    </Container>
  );
}

export default StreamingPlatforms;
