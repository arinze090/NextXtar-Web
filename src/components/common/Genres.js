import React from "react";
import styled from "styled-components";

const Container = styled.div`
//   background: green;
  border-radius: 15px;
  padding: 20px;
  width: 90%;

  height: 40vh;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 50vh;
    overflow-y: auto;
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
  flex-wrap: wrap;
  //   gap: 10px;
  justify-content: space-between;
  overflow-y: auto;
  //   height: 100vh;

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

const Genres = () => {
  const genres = [
    { id: 1, name: "African", imageUrl: require("../../assets/1.jpg") },
    { id: 1, name: "African", imageUrl: require("../../assets/3.jpg") },
    { id: 1, name: "African", imageUrl: require("../../assets/2.jpg") },
    { id: 1, name: "African", imageUrl: require("../../assets/2.jpg") },
    { id: 1, name: "African", imageUrl: require("../../assets/2.jpg") },
    { id: 1, name: "African", imageUrl: require("../../assets/2.jpg") },
    { id: 1, name: "African", imageUrl: require("../../assets/2.jpg") },
    { id: 1, name: "African", imageUrl: require("../../assets/2.jpg") },
    { id: 1, name: "African", imageUrl: require("../../assets/2.jpg") },
    // Add more genres here...
  ];

  return (
    <Container>
      <Header>
        <Title>All Genres</Title>
        <SeeAll href="#">See all</SeeAll>
      </Header>
      <GenreList>
        {genres.map((genre) => (
          <GenreItem
            key={genre.id}
            style={{ backgroundImage: `url(${genre.imageUrl})` }}
          >
            {genre.name}
          </GenreItem>
        ))}
      </GenreList>
    </Container>
  );
};

export default Genres;
