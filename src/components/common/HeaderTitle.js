import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 100%;
  height: 216px;
  object-fit: cover;
`;

const TitleOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 2.5rem;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

function HeaderTitle({ title, imgSrc, imgAlt }) {
  return (
    <ImageContainer>
      <Image src={imgSrc} alt={imgAlt} />
      <TitleOverlay>{title}</TitleOverlay>
    </ImageContainer>
  );
}

export default HeaderTitle;
