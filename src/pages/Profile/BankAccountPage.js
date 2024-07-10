import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaDollarSign, FaPaypal } from "react-icons/fa";
import { SiWise } from "react-icons/si";
import ListCard from "../../components/cards/ListCard";
import HeaderTitle from "../../components/common/HeaderTitle";

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
  { icon: SiWise, label: "Wise Payment", navigateTo: "/wise-payment" },
];

function BankAccountPage() {
  const navigate = useNavigate();

  const handleClick = (navigateTo) => {
    navigate(navigateTo);
  };

  return (
    <Container>
      <HeaderTitle
        title={"Bank Account Information"}
        imgSrc={require("../../assets/singnifySplashLogo.png")}
        imgAlt={"Payment Image"}
      />
      {items.map((item, index) => (
        <ListCard
          key={index}
          icon={item.icon}
          label={item.label}
          onClick={() => handleClick(item.navigateTo)}
        />
      ))}
    </Container>
  );
}

export default BankAccountPage;
