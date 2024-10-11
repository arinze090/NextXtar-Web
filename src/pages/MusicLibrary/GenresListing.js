import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import FormSelect from "../../components/form/FormSelect";
import SkeletonLoader from "../../components/common/SkeletonLoader";
import MusicCard2 from "../../components/cards/MusicCard2";

import genre1 from "../../assets/genre1.png";
import genre2 from "../../assets/genre2.png";
import genre3 from "../../assets/genre3.png";
import genre4 from "../../assets/genre4.png";
import genre5 from "../../assets/genre5.png";
import genre6 from "../../assets/genre6.png";
import genre7 from "../../assets/genre7.png";
import genre8 from "../../assets/genre8.png";
import { useLocation } from "react-router-dom";

const images = [genre1, genre2, genre3, genre4, genre5, genre6, genre7, genre8];

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

const GenreHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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

const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  //   gap: 10px;
  // justify-content: space-between;
  // overflow-x: auto;

  height: auto;
  flex-direction: row;
  overflow-x: none;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    // align-self: center;
  }
`;

const GenreItem = styled.div`
  background: ${(props) =>
    `url(${props.backgroundImage}) no-repeat center center`};
  background-size: cover;
  border-radius: 10px;
  padding: 20px;
  width: 190px;
  height: 45px;
  color: white;
  text-align: center;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  margin-bottom: 20px;
  cursor: pointer;
  margin: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 10px;
    height: 10%;
  }
`;

function GenresListing() {
  const state = useSelector((state) => state);
  const userToken = state?.user?.userToken;
  const user = state?.user?.user;

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const genre = params.get("genre");

  const genresListing = state?.discover?.listings?.genres;

  const [currentPlaying, setCurrentPlaying] = useState(null);
  const audioRef = useRef(new Audio());

  const [loading, setLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(JSON?.stringify(genre));
  const [selectedGenreTracks, setSelectedGenreTracks] = useState([]);

  console.log("selectedGenre", selectedGenre);
  console.log("selectedGenreTracks", selectedGenreTracks);

  const getSelectedGenreTracks = async () => {
    setLoading(true);
    const form = new FormData();
    form.append("token", userToken);
    form.append("type", "All");
    form.append("name", JSON?.parse(selectedGenre));

    try {
      await axios
        .post(`${baseURL}genres.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("getSelectedGenreTracks data", res?.data);
            setSelectedGenreTracks(res?.data?.data);
          } else {
            console.log("getSelectedGenreTracks message", res?.data?.status);
          }
        })
        .catch((err) => {
          console.log("getSelectedGenreTracks err", err);
          setLoading(false);
        });
    } catch (error) {
      console.log("getSelectedGenreTracks error", error);
      setLoading(false);
    }
  };

  const handlePlayPause = (audioUrl) => {
    if (currentPlaying === audioUrl) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    } else {
      audioRef.current.pause();
      audioRef.current.src = audioUrl;
      audioRef.current.play();
      setCurrentPlaying(audioUrl);
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
    if (selectedGenre) {
      getSelectedGenreTracks();
    }
  }, [selectedGenre]);

  return (
    <Container>
      <Title>Genres</Title>

      <GenreList>
        {genresListing?.map((genre, i) => (
          <GenreItem
            key={i}
            backgroundImage={
              images[Math?.floor(Math?.random() * images?.length)]
            }
            onClick={() => {
              setSelectedGenre(JSON?.stringify(genre));
            }}
          >
            {genre}
          </GenreItem>
        ))}
      </GenreList>

      <GenreHeader>
        <Title>{selectedGenre && JSON?.parse(selectedGenre)}</Title>
        <FormSelect
          options={genresListing}
          onChange={(e) => {
            setSelectedGenre(e?.target?.value);
          }}
          selectId={"genre List"}
          width={"30%"}
          selectPlaceholder={"Select a Genre"}
        />
      </GenreHeader>

      {loading && <SkeletonLoader />}

      <MusicCardsContainer>
        {selectedGenreTracks &&
          selectedGenreTracks?.map((cur, i) => (
            <MusicCardWrapper key={i}>
              <MusicCard2 props={cur} key={i} />
            </MusicCardWrapper>
          ))}
      </MusicCardsContainer>
    </Container>
  );
}

export default GenresListing;
