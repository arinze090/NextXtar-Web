import React, { useState } from "react";
import styled from "styled-components";
import CustomSwitch from "../../components/switches/CustomSwitch";

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

const playlists = [
  {
    title: "Playlist 1",
    description: "Description",
    imgSrc: require("../../assets/singnifySplashLogo.png"),
  },
  {
    title: "Playlist 2",
    description: "Description",
    imgSrc: require("../../assets/singnifySplashLogo.png"),
  },
  {
    title: "Playlist 3",
    description: "Description",
    imgSrc: require("../../assets/singnifySplashLogo.png"),
  },
  {
    title: "Playlist 4",
    description: "Description",
    imgSrc: require("../../assets/singnifySplashLogo.png"),
  },
];

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
    optionTitle: "Downloaded",
  },
];

function PlaylistLibrary() {
  const [activeTab, setActiveTab] = useState(0);

  const updateSwitchData = (value) => {
    setActiveTab(value);
  };

  return (
    <Container>
      <CustomSwitch
        arrayData={musicLibraryData}
        onSelectSwitch={updateSwitchData}
        seletionMode={0}
      />

      <GridContainer>
        {playlists.map((playlist, index) => (
          <PlaylistItem key={index} bgImage={playlist.imgSrc}>
            <PlaylistDiv>
              <PlaylistTitle>{playlist.title}</PlaylistTitle>
              <PlaylistDescription>{playlist.description}</PlaylistDescription>
            </PlaylistDiv>
          </PlaylistItem>
        ))}
      </GridContainer>
    </Container>
  );
}

export default PlaylistLibrary;
