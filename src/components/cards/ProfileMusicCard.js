import React from "react";
import styled from "styled-components";
import { CiHeart } from "react-icons/ci";
import { TbHeadphonesFilled } from "react-icons/tb";

const Container = styled.div`
  display: flex;
  //   background: black;
  margin-bottom: 20px;
  flex-direction: column;
  margin-top: 20px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const InsideContainer = styled.div`
  display: flex;
  flex-direction: row;
  //   background: red;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TrackImage = styled.img`
  width: 280px;
  height: 171px;
  object-fit: cover;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 171px;
  }
`;

const ItemName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemArtist = styled.p`
  font-size: 16px;
  color: grey;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TrackInfo = styled.div`
  display: flex;
  margin-left: 20px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;

const TrackDetails = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: space-between;
`;

const IconsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeadsetIcon = styled(TbHeadphonesFilled)`
  color: black;
  font-size: 2rem;
  cursor: pointer;
`;

const LikeIcon = styled(CiHeart)`
  color: black;
  font-size: 2rem;
  cursor: pointer;
`;

function ProfileMusicCard({
  imageUrl,
  imageUrlAlt,
  title,
  songDescription,
  artisteName,
  numberOfLikes,
  numberOfListens,
}) {
  return (
    <Container>
      <InsideContainer>
        <TrackImage src={imageUrl} alt={imageUrlAlt} />
        <TrackInfo>
          <TrackDetails>
            <ItemName>{title}</ItemName>
            <ItemArtist>{songDescription}</ItemArtist>
          </TrackDetails>
          <IconsSection>
            <LikeIcon /> {numberOfLikes}
            <HeadsetIcon /> {numberOfListens}
          </IconsSection>
        </TrackInfo>
      </InsideContainer>
      <TrackDetails>
        <ItemName>{title}</ItemName>
        <ItemArtist>{artisteName}</ItemArtist>
      </TrackDetails>
    </Container>
  );
}

export default ProfileMusicCard;
