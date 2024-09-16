import React from "react";
import Carousel from "./CarouselSection";
import NewsletterSection from "./NewsletterSection";
import ToptracksLandingSection from "./ToptracksLandingSection";
import GenresLandingPageSection from "./GenresLandingPageSection";

function Home() {
  return (
    <>
      <Carousel />
      <ToptracksLandingSection />
      <GenresLandingPageSection />
      <NewsletterSection />
    </>
  );
}

export default Home;
