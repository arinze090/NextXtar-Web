import React, { useState } from "react";
import styled from "styled-components";
import { FaRegCopy } from "react-icons/fa6";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaShareAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import FormButton from "../form/FormButton";
import TransparentBtn from "../form/TransparentBtn";
import {
  shareOnWhatsApp,
  shareOnFacebook,
  shareOnInstagram,
  shareOnTwitter,
} from "../../Library/Common";
import Modal from "../modal/Modal";
import FormInput from "../form/FormInput";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px auto;
  padding: 20px;
  width: 95%;
  //   max-width: 800px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  margin-right: 20px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0px;

    img {
      width: 100px;
      height: 100px;
      margin-bottom: 0px;
    }
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 0px;
    margin-top: 10px;
  }
`;

const Subtitle = styled.h3`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const Link = styled.a`
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  margin-bottom: 20px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

function FanLinkCard({ props, btnTitle, onBtnClicked, editBtnIcon, shareUrl }) {
  //   const shareUrl = "https://nextxtar.com/link/nicholas-mo-money";

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const openShareModal = () => {
    setIsShareModalOpen(true);
  };

  const closeShareModal = () => {
    setIsShareModalOpen(false);
  };

  return (
    <CardContainer>
      <ImageWrapper>
        <img src={props?.image} alt="Cover" />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{props?.track_name}</Title>
        <Subtitle>{props?.label}</Subtitle>
        <Link
          href={`https://nextxtar.com/link/${props?.label}`}
          target="_blank"
        >
          {`https://nextxtar.com/link/${props?.label}`}
        </Link>
        <ButtonGroup>
          <FormButton
            title={btnTitle}
            marginLeft={"0"}
            marginTop={"0"}
            onClick={onBtnClicked}
            btnIcon={editBtnIcon}
          />
          <TransparentBtn
            btnIcon={<FaShareAlt />}
            title={"Share"}
            onClick={openShareModal}
            color={"black"}
          />
        </ButtonGroup>
      </ContentWrapper>

      <Modal isOpen={isShareModalOpen} onClose={closeShareModal} title="Share">
        <SocialButtons>
          <FaWhatsapp onClick={() => shareOnWhatsApp(shareUrl)} />
          <FaFacebook onClick={() => shareOnFacebook(shareUrl)} />
          <FaInstagram onClick={() => shareOnInstagram(shareUrl)} />
          <FaXTwitter
            onClick={() => shareOnTwitter(shareUrl, "Check this out!")}
          />
        </SocialButtons>
        <FormInput type={"text"} value={shareUrl} />
        <FormButton btnIcon={<FaRegCopy />} title={"Copy"} marginTop={"10px"} />
      </Modal>
    </CardContainer>
  );
}

export default FanLinkCard;
