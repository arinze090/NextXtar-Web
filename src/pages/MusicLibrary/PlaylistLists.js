import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import FullTableView from "./FullPlaylistTable";
import SimplifiedView from "./SimplifiedPlaylisTable";
import { formatTimestampToDate, getTotalDuration } from "../../Library/Common";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Header = styled.div`
  padding: 20px;
  color: white;
  border-radius: 8px;

  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: left;
  justify-content: center;
  //   align-items: center;
  align-self: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  @media (max-width: 768px) {
    padding: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DateCreated = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const playlistData = [
  {
    title: "Billie Jean",
    artist: "Give Me Your Night",
    album: "Marverick",
    dateAdded: "20 mins ago",
    time: "4:53",
    imgSrc: require("../../assets/1.jpg"),
    likes: 11345,
    reposts: 590,
  },
  {
    title: "Billie99999 Jean",
    artist: "Give Me Your Night",
    album: "Marverick",
    dateAdded: "20 mins ago",
    time: "4:53",
    imgSrc: "path/to/image.jpg",
    likes: 11345,
    reposts: 590,
  },
];

const PlaylistLists = ({ playlist }) => {
  const state = useSelector((state) => state);
  const user = state?.user?.user;

  const userPlaylist = state?.discover?.clickedUserPlaylist;
  //   console.log("userPlaylist", userPlaylist);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const totalDurationOfSongs = getTotalDuration(userPlaylist);

  const dateCreated = formatTimestampToDate(userPlaylist?.time_number);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <ImageContainer>
        <ProfileImage
          src={require("../../assets/playlistImage.png")}
          alt="Playlist"
        />
        <Header>
          <Title>{userPlaylist?.playlist}</Title>
          <Subtitle>
            {userPlaylist?.Info?.length
              ? userPlaylist?.Info?.length +
                " song(s)" +
                " | " +
                totalDurationOfSongs
              : "0 songs | 0mins"}
          </Subtitle>
          <DateCreated>Date Created: {dateCreated}</DateCreated>
        </Header>
      </ImageContainer>

      {windowWidth > 768 ? (
        <FullTableView playlist={userPlaylist?.Info} />
      ) : (
        <SimplifiedView playlist={userPlaylist?.Info} />
      )}
    </Container>
  );
};

export default PlaylistLists;
