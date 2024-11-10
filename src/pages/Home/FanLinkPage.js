import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import HeaderTitle from "../../components/common/HeaderTitle";
import FanLinkCard from "../../components/cards/FanLinkCard";
import ImageFormInput from "../../components/form/ImageFormInput";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";
import SkeletonLoader from "../../components/common/SkeletonLoader";
import Modal from "../../components/modal/Modal";
import FormButton from "../../components/form/FormButton";
import { convertToSlug } from "../../Library/Common";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  border-radius: 8px;
`;

const FullWidthMessage = styled.p`
  width: 100%;
  text-align: center;
  color: white;
`;

function FanLinkPage() {
  const state = useSelector((state) => state);

  const user = state?.user?.user;

  const [loading, setLoading] = useState(false);

  const [userTracks, setUserTracks] = useState();
  const [trackFanLink, setTrackFanLink] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getUserTracks = async () => {
    setLoading(true);

    const form = new FormData();
    form.append("token", user?.Token);

    try {
      await axios
        .post(`${baseURL}user-tracks.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          setLoading(false);
          console.log("getUserTracks", res);
          if (res?.data?.status == 200) {
            setUserTracks(res?.data?.tracks);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    } catch (error) {}
  };

  const getTrackFanLink = async (music_id) => {
    setLoading(true);

    const form = new FormData();
    form.append("music_id", music_id);

    try {
      await axios
        .post(`${baseURL}set-fanlink-form.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          setLoading(false);
          console.log("getTrackFanLink", res);

          if (res?.data?.status == 200) {
            setTrackFanLink(res?.data);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    } catch (error) {}
  };

  const setFanLink = async (music_id) => {
    setLoading(true);

    const form = new FormData();
    form.append("music_id", music_id);
    form.append("tags", "");
    form.append("urls", "");

    try {
      await axios
        .post(`${baseURL}set-fanlink.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          setLoading(false);
          console.log("setFanLink", res);
          if (res?.data?.status == 200) {
            closeModal();
            toast.success("FanLinks saved successfully 😇");
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log("setFanLink err", err);
        });
    } catch (error) {
      console.log("setFanLink error", error);
    }
  };

  useEffect(() => {
    getUserTracks();
  }, []);

  // https://singnify.com/link/nicholas-mo-money

  return (
    <Container>
      <HeaderTitle
        title={"FanLink"}
        imgSrc={require("../../assets/gif12.gif")}
        imgAlt={"FanLink Image"}
      />
      {loading && <SkeletonLoader />}
      {userTracks && userTracks?.length ? (
        userTracks?.map((cur, i) => (
          <FanLinkCard
            key={i}
            props={cur}
            btnTitle={"Reset"}
            onBtnClicked={() => {
              openModal();
              getTrackFanLink(cur?.music_id);
            }}
            shareUrl={`https://singnify.com/link/${convertToSlug(
              cur?.label + "-" + cur?.track_name
            )}`}
          />
        ))
      ) : (
        <FullWidthMessage>You don't have any available track</FullWidthMessage>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Fan Link">
        {loading && <p>Loading ...</p>}

        {trackFanLink?.result?.length &&
          trackFanLink?.result?.map((cur, i) => (
            <ImageFormInput
              key={i}
              value={cur?.URL}
              type={"text"}
              width={"100%"}
              formImage={cur?.Logo}
            />
          ))}
        <div
          style={{
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          <FormButton
            title={"Save"}
            marginTop={40}
            marginLeft={"0px"}
            onClick={() => {
              setFanLink(trackFanLink?.music?.ID);
            }}
            loading={loading}
          />
        </div>
      </Modal>
    </Container>
  );
}

export default FanLinkPage;
