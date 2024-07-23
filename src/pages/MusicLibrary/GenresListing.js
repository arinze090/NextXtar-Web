import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import FormSelect from "../../components/form/FormSelect";
import SkeletonLoader from "../../components/common/SkeletonLoader";
import MusicCard2 from "../../components/cards/MusicCard2";

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
  //   background: green;
  margin-right: 30px;
`;

function GenresListing() {
  const state = useSelector((state) => state);
  const userToken = state?.user?.userToken;

  const genresListing = state?.discover?.listings?.genres;

  const [currentPlaying, setCurrentPlaying] = useState(null);
  const audioRef = useRef(new Audio());

  const [loading, setLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState();
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

  useEffect(() => {
    if (selectedGenre) {
      getSelectedGenreTracks();
    }
  }, [selectedGenre]);

  return (
    <Container>
      <GenreHeader>
        <h1>{JSON.parse(selectedGenre)}</h1>
        <FormSelect
          options={genresListing}
          onChange={(e) => {
            setSelectedGenre(e.target.value);
          }}
          selectId={"genreList"}
          width={"30%"}
        />
      </GenreHeader>
      {loading && <SkeletonLoader />}

      <MusicCardsContainer>
        {selectedGenreTracks &&
          selectedGenreTracks?.map((cur, i) => (
            <MusicCardWrapper key={i}>
              <MusicCard2
                imageUrl={cur.image}
                imageUrlAlt={cur.label}
                title={cur.track_name}
                artistName={cur.label}
                audioUrl={cur.audio}
                onLikeIconClicked={() => {
                  console.log("liked ckicked");
                }}
                onEllipsisClicked={() => {
                  console.log("ellipsis ckicked");
                }}
                isPlaying={
                  currentPlaying === cur.audio && !audioRef.current.paused
                }
                onPlayPause={() => handlePlayPause(cur.audio)}
              />
            </MusicCardWrapper>
          ))}
      </MusicCardsContainer>
    </Container>
  );
}

export default GenresListing;
