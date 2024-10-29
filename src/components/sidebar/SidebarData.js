import React from "react";

import {
  IoDiscOutline,
  IoMusicalNotesOutline,
  IoSettingsOutline,
  IoPerson,
  IoVideocamOutline,
} from "react-icons/io5";
import { SlPlaylist } from "react-icons/sl";
import { GrProjects } from "react-icons/gr";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaLink, FaBell } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";

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
    title: "Notifications",
    path: "/notifications",
    icon: <FaBell />,
  },
  {
    title: "FanLink",
    path: "/fanlinks",
    icon: <FaLink />,
  },
  {
    title: "Takedown Song or Album",
    path: "/takedown-song",
    icon: <IoIosRemoveCircle />,
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
