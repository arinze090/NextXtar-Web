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
// Array of random colors
const colors = [
  "#8a4baf",
  "#30AA94",
  "#9CC121",
  "#283EA3",
  "#E8115B",
  "#9768BD",
  "#E02494",
  "#27856A",
  "#1E3264",
  "#1E3264",
];

const images = [genre1, genre2, genre3, genre4, genre5, genre6, genre7, genre8];

const CardContainer = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 10000px) {
    width: 100%;
    height: 400px;
  }

  @media screen and (max-width: 5000px) {
    width: 100%;
    height: 300px;
  }

  @media screen and (max-width: 2000px) {
    width: 95%;
    height: 200px;
  }

  @media screen and (max-width: 1000px) {
    width: 95%;
    height: 180px;
  }

  @media screen and (max-width: 768px) {
    width: 121px;
    height: 121px;
  }
`;

const GenreTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  top: 20px;
  left: 20px;
  margin: 0;
  font-family: Arial, sans-serif;

  @media screen and (max-width: 10000px) {
    font-size: 32px;
  }

  @media screen and (max-width: 2000px) {
    font-size: 22px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 18px;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    font-weight: 600;
  }
`;

const ArtistImage = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: -6px;
  right: -5px;
  transform: rotate(15deg);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 10000px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 5000px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 2000px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: 1000px) {
    width: 55px;
    height: 55px;
  }

  @media screen and (max-width: 768px) {
    width: 51px;
    height: 51px;
  }
`;

const GenreCard2 = ({ title, onGenreClick }) => {
  // Generate random background color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Generate random image
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <CardContainer onClick={onGenreClick} backgroundColor={randomColor}>
      <GenreTitle>{title}</GenreTitle>
      <ArtistImage src={randomImage} alt={`${title} artist`} />
    </CardContainer>
  );
};

export default GenreCard2;
