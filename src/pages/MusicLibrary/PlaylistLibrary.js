import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomSwitch from "../../components/switches/CustomSwitch";
import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import SkeletonLoader from "../../components/common/SkeletonLoader";
import { setClickedPlaylist } from "../../redux/features/discover/discoverSlice";
import FormButton from "../../components/form/FormButton";
import FormInput from "../../components/form/FormInput";
import Modal from "../../components/modal/Modal";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  padding-top: 80px;
  height: 100%;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const SwitchSection = styled.div`
  flex-direction: row;
  justify-content: flex-end;
  display: flex;
  margin-bottom: 20px;
  background: #000;
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(0);
  const [playlistName, setPlaylistName] = useState("");
  const [userAlbums, setUserAlbums] = useState();
  const [userTracks, setUserTracks] = useState();
  const [userPlaylist, setUserPlaylist] = useState();
  const [userLikes, setUserLikes] = useState();

  // Error states
  const [formError, setFormError] = useState("");
  const [playlistNameError, setPlaylistNameError] = useState("");

  const updateSwitchData = (value) => {
    setActiveTab(value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createPlaylist = async () => {
    const form = new FormData();
    form.append("token", user?.Token);
    form.append("playlist_name", playlistName);

    if (!playlistName) {
      setPlaylistNameError("Please provide a name");
      setFormError("Please provide a name");
    } else {
      setLoading(true);

      try {
        await axios
          .post(`${baseURL}create-playlist.php?API_KEY=${API_KEY}`, form)
          .then((res) => {
            console.log("res", res);
            setLoading(false);

            if (res?.data?.status == 200) {
              console.log("createPlaylist data", res?.data);
              toast.success(`${playlistName} Playlist created 😇`);
              closeModal();
              navigate("/playlist");
            }
          })
          .catch((err) => {
            console.log("createPlaylist err", err);
            setLoading(false);
          });
      } catch (error) {
        console.log("createPlaylist error", error);
        setLoading(false);
      }
    }
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
        userAlbums?.map((album, index) => (
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
      <SwitchSection>
        <FormButton
          title={"Create Playlist"}
          marginTop={"0px"}
          marginLeft={"0px"}
          onClick={openModal}
          width={"100%"}
        />
      </SwitchSection>
      <CustomSwitch
        arrayData={musicLibraryData}
        onSelectSwitch={updateSwitchData}
        seletionMode={0}
      />

      <GridContainer>{renderContent()}</GridContainer>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add New Playlist">
        <FormInput
          type={"text"}
          formTitle={"Playlist Name"}
          inputPlaceholder={""}
          inputId={"playlist"}
          value={playlistName}
          onChange={(e) => {
            setPlaylistName(e.target.value);
            setFormError("");
            setPlaylistNameError("");
          }}
          errorMessage={playlistNameError}
        />

        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FormButton
            title={"Create Playlist"}
            marginTop={40}
            marginLeft={"0px"}
            errorMessage={formError}
            loading={loading}
            onClick={createPlaylist}
            width={"100%"}
          />
        </div>
      </Modal>
    </Container>
  );
}

export default PlaylistLibrary;
