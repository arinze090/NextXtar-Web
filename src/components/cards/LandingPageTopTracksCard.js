import React from "react";
import styled from "styled-components";

const ItemCard = styled.div`
  position: relative;
  width: 205px;
  //   height: 280px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  padding: 25px;
  border-radius: 10px;
  background-color: #131313;

  @media screen and (max-width: 768px) {
    width: 171px;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 171px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  color: white;
`;

const ItemArtist = styled.p`
  font-size: 0.9rem;
  color: grey;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #787777;
`;

function LandingPageTopTracksCard({
  imageUrl,
  imageUrlAlt,
  title,
  artistName,
}) {
  return (
    <ItemCard>
      <ItemImage src={imageUrl} alt={imageUrlAlt} />

      <ItemDetails>
        <ItemName>{title}</ItemName>
        <ItemArtist>{artistName}</ItemArtist>
      </ItemDetails>
    </ItemCard>
  );
}

export default LandingPageTopTracksCard;
