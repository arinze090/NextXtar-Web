import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import UploadCard from "../../components/cards/UploadCard";
import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    // background: red;
    flex-direction: column;
  }
`;

function UploadMusic() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderTitle
        title={"Upload Music"}
        imgSrc={require("../../assets/1.jpg")}
        imgAlt={"Upload Music Image"}
      />
      <UploadCard
        title="Upload Tracks"
        description="A track is a single"
        formats="MP3"
        onUploadBtnClick={() => {
          navigate("/upload-tracks");
        }}
        uploadBtnTitle={"Upload Track"}
      />
      <UploadCard
        title="Upload Album"
        description="An album is two or more tracks"
        formats="MP3"
        onUploadBtnClick={() => {
          navigate("/upload-album");
        }}
        uploadBtnTitle={"Upload Album"}
      />
    </Container>
  );
}

export default UploadMusic;
