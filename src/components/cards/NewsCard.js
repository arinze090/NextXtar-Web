import React, { useState } from "react";
import styled from "styled-components";
import { stripHTML } from "../../Library/Common";

const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  overflow: hidden;
  width: 100%;
  max-width: 450px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CardHeader = styled.div`
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
  font-size: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CardFooter = styled.div`
  padding: 1rem;
  font-size: 0.875rem;
  color: #777;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  text-decoration: underline;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

function NewsCard({ title, imgSrc, description, date }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => setIsReadMore(!isReadMore);

  const showJustTextFromHTML = stripHTML(description);

  return (
    <CardContainer>
      <CardHeader>{title}</CardHeader>
      <CardImage src={imgSrc} alt={title} />
      <CardContent>
        {isReadMore ? showJustTextFromHTML.slice(0, 100) : showJustTextFromHTML}
        {showJustTextFromHTML.length > 20 && (
          <ReadMoreButton onClick={toggleReadMore}>
            {isReadMore ? "...read more" : "show less"}
          </ReadMoreButton>
        )}
      </CardContent>
      <CardFooter>{date}</CardFooter>
    </CardContainer>
  );
}

export default NewsCard;
