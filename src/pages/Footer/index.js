import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS } from "../../theme/theme";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const FooterContainer = styled.footer`
  background: ${COLORS.footerColor};
  padding: 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  padding: 10px;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    padding: 20px 0;
  }
`;

export const Logo = styled.img`
  width: 150px;
`;

export const AppStoreBadges = styled.div`
  margin-top: 10px;

  a {
    display: inline-block;
    margin-right: 10px;
  }

  img {
    width: 135px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  a {
    color: #fff;
    font-size: 24px;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

export const HelpLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const SubscribeForm = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;

  input {
    padding: 10px;
    border: none;
    border-radius: 4px;
    flex: 1;
    min-width: 200px;
  }

  button {
    padding: 10px;
    background-color: #00ff00; /* Bright green button */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;

    &:hover {
      background-color: #009900; /* Darker green on hover */
    }
  }
`;

export const Copyright = styled.div`
  margin-top: 20px;
  text-align: center;
  width: 100%;
  color: #bbb;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterSection>
        <Link to={"/"}>
          <Logo src={require("../../assets/nextstarLogo.png")} alt="NextXtar" />
        </Link>

        <AppStoreBadges>
          <a href="https://play.google.com/store">
            <img
              src={require("../../assets/PlayStore.png")}
              alt="Google Play"
            />
          </a>
          <a href="https://www.apple.com/app-store/">
            <img src={require("../../assets/AppStore.png")} alt="App Store" />
          </a>
        </AppStoreBadges>
        <SocialIcons>
          <a href="https://www.instagram.com/Singnify/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/Singnify?s=08">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/singnify/">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.youtube.com/channel/UChgNR3asChkPAYs0KKPMi3Q?view_as=subscriber">
            <i className="fab fa-youtube"></i>
          </a>
        </SocialIcons>
      </FooterSection>

      <FooterSection>
        <h3>Help</h3>
        <HelpLinks>
          <li>
            <a href="/faqs">FAQ</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/streaming-platforms">Streaming Platforms</a>
          </li>
          <li>
            <a href="/">Promotions</a>
          </li>
          <li>
            <a href="/">Terms and Conditions</a>
          </li>
        </HelpLinks>
      </FooterSection>

      <FooterSection>
        <h3>Stay up to date</h3>
        <p>Stay Informed On How You Can Make a Difference</p>
        <SubscribeForm>
          <input type="email" placeholder="Your email address" />
          <button type="submit">&gt;</button>
        </SubscribeForm>
      </FooterSection>

      <Copyright>
        © {currentYear} Copyright. NextXtar, All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};
export default Footer;
