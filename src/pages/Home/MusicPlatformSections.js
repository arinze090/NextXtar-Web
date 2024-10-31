import React, { useEffect, useState } from "react";
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
  margin-bottom: 10px;
  width: 100%;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 10000px) {
    width: 45%;
  }

  @media screen and (max-width: 4000px) {
    width: 45%;
  }

  @media screen and (max-width: 3000px) {
    width: 50%;
  }

  @media screen and (max-width: 2000px) {
    width: 85%;
  }

  @media screen and (max-width: 1440px) {
    width: 85%;
  }

  @media screen and (max-width: 1024px) {
    width: 85%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 3px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;

  @media screen and (max-width: 10000px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 5000px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 2000px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SectionSubTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #4caf50; // Green color for sub-title
`;

const SeeMoreLink = styled(Link)`
  font-size: 18px;
  color: #4caf50;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 10000px) {
    font-size: 32px;
  }

  @media screen and (max-width: 5000px) {
    font-size: 30px;
  }

  @media screen and (max-width: 2000px) {
    font-size: 16px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

// Grid for the items
const ItemGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-content: center;
  align-self: center;
  align-items: center;

  flex-direction: row;
  overflow-x: hidden;
  // background: green;
  width: 100%;
  padding: 0px;
  margin: 0 auto;

  @media screen and (max-width: 10000px) {
    width: 45%;
    margin-bottom: 70px;
  }

  @media screen and (max-width: 5000px) {
    width: 45%;
    margin-bottom: 70px;
  }

  @media screen and (max-width: 3000px) {
    width: 50%;
  }

  @media screen and (max-width: 2000px) {
    width: 80%;
    // background: blue;
  }

  @media screen and (max-width: 1440px) {
    width: 85%;
    // background: blue;
  }

  @media screen and (max-width: 1024px) {
    width: 85%;
    // background: red;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    // background: red;
  }

  // Hide the scrollbar
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const ItemContainer = styled.div`
  margin-bottom: 5px;
  margin-right: 5px;
  // background: pink;
  justify-content: center;
  align-items: center;
  display: flex;

  // Adjust width to make the items more compact
  flex: 1 1 calc(20% - 20px);
  // max-width: calc(20% - 10px);

  @media screen and (max-width: 10000px) {
    // width: 100%;
    // background: indigo;
    flex: 1 1 calc(20% - 20px);
  }

  @media screen and (max-width: 3000px) {
    width: 100%;
    // background: blue;
    flex: 1 1 calc(20% - 20px);
  }

  @media screen and (max-width: 2000px) {
    // width: 100%;
    // background: purple;
    flex: 1 1 calc(22% - 40px);
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    // background: green;
    flex: 1 1 calc(20% - 20px);
  }

  @media screen and (max-width: 768px) {
    // width: 100%;
    // background: green;
    flex: 1 1 calc(20% - 20px);
  }
`;

const ItemCardWrapper = styled.div`
  margin-bottom: 5px;
  margin-right: 5px;
  // background: pink;
  justify-content: center;
  align-items: center;
  display: flex;

  // Adjust width to make the items more compact
  flex: 1 1 calc(20% - 20px);
  // max-width: calc(20% - 10px);

  @media screen and (max-width: 10000px) {
    // width: 100%;
    // background: indigo;
    flex: 1 1 calc(20% - 20px);
  }

  @media screen and (max-width: 3000px) {
    width: 100%;
    // background: blue;
    flex: 1 1 calc(20% - 20px);
  }

  @media screen and (max-width: 2000px) {
    // width: 100%;
    // background: purple;
    flex: 1 1 calc(22% - 40px);
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    // background: green;
    flex: 1 1 calc(20% - 20px);
  }

  @media screen and (max-width: 768px) {
    // width: 100%;
    // background: green;
    flex: 1 1 calc(20% - 20px);
  }
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
  // console.log("dsissss", items);
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const [itemsToShow, setItemsToShow] = useState(10);

  // Adjust the number of items based on screen width
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 770 && window.innerWidth <= 1000) {
        setItemsToShow(8); // Show 8 items between 770px and 1024px
      } else {
        setItemsToShow(10); // Default to 10 items
      }
    };

    // Initial check
    updateItemsToShow();

    // Add event listener to adjust on window resize
    window.addEventListener("resize", updateItemsToShow);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  return (
    <SectionContainer>
      {items?.filter(
        (cur) =>
          (title === "video_data" && cur?.VideoID) ||
          (cur?.image && cur?.track_name && cur?.label)
      )?.length > 0 && (
        <SectionHeader>
          <SectionTitle>
            {title == "video_data" ? "Videos" : title}
          </SectionTitle>
          <SeeMoreLink to={`/discover/${title}`}>See more</SeeMoreLink>
        </SectionHeader>
      )}

      <ItemGrid>
        {items?.slice(0, itemsToShow)?.map((cur, i) => (
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
