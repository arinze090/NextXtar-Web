import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineMenu } from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import SearchBar from "../search/SearchBar";
import FormButton from "../form/FormButton";
import { MdFileUpload } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { signOutUser } from "../../redux/features/user/userSlice";
import { clearLastFetchTime } from "../../redux/features/discover/discoverSlice";
import SingnifyLogo from "../../assets/NoBgSingnifyLogo.png";

const Nav = styled.div`
  background: #0b0b0b;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  margin-top: 0px;
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
  background: rgba(0, 0, 0, 0.6);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  overflow-y: auto;
  max-height: 100vh;

  /* Hide scrollbar */
  overflow-y: auto; /* This allows scrolling but hides the scrollbar */

  /* Hide scrollbar for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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

const SidebarNavLinks = styled.div`
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

const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 20px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #000;
    border-left: 4px solid green;
    cursor: pointer;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  height: 20px;
  text-decoration: none;
  font-size: 13px;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid green;
  }

  @media screen and (min-width: 2000px) {
    font-size: 18px;
    padding: 20px;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const HamburgerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 10px;
`;

const navData = [
  {
    title: "Discover",
    path: "/discover",
  },
  {
    title: "Streaming Platforms",
    path: "/streaming-platforms",
  },
  {
    title: "Promotions",
    path: "/promotions",
  },
  {
    title: "Partnerships",
    path: "/partnership-procedure",
  },
];

const HamburgerMenu = ({ toggleSidebar, sidebar }) => (
  <div onClick={toggleSidebar} style={{ cursor: "pointer" }}>
    {sidebar ? (
      <AiIcons.AiOutlineClose size={30} color="white" />
    ) : (
      <AiOutlineMenu size={30} color="white" />
    )}
  </div>
);

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const loggedInUser = state?.user?.user;
  const hiddenUploadPaths = ["/upload-tracks", "/upload-video"];

  function logout() {
    dispatch(signOutUser());
    dispatch(clearLastFetchTime());
    navigate("/");
  }

  const isSmallScreen = window.innerWidth <= 1024;
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the sidebar and if the sidebar is open
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false); // Close sidebar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebar]);

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav>
          <NavIcon to="#">
            <img
              src={SingnifyLogo}
              alt="Singnify-Logo"
              style={{
                width: "100%",
                height: 65,
                objectFit: "contain",
                justifyContent: "center",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginRight: 30,
              }}
            />
          </NavIcon>

          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // backgroundColor: "red",
              display: "flex",
              width: "90%",
              alignContent: "center",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            {!isSmallScreen ? (
              <>
                <SidebarNavLinks>
                  {navData?.map((cur, i) => (
                    <NavLink key={i} to={cur?.path}>
                      {cur?.title}
                    </NavLink>
                  ))}
                  <SearchBar width={"400px"} />
                </SidebarNavLinks>
                <SidebarProfileSection>
                  {!hiddenUploadPaths?.includes(location?.pathname) && (
                    <UploadBtn>
                      <FormButton
                        btnIcon={
                          <MdFileUpload
                            style={{
                              color: "white",
                              marginRight: 7,
                              fontSize: 16,
                            }}
                          />
                        }
                        title={"Upload"}
                        onClick={() => {
                          navigate("/upload");
                        }}
                      />
                    </UploadBtn>
                  )}
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      marginLeft: 20,
                      cursor: "pointer",
                    }}
                    onClick={showSidebar}
                  >
                    <img
                      src={loggedInUser?.Picture}
                      alt="ProfilePicture"
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
                          color: "white",
                          fontSize: 16,
                          fontWeight: "700",
                        }}
                      >
                        {loggedInUser?.Username}
                      </h5>
                      <p
                        style={{
                          margin: 0,
                          color: "white",
                          fontSize: 12,
                        }}
                      >
                        {parseInt(loggedInUser?.IsArtist)
                          ? "Artist"
                          : "Music lover"}
                      </p>
                    </div>
                  </div>
                </SidebarProfileSection>
              </>
            ) : (
              <HamburgerContainer>
                <HamburgerMenu toggleSidebar={showSidebar} sidebar={sidebar} />
              </HamburgerContainer>
            )}
          </div>
        </Nav>
        <SidebarNav sidebar={sidebar} ref={sidebarRef}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose
                style={{ color: "white" }}
                onClick={showSidebar}
              />
            </NavIcon>

            {SidebarData.map((item, index) => {
              return (
                <SubMenu item={item} key={index} closeSidebar={showSidebar} />
              );
            })}
            <SidebarLink to={"/"} onClick={logout}>
              <div
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  // alignSelf: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <RiLogoutBoxLine style={{ color: "white" }} />
                <SidebarLabel>Log Out</SidebarLabel>
              </div>
            </SidebarLink>
            <div
              style={{ marginTop: 50, minHeight: 50, marginBottom: 100 }}
            ></div>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
