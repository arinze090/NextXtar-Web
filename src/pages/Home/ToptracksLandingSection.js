import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import LandingPageTopTracksCard from "../../components/cards/LandingPageTopTracksCard";

const Container = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding-top: 50px;
  padding-bottom: 120px;
  align-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding-top: 20px;
    // margin-bottom: 60px;
    height: auto;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 0px;
  text-align: center;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Subtitle = styled.p`
  margin-bottom: 40px;
  margin-top: 0px;
  text-align: center;
  font-size: 20px;
  display: flex;
  // width: 100%;
  // background-color: red;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    width: 70%;
    text-align: center;
    // justify-content: center;
    // align-items: center;
    // align-content: center;
    align-self: center;
    margin: 0 auto; /* Centers the element horizontally */
  }
`;

const MusicCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  //   background: red;
  justify-content: center;
  margin-top: 80px;
  margin: 0 auto;

  @media screen and (max-width: 10000px) {
    width: 45%;
    margin-bottom: 70px;
  }

  @media screen and (max-width: 5000px) {
    width: 45%;
    margin-bottom: 70px;
  }

  @media screen and (max-width: 3000px) {
    width: 50%;
  }

  @media screen and (max-width: 2000px) {
    width: 80%;
    // background: blue;
  }

  @media screen and (max-width: 1440px) {
    width: 85%;
    // background: blue;
  }

  @media screen and (max-width: 1024px) {
    width: 85%;
    // background: red;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    // background: red;
  }
`;

const MusicCardWrapper = styled.div`
  //   width: 100%;
  margin-bottom: 16px;
  // background: green;
  margin-right: 30px;
`;

function ToptracksLandingSection() {
  const state = useSelector((state) => state);

  const reduxTopTracks = state?.discover?.topTracks;
  // console.log("reduxTopTracks", reduxTopTracks);

  const [itemsToShow, setItemsToShow] = useState(10);

  // Adjust the number of items based on screen width
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 770 && window.innerWidth <= 1000) {
        setItemsToShow(8); // Show 8 items between 770px and 1024px
      } else {
        setItemsToShow(10); // Default to 10 items
      }
    };

    // Initial check
    updateItemsToShow();

    // Add event listener to adjust on window resize
    window.addEventListener("resize", updateItemsToShow);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  return (
    <Container>
      <Title>The Singnify Top Tracks of the Week</Title>
      <Subtitle>
        Access the most streamed tracks of the week on Singnify and follow your
        Favourite Artist
      </Subtitle>

      <MusicCardsContainer>
        {reduxTopTracks?.slice(0, itemsToShow)?.map((cur, i) => (
          <MusicCardWrapper key={i}>
            <LandingPageTopTracksCard
              artistName={cur?.label}
              title={cur?.track_name}
              imageUrl={cur?.image}
              imageUrlAlt={cur?.artist}
            />
          </MusicCardWrapper>
        ))}
      </MusicCardsContainer>
    </Container>
  );
}

export default ToptracksLandingSection;
