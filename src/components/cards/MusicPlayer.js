import React from "react";
import styled from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa";

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: green;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
//   max-width: 400px;
  margin: auto;

  height: 50vh;
  width: 90%;

  @media screen and (max-width: 768px) {
    width: 90%;
    justify-content: center;
  }
`;

const AlbumArt = styled.img`
  width: 100%;
  border-radius: 15px;

  height: 150px;
  object-fit: cover;
`;

const SongInfo = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const SongTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const SongArtist = styled.h3`
  font-size: 1rem;
  color: grey;
  margin: 0;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  margin: 0 10px;
  color: #4caf50;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    color: grey;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const ProgressBar = styled.input`
  width: 100%;
`;

const Time = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
`;

const MusicPlayer = ({
  imageUrl,
  isPlaying,
  onPlayPause,
  progress,
  duration,
  onSeek,
  title,
  artist,
}) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <PlayerContainer>
      <AlbumArt src={imageUrl} alt={title} />
      <SongInfo>
        <SongTitle>{title}</SongTitle>
        <SongArtist>{artist}</SongArtist>
      </SongInfo>
      <Controls>
        <ControlButton onClick={onPlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </ControlButton>
      </Controls>
      <ProgressBarContainer>
        <ProgressBar
          type="range"
          min="0"
          max={duration}
          value={progress}
          onChange={(e) => onSeek(e.target.value)}
        />
        <Time>
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration - progress)}</span>
        </Time>
      </ProgressBarContainer>
    </PlayerContainer>
  );
};

export default MusicPlayer;
