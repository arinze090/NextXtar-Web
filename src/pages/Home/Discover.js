import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

import TopTracks from "../../components/common/TopTracks";
import SongOfTheDay from "../../components/common/SongOfDay";
import Genres from "../../components/common/Genres";
import MusicPlatformSections from "./MusicPlatformSections";
import MusicPlayer from "../../components/cards/MusicPlayer";
import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import DiscvoverCarousel from "./DiscvoverCarousel";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: space-between;
  padding: 20px;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    // width: 100%;
    align-items: center;
    margin-bottom: 50vh;
  }
`;

const SideContainer = styled.div`
  width: 50%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 120vh;
  }
`;

const sections = [
  {
    title: "All Digital Platforms",
    subTitle: "Most Stream",
    items: [
      {
        id: 1,
        name: "Need To Know Need To Know Need To Know Need To Know",
        artist: "Doja Cat",
        imageUrl: require("../../assets/1.jpg"),
        audio: "https://singnify.com/assets/music/Oluwaseun--Ayo_voice.mp3",
      },
      {
        id: 2,
        name: "After Hours",
        artist: "The Weeknd",
        imageUrl: "path/to/image2.jpg",
        audio:
          "https://singnify.com/assets/music/Felicit-Kabza-The-Mindless.mp3",
      },
      {
        id: 3,
        name: "HIT MACHINE",
        artist: "Soundwave",
        imageUrl: "path/to/image3.jpg",
        audio:
          "https://singnify.com/assets/music/Felicit-Kabza-The-Mindless.mp3",
      },
      {
        id: 4,
        name: "Red (Taylor's Version)",
        artist: "Ca si",
        imageUrl: "path/to/image4.jpg",
      },
      {
        id: 1,
        name: "Need To Know",
        artist: "Doja Cat",
        imageUrl: "path/to/image1.jpg",
      },
      {
        id: 2,
        name: "After Hours",
        artist: "The Weeknd",
        imageUrl: "path/to/image2.jpg",
      },
      {
        id: 3,
        name: "HIT MACHINE",
        artist: "Soundwave",
        imageUrl: "path/to/image3.jpg",
      },
      {
        id: 4,
        name: "Red (Taylor's Version)",
        artist: "Ca si",
        imageUrl: "path/to/image4.jpg",
      },
      {
        id: 1,
        name: "Need To Know",
        artist: "Doja Cat",
        imageUrl: "path/to/image1.jpg",
      },
      {
        id: 2,
        name: "After Hours",
        artist: "The Weeknd",
        imageUrl: "path/to/image2.jpg",
      },
      {
        id: 3,
        name: "HIT MACHINE",
        artist: "Soundwave",
        imageUrl: "path/to/image3.jpg",
      },
      {
        id: 4,
        name: "Red (Taylor's Version)",
        artist: "Ca si",
        imageUrl: "path/to/image4.jpg",
      },
    ],
  },
  {
    title: "Google Music",
    subTitle: "Most Stream",
    items: [
      {
        id: 5,
        name: "Need To Know",
        artist: "Doja Cat",
        imageUrl: "path/to/image5.jpg",
      },
      {
        id: 6,
        name: "After Hours",
        artist: "The Weeknd",
        imageUrl: "path/to/image6.jpg",
      },
      {
        id: 7,
        name: "HIT MACHINE",
        artist: "Soundwave",
        imageUrl: "path/to/image7.jpg",
      },
      {
        id: 8,
        name: "Red (Taylor's Version)",
        artist: "Ca si",
        imageUrl: "path/to/image8.jpg",
      },
      // Add more items as needed
    ],
  },
  {
    title: "Audible Magic",
    subTitle: "Most Stream",
    items: [
      {
        id: 9,
        name: "Need To Know",
        artist: "Doja Cat",
        imageUrl: "path/to/image9.jpg",
      },
      {
        id: 10,
        name: "After Hours",
        artist: "The Weeknd",
        imageUrl: "path/to/image10.jpg",
      },
      {
        id: 11,
        name: "HIT MACHINE",
        artist: "Soundwave",
        imageUrl: "path/to/image11.jpg",
      },
      {
        id: 12,
        name: "Red (Taylor's Version)",
        artist: "Ca si",
        imageUrl: "path/to/image12.jpg",
      },
      // Add more items as needed
    ],
  },
];

const playerChart = [
  {
    title: "dhhhf",
    artist: "dhfhf",
    imageUrl: require("../../assets/1.jpg"),
  },
];

function Discover() {
  const state = useSelector((state) => state);
  const userToken = state?.user?.userToken;

  const genresListing = state?.discover?.listings?.genres;

  const discoverTracksFromRedux = state?.discover?.discoverTracks;

  const [loading, setLoading] = useState(false);
  const [songOfTheDayData, setSongOfTheDayData] = useState([]);
  const [discoverTracks, setDiscoverTracks] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  console.log("topTracks", topTracks);
  console.log("discoverTracks", discoverTracks);

  const getSongOfTheDay = async () => {
    const form = new FormData();
    form.append("token", userToken);

    try {
      await axios
        .post(`${baseURL}song-of-the-day.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("songOfTheDay data", res?.data);
            setSongOfTheDayData(res?.data?.result);
          } else {
            console.log("songOfTheDay message", res?.data?.status);
          }
        })
        .catch((err) => {
          console.log("songOfTheDay err", err);
          setLoading(false);
        });
    } catch (error) {
      console.log("songOfTheDay error", error);
    }
  };

  const fetchDiscoverSongs = async () => {
    const form = new FormData();
    form.append("token", userToken);

    setLoading(true);
    try {
      await axios
        .post(`${baseURL}discover.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("discover res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("fetchDiscoverSongs data", res?.data);

            setDiscoverTracks(res?.data);
          }
        })
        .catch((err) => {
          console.log("fetchDiscoverSongs err", err);
          setLoading(false);
        });
    } catch (error) {
      console.log("fetchDiscoverSongs error", error);
    }
  };

  const fetchTopTracks = async () => {
    const form = new FormData();
    form.append("token", userToken);
    form.append("type", "primary");

    setLoading(true);
    try {
      await axios
        .post(`${baseURL}discover.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("fetchTopTracks res", res);
          setLoading(false);
          console.log("fetchTopTracks data", res?.data?.result);

          setTopTracks(res?.data?.result?.Singnify?.data);
        })
        .catch((err) => {
          console.log("fetchTopTracks err", err);
          setLoading(false);
        });
    } catch (error) {
      console.log("fetchTopTracks error", error);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await getSongOfTheDay();
  //       await fetchDiscoverSongs();
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // Handle errors if needed
  //     }
  //   };

  //   let isMounted = true;
  //   if (isMounted) {
  //     fetchData();
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  useEffect(() => {
    getSongOfTheDay();
    fetchDiscoverSongs();
    fetchTopTracks();
  }, []);

  return (
    <>
      <DiscvoverCarousel props={discoverTracks?.introductions} />

      <Container>
        <TopTracks topTracksData={topTracks} />
        <SideContainer>
          <SongOfTheDay
            backgroundImage={songOfTheDayData[0]?.parent_image}
            songTitle={songOfTheDayData[0]?.artist_name}
            songDescription={songOfTheDayData[0]?.track_name}
          />

          <Genres genres={genresListing} />
        </SideContainer>
      </Container>
      {discoverTracks?.introductions?.length &&
        Object?.entries(discoverTracks?.result)?.map(
          ([name, objectArray], index) => {
            // Check if objectArray is an array before mapping through it
            if (Array.isArray(objectArray)) {
              return (
                <MusicPlatformSections
                  key={index}
                  title={name}
                  subTitle={name}
                  items={objectArray}
                />
              );
            }
          }
        )}
    </>
  );
}

export default Discover;
