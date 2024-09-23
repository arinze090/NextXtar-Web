import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { TbHeadphonesFilled, TbPoint } from "react-icons/tb";

import { truncateText } from "../../Library/Common";
import { CiHeart } from "react-icons/ci";
import { FaEllipsisH, FaPlay } from "react-icons/fa";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";

const Container = styled.div`
  // background: red;
  border-radius: 21px;
  padding: 20px;
  width: 100%;
  height: 525px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  // Hide the scrollbar
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 525px;
    overflow-y: auto;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
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
  border-bottom: 1px solid #ddd;
`;

const TrackInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TrackImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
`;

const TrackDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrackName = styled.p`
  margin: 0;
  font-weight: 600;
`;

const TrackArtist = styled.p`
  margin: 0;
  color: grey;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TrackActions = styled.div`
  display: flex;
  align-items: center;
`;

const TrackDuration = styled.span`
  margin-right: 10px;
`;

const ActionIcon = styled.span`
  margin-right: 5px;
  cursor: pointer;
`;

const HeadsetIcon = styled(TbHeadphonesFilled)`
  color: black;
  font-size: 16px;
  cursor: pointer;
`;

const PointIcon = styled(TbPoint)`
  color: black;
  font-size: 10px;
  cursor: pointer;
`;

const IconsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TopTracks = ({ topTracksData }) => {
  const state = useSelector((state) => state);
  const user = state?.user?.user;

  // console.log("topTracksData", topTracksData);

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

  // for the audio playing
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioRef = useRef(new Audio());

  const onPlayClick = (audioUrl) => {
    console.log("currrr", audioUrl?.audio);
    setCurrentPlaying(audioUrl?.audio);

    if (currentPlaying === audioUrl?.audio) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      } else {
        audioRef.current.play();
        setIsAudioPlaying(true);
      }
    } else {
      audioRef.current.pause();
      audioRef.current.src = audioUrl?.audio;
      audioRef.current.play();
      setCurrentPlaying(audioUrl?.audio);
    }
  };

  return (
    <Container>
      <Title>Top Tracks</Title>
      <TrackList>
        {topTracksData?.length &&
          topTracksData?.map((track, i) => (
            <TrackItem key={i}>
              <TrackInfo>
                <TrackImage src={track?.image} alt={track.name} />
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
                <TrackDuration>{track?.duration}</TrackDuration>
                <ActionIcon>
                  <FaPlay onClick={onPlayClick} />
                </ActionIcon>
                {!isSmallScreen && (
                  <ActionIcon>
                    <CiHeart
                      onClick={() => {
                        toggleLikeMusic(track);
                      }}
                    />
                  </ActionIcon>
                )}
                <ActionIcon>
                  <FaEllipsisH />
                </ActionIcon>
              </TrackActions>
            </TrackItem>
          ))}
      </TrackList>
    </Container>
  );
};

export default TopTracks;
