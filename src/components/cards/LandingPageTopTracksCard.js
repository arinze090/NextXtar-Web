import React from "react";
import styled from "styled-components";
import { truncateText } from "../../Library/Common";

const ItemCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  //   height: 280px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  padding: 25px;
  border-radius: 10px;
  background-color: #131313;
  overflow: visible;
  margin: 20px;

  @media screen and (max-width: 10000px) {
    width: 100%;
    // height: 400px;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 5000px) {
    width: 100%;
    margin-bottom: 0px;
    margin: 10px;
    // background: green;
  }

  @media screen and (max-width: 2000px) {
    width: 85%;
    margin-bottom: 15px;
    margin: 2px;
    // background: blue;
  }

  @media screen and (max-width: 1440px) {
    width: 90%;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 1024px) {
    width: 141px;
    margin-bottom: 15px;
    margin: 7px;
    // background: blue;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-bottom: 10px;
    margin: 0px;
  }

  @media screen and (max-width: 430px) {
    width: 151px;
    height: 200px;
    margin-bottom: 10px;
    // background: pink;
  }

  @media screen and (max-width: 325px) {
    width: 131px;
    height: 200px;
    margin-bottom: 10px;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  // height: 171px;
  object-fit: cover;
  // aspect-ratio: 1 / 1;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 10000px) {
    width: 100%;
    height: 90%;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 5000px) {
    width: 95%;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 2000px) {
    width: 90%;
  }

  @media screen and (max-width: 1440px) {
    width: 90%;
  }

  @media screen and (max-width: 1024px) {
    width: 85%;
    height: 151px;
    margin-bottom: 15px;
    // background: green;
  }

  @media screen and (max-width: 768px) {
    width: 121px;
    height: 121px;
    margin-bottom: 0px;
    object-fit: contain;
  }

  // @media screen and (max-width: 768px) {
  //   width: 171px;
  //   height: 171px;
  // }

  @media screen and (max-width: 430px) {
    width: 151px;
    height: 70%;
  }
  @media screen and (max-width: 325px) {
    width: 131px;
    height: 70%;
  }
`;

const ItemDetails = styled.div`
  padding: 5px;
`;

const ItemName = styled.p`
  font-size: 21px;
  font-weight: 600;
  margin: 10px 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  color: white;
  max-width: 80%;

  @media screen and (max-width: 10000px) {
    font-size: 22px;
  }

  @media screen and (max-width: 2000px) {
    font-size: 18px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemArtist = styled.p`
  font-size: 21px;
  color: grey;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
  text-align: center;
  margin: 0 auto;

  @media screen and (max-width: 10000px) {
    font-size: 22px;
  }

  @media screen and (max-width: 5000px) {
    font-size: 20px;
  }

  @media screen and (max-width: 2000px) {
    font-size: 16px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

function LandingPageTopTracksCard({
  imageUrl,
  imageUrlAlt,
  title,
  artistName,
}) {
  const isSmallScreen = window.innerWidth <= 1024;

  return (
    <ItemCard>
      <ItemDetails>
        {!isSmallScreen ? (
          <ItemName>{truncateText(title, 8)}</ItemName>
        ) : (
          <ItemName>{truncateText(title, 6)}</ItemName>
        )}
        {!isSmallScreen ? (
          <ItemArtist>{truncateText(artistName, 8)}</ItemArtist>
        ) : (
          <ItemArtist>{truncateText(artistName, 6)}</ItemArtist>
        )}
      </ItemDetails>
    </ItemCard>
  );
}

export default LandingPageTopTracksCard;
