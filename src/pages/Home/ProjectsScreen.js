import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormButton from "../../components/form/FormButton";
import TransparentBtn from "../../components/form/TransparentBtn";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

function ProjectsScreen() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderTitle
        title={"NextXtar Projects"}
        imgSrc={require("../../assets/1.jpg")}
        imgAlt={"Projects Image"}
      />
      <p>
        NextXtar will be sponsoring projects across all sections of
        entertainment, mainly in songwriting, skit creation, comedy, singing,
        unique ideas, short movie productions, News caster and producers. <br />
        <br />
        1. To participate you have to download NextXtar App, in Google play
        store or Apple iOS store. <br />
        2. Read the guidelines, and follow the instructions <br /> 3. Create a 2
        minutes video of your ideas , fill the form and upload your video <br />{" "}
        4. Follow NextXtar on all social media account <br />
        5. NextXtar has total right to use any video or content uploaded without
        any restriction <br />
        6. You can upload has many projects as you can <br />
        <br /> We will chose a project which is most acceptable in terms of
        views, like and comments, there is no time limit because it is a
        continue process. <br />
        <br />
        Remember rejection is not the end, it only means you work harder and
        better, and your project might be accepted.
        <br />
        <br /> Any project which is accepted, NextXtar will fully sponsor such
        project no matter the cost. <br />
        <br />
        This is an opportunity to showcase your talent to the world. NextXtar
        unlimited Possibilities
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TransparentBtn
          title={"Submit a Project"}
          marginTop={40}
          marginLeft={"0px"}
          color={"black"}
          width={"100%"}
          onClick={() => {
            navigate("/add-project");
          }}
        />
        <FormButton
          title={"View your Projects"}
          marginTop={40}
          marginLeft={"0px"}
          width={"100%"}
          onClick={() => {
            navigate("/project-lists");
          }}
        />
      </div>
    </Container>
  );
}

export default ProjectsScreen;
