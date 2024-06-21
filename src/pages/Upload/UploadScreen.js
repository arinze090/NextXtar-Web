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

const UploadScreen = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <UploadCard
        title="Upload Music"
        description="Distribute your songs across multiple platforms"
        formats="MP3"
        onUploadBtnClick={() => {
          navigate("/upload-music");
        }}
        uploadBtnTitle={"Upload"}
      />
      <UploadCard
        title="Upload Video"
        description="Distribute your video via our YouTube channel, with YouTube content ID"
        formats="MP4"
        onUploadBtnClick={() => {
          navigate("/upload-video");
        }}
        uploadBtnTitle={"Upload"}
      />
    </Container>
  );
};

export default UploadScreen;
