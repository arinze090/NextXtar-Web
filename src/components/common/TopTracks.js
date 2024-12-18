import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BsDot } from "react-icons/bs";
import { IoHeadsetOutline } from "react-icons/io5";

import { truncateText } from "../../Library/Common";
import { CiHeart } from "react-icons/ci";
import { FaPause, FaPlay, FaEllipsisH } from "react-icons/fa";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";
import {
  setIsAudioPlaying,
  setIsAudioPlayingData,
} from "../../redux/features/user/userSlice";
import Ellipsis from "../modal/Ellipsis";

const Container = styled.div`
  background: black;
  border-radius: 21px;
  padding: 20px;
  width: 100%;
  height: auto;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  // overflow-y: auto;

  // Hide the scrollbar
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    // overflow-y: auto;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: white;
`;

const TrackList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TrackItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #333;
`;

const TrackInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TrackImageContainer = styled.div`
  width: 57px;
  height: 57px;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;

  &:hover .overlay {
    opacity: 1;
  }
`;

const TrackImage = styled.img`
  width: 57px;
  height: 57px;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`;

const ImageOverlayContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const OverlayText = styled.span`
  color: white;
  font-size: 1.5rem;
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
  z-index: 999;
`;

const TrackDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrackName = styled.p`
  margin: 0;
  font-weight: 600;
  color: white;

  @media screen and (max-width: 768px) {
    font-weight: 600;
    font-size: 14px;
  }

  @media screen and (max-width: 325px) {
    font-weight: 500;
    font-size: 12px;
  }
`;

const TrackArtist = styled.p`
  margin: 0;
  color: grey;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 325px) {
    font-size: 12px;
  }
`;

const TrackActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TrackDuration = styled.span`
  margin-right: 10px;
  color: white;
`;

const ActionIcon = styled.span`
  margin-right: 5px;
  cursor: pointer;
  color: white;
`;

const HeadsetIcon = styled(IoHeadsetOutline)`
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const PointIcon = styled(BsDot)`
  color: #c60303;
  font-size: 20px;
  cursor: pointer;
`;

const LikeIcon = styled(CiHeart)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const IconsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TopTracks = ({ topTracksData }) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const user = state?.user?.user;
  const isAudioPlayingData = state?.user?.isAudioPlayingData;
  const isAudioPlaying = state?.user?.isAudioPlaying;

  // Determine the max words based on screen size
  const isSmallScreen = window.innerWidth <= 768;
  const wordsToUse = isSmallScreen ? 10 : 40;

  const [loading, setLoading] = useState(false);

  const [toggleLike, setToggleLike] = useState(false);

  const toggleLikeMusic = async (song) => {
    setToggleLike(!toggleLike);
    console.log("[ressed]");

    const form = new FormData();
    form.append("token", user?.Token);
    form.append("music_id", song?.music_id);
    form.append("type", "");

    try {
      setLoading(true);
      await axios
        .post(`${baseURL}like-music.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("toggleLikeMusic data", res?.data);
            toast.success(`You liked this song: ${res?.data?.music?.Name} 😇`);
          } else {
            console.log("toggleLikeMusic message", res?.data?.status);
            setToggleLike(!toggleLike);
          }
        })
        .catch((err) => {
          console.log("toggleLikeMusic err", err);
          setLoading(false);
          setToggleLike(!toggleLike);
        });
    } catch (error) {
      console.log("toggleLikeMusic error", error);
      setToggleLike(!toggleLike);
    }
  };

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
      <Title>Top Tracks</Title>
      <TrackList>
        {topTracksData?.length &&
          topTracksData?.map((track, i) => (
            <TrackItem key={i}>
              <TrackInfo>
                <TrackImageContainer>
                  <ImageOverlayContainer>
                    <TrackImage src={track?.image} alt={track.name} />
                    <ImageOverlay>
                      {isAudioPlaying &&
                      isAudioPlayingData?.id === track?.id ? (
                        <FaPause
                          onClick={() => {
                            pausedClicked(track);
                          }}
                          style={{ color: "#05a30b" }}
                        />
                      ) : (
                        <FaPlay
                          onClick={() => {
                            onPlayClicked(track);
                          }}
                          style={{ color: "#05a30b" }}
                        />
                      )}
                    </ImageOverlay>
                  </ImageOverlayContainer>
                </TrackImageContainer>
                <TrackDetails>
                  <IconsSection>
                    <HeadsetIcon />
                    <TrackName>{track?.no_plays + " "}</TrackName>
                    <PointIcon />
                    <TrackName>
                      {" " + truncateText(track?.track_name, wordsToUse)}
                    </TrackName>
                  </IconsSection>

                  <TrackArtist>
                    {truncateText(track?.label, wordsToUse)}
                  </TrackArtist>
                </TrackDetails>
              </TrackInfo>
              <TrackActions>
                {!isSmallScreen && (
                  <TrackDuration>{track?.duration}</TrackDuration>
                )}
                {!isSmallScreen && (
                  <ActionIcon>
                    <LikeIcon
                      onClick={() => {
                        toggleLikeMusic(track);
                      }}
                    />
                  </ActionIcon>
                )}
                <ActionIcon>
                  <Ellipsis playlistItem={track} />
                </ActionIcon>
              </TrackActions>
            </TrackItem>
          ))}
      </TrackList>
    </Container>
  );
};

export default TopTracks;
