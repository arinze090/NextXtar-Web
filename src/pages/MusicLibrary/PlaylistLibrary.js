import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CustomSwitch from "../../components/switches/CustomSwitch";
import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import SkeletonLoader from "../../components/common/SkeletonLoader";
import { setClickedPlaylist } from "../../redux/features/discover/discoverSlice";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PlaylistItem = styled.div`
  background: ${(props) => `url(${props.bgImage}) no-repeat center center`};
  background-size: cover;
  color: #fff;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  height: 213px;
`;

const PlaylistDiv = styled.div`
  justify-content: left;
  top: 10.4rem;
  position: relative;
`;

const PlaylistTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: white;
`;

const PlaylistDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: white;
`;

const FullWidthMessage = styled.p`
  width: 100%;
  text-align: center;
`;

const musicLibraryData = [
  {
    optionTitle: "Playlists",
  },
  {
    optionTitle: "Albums",
  },
  {
    optionTitle: "Tracks",
  },
  {
    optionTitle: "Likes",
  },
  {
    optionTitle: "Downloaded",
  },
];

function PlaylistLibrary() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const user = state?.user?.user;

  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState(0);
  const [userAlbums, setUserAlbums] = useState();
  const [userTracks, setUserTracks] = useState();
  const [userPlaylist, setUserPlaylist] = useState();
  const [userLikes, setUserLikes] = useState();

  const updateSwitchData = (value) => {
    setActiveTab(value);
  };

  const getUserAlbums = async () => {
    setLoading(true);

    const form = new FormData();
    form.append("token", user?.Token);

    try {
      await axios
        .post(`${baseURL}user-albums.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            setUserAlbums(res?.data?.albums);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    } catch (error) {}
  };

  const getUserTracks = async () => {
    setLoading(true);

    const form = new FormData();
    form.append("token", user?.Token);

    try {
      await axios
        .post(`${baseURL}user-tracks.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            setUserTracks(res?.data?.tracks);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    } catch (error) {}
  };

  const getUserPlaylist = async () => {
    setLoading(true);

    const form = new FormData();
    form.append("token", user?.Token);

    try {
      await axios
        .post(`${baseURL}get-user-playlists.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          setLoading(false);

          if (res?.data?.status == 200) {
            setUserPlaylist(res?.data?.result);
          } else {
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    } catch (error) {}
  };

  const getUserLikes = async () => {
    setLoading(true);

    const form = new FormData();
    form.append("token", user?.Token);

    try {
      await axios
        .post(`${baseURL}get-user-likes.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("getUserLikes data", res?.data);
            setUserLikes(res?.data?.result);
          } else {
            console.log("getUserLikes message", res?.data?.status);
          }
        })
        .catch((err) => {
          console.log("getUserLikes err", err);
          setLoading(false);
        });
    } catch (error) {
      console.log("getUserLikes error", error);
    }
  };

  const navigateToSelectedPlaylist = async (playlistName) => {
    console.log("playlistName", playlistName);

    // save the data in redux or localstorage
    dispatch(setClickedPlaylist(playlistName));

    const encodedName = encodeURIComponent(playlistName?.playlist);

    navigate(`/playlist/${encodedName}`);
  };

  useEffect(() => {
    getUserAlbums();
    getUserTracks();
    getUserPlaylist();
    getUserLikes();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <SkeletonLoader />;
    }

    if (activeTab === 0) {
      return userPlaylist?.length ? (
        userPlaylist.map((playlist, index) => (
          <PlaylistItem
            key={index}
            bgImage={require("../../assets/singnifySplashLogo.png")}
            onClick={() => {
              navigateToSelectedPlaylist(playlist);
            }}
          >
            <PlaylistDiv>
              <PlaylistTitle>{playlist?.playlist}</PlaylistTitle>
            </PlaylistDiv>
          </PlaylistItem>
        ))
      ) : (
        <FullWidthMessage>
          You don't have any Playlist in your collection
        </FullWidthMessage>
      );
    } else if (activeTab === 1) {
      return userAlbums?.length ? (
        userAlbums.map((album, index) => (
          <PlaylistItem
            key={index}
            bgImage={require("../../assets/singnifySplashLogo.png")}
          >
            <PlaylistDiv>
              <PlaylistTitle>{album?.playlist}</PlaylistTitle>
            </PlaylistDiv>
          </PlaylistItem>
        ))
      ) : (
        <FullWidthMessage>
          You don't have any Album in your collection
        </FullWidthMessage>
      );
    } else if (activeTab === 2) {
      return userTracks?.length ? (
        userTracks.map((track, index) => (
          <PlaylistItem key={index} bgImage={track?.image}>
            <PlaylistDiv>
              <PlaylistTitle>{track?.track_name}</PlaylistTitle>
            </PlaylistDiv>
          </PlaylistItem>
        ))
      ) : (
        <FullWidthMessage>
          You don't have any Tracks in your collection
        </FullWidthMessage>
      );
    } else if (activeTab === 3) {
      return userLikes?.length ? (
        userLikes.map((likes, index) => (
          <PlaylistItem key={index} bgImage={likes?.image}>
            <PlaylistDiv>
              <PlaylistTitle>{likes?.track_name}</PlaylistTitle>
            </PlaylistDiv>
          </PlaylistItem>
        ))
      ) : (
        <FullWidthMessage>
          You don't have any Liked song in your collection
        </FullWidthMessage>
      );
    }
  };

  return (
    <Container>
      <CustomSwitch
        arrayData={musicLibraryData}
        onSelectSwitch={updateSwitchData}
        seletionMode={0}
      />

      <GridContainer>{renderContent()}</GridContainer>
    </Container>
  );
}

export default PlaylistLibrary;
