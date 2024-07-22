import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  //   max-width: 1200px;
  margin: auto;
  // padding-top: 3rem;
  // height: 30vh;
  // margin-bottom: 20px;

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
    height: 430px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 230px;
    }
  }

  .carousel-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    width: 100%;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 0px;

      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }

    p {
      font-size: 1.25rem;
      margin-top: 0px;

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
  font-family: "Plus Jakarta Sans";
  margin-bottom: 16px;
  font-size: 90px;
  font-weight: 800;
`;

const CarouselSubTitle = styled.p`
  font-family: "Plus Jakarta Sans";
  margin-bottom: 48px;
  font-size: 32px;
  font-weight: 600;
`;

const DownloadIconSection = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  // background-color: red;
  align-self: center;
  align-content: center;
`;

const Carousel = () => {
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
      src: require("../../assets/gif11.gif"),
      appStoreImage: require("../../assets/AppStore.png"),
      playStoreImage: require("../../assets/PlayStore.png"),
      alt: "Slide 1",
      title: "We are all about The Music",
      description: "Stream and download the music of your favourite artists.",
    },
    {
      src: require("../../assets/gif2.gif"),
      appStoreImage: require("../../assets/AppStore.png"),
      playStoreImage: require("../../assets/PlayStore.png"),
      alt: "Slide 2",
      title: "Listen to your Favourite artist",
      description:
        "Discover what music is trending & find new talented artist to follow",
    },
    {
      src: require("../../assets/gif3.gif"),
      appStoreImage: require("../../assets/AppStore.png"),
      playStoreImage: require("../../assets/PlayStore.png"),
      alt: "Slide 3",
      title: "Distribute your songs Globally",
      description:
        "ITunes,Spotify,Deezer, TIDAL, SoundCloud, Spotify,YouTube music etc.",
    },
  ];

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {slides.map((cur, i) => (
          <div className="carousel-slide">
            <img src={cur.src} alt={cur.alt} />
            <div className="carousel-content">
              <CarouselTitle>{cur.title}</CarouselTitle>
              <CarouselSubTitle>{cur.description}</CarouselSubTitle>
              <DownloadIconSection>
                <img
                  src={cur.appStoreImage}
                  alt={cur.alt}
                  style={{
                    width: 135,
                  }}
                />
                <img
                  src={cur.playStoreImage}
                  alt={cur.alt}
                  style={{
                    width: 135,
                  }}
                />
              </DownloadIconSection>
            </div>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
