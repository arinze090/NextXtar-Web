import React from "react";
import styled from "styled-components";
import TransparentBtn from "../form/TransparentBtn";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  margin-left: 1rem;
  font-size: 1rem;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
`;

function NotificationsCard({ label, onClick }) {
  return (
    <ItemContainer>
      <IconContainer>
        <Label>{label}</Label>
      </IconContainer>
      <TransparentBtn
        color={"black"}
        title={"View"}
        marginTop={"0px"}
        marginLeft={"0px"}
        mobileWidth={"90%"}
        onClick={onClick}
      />
    </ItemContainer>
  );
}

export default NotificationsCard;
