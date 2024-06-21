import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import SearchBar from "../search/SearchBar";
import FormButton from "../form/FormButton";
import { MdFileUpload } from "react-icons/md";

const Nav = styled.div`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #fff;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const UploadBtn = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  align-content: center;
  align-items: center;
  padding-right: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>

          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              //   backgroundColor: "red",
              display: "flex",
              width: "100%",
              alignContent: "center",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <SearchBar width={"500px"} />

            <SidebarProfileSection>
              <UploadBtn>
                <FormButton
                  btnIcon={
                    <MdFileUpload
                      style={{ color: "white", marginRight: 7, fontSize: 16 }}
                    />
                  }
                  title={"Upload"}
                  onClick={() => {
                    navigate("/upload");
                  }}
                />
              </UploadBtn>

              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  marginLeft: 20,
                }}
              >
                <img
                  src={require("../../assets/1.jpg")}
                  alt=""
                  style={{
                    borderRadius: 50,
                    width: 40,
                    height: 40,
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    marginLeft: 10,
                  }}
                >
                  <h5
                    style={{
                      margin: 0,
                      color: "black",
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                  >
                    Arinze
                  </h5>
                  <p
                    style={{
                      margin: 0,
                      color: "black",
                      fontSize: 12,
                    }}
                  >
                    Music lover
                  </p>
                </div>
              </div>
            </SidebarProfileSection>
          </div>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <div
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignSelf: "center",
                alignItems: "center",
                display: "flex",
                marginBottom: 20,
              }}
            >
              <img
                src={require("../../assets/nextstarLogo.png")}
                alt=""
                style={{
                  width: "60%",
                  height: "60%",
                }}
              />
            </div>

            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
