import React from "react";

import {
  IoDiscOutline,
  IoMusicalNotesOutline,
  IoSettingsOutline,
  IoSearch,
} from "react-icons/io5";
import { IoPerson, IoVideocamOutline } from "react-icons/io5";
import { SlPlaylist } from "react-icons/sl";
import { GrProjects } from "react-icons/gr";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";

export const SidebarData = [
  // {
  //   title: "Discover",
  //   path: "/discover",
  //   icon: <IoDiscOutline />,
  // },
  // {
  //   title: "Search",
  //   path: "/search",
  //   icon: <IoSearch />,
  // },
  {
    title: "Profile",
    path: "/profile",
    icon: <IoPerson />,
  },
  {
    title: "Settings",
    path: "/edit-profile",
    icon: <IoSettingsOutline />,
  },
  {
    title: "Account",
    path: "/account",
    icon: <MdOutlineAccountCircle />,
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
    title: "Projects",
    path: "/projects",
    icon: <GrProjects />,
  },
  {
    title: "Partnerships",
    path: "/partnership-procedure",
    icon: <FaHandshakeAngle />,
  },
  {
    title: "Face Video",
    path: "/face-video",
    icon: <IoVideocamOutline />,
  },
  {
    title: "Dance  Video",
    path: "/dance-video",
    icon: <IoVideocamOutline />,
  },
];
