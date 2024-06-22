import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaDollarSign, FaPaypal } from "react-icons/fa";
import { SiWise } from "react-icons/si";
import HeaderTitle from "../../components/common/HeaderTitle";
import NotificationsCard from "../../components/cards/NotificationsCard";
import FormButton from "../../components/form/FormButton";
import Modal from "../../components/modal/Modal";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

const items = [
  {
    icon: FaDollarSign,
    label: "International Payment (Swift)",
    navigateTo: "/international-payment",
  },
  {
    icon: FaPaypal,
    label: "PayPal Payment",
    navigateTo: "/paypal-payment",
  },
  { icon: SiWise, label: "Wise Payment", navigateTo: "/" },
];

function Notifications() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <HeaderTitle
        title={"Notifications"}
        imgSrc={require("../../assets/1.jpg")}
        imgAlt={"Notifications Image"}
      />
      {items.map((item, index) => (
        <NotificationsCard
          key={index}
          label={item.label}
          onClick={() => openModal()}
        />
      ))}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Deliver to all Digital Music Stores within 24 hours"
      >
        <h4>Express Delivery Fee: $12.00</h4>

        <div
          style={{
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          <FormButton title={"Purchase"} marginTop={40} marginLeft={"0px"} />
        </div>
      </Modal>
    </Container>
  );
}

export default Notifications;
