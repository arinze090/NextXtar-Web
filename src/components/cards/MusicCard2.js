import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { FaPlay, FaPause } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { IoHeadsetOutline } from "react-icons/io5";
import { BsDot } from "react-icons/bs";

import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";
import Ellipsis from "../modal/Ellipsis";
import {
  setIsAudioPlaying,
  setIsAudioPlayingData,
} from "../../redux/features/user/userSlice";
import { truncateText } from "../../Library/Common";

const ItemCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
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
    // height: 121px;
    margin-bottom: 10px;
    margin: 0px;
  }

  // @media screen and (max-width: 768px) {
  //   width: 171px;
  //   height: 171px;
  // }

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
  aspect-ratio: 1 / 1;
  border-radius: 5px;
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
  // justify-content: center;
  // align-items: center;
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

const NumberOfPlays = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 10px 0 5px;
  white-space: nowrap;
  color: white;

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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 1 / 1;
  // height: 171px;
  background: rgba(5, 163, 11, 0.8);
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  flex-direction: row;
  overflow: visible;
  z-index: 10;

  @media screen and (max-width: 10000px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 5000px) {
    width: 100%;
  }

  @media screen and (max-width: 2000px) {
    width: 100%;
  }

  @media screen and (max-width: 1440px) {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 430px) {
    width: 151px;
    height: 100%;
  }

  @media screen and (max-width: 325px) {
    width: 131px;
    height: 100%;
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

const LikeIcon = styled(CiHeart)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const EllipsisIcon = styled(IoEllipsisHorizontalSharp)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const SkeletonLoader = styled.div`
  background-color: #e0e0e0;
  border-radius: 5px;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "171px"};
  margin-bottom: 10px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const HeadsetIcon = styled(IoHeadsetOutline)`
  color: white;
  font-size: 16px;
  cursor: pointer;

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
    font-size: 14px;
  }
`;

const PointIcon = styled(BsDot)`
  color: #c60303;
  font-size: 20px;
  cursor: pointer;
`;

const IconsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  align-content: center;
  justify-content: center;
  max-width: 70%;
  // background: blue;
  align-self: center;
  margin: 0 auto;

  @media screen and (max-width: 10000px) {
    max-width: 100%;
  }

  @media screen and (max-width: 5000px) {
    max-width: 90%;
  }

  @media screen and (max-width: 2000px) {
    max-width: 90%;
  }
`;

function MusicCard2({ props, onEllipsisClicked }) {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const user = state?.user?.user;
  const isAudioPlayingData = state?.user?.isAudioPlayingData;
  const isAudioPlaying = state?.user?.isAudioPlaying;

  const [loading, setLoading] = useState(false);

  const [toggleLike, setToggleLike] = useState(false);

  const isSmallScreen = window.innerWidth <= 1024;

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

  if (loading) {
    return (
      <ItemCard>
        <SkeletonLoader />
        <ItemDetails>
          <ItemName>{props?.track_name}</ItemName>
          <ItemArtist>{props?.label}</ItemArtist>
        </ItemDetails>
      </ItemCard>
    );
  }

  return (
    <ItemCard>
      <ItemImage src={props?.image} alt={props?.label} />
      <Overlay className="overlay">
        <LikeIcon
          onClick={() => {
            toggleLikeMusic(props);
          }}
        />
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
        <Ellipsis
          onClick={onEllipsisClicked}
          showLikeSection={0}
          ellipsisColor={"white"}
          playlistItem={props}
          ellipsisFontSize={"2rem"}
        />
      </Overlay>
      <ItemDetails>
        <IconsSection>
          <HeadsetIcon />
          <NumberOfPlays>{props?.no_plays + " "}</NumberOfPlays>
          <PointIcon />

          {!isSmallScreen ? (
            <ItemName>{" " + truncateText(props?.track_name, 8)}</ItemName>
          ) : (
            <ItemName>{" " + truncateText(props?.track_name, 6)}</ItemName>
          )}
        </IconsSection>
        <ItemArtist>{props?.label}</ItemArtist>
      </ItemDetails>
    </ItemCard>
  );
}

export default MusicCard2;
