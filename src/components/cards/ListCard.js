import React from "react";
import styled from "styled-components";
import { IoMdArrowDropright } from "react-icons/io";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  margin-left: 1rem;
  font-size: 1rem;
  color: ${({ labelColor }) => (labelColor ? labelColor : "#fff")};
`;

const ArrowIcon = styled(IoMdArrowDropright)`
  color: #ccc;
`;

function ListCard({
  icon: Icon,
  label,
  onClick,
  iconColor,
  labelColor,
  showArrow = true,
}) {
  return (
    <ItemContainer onClick={onClick}>
      <IconContainer>
        <Icon size={20} color={iconColor} />
        <Label labelColor={labelColor}>{label}</Label>
      </IconContainer>
      {showArrow && <ArrowIcon size={20} />}
    </ItemContainer>
  );
}

export default ListCard;
