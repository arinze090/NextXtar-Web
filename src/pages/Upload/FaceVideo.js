import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormButton from "../../components/form/FormButton";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: black;
  padding-top: 80px;
`;

const Title = styled.p`
  color: #005903;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 3px;
  color: #ccc;
`;

function FaceVideo() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderTitle
        title={"FaceVideo"}
        imgSrc={require("../../assets/gif1.gif")}
        imgAlt={"FaceVideo Image"}
      />
      <Title>Upload Your FaceVideo</Title>
      <Description>
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
      </Description>
      <Description>
        How to participate <br /> <br />
        1. Play your song <br />
        2. Use your phone to mimic your song and record yourself <br />
        3. After recording, upload the video to "Singnify FaceVideo" <br />
        4. You will get notification of approval and a link <br /> <br />
        For more information send an email to facevideo@singnify.com
      </Description>
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
