import React from "react";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

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
`;

const StyledSelect = styled.select`
  padding: 0.75rem;
  border-radius: 5px;
  font-size: 1rem;
  border: 1px solid grey;
  -webkit-appearance: none; /* Remove default styling on Safari */
  -moz-appearance: none; /* Remove default styling on Firefox */
  appearance: none; /* Remove default styling on other browsers */
  background-color: white;
  color: black;

  &:focus {
    outline: none;
  }
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
      <StyledSelect id={selectId} onChange={onChange}>
        <option value="">{selectPlaceholder}</option>
        {options?.map((cur, i) => (
          <option key={i} value={cur?.name || JSON?.stringify(cur)}>
            {cur?.name || cur?.track_name || cur}
          </option>
        ))}
      </StyledSelect>
      <ErrorMessage message={errorMessage} />
    </InputContainer>
  );
}

export default FormSelect;
