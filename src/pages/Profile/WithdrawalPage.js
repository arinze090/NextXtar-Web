import React, { useState, useEffect } from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";
import Modal from "../../components/modal/Modal";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  padding-top: 80px;
`;

const Title = styled.h4`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 3px;
  color: #ccc;
`;

function WithdrawalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      openModal();
    }, 2000);
  }, []);

  return (
    <Container>
      <HeaderTitle
        title={"Withdrawal"}
        // imgSrc={require("../../assets/supatunezLogo.jpeg")}
        imgAlt={"Withdrawal Image"}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Withdraw From Your Royalties"
      >
        <Title>Available Royalty Earnings: $0.0000</Title>
        <Description>
          You need to have at least $100 to withdraw from your available
          royalties.
        </Description>
      </Modal>
    </Container>
  );
}

export default WithdrawalPage;
