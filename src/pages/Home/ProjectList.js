import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  padding-top: 80px;
`;

function ProjectList() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderTitle
        title={"Your Project"}
        imgSrc={require("../../assets/projects.png")}
        imgAlt={"Projects Image"}
      />

      <h4
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 20,
          color: "white",
        }}
      >
        You don't any Project yet
      </h4>
    </Container>
  );
}

export default ProjectList;
