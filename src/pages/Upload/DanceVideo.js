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

function DanceVideo() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderTitle
        title={"Dance Video"}
        imgSrc={require("../../assets/singnifySplashLogo.png")}
        imgAlt={"Dance Video Image"}
      />
      <Title>Upload Your Dance Video</Title>
      <p>
        Singnify DanceVideo, for all Singnify users, Singnify organized a
        DanceVideo creation contest called "Singnify Tiktok DanceVideo." Let's
        show off our creativity and share prizes up to $2,000 <br /> <br />{" "}
        There will be a total of 30 prizes for the top 30 users with the highest
        total views. On top of that, users will also stand a chance to win
        prizes in four special categories — Most Referral, Most Creative, Most
        Shares and Most likes. <br /> <br />
        Campaign Period Soon to be announce (GMT)
      </p>
      <p>
        Prices <br /> <br />
        - Main Prize: The 30 users with the highest total views will receive
        $50/user. <br />- Special Category Prizes: The user that has the most
        referrals: $100 <br />
        - Most Creative: $80 <br />
        - Most Shares on social media: $70 <br />
        - The video has the most likes: $50 <br />- Excellent videos can be used
        as Singnify TikTok official video creators, and the videos will be
        forwarded by our official account or announced as official videos.
      </p>

      <Title>How to Participate</Title>
      <p>
        - Download Singnify App from Android and iOS store, complete your
        registration.
        <br /> <br />
        - Create Your DanceVideo. The number of videos is unlimited, and the
        total views will be calculated as the sum of the views of all videos.
        Therefore, the more videos you have, the more chances you have to win
        prizes. On the Singnify app download any song of your choice, decide on
        your video concept before creating your content. You can check out our
        questionnaire for more information. <br /> <br />- Publish and upload
        your DanceVideo on Singnify, App (DanceVideo) Tiktok, and share on all
        Social Media channels To qualify for rewards, all participants will have
        to do the following: The title of the video must have the word Singnify
        and Hashtag about Singnify, #Singnify #51lexrecords etc on your video.
        Show your referral link in the video or registration number. Publish
        your content on, Tiktok, follow @Singnify_Ent on Tiktok and share it
        with your other channels, such as Twitter, Instagram, and Facebook if
        possible, this will give you more chances to win..
      </p>

      <Title>Winners will be evaluated based on the following:</Title>
      <Title>Main Prize</Title>
      <p>
        - Most views & likes on Social Media(70%) <br /> - Evaluation by the
        Singnify team (30%) <br />- Have at least three successful referrals.
      </p>
      <Title>Special Category Prizes</Title>
      <p>Evaluation by the Singnify Team.</p>

      <Title>Terms and Conditions:</Title>
      <p>
        1. Only videos that meet all the requirements can be counted as a valid
        video; <br />
        2. The video cannot be deleted. Videos that have been used in other
        cooperative events for Singnify will not be counted in this program;{" "}
        <br />
        3. All submissions must be original works of the submitting participant.
        Re-submissions of videos from previous Singnify competitions are NOT
        eligible for this program; <br />
        4. With Singnify terms & conditions. Any content or actions that could
        bring disrespect to the Singnify brand is strictly prohibited; <br /> 5.
        Singnify reserves all rights to the DanceVideo including the final
        explanation.
      </p>
      <FormButton
        title={"Proceed"}
        onClick={() => {
          navigate("/dance-video-upload");
        }}
      />
    </Container>
  );
}

export default DanceVideo;
