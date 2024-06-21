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

function FormInput({
  formTitle,
  inputPlaceholder,
  value,
  onChange,
  inputId,
  multiple,
  width,
  type,
  errorMessage,
}) {
  return (
    <InputContainer width={width}>
      <label
        style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}
        htmlFor="referral-code"
      >
        {formTitle}
      </label>

      <input
        type={type}
        id={inputId}
        placeholder={inputPlaceholder}
        value={value}
        onChange={onChange}
        multiple={multiple}
        style={{
          padding: "0.75rem",
          borderRadius: 5,
          fontSize: "1rem",
          border: "1px solid grey",
        }}
      />
      <ErrorMessage message={errorMessage} />
    </InputContainer>
  );
}

export default FormInput;
