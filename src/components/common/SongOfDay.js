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
  position: relative;

  height: 525px;
  width: 90%;
  box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 90%;
    justify-content: center;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  // z-index: 1;
  border-radius: 15px;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;
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
  font-size: 1.5rem;
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
      <Overlay />
      <Content>
        <Title>Song of the day</Title>
        <Description>{songTitle}</Description>
        <Description2>{songDescription}</Description2>
        <LikesSection>
          <LikeIcon style={{ marginRight: 10 }} /> {songLikes}
        </LikesSection>
      </Content>
    </Container>
  );
};

export default SongOfTheDay;
