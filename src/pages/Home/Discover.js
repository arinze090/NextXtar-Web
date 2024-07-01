import React from "react";
import styled from "styled-components";
import TopTracks from "../../components/common/TopTracks";
import SongOfTheDay from "../../components/common/SongOfDay";
import Genres from "../../components/common/Genres";
import MusicPlatformSections from "./MusicPlatformSections";
import MusicPlayer from "../../components/cards/MusicPlayer";

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
  return (
    <>
      <Container>
        <TopTracks />
        <SideContainer>
          <SongOfTheDay />
          <MusicPlayer
            artist={playerChart[0].artist}
            imageUrl={playerChart[0].imageUrl}
            title={playerChart[0].title}
          />
          <Genres />
        </SideContainer>
      </Container>
      {sections.map((section, index) => (
        <MusicPlatformSections
          key={index}
          title={section.title}
          subTitle={section.subTitle}
          items={section.items}
        />
      ))}
    </>
  );
}

export default Discover;
