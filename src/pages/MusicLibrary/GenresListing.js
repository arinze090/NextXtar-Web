import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import FormSelect from "../../components/form/FormSelect";
import SkeletonLoader from "../../components/common/SkeletonLoader";
import MusicCard2 from "../../components/cards/MusicCard2";
import { truncateText } from "../../Library/Common";

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
  //   background: green;
  margin-right: 30px;
`;

const GenreList = styled.div`
  display: flex;
  // flex-wrap: wrap;
  //   gap: 10px;
  // justify-content: space-between;
  // overflow-y: auto;
  // background: red;

  height: auto;
  flex-direction: row;
  overflow-x: auto;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-y: auto;
    justify-content: space-between;
    align-items: center;
    // align-self: center;
    flex-direction: row;
  }
`;

const GenreItem = styled.div`
  background: url("url/to/image") no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  color: white;
  text-align: center;
  font-weight: bold;
  height: 5vh;
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

  const genresListing = state?.discover?.listings?.genres;

  const [currentPlaying, setCurrentPlaying] = useState(null);
  const audioRef = useRef(new Audio());

  const [loading, setLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState();
  const [selectedGenreTracks, setSelectedGenreTracks] = useState([]);

  console.log("selectedGenre", selectedGenre);
  console.log("selectedGenreTracks", selectedGenreTracks);

  const isSmallScreen = window.innerWidth <= 768;
  const wordsToUse = isSmallScreen ? 10 : 40;

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const adjustColorBrightness = (color, amount) => {
    let usePound = false;

    if (color[0] === "#") {
      color = color.slice(1);
      usePound = true;
    }

    const num = parseInt(color, 16);
    let r = (num >> 16) + amount;
    let b = ((num >> 8) & 0x00ff) + amount;
    let g = (num & 0x0000ff) + amount;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  };

  const getRandomDarkColor = () => {
    const color = getRandomColor();
    return adjustColorBrightness(color, -50);
  };

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
      <GenreList>
        {genresListing?.map((genre, i) => (
          <GenreItem
            key={i}
            style={{
              backgroundImage: `url(${genre.imageUrl})`,
              backgroundColor: getRandomDarkColor(),
            }}
            onClick={() => {
              setSelectedGenre(JSON?.stringify(genre));
            }}
          >
            {truncateText(genre, wordsToUse)}
          </GenreItem>
        ))}
      </GenreList>

      <GenreHeader>
        <Title>{selectedGenre && JSON?.parse(selectedGenre)}</Title>
        <FormSelect
          options={genresListing}
          onChange={(e) => {
            setSelectedGenre(e.target.value);
          }}
          selectId={"genreList"}
          width={"30%"}
          selectPlaceholder={"Select a Genre"}
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
