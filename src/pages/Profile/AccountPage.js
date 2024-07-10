import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaDollarSign, FaPiggyBank, FaLink } from "react-icons/fa";
import {
  IoSettingsOutline,
  IoWalletOutline,
  IoInformationCircle,
  IoNewspaperOutline,
} from "react-icons/io5";
import { MdPeopleAlt, MdContactPhone } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosRemoveCircle } from "react-icons/io";
import { RiShutDownLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";

import HeaderTitle from "../../components/common/HeaderTitle";
import ListCard from "../../components/cards/ListCard";
import { signOutUser } from "../../redux/features/user/userSlice";
import { clearLastFetchTime } from "../../redux/features/discover/discoverSlice";

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
    navigateTo: "/edit-profile",
  },
  {
    icon: FaLink,
    label: "Fan Links",
    navigateTo: "/fanlinks",
  },
  {
    icon: IoNewspaperOutline,
    label: "Press Release",
    navigateTo: "/press-release",
  },
  {
    icon: GrProjects,
    label: "Projects",
    navigateTo: "/projects",
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
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const user = state?.user?.user;

  const handleClick = (navigateTo) => {
    navigate(navigateTo);
  };

  function logout() {
    dispatch(signOutUser());
    dispatch(clearLastFetchTime());
    navigate("/");
  }

  return (
    <Container>
      <HeaderTitle
        title={"Account"}
        imgSrc={user?.Picture}
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
      <ListCard
        icon={RiShutDownLine}
        label={"Log Out"}
        iconColor={"red"}
        labelColor={"red"}
        showArrow={false}
        onClick={() => logout()}
      />
    </Container>
  );
}

export default AccountPage;
