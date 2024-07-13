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
      <label
        style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}
        htmlFor="country"
      >
        {formTitle}
      </label>
      <select
        id={selectId}
        onChange={onChange}
        style={{
          padding: "0.75rem",
          borderRadius: 5,
          fontSize: "1rem",
          border: "1px solid grey",
        }}
      >
        <option value="">{selectPlaceholder}</option>

        {options?.map((cur, i) => (
          <option key={i} value={cur?.name ? cur?.name : JSON?.stringify(cur)}>
            {cur?.name ? cur?.name : cur?.track_name ? cur?.track_name : cur}
          </option>
        ))}
      </select>
      <ErrorMessage message={errorMessage} />
    </InputContainer>
  );
}

export default FormSelect;
