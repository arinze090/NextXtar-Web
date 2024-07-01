import React from "react";
import styled from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa";

const ItemCard = styled.div`
  position: relative;
  width: 233px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 150px;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ItemDetails = styled.div`
  padding: 5px;
`;

const ItemName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 10px 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemArtist = styled.p`
  font-size: 0.9rem;
  color: grey;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const PlayIcon = styled(FaPlay)`
  color: red;
  font-size: 2rem;
  cursor: pointer;
`;

const PauseIcon = styled(FaPause)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

function MusicCard({
  imageUrl,
  imageUrlAlt,
  title,
  artistName,
  onPlayPause,
  isPlaying,
}) {
  return (
    <ItemCard>
      <ItemImage src={imageUrl} alt={imageUrlAlt} />
      <Overlay className="overlay" onClick={onPlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Overlay>
      <ItemDetails>
        <ItemName>{title}</ItemName>
        <ItemArtist>{artistName}</ItemArtist>
      </ItemDetails>
    </ItemCard>
  );
}

export default MusicCard;
