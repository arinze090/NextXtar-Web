import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import nextXtarLogo from "../../assets/nextstarLogo.png";
import FormButton from "../../components/form/FormButton";
import TransparentBtn from "../../components/form/TransparentBtn";

const Navbar = () => {
  const navigate = useNavigate();

  const [scrollNav, setScrollNav] = useState(false);

  const handleRegisterClick = () => {
    navigate("/register");
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
        <Bars />

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
