import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormButton from "../../components/form/FormButton";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

const Title = styled.p`
  color: #003018;
  font-size: 20px;
  font-weight: 700;
`;

function FaceVideo() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderTitle
        title={"FaceVideo"}
        imgSrc={require("../../assets/singnifySplashLogo.png")}
        imgAlt={"FaceVideo Image"}
      />
      <Title>Upload Your FaceVideo</Title>
      <p>
        "Singnify FaceVideo" is a way to promote Singnify artiste and make them
        go viral, we have reached agreement with some providers with over 1
        million YouTube Subscribers, this are just some of our efforts to help
        all the artiste who use our services. <br /> <br /> FaceVideo: Use your
        phone record yourself singing your songs and upload it on "Singnify
        FaceVideo" the most viewed video, on Facebook, Instagram and YouTube,
        within a 60 days period, get an instant Animated Video, Singnify
        Steppers Dancers Video, plus a bonus to choose from our promotional
        list. <br /> <br />
        Challenge yourself and upload as many videos of your song as you can,
        remember each song goes to each video
      </p>
      <p>
        How to participate <br /> <br />
        1. Play your song <br />
        2. Use your phone to mimic your song and record yourself <br />
        3. After recording, upload the video to "Singnify FaceVideo" <br />
        4. You will get notification of approval and a link <br /> <br />
        For more information send an email to facevideo@singnify.com
      </p>
      <FormButton
        title={"Proceed"}
        marginTop={40}
        marginLeft={"0px"}
        onClick={() => {
          navigate("/face-video-upload");
        }}
      />
    </Container>
  );
}

export default FaceVideo;
