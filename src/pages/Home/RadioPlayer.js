import React, { useEffect } from "react";
import styled from "styled-components";

const PlayerContainer = styled.div`
  width: 100%;
  height: 100px; // adjust the height based on your needs
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RadioPlayer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.radio.co/player/e1f61fc.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <PlayerContainer id="radio-player-container">
      {/* This div will be used to mount the radio player */}
    </PlayerContainer>
  );
};

export default RadioPlayer;
