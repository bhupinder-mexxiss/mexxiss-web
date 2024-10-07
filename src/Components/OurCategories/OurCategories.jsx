import React from "react";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";
import { EastOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const OurCategories = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <h6 className="text-3xl text-primary mb-4">Our Categories</h6>
            <p className="text-text1">
              We take pride in offering a comprehensive range of services
              tailored to meet the diverse needs of our clients. Our commitment
              to excellence extends across every aspect of our operations,
              ensuring that you receive top-notch solutions for your industrial
              requirements.
            </p>
          </div>
          <div className="card bg-[#52525280] relative">
            <div className="p-4">
              <img src={img1} className="h-[220px] mx-auto opacity-75" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 w-full group">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-lg text-heading font-medium">
                Construction Machines
              </h6>
              <p className="text-sm text-heading font-medium mt-1 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative">
            <div className="p-4">
              <img src={img2} className="h-[220px] mx-auto opacity-75" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 w-full group">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-lg text-heading font-medium">
                Construction Machines
              </h6>
              <p className="text-sm text-heading font-medium mt-1 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative">
            <div className="p-4">
              <img src={img3} className="h-[220px] mx-auto opacity-75" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 w-full group">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-lg text-heading font-medium">
                Tire Mounting Machines
              </h6>
              <p className="text-sm text-heading font-medium mt-1 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative">
            <div className="p-4">
              <img src={img4} className="h-[220px] mx-auto opacity-75" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 w-full group">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-lg text-heading font-medium">
                Wheel Alignment Machines
              </h6>
              <p className="text-sm text-heading font-medium mt-1 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative">
            <div className="p-4">
              <img src={img5} className="h-[220px] mx-auto opacity-75" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 w-full group">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-lg text-heading font-medium">
                X-ray Machines
              </h6>
              <p className="text-sm text-heading font-medium mt-1 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative">
            <div className="p-4">
              <img src={img6} className="h-[220px] mx-auto opacity-75" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 w-full group">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-lg text-heading font-medium">
                Ultrasound Machines
              </h6>
              <p className="text-sm text-heading font-medium mt-1 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative">
            <div className="p-4">
              <img src={img7} className="h-[220px] mx-auto opacity-75" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 w-full group">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-lg text-heading font-medium">
                Packaging Machines
              </h6>
              <p className="text-sm text-heading font-medium mt-1 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative">
            <div className="p-4">
              <img src={img8} className="h-[220px] mx-auto opacity-75" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 w-full group">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-lg text-heading font-medium">
                Traditional Energy Machines
              </h6>
              <p className="text-sm text-heading font-medium mt-1 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCategories;
