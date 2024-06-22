import React from "react";
import ContactSection from "./ContactSection";
import Carousel from "./CarouselSection";
import DownloadSection from "./DownloadSection";

function Home() {
  return (
    <>
      <Carousel />
      <img
        src={require("../../assets/Frame1.png")}
        alt="Frame1"
        style={{ width: "100%" }}
      />
      <DownloadSection />
      <img
        src={require("../../assets/newsletter.png")}
        alt="newsletter"
        style={{ width: "100%" }}
      />
      <ContactSection />
    </>
  );
}

export default Home;
