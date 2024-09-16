import React from "react";
import styled from "styled-components";

import genre1 from "../../assets/genre1.png";
import genre2 from "../../assets/genre2.png";
import genre3 from "../../assets/genre3.png";
import genre4 from "../../assets/genre4.png";
import genre5 from "../../assets/genre5.png";
import genre6 from "../../assets/genre6.png";
import genre7 from "../../assets/genre7.png";
import genre8 from "../../assets/genre8.png";
import LandingPageTopTracksCard from "../../components/cards/LandingPageTopTracksCard";

const dummyTopTracks = [
  {
    id: 1,
    image: genre1,
    artist: "Kabza The Mindless",
    track: "Felicit",
  },
  {
    id: 2,
    image: genre2,
    artist: "Ayo_voice",
    track: "Oluwaseun",
  },
  {
    id: 3,
    image: genre3,
    artist: "Dj Wonzy",
    track: "Its Over",
  },
  {
    id: 4,
    image: genre4,
    artist: "Charles Vincent blesi jr",
    track: "Baby pain",
  },
  {
    id: 5,
    image: genre5,
    artist: "Urban PlayBoy",
    track: "Salawo",
  },
  {
    id: 6,
    image: genre6,
    artist: "Cpl Gomez HD",
    track: "The Queens Royal Fete Instrumental",
  },
  {
    id: 7,
    image: genre7,
    artist: "Barco k,Jeff Paul & Bad..",
    track: "Twesangeyo",
  },
  {
    id: 8,
    image: genre8,
    artist: "Cpl Gomez HD",
    track: "Miami wants to party",
  },
  {
    id: 9,
    image: genre1,
    artist: "Cpl. Gomez HD",
    track: "Vaccination Rhythm",
  },
  {
    id: 10,
    image: genre2,
    artist: "Kabza The Mindless",
    track: "Felicit",
  },
];

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
    margin-bottom: 60px;
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
  margin-bottom: 0px;
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
`;

const MusicCardWrapper = styled.div`
  //   width: 100%;
  margin-bottom: 16px;
  // background: green;
  margin-right: 30px;
`;

function ToptracksLandingSection() {
  return (
    <Container>
      <Title>The Singnify Top Tracks of the Week</Title>
      <Subtitle>
        Access the most streamed tracks of the week on Singnify and follow your
        Favourite Artist
      </Subtitle>

      <MusicCardsContainer>
        {dummyTopTracks?.map((cur, i) => (
          <MusicCardWrapper key={i}>
            <LandingPageTopTracksCard
              artistName={cur?.track}
              title={cur?.artist}
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
