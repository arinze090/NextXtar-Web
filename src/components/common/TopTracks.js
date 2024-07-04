import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { truncateText } from "../../Library/Common";

const Container = styled.div`
  // background: red;
  border-radius: 15px;
  padding: 20px;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100vh;
    overflow-y: auto;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const TrackList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TrackItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const TrackInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TrackImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
`;

const TrackDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrackName = styled.p`
  margin: 0;
  font-weight: bold;
`;

const TrackArtist = styled.p`
  margin: 0;
  color: grey;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TrackActions = styled.div`
  display: flex;
  align-items: center;
`;

const TrackDuration = styled.span`
  margin-right: 10px;
`;

const ActionIcon = styled.span`
  margin-right: 5px;
  cursor: pointer;
`;

const TopTracks = ({ topTracksData }) => {
  const state = useSelector((state) => state);
  // const topTracksFromRedux =
  //   state?.discover?.discoverTracks?.result?.["NextXtar "];
  console.log("topTracksData", topTracksData);

  // Determine the max words based on screen size
  const isSmallScreen = window.innerWidth <= 768;
  const wordsToUse = isSmallScreen ? 10 : 40;

  return (
    <Container>
      <Title>Top Tracks</Title>
      <TrackList>
        {topTracksData?.data?.length &&
          topTracksData?.data?.map((track, i) => (
            <TrackItem key={i}>
              <TrackInfo>
                <TrackImage src={track.image} alt={track.name} />
                <TrackDetails>
                  <TrackName>{track.label}</TrackName>
                  <TrackArtist>
                    {truncateText(track.track_name, wordsToUse)}
                  </TrackArtist>
                </TrackDetails>
              </TrackInfo>
              <TrackActions>
                <TrackDuration>{track.duration}</TrackDuration>
                <ActionIcon>❤️</ActionIcon>
                <ActionIcon>⋮</ActionIcon>
              </TrackActions>
            </TrackItem>
          ))}
      </TrackList>
    </Container>
  );
};

export default TopTracks;
