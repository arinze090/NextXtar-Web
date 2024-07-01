import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: url(${require("../../assets/1.jpg")}) no-repeat center center;
  background-size: cover;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  color: white;
  background-color: red;

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

const SongOfTheDay = () => {
  return (
    <Container>
      <Title>Song of the day</Title>
      <Description>Prem Kahani</Description>
      <Description>All mine, Lie again...</Description>
    </Container>
  );
};

export default SongOfTheDay;
