import React from "react";
import Avatar from "./avatar/avatar";
import MobileMenu from "./mobile-menu/mobile-menu";
import "./header.css";
import UserName from "./user-name/userName";

const Header = () => {
  return (
    <header className="header pull-left">
      <MobileMenu />
      <Avatar />
      <UserName />
    </header>
  );
};

export default Header;
