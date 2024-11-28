import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

const RadioPlayer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.radio.co/player/e1f61fc.js";
    script.async = true;

    script.onload = () => {
      console.log("Radio.co script loaded successfully");

      // Example: Adding an event listener if supported by the script
      // Assuming the script exposes a global object like RadioPlayer
      if (window.RadioPlayer) {
        window.RadioPlayer.on("play", () => {
          console.log("Radio is playing");
        });
      }
    };

    script.onerror = (err) => {
      console.error("Error loading the Radio.co script", err);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <Container>
      <div id="radio-player-container"></div>
      <HeaderTitle
        title={"Radio"}
        // imgSrc={require("../../assets/supatunezLogo.jpeg")}
        imgAlt={"Radio Image"}
      />
    </Container>
  );
};

export default RadioPlayer;
