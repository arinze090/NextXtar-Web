import React from "react";
import styled from "styled-components";
import { truncateText } from "../../Library/Common";

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

// Utility function to generate a random dark color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const adjustColorBrightness = (color, amount) => {
  let usePound = false;

  if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);
  let r = (num >> 16) + amount;
  let b = ((num >> 8) & 0x00ff) + amount;
  let g = (num & 0x0000ff) + amount;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

const getRandomDarkColor = () => {
  const color = getRandomColor();
  return adjustColorBrightness(color, -50);
};

const Genres = ({ genres }) => {
  // Determine the max words based on screen size
  const isSmallScreen = window.innerWidth <= 768;
  const wordsToUse = isSmallScreen ? 10 : 40;

  return (
    <Container>
      <Header>
        <Title>All Genres</Title>
        <SeeAll href="#">See all</SeeAll>
      </Header>
      <GenreList>
        {genres.map((genre, i) => (
          <GenreItem
            key={i}
            style={{
              backgroundImage: `url(${genre.imageUrl})`,
              backgroundColor: getRandomDarkColor(),
            }}
          >
            {truncateText(genre, wordsToUse)}
          </GenreItem>
        ))}
      </GenreList>
    </Container>
  );
};

export default Genres;
