import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterElements";
import nextXtarLogo from "../../assets/nextstarLogo.png";
import AppStoreLogo from "../../assets/AppStore.png";
import PlayStoreLogo from "../../assets/PlayStore.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box>
      <FooterContainer>
        <Row>
          <Column>
            <FooterLink href="#">
              <img
                src={nextXtarLogo}
                alt="NextXtar-Logo"
                style={{ width: 160, height: 65 }}
              />
            </FooterLink>
            <FooterLink href="#">
              <img
                src={AppStoreLogo}
                alt="NextXtar-Logo"
                style={{ width: 160, height: 65 }}
              />
            </FooterLink>
            <FooterLink href="#">
              <img
                src={PlayStoreLogo}
                alt="NextXtar-Logo"
                style={{ width: 160, height: 65 }}
              />
            </FooterLink>
          </Column>
          <Column>
            <Heading>Help</Heading>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Streaming Platforms</FooterLink>
            <FooterLink href="#">Competitions</FooterLink>
            <FooterLink href="#">Promotions</FooterLink>
            <FooterLink href="#">Terms and Conditions</FooterLink>
          </Column>

          <Column>
            <Heading>Stay up to date</Heading>
            <FooterLink href="#">
              <p style={{ color: "white" }}>
                Stay Informed On How You Can Make a Difference
              </p>
            </FooterLink>
            <p style={{ color: "white" }}>
              Stay Informed On How You Can Make a Difference
            </p>

            <FooterLink href="#">
              <p style={{ color: "white" }}>
                Stay Informed On How You Can Make a Difference
              </p>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
      <h1
        style={{
          color: "#E2E8F0",
          textAlign: "center",
          marginTop: "40px",
          fontSize: 18,
        }}
      >
        &copy; {currentYear} NextXtar. All rights reserved.
      </h1>
    </Box>
  );
};
export default Footer;
