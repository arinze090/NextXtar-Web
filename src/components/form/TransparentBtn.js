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
  hoverColor,
}) {
  return (
    <div style={{ marginTop: marginTop }}>
      <TransparentFormBtn
        width={width}
        marginLeft={marginLeft}
        onClick={onClick}
        color={color}
        hoverColor={hoverColor}
      >
        {btnIcon ? btnIcon : null}

        {title}
      </TransparentFormBtn>
    </div>
  );
}

export default TransparentBtn;
