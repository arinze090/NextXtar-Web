import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { FaDollarSign, FaPaypal } from "react-icons/fa";
import { SiWise } from "react-icons/si";

import HeaderTitle from "../../components/common/HeaderTitle";
import NotificationsCard from "../../components/cards/NotificationsCard";
import FormButton from "../../components/form/FormButton";
import Modal from "../../components/modal/Modal";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";
import SkeletonLoader from "../../components/common/SkeletonLoader";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #000;
  border-radius: 8px;
`;

const AlbumImage = styled.img`
  width: 90%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const AlbumTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 0rem;
  color: white;
`;

const AlbumSubtitle = styled.h3`
  font-size: 0.9rem;
  font-weight: normal;
  color: white;
  margin-bottom: 1rem;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.img`
  width: 40%;
  height: 20%;
`;

const ImageContainer = styled.div`
  justify-content: center;
  display: flex;
  align-content: center;
  align-items: center;
  align-self: center;
  margin-top: 0px;
`;

function Notifications() {
  const state = useSelector((state) => state);
  const user = state?.user?.user;

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationData, setNotificationData] = useState();

  const [modalData, setModalData] = useState();

  const openModal = (clickedData) => {
    setIsModalOpen(true);
    setModalData(clickedData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getUserNotification = async () => {
    setLoading(true);

    const form = new FormData();
    form.append("token", user?.Token);

    try {
      await axios
        .post(`${baseURL}notifications.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          setLoading(false);

          if (res?.data?.status == 200) {
            setNotificationData(res?.data?.notifications);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    } catch (error) {}
  };

  useEffect(() => {
    getUserNotification();
  }, []);

  const NotificationModal = ({ modalData }) => {
    return (
      <Modal isOpen={isModalOpen} onClose={closeModal} title="">
        <ImageContainer>
          <Logo
            src={require("../../assets/NoBgSingnifyLogo.png")}
            alt="SingnifyLogo"
          />
        </ImageContainer>
        <ModalContent>
          <AlbumImage src={modalData?.Image} alt="Album Cover" />
          <AlbumTitle>{modalData?.Title}</AlbumTitle>
          <AlbumSubtitle>{modalData?.Message}</AlbumSubtitle>
          <ModalFooter>
            <FormButton
              title={"Listen"}
              marginTop={0}
              marginLeft={"0px"}
              onClick={closeModal}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  const NotificationInfo = () => {
    return (
      <div>
        {notificationData &&
          notificationData?.map((item, index) => (
            <NotificationsCard
              key={index}
              label={item.Title}
              onClick={() => openModal(item)}
            />
          ))}
      </div>
    );
  };

  return (
    <Container>
      <HeaderTitle
        title={"Notifications"}
        imgSrc={require("../../assets/gif12.gif")}
        imgAlt={"Notifications Image"}
      />
      {loading ? <SkeletonLoader /> : <NotificationInfo />}

      <NotificationModal modalData={modalData} />
    </Container>
  );
}

export default Notifications;
