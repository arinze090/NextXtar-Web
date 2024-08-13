import React, { useState, useEffect } from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";
import Modal from "../../components/modal/Modal";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
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
        imgSrc={require("../../assets/singnifySplashLogo.png")}
        imgAlt={"Withdrawal Image"}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Withdraw From Your Royalties"
      >
        <h4>Available Royalty Earnings: $0.0000</h4>
        <p>
          You need to have at least $100 to withdraw from your available
          royalties.
        </p>
      </Modal>
    </Container>
  );
}

export default WithdrawalPage;
