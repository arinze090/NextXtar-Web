import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { IoPerson } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import { setClickedPlaylist } from "../../redux/features/discover/discoverSlice";
import SkeletonLoader from "../../components/common/SkeletonLoader";
import ProfileMusicCard from "../../components/cards/ProfileMusicCard";
import ProfileInfoTitle from "../../components/common/ProfileInfoTitle";
import ProfileHeader2 from "../../components/common/ProfileHeader2";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  border-radius: 8px;
  padding-top: 80px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: space-between;
  padding: 20px;
  gap: 20px;
  // background: #003018;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    // width: 100%;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const LeftContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  width: 100%;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    overflow-y: auto;
  }
`;

const SideContainer = styled.div`
  width: 30%;
  height: auto;
  padding: 20px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const AboutDetails = styled.div`
  flex-direction: row;
  display: flex;
  align-content: center;
  align-items: center;
`;

const Title = styled.p`
  color: #003018;
  font-size: 20px;
  font-weight: 700;
`;

const Description = styled.p`
  color: #ccc;
  font-size: 18px;
  font-weight: 500;
  margin-left: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 10px;
  overflow-y: auto;
  max-height: 90vh;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    margin-top: 10px;
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

const FullWidthMessage = styled.p`
  width: 100%;
  text-align: center;
`;

const TrackTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: white;
`;

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const user = state?.user?.user;

  const [activeTab, setActiveTab] = useState(0);

  const [loading, setLoading] = useState(false);

  const [userAlbums, setUserAlbums] = useState();
  const [userTracks, setUserTracks] = useState([]);
  const [userPlaylist, setUserPlaylist] = useState();
  const [userLikes, setUserLikes] = useState([]);

  const updateSwitchData = (value) => {
    setActiveTab(value);
  };

  // State to manage the current set of uploaded tracks
  const [uploadedTracksCurrentPage, setUploadedTracksCurrentPage] = useState(0);

  // Number of items to show per page
  const itemsPerPage = 2;

  // Determine the current visible items based on the page
  const uploadedTrackStartIdx =
    uploadedTracksCurrentPage == 0
      ? uploadedTracksCurrentPage * itemsPerPage
      : uploadedTracksCurrentPage * itemsPerPage - 1;
  const uploadedTrackEndIdx = uploadedTrackStartIdx + itemsPerPage;

  // State to manage the current set of uploaded tracks
  const [likedTracksCurrentPage, setLikedTracksCurrentPage] = useState(0);

  // Calculate the total number of pages
  const totalPages = Math.ceil(userLikes.length / itemsPerPage);
  // console.log("totalPages", totalPages);

  // Determine the current visible items based on the page
  const likedTrackStartIdx =
    likedTracksCurrentPage == 0
      ? likedTracksCurrentPage * itemsPerPage
      : likedTracksCurrentPage * itemsPerPage - 1;
  const likedTrackEndIdx = likedTrackStartIdx + itemsPerPage;

  const currentTracks = userTracks.slice(
    uploadedTrackStartIdx,
    uploadedTrackEndIdx
  );

  // console.log("currentTracks", currentTracks);
  // console.log("likedTrackStartIdx", likedTrackStartIdx);
  // console.log("likedTrackEndIdx", likedTrackEndIdx);

  // Handlers to navigate between pages
  const handleUploadedTrackNext = () => {
    // console.log("press", uploadedTrackEndIdx, uploadedTracksCurrentPage);
    if (uploadedTrackEndIdx < userTracks.length) {
      setUploadedTracksCurrentPage(uploadedTracksCurrentPage + 1);
    }
  };

  const handleUploadedTrackPrevious = () => {
    // console.log("press", uploadedTracksCurrentPage);

    if (uploadedTracksCurrentPage > 0) {
      setUploadedTracksCurrentPage(uploadedTracksCurrentPage - 1);
    }
  };

  const currentLikedTracks = userLikes?.slice(
    likedTrackStartIdx,
    likedTrackEndIdx
  );
  // console.log("currentLikedTracks", currentLikedTracks);

  // Handlers to navigate between pages
  const handleLikedTrackNext = () => {
    // console.log(
    //   "handleLikedTrackNext",
    //   likedTrackEndIdx,
    //   uploadedTracksCurrentPage
    // );
    if (likedTracksCurrentPage < totalPages - 1) {
      setLikedTracksCurrentPage(likedTracksCurrentPage + 1);
    }
  };

  const handleLikedTrackPrevious = () => {
    // console.log("handleLikedTrackPrevious", likedTracksCurrentPage);

    if (likedTracksCurrentPage > 0) {
      setLikedTracksCurrentPage(likedTracksCurrentPage - 1);
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

  return (
    <Container>
      <ProfileHeader2
        fullName={user?.FirstName + " " + user?.LastName}
        imgSrc={user?.Picture}
        isVerified={parseInt(user?.IsVerified)}
      />
      <ProfileContainer>
        <LeftContainer>
          {/* Uploaded Tracks section */}
          <ProfileInfoTitle
            title={"Uploaded Tracks"}
            onRightArrowClick={handleUploadedTrackNext}
            onLeftArrowClick={handleUploadedTrackPrevious}
          />
          {currentTracks?.length ? (
            currentTracks?.map((cur, i) => (
              <ProfileMusicCard key={i} props={cur} />
            ))
          ) : (
            <TrackTitle>You have no Uploaded Track</TrackTitle>
          )}

          {/* Liked Tracks section */}
          <ProfileInfoTitle
            title={"Liked Tracks"}
            onRightArrowClick={handleLikedTrackNext}
            onLeftArrowClick={handleLikedTrackPrevious}
          />
          {currentLikedTracks?.length ? (
            currentLikedTracks?.map((cur, i) => (
              <ProfileMusicCard key={i} props={cur} />
            ))
          ) : (
            <TrackTitle>You have no Liked Track</TrackTitle>
          )}
        </LeftContainer>
        <SideContainer>
          <Title>About</Title>
          <AboutDetails>
            <IoPerson style={{ color: "white" }} />
            <Description>{user?.Gender}</Description>
          </AboutDetails>
          <AboutDetails>
            <MdLocationOn style={{ color: "white" }} />
            <Description>{user?.Country}</Description>
          </AboutDetails>
          <AboutDetails>
            <MdEmail style={{ color: "white" }} />
            <Description>{user?.EmailAddress}</Description>
          </AboutDetails>
          <AboutDetails>
            <IoCallSharp style={{ color: "white" }} />
            <Description>{user?.Phone}</Description>
          </AboutDetails>
          <Title>Socials</Title>
          <div>
            <FaXTwitter
              style={{ fontSize: 30, marginRight: 10, color: "white" }}
            />
            <FaFacebook
              style={{ fontSize: 30, marginRight: 10, color: "white" }}
            />
            <FaWhatsapp
              style={{ fontSize: 30, marginRight: 10, color: "white" }}
            />
            <FaInstagram style={{ fontSize: 30, color: "white" }} />
          </div>
        </SideContainer>
      </ProfileContainer>
    </Container>
  );
}

export default ProfilePage;
