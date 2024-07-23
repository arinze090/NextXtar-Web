import React from "react";
import styled from "styled-components";
import GenreCard from "../cards/GenreCard";

const Container = styled.div`
  // background: green;
  padding: 20px;
  width: auto;
  margin: 20px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    margin-bottom: 3px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SeeAll = styled.a`
  font-size: 1rem;
  color: #000;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const GenreList = styled.div`
  display: flex;
  // flex-wrap: wrap;
  //   gap: 10px;
  // justify-content: space-between;
  // overflow-y: auto;
  //   height: 100vh;

  flex-direction: row;
  overflow-x: auto;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50vh;
    overflow-y: auto;
    justify-content: space-between;
    align-items: center;
    // align-self: center;
  }
`;

const GenreItem = styled.div`
  background: url("url/to/image") no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  padding: 20px;
  width: calc(40% - 10px);
  color: white;
  text-align: center;
  font-weight: bold;
  height: 5vh;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: calc(35% - 10px);
  }
`;

const GenreCardWrapper = styled.div`
  margin-bottom: 16px;
  margin-right: 30px;
`;

const Genres = ({ genres }) => {
  // Determine the max words based on screen size
  const isSmallScreen = window.innerWidth <= 768;
  const wordsToUse = isSmallScreen ? 10 : 40;

  return (
    <Container>
      <Header>
        <Title>All Genres</Title>
        <SeeAll href="/genres">See all</SeeAll>
      </Header>
      <GenreList>
        {genres?.map((genre, i) => (
          <GenreCardWrapper key={i}>
            <GenreCard title={genre} />
          </GenreCardWrapper>
        ))}
      </GenreList>
    </Container>
  );
};

export default Genres;
