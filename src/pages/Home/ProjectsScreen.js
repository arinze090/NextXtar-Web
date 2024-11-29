import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormButton from "../../components/form/FormButton";
import TransparentBtn from "../../components/form/TransparentBtn";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  padding-top: 80px;
`;

const Title = styled.h4`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 3px;
  color: #ccc;
`;

function ProjectsScreen() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderTitle
        title={"SupaTunes Projects"}
        imgSrc={require("../../assets/projects.png")}
        imgAlt={"Projects Image"}
      />
      <Description>
        SupaTunes will be sponsoring projects across all sections of
        entertainment, mainly in songwriting, skit creation, comedy, singing,
        unique ideas, short movie productions, News caster and producers. <br />
        <br />
        1. To participate you have to download SupaTunes App, in Google play
        store or Apple iOS store. <br />
        2. Read the guidelines, and follow the instructions <br /> 3. Create a 2
        minutes video of your ideas , fill the form and upload your video <br />{" "}
        4. Follow SupaTunes on all social media account <br />
        5. SupaTunes has total right to use any video or content uploaded
        without any restriction <br />
        6. You can upload has many projects as you can <br />
        <br /> We will chose a project which is most acceptable in terms of
        views, like and comments, there is no time limit because it is a
        continue process. <br />
        <br />
        Remember rejection is not the end, it only means you work harder and
        better, and your project might be accepted.
        <br />
        <br /> Any project which is accepted, SupaTunes will fully sponsor such
        project no matter the cost. <br />
        <br />
        This is an opportunity to showcase your talent to the world. SupaTunes
        unlimited Possibilities
      </Description>

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
        marginTop={20}
        marginLeft={"0px"}
        width={"100%"}
        onClick={() => {
          navigate("/project-lists");
        }}
      />
    </Container>
  );
}

export default ProjectsScreen;
