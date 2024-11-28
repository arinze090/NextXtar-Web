import React from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: black;
  padding-top: 80px;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 216px;
  object-fit: contain;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 3px;
  color: #ccc;
`;

const Title = styled.h4`
  font-size: 14px;
  margin-top: 3px;
  color: #fff;
`;

function EarnPoints() {
  return (
    <Container>
      <HeaderTitle
        title={"Earn Points"}
        // imgSrc={require("../../assets/supatunezLogo.jpeg")}
        imgAlt={"Earn Points Image"}
      />
      <Description>
        Share your song on all social media platforms and earn points, Singnify
        app will calculate where you shared your songs/albums and you will earn
        points, there is no limit to your points or share. <br />
        <br />
        <Title>FACEBOOK</Title>
        If you share your songs/albums via Facebook you will EARN 5 POINTS,
        apart from making yourself relevant, Singnify will feature your song on
        our Facebook stories, make sure you are following Singnify on Facebook,
        so you can benefit fully from these massive ways to promote your
        songs/albums. Follow Us For More
      </Description>
      <Image src={require("../../assets/facebook.png")} alt="facebook" />
      <br />
      <br />
      <Description>
        <Title>TWITTER</Title> Share your songs/albums via twitter and tag
        Singnify, you EARN 5 POINTS, you will also be featured on our Twitter
        stories and benefits, remember the more points you earn, the more you
        keep featuring on Singnify slideshow. <br />
        <br /> Follow Us For More
      </Description>
      <Image src={require("../../assets/twitter.png")} alt="facebook" />
      <br />
      <br />
      <Description>
        <Title>INSTAGRAM</Title> Share your on instagram, and tag Singnify and
        EARN 5 POINTS, instagram is a good place to promote your songs/albums
        because of its huge potential among the youths.. Follow Us For More
      </Description>
      <Image src={require("../../assets/instagram.png")} alt="facebook" />
      <br />
      <br />
      <Description>
        <Title>SHARE Singnify APP</Title>
        Share Singnify app, and give Singnify rating on Google and iOS store you
        EARN 10 POINTS.
      </Description>
      <Image
        imgSrc={require("../../assets/supatunezLogo.jpeg")}
        alt="facebook"
      />
      <br />
      <br />
      <Description>
        <Title>WHATSAPP</Title> Share Singnify on to all your contact and EARN 2
        POINTS, for each contact, with all your contacts, make your song
        popular, it take just a second to share your songs/albums.
      </Description>
      <Image src={require("../../assets/whatsapp.png")} alt="facebook" />

      <Description>
        <Title>TIKTOK</Title>
        Do a DanceVideo on Tiktok and tag Singnify, and EARN 5 POINTS, TitTok is
        more like a mini personal television station that gives you total
        control, of acts, it have a lot of potential to promote your
        songs/albums using all it advantages. Follow Us For More
      </Description>
      <Image src={require("../../assets/tiktok.png")} alt="facebook" />
      <br />
      <br />
      <Description>
        <Title>BENEFITS</Title>
        1. You can use your Singnify points to get massive airplay on Singnify
        Online Radio <br /> <br />
        2. You can convert your points to dollar and withdraw it <br /> <br />
        3. Use your points for promotional services on Singnify, including
        express delivery <br /> <br />
        4. Become relevant on social media <br /> <br />
        5. Get a one hour interview on Singnify online Radio, and request an
        airplay within the interview
      </Description>
    </Container>
  );
}

export default EarnPoints;
