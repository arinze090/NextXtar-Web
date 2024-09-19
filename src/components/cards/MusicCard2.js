import React from "react";
import styled from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import Ellipsis from "../modal/Ellipsis";

const ItemCard = styled.div`
  position: relative;
  width: 171px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 171px;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 171px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  background: rgba(5, 163, 11, 0.8);
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  flex-direction: row;
`;

const PlayIcon = styled(FaPlay)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const PauseIcon = styled(FaPause)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const LikeIcon = styled(CiHeart)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const EllipsisIcon = styled(IoEllipsisHorizontalSharp)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const SkeletonLoader = styled.div`
  background-color: #e0e0e0;
  border-radius: 5px;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "171px"};
  margin-bottom: 10px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

function MusicCard2({
  imageUrl,
  imageUrlAlt,
  title,
  artistName,
  onPlayPause,
  isPlaying,
  onLikeIconClicked,
  onEllipsisClicked,
  playlistItem,
  loading,
}) {
  if (loading) {
    return (
      <ItemCard>
        <SkeletonLoader />
        <ItemDetails>
          <ItemName>{title}</ItemName>
          <ItemArtist>{artistName}</ItemArtist>
        </ItemDetails>
      </ItemCard>
    );
  }

  return (
    <ItemCard>
      <ItemImage src={imageUrl} alt={imageUrlAlt} />
      <Overlay className="overlay">
        <LikeIcon onClick={onLikeIconClicked} />
        {isPlaying ? (
          <PauseIcon onClick={onPlayPause} />
        ) : (
          <PlayIcon onClick={onPlayPause} />
        )}
        <Ellipsis
          onClick={onEllipsisClicked}
          showLikeSection={0}
          ellipsisColor={"white"}
          playlistItem={playlistItem}
          ellipsisFontSize={"2rem"}
        />
      </Overlay>
      <ItemDetails>
        <ItemName>{title}</ItemName>
        <ItemArtist>{artistName}</ItemArtist>
      </ItemDetails>
    </ItemCard>
  );
}

export default MusicCard2;
