import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import FormSelect from "../../components/form/FormSelect";
import FormTextArea from "../../components/form/FormTextArea";
import UploadCard from "../../components/cards/UploadCard";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

function AddProject() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectSponsor, setProjectSponsor] = useState("");

  // Error states
  const [formError, setFormError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [projectTitleError, setProjectTitleError] = useState("");
  const [projectDescError, setProjectDescError] = useState("");
  const [projectSponsorError, setProjectSponsorError] = useState("");

  return (
    <Container>
      <HeaderTitle
        title={"Add New Project"}
        imgSrc={require("../../assets/projects.png")}
        imgAlt={"Projects Image"}
      />

      <FormInput
        type={"text"}
        formTitle={"Real Name (Full Name)"}
        inputPlaceholder={"Real Name (Full Name)"}
        inputId={"name"}
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
          setFormError("");
          setFullNameError("");
        }}
        errorMessage={fullNameError}
      />

      <FormInput
        type={"text"}
        formTitle={"Project Title"}
        inputPlaceholder={""}
        inputId={"projectTitle"}
        value={projectTitle}
        onChange={(e) => {
          setProjectTitle(e.target.value);
          setFormError("");
          setProjectTitleError("");
        }}
        errorMessage={projectTitleError}
      />

      <FormTextArea
        formTitle="Project Description"
        row={5}
        placeholder={""}
        value={projectDesc}
        onChange={(e) => {
          setProjectDesc(e.target.value);
          setFormError("");
          setProjectDescError("");
        }}
        errorMessage={projectDescError}
        width={"100%"}
      />

      <FormTextArea
        formTitle="Why Singnify should sponsor your project"
        row={5}
        placeholder={""}
        value={projectSponsor}
        onChange={(e) => {
          setProjectSponsor(e.target.value);
          setFormError("");
          setProjectSponsorError("");
        }}
        errorMessage={projectSponsorError}
        width={"100%"}
      />

      <UploadCard
        title="Upload your document, audio, or video"
        description="Distribute your songs across multiple platforms"
        formats="MP3"
        onUploadBtnClick={() => {
          navigate("/upload-music");
        }}
        uploadBtnTitle={"Upload"}
      />

      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <FormButton title={"Add Project"} marginTop={40} marginLeft={"0px"} />
      </div>
    </Container>
  );
}

export default AddProject;
