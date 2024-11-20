import React, { useState } from "react";
import styled from "styled-components";
import { truncateText } from "../../Library/Common";
import { FaPlay, FaPause } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import {
  setIsAudioPlaying,
  setIsAudioPlayingData,
} from "../../redux/features/user/userSlice";

const ItemCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  //   height: 300px;
  // width: 225px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  padding: 20px;
  border-radius: 10px;
  background-color: #131313;
  overflow: visible;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 10000px) {
    width: 100%;
    // height: 400px;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 5000px) {
    width: 85%;
    margin-bottom: 0px;
    margin: 10px;
    // background: green;
  }

  @media screen and (max-width: 2000px) {
    width: 80%;
    margin-bottom: 15px;
    margin: 2px;
  }

  @media screen and (max-width: 1440px) {
    width: 80%;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 1024px) {
    width: 141px;
    margin-bottom: 15px;
    padding: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 85%;
    margin-bottom: 10px;
    margin: 0px;
  }

  @media screen and (max-width: 430px) {
    width: 151px;
    height: 200px;
    margin-bottom: 10px;
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
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 10000px) {
    width: 95%;
    height: 90%;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 5000px) {
    width: 95%;
    height: 90%;
  }

  @media screen and (max-width: 2000px) {
    width: 90%;
    height: 80%;
  }

  @media screen and (max-width: 1440px) {
    width: 175px;
    height: 175px;
  }

  @media screen and (max-width: 1024px) {
    width: 141px;
    height: 145px;
    margin-bottom: 0px;
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 1 / 1;
  // height: 171px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  flex-direction: row;
  overflow: visible;
  z-index: 10;

  @media screen and (max-width: 10000px) {
    width: 95%;
    height: 90%;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 5000px) {
    width: 95%;
    height: 90%;
  }

  @media screen and (max-width: 2000px) {
    width: 90%;
    height: 80%;
  }

  @media screen and (max-width: 1440px) {
    width: 90%;
    height: 80%;
  }

  @media screen and (max-width: 1024px) {
    width: 141px;
    height: 145px;
    margin-bottom: 0px;
    // background: green;
  }

  @media screen and (max-width: 768px) {
    width: 121px;
    height: 121px;
    margin-bottom: 0px;
    object-fit: contain;
  }

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
  max-width: 90%;

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
  max-width: 90%;
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

const PlayIcon = styled(FaPlay)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const PauseIcon = styled(FaPause)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

function LandingPageTopTracksCard({
  props,
  imageUrl,
  imageUrlAlt,
  title,
  artistName,
}) {
  const isSmallScreen = window.innerWidth <= 1024;

  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const isAudioPlayingData = state?.user?.isAudioPlayingData;
  const isAudioPlaying = state?.user?.isAudioPlaying;

  const onPlayClicked = (selectedTrack) => {
    console.log("selectedTrack", selectedTrack);
    // just send the data to redux
    dispatch(setIsAudioPlaying(true));
    dispatch(setIsAudioPlayingData(selectedTrack));
  };

  const pausedClicked = (selectedTrack) => {
    // just send the data to redux
    dispatch(setIsAudioPlaying(false));
    dispatch(setIsAudioPlayingData(selectedTrack));
  };

  return (
    <ItemCard>
      <ItemImage src={imageUrl} alt={imageUrlAlt} />
      <Overlay className="overlay">
        {isAudioPlaying && isAudioPlayingData?.id === props?.id ? (
          <PauseIcon
            onClick={() => {
              pausedClicked(props);
            }}
          />
        ) : (
          <PlayIcon
            onClick={() => {
              onPlayClicked(props);
            }}
          />
        )}
      </Overlay>
      <ItemDetails>
        {!isSmallScreen ? (
          <ItemName>{truncateText(title, 8)}</ItemName>
        ) : (
          <ItemName>{truncateText(title, 9)}</ItemName>
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
