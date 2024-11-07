import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
} from "react-icons/io5";

import LandingPageGenreCard from "../../components/cards/LandingPageGenreCard";
import GenreCard2 from "../../components/cards/GenreCard2";
import Genres from "../../components/common/Genres";

const Container = styled.div`
  display: flex;
  height: auto;
  // justify-content: center;
  // align-items: center;
  background-color: black;
  padding-top: 50px;
  padding-bottom: 120px;
  align-content: center;
  flex-direction: column;
  padding: 40px;

  @media screen and (max-width: 768px) {
    padding-top: 20px;
    // margin-bottom: 60px;
    height: auto;
  }
`;

const Header = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  // background: green;
  width: 100%;
  // padding: 20px;
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

const ArrowSection = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
`;

const MusicCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  //   background: red;
  justify-content: center;
  margin-top: 80px;
  padding-bottom: 120px;
`;

const MusicCardWrapper = styled.div`
  //   width: 100%;
  margin-bottom: 16px;
  // background: green;
  margin-right: 30px;
  // margin-top: ${({ index }) => (index % 2 === 1 ? "20px" : "0")};
`;

function GenresLandingPageSection() {
  const state = useSelector((state) => state);

  const genresListing = state?.discover?.listings?.genres;

  return (
    <Container>
      <Title>Explore Our Endless Music Genres</Title>
      <Subtitle>
        Our Music libraries offer a diverse collection of songs and Genres,
        waiting to be explored by you.
      </Subtitle>

      <Genres genres={genresListing} genreTitle={""} seeMoreTitle={""} />
    </Container>
  );
}

export default GenresLandingPageSection;
