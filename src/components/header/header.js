import React from "react";
import Avatar from "./avatar/avatar";
import MobileMenu from "./mobile-menu/mobile-menu";
import "./header.css";
import UserName from "./user-name/userName";
import SocialIcons from "./social-icons/social-icons";
import MainNavbar from "./main-navbar/main-navbar";
import Copyright from "./copyright/copyright";

const Header = () => {
  return (
    <header className="header pull-left">
      <MobileMenu />
      <Avatar />
      <UserName />
      <SocialIcons />
      <MainNavbar />
      <Copyright />
    </header>
  );
};

export default Header;
