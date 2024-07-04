import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

function StreamingPlatforms() {
  const state = useSelector((state) => state);
  console.log("state", state);

  const reduxStreamingPlatforms = state?.discover?.streamingPlatforms;

  return (
    <Container>
      <HeaderTitle
        title={"Streaming Platforms"}
        imgSrc={require("../../assets/1.jpg")}
        imgAlt={"Streaming Image"}
      />

      {reduxStreamingPlatforms?.map((cur, i) => (
        <p key={i}>{cur?.Stream}</p>
      ))}
    </Container>
  );
}

export default StreamingPlatforms;
