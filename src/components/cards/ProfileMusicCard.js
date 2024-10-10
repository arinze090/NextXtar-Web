import React, { useRef, useState } from "react";
import styled from "styled-components";
import { CiHeart } from "react-icons/ci";
import { TbHeadphonesFilled } from "react-icons/tb";
import { FaPlay, FaPause } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsAudioPlaying,
  setIsAudioPlayingData,
} from "../../redux/features/user/userSlice";

const Container = styled.div`
  display: flex;
  //   background: black;
  margin-bottom: 20px;
  flex-direction: column;
  margin-top: 20px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  cursor: pointer;
  position: relative;

  &:hover .overlay {
    opacity: 1;
  }
`;

const InsideContainer = styled.div`
  display: flex;
  flex-direction: row;
  //   background: red;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TrackImage = styled.img`
  width: 280px;
  height: 171px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 171px;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const ItemName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemArtist = styled.p`
  font-size: 16px;
  color: grey;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TrackInfo = styled.div`
  display: flex;
  margin-left: 20px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;

const TrackDetails = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: space-between;
`;

const IconsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeadsetIcon = styled(TbHeadphonesFilled)`
  color: black;
  font-size: 2rem;
  cursor: pointer;
`;

const LikeIcon = styled(CiHeart)`
  color: black;
  font-size: 2rem;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 163, 11, 0.8);
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  flex-direction: row;
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

function ProfileMusicCard({ props }) {
  // console.log("propsss", props);
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
    <Container>
      <InsideContainer>
        <TrackImage src={props?.image} alt={props?.base_name} />
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
        <TrackInfo>
          <TrackDetails>
            <ItemName>{props?.track_name}</ItemName>
            <ItemArtist>{props?.artist_name}</ItemArtist>
          </TrackDetails>
          <IconsSection>
            <LikeIcon /> {props?.no_downloads}
            <HeadsetIcon /> {props?.no_plays}
          </IconsSection>
        </TrackInfo>
      </InsideContainer>
      <TrackDetails>
        <ItemName>{props?.track_name}</ItemName>
        <ItemArtist>{props?.artist_name}</ItemArtist>
      </TrackDetails>
    </Container>
  );
}

export default ProfileMusicCard;
