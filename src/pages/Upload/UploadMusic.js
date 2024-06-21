import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import UploadCard from "../../components/cards/UploadCard";

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
      <UploadCard
        title="Upload Tracks"
        description="A track is a single"
        formats="MP3"
        onUploadBtnClick={() => {
          navigate("/upload-tracks");
        }}
        uploadBtnTitle={"Upload Music"}
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
