import React from "react";
import { TransparentFormBtn } from "./FormElements";

function TransparentBtn({
  title,
  onClick,
  width,
  marginLeft,
  color,
  marginTop,
  btnIcon,
}) {
  return (
    <div style={{ marginTop: marginTop }}>
      <TransparentFormBtn
        width={width}
        marginLeft={marginLeft}
        onClick={onClick}
        color={color}
      >
        {btnIcon ? btnIcon : null}

        {title}
      </TransparentFormBtn>
    </div>
  );
}

export default TransparentBtn;
