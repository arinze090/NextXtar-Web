import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { truncateText } from "../../Library/Common";
import FormButton from "../../components/form/FormButton";

const SliderContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 20px;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 95%;
  border-radius: 40px;
  overflow: hidden;
  margin: auto;
  //   padding-top: 3rem;
  // height: 30vh;
  // margin-bottom: 20px;
  background: ${(props) =>
    `url(${
      props.backgroundImage
        ? props.backgroundImage
        : require("../../assets/singnifySplashLogo.png")
    }) no-repeat center center`};

  background-size: cover;
  object-fit: cover;

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

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
  margin: 20px auto;
  width: 95%;
  height: auto;
  position: relative;
  background: ${(props) =>
    `url(${props.backgroundImage}) no-repeat center center`};
  background-size: cover;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 40px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  img {
    width: 292px;
    height: 309px;
    border-radius: 16px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 192px;
      height: 200px;
      border-radius: 16px;
    }
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 0;
  z-index: 999;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 5px;
  margin-top: 0px;
  color: white;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  color: #555;
  margin-bottom: 1em;
  color: white;
  margin-top: 0px;
`;

const Description = styled.p`
  color: #fff;
  line-height: 1.6;
  margin-bottom: 1.5em;
  font-size: 18px;

  @media (max-width: 768px) {
    text-align: left;
    line-height: 1.4;
    margin-bottom: 1.5em;
    font-size: 12px;
  }
`;

const MusicCard = ({ music }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Check if it's an internal URL or an external one
    if (music?.url.includes("http")) {
      window.location.href = music?.url; // External URL
    } else {
      navigate(music?.url); // Internal URL
    }
  };

  return (
    <CardContainer>
      <ImageWrapper>
        <img src={music?.image} alt="Cover" />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{music?.middle}</Title>
        <Subtitle>{music?.pressure}</Subtitle>
        <Description>{truncateText(music?.description, 130)}</Description>
        <FormButton
          title={music?.button_name}
          onClick={handleClick}
          marginLeft={"0px"}
        />
      </ContentWrapper>
    </CardContainer>
  );
};

function DiscvoverCarousel({ props }) {
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

  return (
    <SliderContainer>
      <Slider {...settings}>
        {props?.map((cur, i) => (
          <CarouselContainer key={i} backgroundImage={cur?.image}>
            <Overlay />
            <MusicCard music={cur} />
          </CarouselContainer>
        ))}
      </Slider>
    </SliderContainer>
  );
}

export default DiscvoverCarousel;
