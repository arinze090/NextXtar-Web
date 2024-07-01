import React from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 216px;
  object-fit: contain;
`;

function EarnPoints() {
  return (
    <Container>
      <HeaderTitle
        title={"Earn Points"}
        imgSrc={require("../../assets/2.jpg")}
        imgAlt={"Earn Points Image"}
      />
      <p>
        Share your song on all social media platforms and earn points, NextXtar
        app will calculate where you shared your songs/albums and you will earn
        points, there is no limit to your points or share. <br />
        <br />
        <h4>FACEBOOK</h4>
        If you share your songs/albums via Facebook you will EARN 5 POINTS,
        apart from making yourself relevant, NextXtar will feature your song on
        our Facebook stories, make sure you are following NextXtar on Facebook,
        so you can benefit fully from these massive ways to promote your
        songs/albums. Follow Us For More
      </p>
      <Image src={require("../../assets/facebook.png")} alt="facebook" />
      <br />
      <br />
      <p>
        <h4>TWITTER</h4> Share your songs/albums via twitter and tag NextXtar,
        you EARN 5 POINTS, you will also be featured on our Twitter stories and
        benefits, remember the more points you earn, the more you keep featuring
        on NextXtar slideshow. <br />
        <br /> Follow Us For More
      </p>
      <Image src={require("../../assets/twitter.png")} alt="facebook" />
      <br />
      <br />
      <p>
        <h4>INSTAGRAM</h4> Share your on instagram, and tag NextXtar and EARN 5
        POINTS, instagram is a good place to promote your songs/albums because
        of its huge potential among the youths.. Follow Us For More
      </p>
      <Image src={require("../../assets/instagram.png")} alt="facebook" />
      <br />
      <br />
      <p>
        <h4>SHARE NEXTXTAR APP</h4>
        Share NextXtar app, and give NextXtar rating on Google and iOS store you
        EARN 10 POINTS.
      </p>
      <Image src={require("../../assets/nextxtar.png")} alt="facebook" />
      <br />
      <br />
      <p>
        <h4>WHATSAPP</h4> Share NextXtar on to all your contact and EARN 2
        POINTS, for each contact, with all your contacts, make your song
        popular, it take just a second to share your songs/albums.
      </p>
      <Image src={require("../../assets/whatsapp.png")} alt="facebook" />

      <p>
        <h4>TIKTOK</h4>
        Do a DanceVideo on Tiktok and tag NextXtar, and EARN 5 POINTS, TitTok is
        more like a mini personal television station that gives you total
        control, of acts, it have a lot of potential to promote your
        songs/albums using all it advantages. Follow Us For More
      </p>
      <Image src={require("../../assets/tiktok.png")} alt="facebook" />
      <br />
      <br />
      <p>
        <h4>BENEFITS</h4>
        1. You can use your NextXtar points to get massive airplay on NextXtar
        Online Radio <br /> <br />
        2. You can convert your points to dollar and withdraw it <br /> <br />
        3. Use your points for promotional services on NextXtar, including
        express delivery <br /> <br />
        4. Become relevant on social media <br /> <br />
        5. Get a one hour interview on NextXtar online Radio, and request an
        airplay within the interview
      </p>
    </Container>
  );
}

export default EarnPoints;
