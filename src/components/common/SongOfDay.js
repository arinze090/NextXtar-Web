import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const Container = styled.div`
  background: ${(props) =>
    `url(${props.backgroundImage}) no-repeat center center`};
  background-size: cover;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  color: white;
  justify-content: center;
  align-items: center;
  align-content: center;

  height: 803px;
  width: 90%;
  box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 90%;
    justify-content: center;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 50px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description2 = styled.p`
  margin: 0;
  font-size: 1rem;
  margin-bottom: 50px;
`;

const LikeIcon = styled(FaHeart)`
  color: white;
  font-size: 2rem;
`;

const LikesSection = styled.div`
  flex-direction: row;
  align-content: center;
  align-items: center;
  display: flex;
`;

const SongOfTheDay = ({
  backgroundImage,
  songTitle,
  songDescription,
  songLikes,
}) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <Title>Song of the day</Title>
      <Description>{songTitle} vdgg</Description>
      <Description2>{songDescription} dvrgrg</Description2>
      <LikesSection>
        <LikeIcon /> {songLikes}
      </LikesSection>
    </Container>
  );
};

export default SongOfTheDay;
