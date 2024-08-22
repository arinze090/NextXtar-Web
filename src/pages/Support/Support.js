import React from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";

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
  margin-bottom: 0px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 3px;
`;

function Support() {
  return (
    <Container>
      <HeaderTitle
        title={"Support"}
        imgSrc={require("../../assets/singnifySplashLogo.png")}
        imgAlt={"Support Image"}
      />
      <Description>
        Welcome to Singnify official website, we love to support our teaming
        members, in the best ways possible.
      </Description>

      <Description>
        <Title>Singnify: </Title>
        is a place perfectly built to help upcoming artiste, upload their songs
        and videos, in the comfort of your home while we do the shouting for
        you, we help in promoting them in the best possible ways, for more
        information, you can send us email on info@singnify.com
      </Description>

      <Title>SINGNIFY RECORDS AND LABELS DEAL:</Title>
      <Description>
        We also sign artist we believed in, we have dedicated team who are
        professional in the areas of STRATEGIES PLANNING, MARKETING, BRANDING,
        PUBLIC RELATION (PR) and more. We have other music executive we work
        with, over 10 record labels and Executives, that are looking for
        promising artists to sign on their labels, and equally market globally,
        if we find a label for any artiste on our platform, we will pass the
        said artiste to the label’s executive with 20% commission for Singnify
        Inc. the chances of been sign is very high with Singnify, a platform
        like never seen before, for more information about our Record deals and
        others, email us at support@singnify.com
      </Description>

      <Title>UPLOADS:</Title>
      <Description>
        We create the platform to make it easy for our members to upload their
        songs without stress or worries, we undertake the whole process on your
        behalf, simply upload your artwork which should be 450 pixel X 450
        pixel, make sure your artwork is clean, simple and attractive, this will
        attract other members to listen to your songs and rate you, your audio
        should be in high quality MP3 audio. We know how difficult it is for
        some people to access good internet, we can also help you to upload your
        songs and videos. simply send your songs and artwork (Jacket) to
        upload@singnify.com
      </Description>

      <Title>COMPETE AND WIN:</Title>
      <Description>
        This is a monthly challenge among members to use their songs to win, our
        fabulous prizes for the best liked and most listened songs on our
        web/app, the prizes varies, it is a programs designed to promote our
        members, for more information email info@singnify.com
      </Description>

      <Title>ROYALITY AND PAYMENT: </Title>
      <Description>
        The sole aim of this platform is to promote, underground, unknown and
        upcoming artiste, and we are commitment in carry out this task with
        utmost sincerity, in the cause of promoting an artiste, in over 500
        music stores and online streaming, if the artiste makes any money, 50%
        of the money will be paid directly to the artiste, and 50% to Singnify
        Inc., payment can only be made if an artiste makes $100 and above. For
        more information about this kindly read our terms of use, or send us an
        email, info@singnify.com
      </Description>

      <Title>TOP SONGS CATAGORIES: </Title>
      <Description>
        We have our top chart songs on our platform, with leading songs, mostly
        played or liked, our songs are judged by the way people respond your
        songs, and equally like them, we encouraged all members to share their
        songs on their social media platform to attract more listening and like,
        the most wins our $1,000, every 90 days, for more information email
        charts@singnify.com
      </Description>

      <Title>
        LABEL OWNERS / PRODUCERS / RECORD LABEL /MARKETERS / PRODUCERS:
      </Title>
      <Description>
        A portal has been created for music executives, label owners, Marketers,
        movie producers, independent artiste, record labels, etc. to upload all
        their artists or movies and equally monitors the sales on quarterly
        bases. <br /> <br /> Advantages to work with Singnify, we will promote
        and place your products on the front burner, to generate quick income
        for your organization. <br /> <br /> Prompt quarterly payment. We work
        with the best in the music world, we made it easier, simple go to our
        portal, read our terms and conditions, fill in your name company name
        and address, agree to terms and conditions, upload all your songs and
        videos, a confirmation will be sent to you and your all set to sale your
        product worldwide without any restrictions, for more information kindly
        send us email labels@singnify.com
      </Description>
    </Container>
  );
}

export default Support;
