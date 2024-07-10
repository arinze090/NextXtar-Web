import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${(props) =>
    `url(${props.backgroundImage}) no-repeat center center`};
  background-size: cover;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  color: white;
  // background-color: red;

  height: 50vh;
  width: 90%;

  @media screen and (max-width: 768px) {
    width: 90%;
    justify-content: center;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const SongOfTheDay = ({ backgroundImage, songTitle, songDescription }) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <Title>Song of the day</Title>
      <Description>{songTitle}</Description>
      <Description>{songDescription}</Description>
    </Container>
  );
};

export default SongOfTheDay;
