import React from "react";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";

export const SidebarItems = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    class: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <AiIcons.AiFillMessage />,
    class: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    class: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <AiIcons.AiFillAppstore />,
    class: "nav-text",
  },
  {
    title: "Documentations",
    path: "/documentations",
    icon: <HiIcons.HiDocument />,
    class: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <MdIcons.MdHelpOutline />,
    class: "nav-text",
  },
];
