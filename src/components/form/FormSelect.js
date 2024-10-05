import React from "react";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";
import { IoIosArrowDown } from "react-icons/io";

const InputContainer = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-family: "ClashDisplay", sans-serif;
`;

const StyledSelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSelect = styled.select`
  padding: 0.75rem;
  border-radius: 5px;
  font-size: 1rem;
  font-family: "ClashDisplay", sans-serif;
  border: 1px solid grey;
  -webkit-appearance: none; /* Remove default styling on Safari */
  -moz-appearance: none; /* Remove default styling on Firefox */
  appearance: none; /* Remove default styling on other browsers */
  background-image: none; /* Remove default dropdown arrow */
  color: black;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const DropdownArrow = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1rem;
  color: black;
`;

function FormSelect({
  formTitle,
  selectId,
  options,
  selectPlaceholder,
  width,
  onChange,
  errorMessage,
}) {
  return (
    <InputContainer width={width}>
      <StyledLabel htmlFor={selectId}>{formTitle}</StyledLabel>
      <StyledSelectContainer>
        <StyledSelect id={selectId} onChange={onChange}>
          <option value="">{selectPlaceholder}</option>
          {options?.map((cur, i) => (
            <option key={i} value={cur?.name || JSON?.stringify(cur)}>
              {cur?.name || cur?.track_name || cur}
            </option>
          ))}
        </StyledSelect>
        <DropdownArrow>
          <IoIosArrowDown />
        </DropdownArrow>
        {/* Custom arrow */}
      </StyledSelectContainer>
      <ErrorMessage message={errorMessage} />
    </InputContainer>
  );
}

export default FormSelect;
