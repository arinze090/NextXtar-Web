import React, { useState, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

import MusicCard2 from "../../components/cards/MusicCard2";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";
import { useSelector, useDispatch } from "react-redux";
import { setIsAudioPlayingData } from "../../redux/features/user/userSlice";

// Container for the entire section
const SectionContainer = styled.div`
  padding: 20px;
  // background: red;
`;

// Header for each section
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SectionSubTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #4caf50; // Green color for sub-title
`;

const SeeMoreLink = styled(Link)`
  font-size: 1rem;
  color: #4caf50; // Green color for "See more"
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// Grid for the items
const ItemGrid = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 4px;
  width: 100%;
  // background: #4caf50;

  // Hide the scrollbar
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 768px) {
    gap: 0px;
  }
`;

const ItemContainer = styled.div`
  flex: 0 0 200px; // Fixed width for each card, adjust as needed
`;

const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px; // Keep the size like YouTube thumbnail
  margin: 15px;
`;

const YouTubeThumbnail = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function MusicPlatformSections({ title, subTitle, items }) {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const user = state?.user?.user;

  const [currentPlaying, setCurrentPlaying] = useState(null);
  const audioRef = useRef(new Audio());

  const handlePlayPause = (selectedTrack) => {
    console.log("selectedTrack", selectedTrack);
    // if (currentPlaying === selectedTrack?.audioUrl) {
    //   if (!audioRef.current.paused) {
    //     audioRef.current.pause();
    //   } else {
    //     audioRef.current.play();
    //   }
    // } else {
    //   audioRef.current.pause();
    //   audioRef.current.src = selectedTrack?.audioUrl;
    //   audioRef.current.play();
    //   setCurrentPlaying(selectedTrack?.audioUrl);

    //   // save the selected track to redux
    //   dispatch(setIsAudioPlayingData(selectedTrack));
    // }
  };

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

  return (
    <SectionContainer>
      {items?.filter(
        (cur) =>
          (title === "video_data" && cur?.VideoID) ||
          (cur?.image && cur?.track_name && cur?.label)
      )?.length > 0 && (
        <SectionHeader>
          <div>
            <SectionTitle>
              {title == "video_data" ? "Videos" : title}
            </SectionTitle>
          </div>
          <SeeMoreLink to={`/discover/${title}`}>See more</SeeMoreLink>
        </SectionHeader>
      )}

      <ItemGrid>
        {items?.slice(0, 10)?.map((cur, i) => (
          <ItemContainer key={i}>
            {title == "video_data" && cur?.VideoID ? (
              <VideoCard>
                <YouTubeThumbnail>
                  <YouTube
                    videoId={cur?.VideoID}
                    opts={{
                      height: "180",
                      width: "320",
                      playerVars: { autoplay: 0 },
                    }}
                  />
                </YouTubeThumbnail>
              </VideoCard>
            ) : (
              cur?.image &&
              cur?.track_name &&
              cur?.label && (
                <MusicCard2
                  imageUrl={cur?.image}
                  imageUrlAlt={cur?.label}
                  title={cur?.track_name}
                  artistName={cur?.label}
                  audioUrl={cur?.audio}
                  isPlaying={
                    currentPlaying === cur?.audio && !audioRef?.current?.paused
                  }
                  onPlayPause={() => handlePlayPause(cur)}
                  onLikeIconClicked={() => {
                    console.log("like clicked");
                    toggleLikeMusic(cur);
                  }}
                  onEllipsisClicked={() => {
                    console.log("ellipsis clicked");
                  }}
                  loading={loading}
                  numberOfPlays={cur?.no_plays}
                />
              )
            )}
          </ItemContainer>
        ))}
      </ItemGrid>
    </SectionContainer>
  );
}

export default MusicPlatformSections;
