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

const images = [genre1, genre2, genre3, genre4, genre5, genre6, genre7, genre8];

const ItemCard = styled.div`
  position: relative;
  width: 171px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 151px;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 171px;
  object-fit: cover;
  border-radius: 5px;
`;

const ItemDetails = styled.div`
  padding: 5px;
`;

const ItemName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 10px 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function GenreCard({ title, onGenreClick }) {
  // Select a random image from the imported images
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <ItemCard onClick={onGenreClick}>
      <ItemImage src={randomImage} alt={title} />
      <ItemDetails>
        <ItemName>{title}</ItemName>
      </ItemDetails>
    </ItemCard>
  );
}

export default GenreCard;
