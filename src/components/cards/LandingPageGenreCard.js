import React from "react";
import styled from "styled-components";
import { MdOutlineLibraryMusic } from "react-icons/md";

import genre1 from "../../assets/genre1.png";
import genre2 from "../../assets/genre2.png";
import genre3 from "../../assets/genre3.png";
import genre4 from "../../assets/genre4.png";
import genre5 from "../../assets/genre5.png";
import genre6 from "../../assets/genre6.png";
import genre7 from "../../assets/genre7.png";
import genre8 from "../../assets/genre8.png";

const images = [genre1, genre2, genre3, genre4, genre5, genre6, genre7, genre8];

const CardContainer = styled.div`
  width: 220px;
  height: 340px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  background-color: #111;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  position: relative;
  transition: opacity 0.3s ease-in-out;

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay on hover */
  }
`;

const CardDetails = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  text-align: left;
  color: #fff;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

const LandingPageGenreCard = ({ genreName }) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <CardContainer>
      <ImageContainer imageUrl={randomImage} />
      <CardDetails>
        <CardTitle>{genreName}</CardTitle>
        <IconContainer>
          <MdOutlineLibraryMusic size={20} color="white" />
          100+ Songs
        </IconContainer>
      </CardDetails>
    </CardContainer>
  );
};

export default LandingPageGenreCard;
