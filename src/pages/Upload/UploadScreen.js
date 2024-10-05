import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Upload from "../../components/cards/Upload";
import Upload2 from "../../components/cards/Upload2";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
  flex-wrap: wrap;
  margin-bottom: 90px;

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
      <Upload2
        title="Upload Music"
        description="Distribute your songs across multiple platforms"
        formats="MP3"
        handleClick={() => {
          navigate("/upload-music");
        }}
        uploadBtnTitle={"Upload Music"}
      />
      <Upload2
        title="Upload Video"
        description="Distribute your video via our YouTube channel, with YouTube content ID"
        formats="MP4"
        handleClick={() => {
          navigate("/upload-video");
        }}
        uploadBtnTitle={"Upload Video"}
      />
    </Container>
  );
};

export default UploadScreen;
