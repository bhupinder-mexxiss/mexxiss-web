import React from "react";
import img from "../../assets/images/aboutus-home.png";
import { EastOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="pt-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 items-center">
          <div>
            <img src={img} className="h-[330px] mx-auto" />
          </div>
          <div className="px-16">
            <h4 className="text-3xl font-semibold text-primary mb-6">
              About Us
            </h4>
            <p className="text-text1 mb-4">
              Welcome to STEELVISTA, where innovation meets tradition in the
              world of steel manufacturing and machinery production. Established
              5 years ago, we have been at the forefront of delivering
              exceptional solutions that redefine industry standards.
            </p>
            <p className="text-text1 mb-6">
              Our journey began with a vision - a vision to revolutionize the
              steel and machinery sector by blending cutting-edge technology
              with time-honored craftsmanship. Over the past 5 years, we've
              evolved, adapted, and grown, becoming a trusted name in the
              industry.
            </p>
            <Link to="/about" className="w-fit text-white bg-red-gradient px-5 py-2 text-sm font-medium rounded flex items-center gap-2 group mx-auto lg:mx-0">
              <span>Read More</span>{" "}
              <span className="duration-300 group-hover:translate-x-2">
                <EastOutlined />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
