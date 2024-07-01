import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import MusicCard from "../../components/cards/MusicCard";

// Container for the entire section
const SectionContainer = styled.div`
  padding: 20px;
`;

// Header for each section
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SectionSubTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #4caf50; // Green color for sub-title
`;

const SeeMoreLink = styled.a`
  font-size: 1rem;
  color: #4caf50; // Green color for "See more"
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// Grid for the items
const ItemGrid = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
  width: 100%;
  background: #4caf50;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4caf50; // Customize the scrollbar color
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #45a049;
  }

  @media screen and (max-width: 768px) {
    gap: 0px;
  }
`;

const ItemContainer = styled.div`
  flex: 0 0 200px; // Fixed width for each card, adjust as needed
`;

function MusicPlatformSections({ title, subTitle, items }) {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const audioRef = useRef(new Audio());

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

  return (
    <SectionContainer>
      <SectionHeader>
        <div>
          <SectionTitle>{title}</SectionTitle>
        </div>
        <SeeMoreLink href="#">See more</SeeMoreLink>
      </SectionHeader>
      <ItemGrid>
        {items.map((cur, i) => (
          <ItemContainer key={i}>
            <MusicCard
              imageUrl={cur.imageUrl}
              imageUrlAlt={cur.imageUrlAlt}
              title={cur.name}
              artistName={cur.artist}
              audioUrl={cur.audio}
              isPlaying={
                currentPlaying === cur.audio && !audioRef.current.paused
              }
              onPlayPause={() => handlePlayPause(cur.audio)}
            />
          </ItemContainer>
        ))}
      </ItemGrid>
    </SectionContainer>
  );
}

export default MusicPlatformSections;
