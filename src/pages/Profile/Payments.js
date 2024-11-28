import React from "react";
import styled from "styled-components";
import { FaDollarSign, FaShoppingCart, FaMoneyCheckAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import ListCard from "../../components/cards/ListCard";
import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  padding-top: 80px;
`;

const items = [
  { icon: FaDollarSign, label: "Royalties", navigateTo: "/" },
  { icon: FaMoneyCheckAlt, label: "Withdrawals", navigateTo: "/withdrawal" },
  { icon: FaShoppingCart, label: "Promotion & Services", navigateTo: "/" },
  {
    icon: MdPayment,
    label: "Payment Information",
    navigateTo: "/payment-information",
  },
];

function Payments() {
  const navigate = useNavigate();

  const handleClick = (navigateTo) => {
    navigate(navigateTo);
  };

  return (
    <Container>
      <HeaderTitle
        title={"Payments"}
        imgSrc={require("../../assets/supatunezLogo.jpeg")}
        imgAlt={"Payment Image"}
      />
      {items.map((item, index) => (
        <ListCard
          key={index}
          icon={item.icon}
          label={item.label}
          iconColor={"white"}
          onClick={() => handleClick(item.navigateTo)}
        />
      ))}
    </Container>
  );
}

export default Payments;
