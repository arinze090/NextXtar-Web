import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import TopTracks from "../../components/common/TopTracks";
import SongOfTheDay from "../../components/common/SongOfDay";
import Genres from "../../components/common/Genres";
import MusicPlatformSections from "./MusicPlatformSections";
import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import DiscvoverCarousel from "./DiscvoverCarousel";
import { setDiscoverTracks } from "../../redux/features/discover/discoverSlice";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: space-between;
  padding: 20px;
  gap: 20px;
  margin-bottom: 10px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    // width: 100%;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const SideContainer = styled.div`
  width: 50%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
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
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const userToken = state?.user?.userToken;

  const discoverListings = state?.discover?.listings?.listDiscover;

  const discoverTracksFromRedux = state?.discover?.discoverTracks;
  // console.log("discoverTracksFromReduxX", discoverTracksFromRedux);

  const genresListing = state?.discover?.listings?.genres;
  const reduxTopTracks = state?.discover?.topTracks;

  const [loading, setLoading] = useState(false);
  const [songOfTheDayData, setSongOfTheDayData] = useState([]);
  const [carouselTracks, setCarouselTracks] = useState([]);
  const [recentlyUploadedTracks, setRecentlyUploadedTracks] = useState([]);

  // console.log("recentlyUploadedTracks", recentlyUploadedTracks);
  // console.log("discoverTracks", discoverTracks);

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

  const fetchSongsForCarousel = async () => {
    const form = new FormData();
    form.append("token", userToken);
    form.append("primary", "introductions");

    setLoading(true);
    try {
      await axios
        .post(`${baseURL}discover.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("fetchSongsForCarousel res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("fetchSongsForCarousel data", res?.data);

            setCarouselTracks(res?.data?.introductions);
          }
        })
        .catch((err) => {
          console.log("fetchSongsForCarousel err", err);
          setLoading(false);
        });
    } catch (error) {
      console.log("fetchSongsForCarousel error", error);
    }
  };

  const [discoverTrackss, setDiscoverTrackss] = useState([]);
  // console.log("discoverTracksssss", discoverTrackss);

  const fetchDiscoverSongsRecursively = async (index = 0) => {
    // console.log("indexxxx", index);

    if (index >= discoverListings.length) {
      console.log("All platforms fetched::", discoverTrackss);

      // push the pverall data to redux here
      // dispatch(setDiscoverTracks(discoverTrackss));
      setLoading(false);
      return;
    }

    const form = new FormData();
    form.append("token", userToken);
    form.append("type", discoverListings[index]);

    setLoading(true);

    try {
      await axios
        .post(`${baseURL}discover.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          // console.log(
          //   `discover res for ${discoverListings[index]}`,
          //   res?.data?.result
          // );

          if (
            res?.data?.status == 200 &&
            typeof res?.data?.result == "object" &&
            res?.data?.result !== null
          ) {
            setDiscoverTrackss((prevTracks) => ({
              ...prevTracks,
              ...res?.data?.result,
            }));

            // console.log("discoverTrackss", discoverTrackss);

            // Recursive call to process the next platform
            fetchDiscoverSongsRecursively(index + 1);
          } else {
            // Recursive call to process the next platform
            fetchDiscoverSongsRecursively(index + 1);
          }
        });
    } catch (error) {
      console.log(
        `fetchDiscoverSongs error for ${discoverListings[index]}`,
        error
      );

      // Continue fetching next platform even if an error occurs
      fetchDiscoverSongsRecursively(index + 1);
    }
  };

  const fetchRecentlyUploadedTracks = async () => {
    const form = new FormData();
    form.append("token", userToken);
    form.append("type", "most recent");

    setLoading(true);
    try {
      await axios
        .post(`${baseURL}discover.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("fetchRecentlyUploadedTracks res", res);
          setLoading(false);

          setRecentlyUploadedTracks(res?.data?.result);
        })
        .catch((err) => {
          console.log("fetchRecentlyUploadedTracks err", err);
          setLoading(false);
        });
    } catch (error) {
      console.log("fetchRecentlyUploadedTracks error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchDiscoverSongs();
    // fetchTopTracks();

    const fetchData = async () => {
      try {
        await getSongOfTheDay();
        await fetchSongsForCarousel();
        await fetchRecentlyUploadedTracks();
        await fetchDiscoverSongsRecursively();
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors if needed
      }
    };

    let isMounted = true;

    if (isMounted) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <DiscvoverCarousel props={carouselTracks} />
      <Container>
        <TopTracks topTracksData={reduxTopTracks} />
        <SideContainer>
          <SongOfTheDay
            backgroundImage={songOfTheDayData[0]?.parent_image}
            songTitle={songOfTheDayData[0]?.track_name}
            songDescription={songOfTheDayData[0]?.label}
            songLikes={songOfTheDayData[0]?.no_plays}
          />
        </SideContainer>
      </Container>
      <Genres genres={genresListing} />

      {/* Recently Uploaded Tracks section */}
      {recentlyUploadedTracks &&
        Object?.entries(recentlyUploadedTracks)?.map(
          ([name, objectArray], index) => {
            // console.log("insideee ooo", discoverTrackss);
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

      {/* Discover Tracks section */}
      {discoverTrackss &&
        Object?.entries(discoverTrackss)?.map(([name, objectArray], index) => {
          // console.log("insideee ooo", discoverTrackss);
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
        })}
    </>
  );
}

export default Discover;
