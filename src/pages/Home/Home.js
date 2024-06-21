import React from "react";
import NextXtarCarousel from "../../components/carousel/NextXtarCarousel";
import ContactSection from "./ContactSection";

function Home() {
  return (
    <>
      <NextXtarCarousel />
      <img
        src={require("../../assets/Frame1.png")}
        alt="djf"
        style={{ width: "100%" }}
      />
      <ContactSection />
    </>
  );
}

export default Home;
