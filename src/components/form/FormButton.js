import React from "react";
import { FormBtn } from "./FormElements";
import ErrorMessage from "./ErrorMessage";

function FormButton({
  title,
  onClick,
  width,
  marginLeft,
  marginTop,
  loading,
  btnIcon,
  errorMessage,
}) {
  return (
    <div
      style={{
        marginTop: marginTop,
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {errorMessage && (
        <ErrorMessage message={errorMessage} textAlign={"center"} />
      )}
      <FormBtn
        width={width}
        marginLeft={marginLeft}
        onClick={onClick}
        disabled={loading}
      >
        {btnIcon ? btnIcon : null}
        {loading ? "Loading ..." : title}
      </FormBtn>
    </div>
  );
}

export default FormButton;
