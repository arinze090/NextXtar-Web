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
  padding-top: 120px;
  padding-bottom: 30px;
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
  gap: 5px;
  // background: red;
  justify-content: center;
  align-content: center;
  align-self: center;
  align-items: center;
  margin-top: 80px;
  margin: 0 auto;
  width: 100%;

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
    width: 70%;
    // background: blue;
  }

  @media screen and (max-width: 1440px) {
    width: 85%;
    // background: blue;
  }

  @media screen and (max-width: 1024px) {
    width: 75%;
    // background: red;
    margin-top: 50px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    // background: red;
    margin-top: 50px;
  }
`;

const MusicCardWrapper = styled.div`
  margin-bottom: 5px;
  margin-right: 5px;
  // background: green;
  justify-content: center;
  align-items: center;
  flex: 1 1 calc(20% - 20px);

  @media screen and (max-width: 10000px) {
    // background: indigo;
    flex: 1 1 calc(20% - 20px);
  }

  @media screen and (max-width: 3000px) {
    width: 100%;
    // background: blue;
    flex: 1 1 calc(20% - 20px);
  }

  @media screen and (max-width: 2000px) {
    // width: 100%;
    // background: purple;
    flex: 1 1 calc(20% - 40px);
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    // background: blue;
    flex: 1 1 calc(20% - 50px);
  }

  @media screen and (max-width: 768px) {
    // width: 90%;
    // background: pink;
    flex: 1 1 calc(20% - 20px);
  }

  @media screen and (max-width: 425px) {
    // width: 90%;
    flex: 1 1 calc(20% - 20px);
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

function ToptracksLandingSection() {
  const state = useSelector((state) => state);

  const reduxTopTracks = state?.discover?.topTracks;
  // console.log("reduxTopTracks", reduxTopTracks);

  const [itemsToShow, setItemsToShow] = useState(10);

  // Adjust the number of items based on screen width
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 770 && window.innerWidth <= 1300) {
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
              props={cur}
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
