import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaEllipsisH } from "react-icons/fa";
import EllipsisMenu from "./EllipsisMenu";

const Trigger = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

function Ellipsis({ playlistItem }) {
  const [showMenu, setShowMenu] = useState(false);
  const triggerRef = useRef(null);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (triggerRef.current && !triggerRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Trigger ref={triggerRef}>
      <FaEllipsisH onClick={handleToggleMenu} />
      {showMenu && <EllipsisMenu playlistItem={playlistItem} />}
    </Trigger>
  );
}

export default Ellipsis;
