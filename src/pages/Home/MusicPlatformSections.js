import React from "react";
import styled from "styled-components";

import YouTube from "react-youtube";
import { Link } from "react-router-dom";

import MusicCard2 from "../../components/cards/MusicCard2";
import { useSelector, useDispatch } from "react-redux";

// Container for the entire section
const SectionContainer = styled.div`
  padding: 20px;
  // background: red;
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

const SeeMoreLink = styled(Link)`
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
  padding-bottom: 4px;
  width: 100%;
  // background: #4caf50;

  // Hide the scrollbar
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 768px) {
    gap: 0px;
  }
`;

const ItemContainer = styled.div`
  flex: 0 0 200px; // Fixed width for each card, adjust as needed
`;

const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px; // Keep the size like YouTube thumbnail
  margin: 15px;
`;

const YouTubeThumbnail = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function MusicPlatformSections({ title, items }) {
  console.log("dsissss", items);
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  return (
    <SectionContainer>
      {items?.filter(
        (cur) =>
          (title === "video_data" && cur?.VideoID) ||
          (cur?.image && cur?.track_name && cur?.label)
      )?.length > 0 && (
        <SectionHeader>
          <div>
            <SectionTitle>
              {title == "video_data" ? "Videos" : title}
            </SectionTitle>
          </div>
          <SeeMoreLink to={`/discover/${title}`}>See more</SeeMoreLink>
        </SectionHeader>
      )}

      <ItemGrid>
        {items?.slice(0, 10)?.map((cur, i) => (
          <ItemContainer key={i}>
            {title == "video_data" && cur?.VideoID ? (
              <VideoCard>
                <YouTubeThumbnail>
                  <YouTube
                    videoId={cur?.VideoID}
                    opts={{
                      height: "180",
                      width: "320",
                      playerVars: { autoplay: 0 },
                    }}
                  />
                </YouTubeThumbnail>
              </VideoCard>
            ) : (
              cur?.image &&
              cur?.track_name &&
              cur?.label && <MusicCard2 key={i} props={cur} />
            )}
          </ItemContainer>
        ))}
      </ItemGrid>
    </SectionContainer>
  );
}

export default MusicPlatformSections;
