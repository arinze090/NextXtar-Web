import React from "react";

import {
  IoDiscOutline,
  IoMusicalNotesOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { SlPlaylist } from "react-icons/sl";
import { GiMicrophone } from "react-icons/gi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";

export const SidebarData = [
  {
    title: "Discover",
    path: "/discover",
    icon: <IoDiscOutline />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <IoPerson />,
  },
  {
    title: "PlayList",
    path: "/playlist",
    icon: <SlPlaylist />,
  },
  {
    title: "Genres",
    path: "/genres",
    icon: <IoMusicalNotesOutline />,
  },
  {
    title: "Albums",
    path: "/playlist",
    icon: <IoDiscOutline />,
  },
  {
    title: "Artists",
    path: "/artists",
    icon: <GiMicrophone />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoSettingsOutline />,
  },
  {
    title: "Account",
    path: "/account",
    icon: <MdOutlineAccountCircle />,
  },
  {
    title: "Partnerships",
    path: "/support",
    icon: <FaHandshakeAngle />,
  },
];
