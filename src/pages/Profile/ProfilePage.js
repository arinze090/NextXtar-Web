import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoPerson } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import ProfileHeader from "../../components/common/ProfileHeader";
import ProfileSwitch from "../../components/switches/ProfileSwitch";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #dfdada;
  border-radius: 8px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: space-between;
  padding: 20px;
  gap: 20px;
  //   background: #003018;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    // width: 100%;
    align-items: center;
    margin-bottom: 50vh;
  }
`;

const LeftContainer = styled.div`
  background: white;
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

const SideContainer = styled.div`
  width: 50%;
  height: auto;
  padding: 20px;
  background: #fff;
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const AboutDetails = styled.div`
  flex-direction: row;
  display: flex;
  align-content: center;
  align-items: center;
`;

const Title = styled.p`
  color: #003018;
  font-size: 20px;
  font-weight: 700;
`;

const Description = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  margin-left: 10px;
`;

const musicLibraryData = [
  {
    optionTitle: "Playlists",
  },
  {
    optionTitle: "Albums",
  },
  {
    optionTitle: "Tracks",
  },
  {
    optionTitle: "Likes",
  },
  {
    optionTitle: "Downloaded",
  },
];

function ProfilePage() {
  const state = useSelector((state) => state);
  const user = state?.user?.user;

  const [activeTab, setActiveTab] = useState(0);

  const updateSwitchData = (value) => {
    setActiveTab(value);
  };

  return (
    <Container>
      <ProfileHeader
        fullName={user?.FirstName + " " + user?.LastName}
        imgSrc={user?.Picture}
        isVerified={parseInt(user?.IsVerified)}
      />
      <ProfileContainer>
        <LeftContainer>
          <ProfileSwitch
            arrayData={musicLibraryData}
            onSelectSwitch={updateSwitchData}
            seletionMode={0}
          />
        </LeftContainer>
        <SideContainer>
          <Title>About</Title>
          <AboutDetails>
            <IoPerson />
            <Description>{user?.Gender}</Description>
          </AboutDetails>
          <AboutDetails>
            <MdLocationOn />
            <Description>{user?.Country}</Description>
          </AboutDetails>
          <AboutDetails>
            <MdEmail />
            <Description>{user?.EmailAddress}</Description>
          </AboutDetails>
          <AboutDetails>
            <IoCallSharp />
            <Description>{user?.Phone}</Description>
          </AboutDetails>
        </SideContainer>
      </ProfileContainer>
    </Container>
  );
}

export default ProfilePage;
