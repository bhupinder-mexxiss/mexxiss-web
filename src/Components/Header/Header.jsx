import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import NavMenu from "./NavMenu";
import {
  AccountCircleOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Header = () => {
  return (
    <>
      <header className="bg-[#212121] sticky top-0 z-[9999] shadow-md">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between">
            <div>
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="Mexxiss_Logo" className="h-[30px]" />
              </Link>
            </div>
            <div className="NavMenu">
              <NavMenu />
            </div>
            <div className="flex items-center gap-6">
              <Link className="flex items-center gap-2 text-primary px-3 py-1.5 bg-white rounded font-semibold">
                <AccountCircleOutlined />
                Login
              </Link>
              <Link className="px-3 text-white relative">
                <ShoppingCartOutlined className="!text-3xl" />
                <span className="absolute bg-white rounded-full px-2 text-text1 text-sm -top-2">0</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
