import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import SkeletonLoader from "../../components/common/SkeletonLoader";
import MusicCard2 from "../../components/cards/MusicCard2";

import { useParams } from "react-router-dom";
import { setIsAudioPlayingData } from "../../redux/features/user/userSlice";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

const Title = styled.p`
  color: #003018;
  font-size: 20px;
  font-weight: 700;
`;

const MusicCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  //   background: red;
  justify-content: center;
`;

const MusicCardWrapper = styled.div`
  //   width: 100%;
  margin-bottom: 16px;
  // background: green;
  margin-right: 30px;
`;

function DiscoverCategoryList() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const userToken = state?.user?.userToken;
  const user = state?.user?.user;

  const { category } = useParams();

  const [currentPlaying, setCurrentPlaying] = useState(null);
  const audioRef = useRef(new Audio());

  const [loading, setLoading] = useState(false);
  const [selectedCategoryTracks, setSelectedCategoryTracks] = useState([]);

  //   console.log("selectedCategoryTracks", selectedCategoryTracks);

  const fetchDiscoverCatTracks = async (category) => {
    const form = new FormData();
    form.append("token", userToken);
    form.append(
      "type",
      category == "Recently Uploaded" ? "most recent" : category
    );

    setLoading(true);

    try {
      await axios
        .post(`${baseURL}discover.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("fetchDiscoverCatTracks res", res);
          setLoading(false);

          if (res?.data?.status == 200 && res?.data?.result) {
            setSelectedCategoryTracks(res?.data?.result?.[category]);
            console.log("shdhfhfh", res?.data?.result?.[category]);
          }
        });
    } catch (error) {
      console.log("fetchDiscoverCatTracks error", error);
      setLoading(false);
    }
  };

  const handlePlayPause = (selectedTrack) => {
    console.log("selectedTrack", selectedTrack);
    if (currentPlaying === selectedTrack?.audioUrl) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    } else {
      audioRef.current.pause();
      audioRef.current.src = selectedTrack?.audioUrl;
      audioRef.current.play();
      setCurrentPlaying(selectedTrack?.audioUrl);

      // save the selected track to redux
      dispatch(setIsAudioPlayingData(selectedTrack));
    }
  };

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

  useEffect(() => {
    if (category) {
      fetchDiscoverCatTracks(category);
    }
  }, [category]);

  return (
    <Container>
      <Title>{category}</Title>

      {loading && <SkeletonLoader />}

      <MusicCardsContainer>
        {selectedCategoryTracks &&
          selectedCategoryTracks?.map((cur, i) => (
            <MusicCardWrapper key={i}>
              <MusicCard2 key={i} props={cur} />
            </MusicCardWrapper>
          ))}
      </MusicCardsContainer>
    </Container>
  );
}

export default DiscoverCategoryList;
