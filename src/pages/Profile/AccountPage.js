import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaDollarSign, FaPiggyBank } from "react-icons/fa";
import {
  IoSettingsOutline,
  IoWalletOutline,
  IoInformationCircle,
} from "react-icons/io5";
import { MdPeopleAlt, MdContactPhone } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosRemoveCircle } from "react-icons/io";

import HeaderTitle from "../../components/common/HeaderTitle";
import ListCard from "../../components/cards/ListCard";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

const items = [
  {
    icon: FaDollarSign,
    label: "Notification",
    navigateTo: "/notifications",
  },
  {
    icon: IoSettingsOutline,
    label: "Settings",
    navigateTo: "/settings",
  },
  {
    icon: MdPeopleAlt,
    label: "Referral Code",
    navigateTo: "/referral-code",
  },
  {
    icon: IoWalletOutline,
    label: "Payment",
    navigateTo: "/payments",
  },
  {
    icon: FaPiggyBank,
    label: "Bank Account ",
    navigateTo: "/bank-payments",
  },
  {
    icon: TbTruckDelivery,
    label: "Social Media Distribution  +  Express Delivery ",
    navigateTo: "/express-distribution",
  },
  {
    icon: IoIosRemoveCircle,
    label: "Takedown Song or  Album ",
    navigateTo: "/takedown-song",
  },
  {
    icon: MdContactPhone,
    label: "Contact and enquiries  ",
    navigateTo: "/contact-us",
  },
  {
    icon: IoInformationCircle,
    label: "About ",
    navigateTo: "/about",
  },
];

function AccountPage() {
  const navigate = useNavigate();

  const handleClick = (navigateTo) => {
    navigate(navigateTo);
  };

  return (
    <Container>
      <HeaderTitle
        title={"Account"}
        imgSrc={require("../../assets/1.jpg")}
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

export default AccountPage;
