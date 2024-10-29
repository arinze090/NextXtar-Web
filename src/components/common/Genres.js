import React from "react";
import styled from "styled-components";
import GenreCard from "../cards/GenreCard";
import { useNavigate } from "react-router-dom";
import GenreCard2 from "../cards/GenreCard2";

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

// const GenreList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   justify-content: center;
//   // overflow-y: auto;
//   //   height: 100vh;

//   flex-direction: row;
//   overflow-x: hidden;
//   justify-content: center;
//   align-items: center;
//   background: blue;
//   width: 100%;
//   padding: 10px;

//   // @media screen and (min-width: 769px) {
//   //   justify-content: space-between;
//   //   gap: 10px;
//   // }

//   @media screen and (max-width: 425px) {
//     flex-wrap: nowrap;
//     overflow-x: auto;
//     justify-content: flex-start;
//     gap: 10px;
//   }

//   // Hide the scrollbar
//   &::-webkit-scrollbar {
//     width: 0;
//     height: 0;
//   }

//   // @media screen and (max-width: 425px) {
//   //   width: 100%;
//   //   flex-wrap: nowrap;
//   //   overflow-x: auto;
//   //   align-items: center;
//   //   justify-content: flex-start;
//   //   gap: 10px;
//   // }

//   // @media screen and (max-width: 375px) {
//   //   width: 100%;
//   //   overflow-x: auto;
//   //   overflow-y: auto;
//   //   flex-wrap: nowrap;
//   //   justify-content: space-between;
//   //   align-items: center;
//   //   gap: 10px;
//   // }
// `;

const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-content: center;
  align-self: center;
  align-items: center;

  flex-direction: row;
  overflow-x: hidden;
  // background: green;
  width: 100%;
  padding: 0px;

  margin: 0 auto;

  @media screen and (max-width: 10000px) {
    width: 45%;
  }

  @media screen and (max-width: 4000px) {
    width: 45%;
  }

  @media screen and (max-width: 3000px) {
    width: 50%;
  }

  @media screen and (max-width: 2000px) {
    width: 60%;
    // background: blue;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
    // background: red;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    // background: red;
  }

  // Hide the scrollbar
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
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

// const GenreCardWrapper = styled.div`
//   margin-bottom: 16px;
//   margin-right: 30px;
//   // flex: 1 1 calc(20% - 30px);
//   // max-width: calc(20% - 30px);
//   // background: red;

//   // Hide the scrollbar
//   &::-webkit-scrollbar {
//     width: 0;
//     height: 0;
//   }

//   @media screen and (max-width: 768px) {
//     margin-right: 0px;
//   }
// `;

const GenreCardWrapper = styled.div`
  margin-bottom: 5px;
  margin-right: 5px;
  // background: pink;
  justify-content: center;
  align-items: center;
  display: flex;

  // Adjust width to make the items more compact
  flex: 1 1 calc(20% - 20px);
  // max-width: calc(20% - 10px);

  @media screen and (max-width: 10000px) {
    // width: 100%;
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
    flex: 1 1 calc(22% - 40px);
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    // background: green;
    flex: 1 1 calc(20% - 20px);
  }

  @media screen and (max-width: 768px) {
    // width: 100%;
    // background: green;
    flex: 1 1 calc(20% - 20px);
  }
`;

const Genres = ({ genres }) => {
  const navigate = useNavigate();

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
        {genres?.slice(0, 10)?.map((genre, i) => (
          <GenreCardWrapper key={i}>
            <GenreCard2
              title={genre}
              onGenreClick={() => {
                console.log("onGenreClick", genre);
                navigate(`/genres?genre=${encodeURIComponent(genre)}`);
              }}
            />
          </GenreCardWrapper>
        ))}
      </GenreList>
    </Container>
  );
};

export default Genres;
