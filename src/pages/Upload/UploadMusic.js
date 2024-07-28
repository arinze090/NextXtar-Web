import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import HeaderTitle from "../../components/common/HeaderTitle";
import Upload from "../../components/cards/Upload";

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
        imgSrc={require("../../assets/gif1.gif")}
        imgAlt={"Upload Music Image"}
      />
      <Upload
        title="Upload Tracks"
        description="A track is a single"
        formats="MP3"
        handleClick={() => {
          navigate("/upload-tracks");
        }}
        uploadBtnTitle={"Upload Track"}
      />
      <Upload
        title="Upload Album"
        description="An album is two or more tracks"
        formats="MP3"
        handleClick={() => {
          navigate("/upload-tracks");
        }}
        uploadBtnTitle={"Upload Album"}
      />
    </Container>
  );
}

export default UploadMusic;
