import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import HeaderTitle from "../../components/common/HeaderTitle";
import FanLinkCard from "../../components/cards/FanLinkCard";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";
import SkeletonLoader from "../../components/common/SkeletonLoader";
import { convertToSlug } from "../../Library/Common";
import { FaRegEdit } from "react-icons/fa";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  padding-top: 80px;
`;

const FullWidthMessage = styled.p`
  width: 100%;
  text-align: center;
  color: white;
`;

function PressReleasePage() {
  const navigate = useNavigate();

  const state = useSelector((state) => state);

  const user = state?.user?.user;

  const [loading, setLoading] = useState(false);

  const [userTracks, setUserTracks] = useState();
  console.log("userTracks", userTracks);

  const getUserTracks = async () => {
    setLoading(true);

    const form = new FormData();
    form.append("token", user?.Token);

    try {
      await axios
        .post(`${baseURL}user-tracks.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          setLoading(false);

          if (res?.data?.status == 200) {
            setUserTracks(res?.data?.tracks);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    } catch (error) {}
  };

  useEffect(() => {
    getUserTracks();
  }, []);

  return (
    <Container>
      <HeaderTitle
        title={"Press Release"}
        imgSrc={require("../../assets/pressRelease.png")}
        imgAlt={"Press Release Image"}
      />

      {loading && <SkeletonLoader />}

      {userTracks && userTracks?.length ? (
        userTracks?.map((cur, i) => (
          <FanLinkCard
            key={i}
            props={cur}
            btnTitle={"Edit Press Release"}
            editBtnIcon={<FaRegEdit />}
            onBtnClicked={() => {
              navigate("/edit-press-release");
            }}
            shareUrl={`https://singnify.com/press/${convertToSlug(
              cur?.label + "-" + cur?.track_name
            )}`}
          />
        ))
      ) : (
        <FullWidthMessage>You don't have any available track</FullWidthMessage>
      )}
    </Container>
  );
}

export default PressReleasePage;
