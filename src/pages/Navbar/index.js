import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  Sidebar,
  Times,
} from "./NavbarElements";
import nextXtarLogo from "../../assets/nextstarLogo.png";
import FormButton from "../../components/form/FormButton";
import TransparentBtn from "../../components/form/TransparentBtn";

const Navbar = () => {
  const navigate = useNavigate();

  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        {isOpen ? (
          <Times onClick={toggleMenu} />
        ) : (
          <Bars onClick={toggleMenu} />
        )}

        <Sidebar isOpen={isOpen}>
          {/* Sidebar content */}
          <img
            src={nextXtarLogo}
            alt="NextXtar-Logo"
            style={{
              width: "100%",
              height: 65,
              objectFit: "contain",
              justifyContent: "center",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          />
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              display: "flex",
              alignItems: "center",
              alignSelf: "center",
              flexDirection: "column",
              padding: 20,
            }}
          >
            <li
              style={{
                marginBottom: 30,
              }}
            >
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <TransparentBtn
                onClick={handleRegisterClick}
                title={"Register"}
                hoverColor={"white"}
                color={"black"}
              />
            </li>
          </ul>
        </Sidebar>

        <NavMenu>
          <NavLink to="/">
            <img
              src={nextXtarLogo}
              alt="NextXtar-Logo"
              style={{ width: 150, height: 65 }}
            />
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavLink to="/login">Login</NavLink>
          <TransparentBtn
            onClick={() => {
              handleRegisterClick();
            }}
            title={"Register"}
            hoverColor={"white"}
          />
          <FormButton width="160px" title={"Discover Music"} />
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
