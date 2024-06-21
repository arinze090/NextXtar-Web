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

function FormTextArea({
  formTitle,
  width,
  value,
  onChange,
  row,
  placeholder,
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
      <textarea
        rows={row}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "98%",
          padding: "0.75rem",
          fontSize: "1rem",
          borderColor: "gray",
          borderRadius: "5px",
        }}
      />
      <ErrorMessage message={errorMessage} />
    </InputContainer>
  );
}

export default FormTextArea;
