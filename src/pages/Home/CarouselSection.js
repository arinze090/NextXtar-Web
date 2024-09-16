import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TransparentBtn from "../../components/form/TransparentBtn";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  //   max-width: 1200px;
  margin: auto;
  // padding-top: 3rem;
  height: 700px;
  // margin-bottom: 20px;
  // background: green;

  @media (max-width: 768px) {
    height: 350px;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
  }

  .carousel-slide {
    position: relative;
  }

  img {
    width: 100%;
    height: 700px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 350px;
    }
  }

  .carousel-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    color: white;
    width: 100%;

    h1 {
      font-size: 4.5rem;
      margin-bottom: 0px;
      margin-left: 40px;

      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }

    p {
      font-size: 1.05rem;
      margin-top: 0px;
      margin-left: 40px;

      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }

    img {
      width: 30%;
      height: 44px;
      margin-right: 10px;
      object-fit: contain;
    }

    .buttons {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 10px;

      a {
        background: #00ff00;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        color: white;
        font-weight: bold;

        &:hover {
          background: #009900;
        }
      }
    }
  }
`;

const CarouselTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 220px;
  font-weight: 800;
`;

const CarouselSubTitle = styled.p`
  margin-bottom: 58px;
  font-size: 32px;

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`;

const Carousel = () => {
  const isSmallScreen = window.innerWidth <= 768;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      src: require("../../assets/landingSlider1.gif"),
      appStoreImage: require("../../assets/AppStore.png"),
      playStoreImage: require("../../assets/PlayStore.png"),
      alt: "Slide 1",
      title: "We are all about The Music",
      description: "Stream and download the music of your favourite artists.",
      appStoreLink: "https://apps.apple.com/us/app/nextxtar/id1544401047",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.nextxtar.app",
    },
    {
      src: require("../../assets/landingSlider2.gif"),
      appStoreImage: require("../../assets/AppStore.png"),
      playStoreImage: require("../../assets/PlayStore.png"),
      alt: "Slide 2",
      title: "Listen to your Favourite artist",
      description:
        "Discover what music is trending & find new talented artist to follow",
      appStoreLink: "https://apps.apple.com/us/app/nextxtar/id1544401047",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.nextxtar.app",
    },
    {
      src: require("../../assets/landingSlider3.gif"),
      appStoreImage: require("../../assets/AppStore.png"),
      playStoreImage: require("../../assets/PlayStore.png"),
      alt: "Slide 3",
      title: "Distribute your songs Globally",
      description:
        "ITunes,Spotify,Deezer, TIDAL, SoundCloud, Spotify,YouTube music etc.",
      appStoreLink: "https://apps.apple.com/us/app/nextxtar/id1544401047",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.nextxtar.app",
    },
  ];

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {slides?.map((cur, i) => (
          <div className="carousel-slide">
            <img src={cur?.src} alt={cur?.alt} />
            <div className="carousel-content">
              <CarouselTitle>{cur?.title}</CarouselTitle>
              <CarouselSubTitle>{cur?.description}</CarouselSubTitle>
              {!isSmallScreen && (
                <TransparentBtn
                  title={"Try for Free"}
                  marginLeft={"40px"}
                  width={"150px"}
                />
              )}
            </div>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
