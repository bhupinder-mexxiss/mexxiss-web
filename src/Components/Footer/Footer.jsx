import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Instagram, LinkedIn, Twitter, X } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <footer className="pt-16 pb-10 bg-[#212121] ">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 pb-8 border-b border-[#3e3e3e]">
            <div className="col-span-2">
              <div className="mb-4">
                <Link>
                  <img src={logo} alt="" className="h-[35px]" />
                </Link>
              </div>
              <h4 className="text-text2 font-medium text-lg">
                MEXXISS TECHNOLOGIES PRIVATE LIMITED
              </h4>
            </div>
            <div>
              <h6 className="text-2xl font-medium text-text2">Company</h6>
              <ul className="mt-6 text-[#808080] font-medium flex flex-col gap-3">
                <li>
                  <Link className="inline-block">About Us</Link>
                </li>
                <li>
                  <Link className="inline-block">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-2xl font-medium text-text2">
                Service and Support
              </h6>
              <ul className="mt-6 text-[#808080] font-medium flex flex-col gap-3">
                <li>
                  <Link className="inline-block">Contact</Link>
                </li>
                <li>
                  <Link className="inline-block">FAQs</Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-2xl font-medium text-text2">Follow Us</h6>
              <ul className="mt-6 text-text2 font-medium flex gap-3">
                <li>
                  <Link className="inline-block">
                    <Instagram />
                  </Link>
                </li>
                <li>
                  <Link className="inline-block">
                    <LinkedIn />
                  </Link>
                </li>
                <li>
                  <Link className="inline-block">
                    <X />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-text2 text-center">Copyright © 2024, All Right Reserved </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
