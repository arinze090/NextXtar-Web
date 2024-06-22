import React from "react";
import styled from "styled-components";
import NewsCard from "../../components/cards/NewsCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const cardData = [
  {
    title: "Bio section added to the App",
    imgSrc: "path/to/image1.jpg", // Replace with the actual image path
    description:
      "We are excited to announce that we have recently added a plethora of new features to our app that We are excited to announce that we have recently added a plethora of new features to our",
    date: "March 08, 2023 07:51:18 AM",
  },
  {
    title: "Christmas & New Year Break!",
    imgSrc: "path/to/image2.jpg", // Replace with the actual image path
    description:
      "We are excited to announce that we have recently added a plethora of new features to our app that We are excited to announce that we have recently added a plethora of new features to our",
    date: "December 20, 2022 11:41:51 AM",
  },
  {
    title: "Bio section added to the App",
    imgSrc: "path/to/image1.jpg", // Replace with the actual image path
    description:
      "We are excited to announce that we have recently added a plethora of new features to our app that...",
    date: "March 08, 2023 07:51:18 AM",
  },
  {
    title: "Christmas & New Year Break!",
    imgSrc: "path/to/image2.jpg", // Replace with the actual image path
    description:
      "Hello Everyone, Thank you for your faith in NextXtar, we will be working so hard to serve you...",
    date: "December 20, 2022 11:41:51 AM",
  },
];

function News() {
  return (
    <Container>
      {cardData.map((card, index) => (
        <NewsCard
          key={index}
          title={card.title}
          imgSrc={require("../../assets/2.jpg")}
          description={card.description}
          date={card.date}
        />
      ))}
    </Container>
  );
}

export default News;
